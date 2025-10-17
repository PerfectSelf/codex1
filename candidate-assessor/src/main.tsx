import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router"
import type { IntegrationsSectionProps } from "./components/IntegrationsSection"
import type { HeroProps } from "./components/Hero"
import { HomePage } from "./pages/HomePage"
import { RootLayout } from "./pages/RootLayout"

const root = document.getElementById("root")

const DEFAULT_HERO: Omit<HeroProps, "onVideoClick"> = {
  title: "Hire with evidence, not gut feel.",
  highlight: "CandidateAssessor generates structured assessments and proof for every role.",
  description:
    "Upload a job description, generate a competency map in minutes, and review candidates through calibrated work samples with transparent scoring.",
}

const DEFAULT_INTEGRATION: IntegrationsSectionProps = {
  question: "Should Maya receive a final-round invite?",
  items: [
    "Role Fit Score exceeds benchmark by 18 points with strong systems thinking.",
    "Evidence clip shows proactive risk mitigation across GTM & product teams.",
    "Low external aid risk—browser telemetry and speech analysis confirm authenticity.",
  ],
}

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        element: <HomePage hero={DEFAULT_HERO} integration={DEFAULT_INTEGRATION} />,
      },
    ],
  },
])

ReactDOM.createRoot(root!).render(<RouterProvider router={router} />)
