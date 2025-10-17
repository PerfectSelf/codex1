import { useState } from "react"
import { CTASection } from "../components/CTASection"
import { Header } from "../components/Header"
import { Hero, type HeroProps } from "../components/Hero"
import { IntegrationsLogos } from "../components/IntegrationsLogos"
import {
  IntegrationsSection,
  type IntegrationsSectionProps,
} from "../components/IntegrationsSection"
import { ProductShowcaseSection } from "../components/ProductShowcaseSection"
import { PlatformSection } from "../components/PlatformSection"
import { Toaster } from "../components/ui/sonner"
import { VideoModal } from "../components/VideoModal"

type HomePageProps = {
  hero?: Omit<HeroProps, "onVideoClick">
  integration?: IntegrationsSectionProps
}

export const HomePage: React.FC<HomePageProps> = ({ hero, integration }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  const openVideo = () => setIsVideoOpen(true)
  const closeVideo = () => setIsVideoOpen(false)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 lg:pt-24">
        <Hero onVideoClick={openVideo} {...hero} />
        <ProductShowcaseSection />
        <PlatformSection />
        <IntegrationsLogos />
        <IntegrationsSection {...integration} />
        <CTASection />
      </main>

      <VideoModal isOpen={isVideoOpen} onClose={closeVideo} />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "12px",
          },
        }}
      />
    </div>
  )
}
