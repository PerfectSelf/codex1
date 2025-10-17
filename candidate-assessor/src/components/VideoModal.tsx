import { Play, X } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { useEffect, useRef, useState } from "react"
import { HERO_VIDEO_URL } from "../constants/links"
import { useMediaQuery } from "../hooks/useMediaQuery"
import { Button } from "./ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "./ui/dialog"
import { cn } from "./ui/utils"
import { WaitlistModalContent } from "./WaitlistModalContent"
import { Spinner } from "./Spinner"

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function VideoModal({ isOpen, onClose }: VideoModalProps) {
  const [showWaitlist, setShowWaitlist] = useState(false)
  const [showStartOverlay, setShowStartOverlay] = useState(true)
  const [isBuffering, setIsBuffering] = useState(false)
  const [playError, setPlayError] = useState<string | null>(null)
  const [showNativeControls, setShowNativeControls] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Reset form when modal opens/closes
  useEffect(() => {
    if (!isOpen) {
      setShowWaitlist(false)
      setShowStartOverlay(true)
      setIsBuffering(false)
      setPlayError(null)
      const video = videoRef.current
      if (video) {
        video.pause()
        video.currentTime = 0
      }
    }
  }, [isOpen])

  useEffect(() => {
    setShowNativeControls(isMobile)
  }, [isMobile])

  useEffect(() => {
    if (showWaitlist) {
      const video = videoRef.current
      if (video) {
        video.pause()
      }
      setShowStartOverlay(true)
    }
  }, [showWaitlist])

  const showWaitlistForm = () => {
    setShowWaitlist(true)
  }

  const restartVideo = () => {
    setShowWaitlist(false)
    setShowStartOverlay(true)
    setPlayError(null)
    setIsBuffering(false)
    const video = videoRef.current
    if (video) {
      video.pause()
      video.currentTime = 0
    }
  }

  const handleVideoLoadedData = () => {
    if (videoRef.current) {
      videoRef.current.volume = 0.5 // Set volume to 50%
    }
    setIsBuffering(false)
  }

  const handleVideoEnded = () => {
    setShowWaitlist(true)
    setShowStartOverlay(true)
  }

  const handlePause = () => {
    setIsBuffering(false)
    if (!showWaitlist && !isMobile) {
      setShowStartOverlay(true)
    }
  }

  const attemptPlay = () => {
    const video = videoRef.current
    if (!video) return

    setPlayError(null)
    setShowStartOverlay(false)
    setIsBuffering(true)

    const playPromise = video.play()

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsBuffering(false)
          if (isMobile) {
            setShowNativeControls(true)
          }
        })
        .catch((error) => {
          console.error("Failed to start video playback", error)
          setIsBuffering(false)
          setShowStartOverlay(true)
          setPlayError(
            "Tap play to start the demo. Mobile browsers sometimes need an extra tap.",
          )
          setShowNativeControls(true)
        })
    }
  }

  useEffect(() => {
    if (isOpen) {
      const video = videoRef.current
      if (video) {
        video.currentTime = 0
        video.pause()
      }

      if (!isMobile) {
        const timer = window.setTimeout(() => {
          attemptPlay()
        }, 200)

        return () => {
          window.clearTimeout(timer)
        }
      }
    }

    return undefined
  }, [isOpen, isMobile])

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="max-w-none lg:max-w-[calc(var(--container-5xl)_-_var(--spacing-16))] w-screen h-dvh m-0 p-0 bg-black border-none rounded-none overflow-hidden"
        hideCloseButton
      >
        {/* Accessibility - Hidden from visual users but available to screen readers */}
        <DialogTitle className="sr-only">
          CandidateAssessor assessment walkthrough
        </DialogTitle>
        <DialogDescription className="sr-only">
          Watch our structured assessment demo highlighting role-specific rubrics, evidence capture, and scoring—followed by an early access form.
        </DialogDescription>

        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "absolute cursor-pointer top-4 right-4 z-50 h-10 w-10 rounded-full transition-colors",
            showWaitlist
              ? "bg-black/50 hover:bg-black/70 text-white"
              : "bg-white/50 hover:bg-white/70 text-black",
          )}
          onClick={onClose}
        >
          <X className="size-5" />
        </Button>

        <AnimatePresence mode="wait">
          {!showWaitlist ? (
            <motion.div
              key="video"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative w-full h-full"
            >
              {/* Video Container */}
              <div className="relative w-full h-full">
                <video
                  ref={videoRef}
                  src={HERO_VIDEO_URL}
                  className="w-full h-full object-contain bg-black"
                  controls={showNativeControls}
                  autoPlay={false}
                  muted={false}
                  playsInline
                  preload="metadata"
                  onLoadedData={handleVideoLoadedData}
                  onWaiting={() => setIsBuffering(true)}
                  onPlaying={() => {
                    setIsBuffering(false)
                  }}
                  onPause={handlePause}
                  onEnded={handleVideoEnded}
                  onError={() => {
                    setPlayError("We hit a snag loading the video. Try again?")
                    setShowNativeControls(true)
                    setShowStartOverlay(true)
                  }}
                  title="CandidateAssessor Assessment Demo"
                />

                {/* Overlay with button to show waitlist */}
                <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2">
                  <Button
                    onClick={showWaitlistForm}
                    className="rounded-full bg-primary px-8 py-3 font-semibold text-white shadow-[0_18px_36px_-22px_rgba(91,63,247,0.7)] transition hover:bg-primary-dark"
                  >
                    Request Early Access
                  </Button>
                </div>

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <AnimatePresence>
                    {(showStartOverlay || isBuffering) && (
                      <motion.div
                        key={isBuffering ? "buffering" : "start"}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="pointer-events-auto flex flex-col items-center gap-4 rounded-3xl bg-black/65 px-8 py-10 text-center text-white shadow-2xl backdrop-blur-md"
                      >
                        {isBuffering ? (
                          <>
                            <Spinner />
                            <span className="text-sm font-medium tracking-wide">
                              Loading demo&hellip;
                            </span>
                          </>
                        ) : (
                          <>
                            <Button
                              onClick={attemptPlay}
                              className="bg-white text-black hover:bg-white/90"
                              size="lg"
                            >
                              <Play className="mr-2 h-4 w-4" />
                              Play Walkthrough
                            </Button>
                            {playError ? (
                              <p className="max-w-xs text-sm text-white/80">
                                {playError}
                              </p>
                            ) : (
                              <p className="max-w-xs text-sm text-white/70">
                                Tap to start the structured assessment preview. Audio stays on for real-time narration.
                              </p>
                            )}
                          </>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="waitlist"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full flex items-start lg:items-center justify-center bg-background p-8 overflow-y-auto"
            >
              <div className="max-w-md w-full">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-medium text-foreground mb-3">
                    Want structured proof for every candidate?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Join the CandidateAssessor early access cohort to bring competency maps, scored walkthroughs, and auditable briefs into your hiring cycle.
                  </p>
                  <Button
                    variant="outline"
                    onClick={restartVideo}
                    className="text-sm"
                  >
                    Watch the demo again
                  </Button>
                </div>

                <WaitlistModalContent onClose={onClose} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  )
}
