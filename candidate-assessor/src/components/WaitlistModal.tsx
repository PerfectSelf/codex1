import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog"
import { WaitlistModalContent } from "./WaitlistModalContent"

interface WaitlistModalProps {
  isOpen: boolean
  onClose: () => void
  email?: string
}

export const WaitlistModal = ({
  isOpen,
  onClose,
  email,
}: WaitlistModalProps) => (
  <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent className="max-w-lg mx-auto h-full overflow-auto rounded-3xl border border-border/60 bg-white/95 p-0 shadow-[0_38px_80px_-48px_rgba(23,30,60,0.6)] backdrop-blur-xl dark:bg-card/95 lg:h-auto">
      {/* Header */}
      <div className="relative p-8 pb-0">
        <DialogHeader className="space-y-3 text-center">
          <DialogTitle className="text-2xl font-semibold text-foreground">
            Experience predictive hiring
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground leading-relaxed">
            Tell us about your hiring slate and we'll line up a CandidateAssessor simulation tailored to your roles.
          </DialogDescription>
        </DialogHeader>
      </div>

      {/* Form Content */}
      <div className="p-8 pt-4">
        <WaitlistModalContent email={email} onClose={onClose} />
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      <div
        className="absolute inset-0 -z-10 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />
    </DialogContent>
  </Dialog>
)
