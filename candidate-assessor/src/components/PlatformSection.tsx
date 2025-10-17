import { ArrowRight, ClipboardList, Compass, GaugeCircle, ShieldCheck, Workflow } from "lucide-react"
import { motion } from "motion/react"
import { useState } from "react"
import { WaitlistModal } from "./WaitlistModal"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"

const FEATURES = [
  {
    icon: ClipboardList,
    title: "Role-specific competency maps",
    description:
      "Drop in a job description and CandidateAssessor generates calibrated rubrics with suggested weightings in minutes.",
    bullets: [
      "Tailor weighting across impact areas",
      "AI suggestions with human override",
      "Benchmark against top performers",
    ],
  },
  {
    icon: Workflow,
    title: "Structured work samples",
    description:
      "Candidates complete guided tasks while narrating their reasoning. Screen, audio, and artifacts stay linked to each rubric item.",
    bullets: [
      "Automatic transcription and topic tagging",
      "Time-stamped highlights aligned to criteria",
      "Collaboration cues surfaced automatically",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Defensible scoring & guardrails",
    description:
      "Scores blend human judgement with AI calibration, backed by telemetry that flags potential misuse or scripted answers.",
    bullets: [
      "Role Fit Score with drill-down detail",
      "Risk prompts for hiring managers",
      "Exportable briefs ready for your ATS",
    ],
  },
]

const WORKFLOW = [
  {
    icon: Compass,
    title: "Align on competencies",
    description:
      "Import the job description, set leveling expectations, and confirm the critical skills your panel must evaluate.",
  },
  {
    icon: GaugeCircle,
    title: "Run assessments",
    description:
      "Candidates move through guided scenarios while CandidateAssessor captures screenshots, audio, and supporting files.",
  },
  {
    icon: ClipboardList,
    title: "Share the brief",
    description:
      "Review transparent scores, evidence clips, and next-step recommendations—ready to push straight to your ATS.",
  },
]

export function PlatformSection() {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false)

  return (
    <section id="platform" className="relative overflow-hidden border-b border-border/60 bg-white py-24 lg:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_-10%,rgba(15,138,126,0.16),transparent_55%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-white/80 via-white/50 to-transparent" />

      <div className="container space-y-16">
        <motion.div
          className="mx-auto max-w-3xl text-center space-y-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-primary ring-1 ring-primary/15">
            <Badge variant="outline" className="border-none bg-transparent px-0 text-primary">
              Structured hiring platform
            </Badge>
          </div>
          <h2 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            From unstructured interviews to evidence-led assessments in one week.
          </h2>
          <p className="text-base text-muted-foreground sm:text-lg">
            CandidateAssessor handles the heavy lifting—competency mapping, assessment design, evidence capture, and reporting—so your team can make faster, fairer hiring decisions.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <motion.article
              key={feature.title}
              className="flex h-full flex-col rounded-2xl border border-border/60 bg-white/95 p-7 shadow-[0_36px_80px_-50px_rgba(12,28,42,0.45)] backdrop-blur"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                {feature.bullets.map((bullet) => (
                  <li key={bullet} className="relative pl-5">
                    <span className="absolute left-0 top-2 size-1.5 rounded-full bg-primary" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="grid gap-6 rounded-3xl border border-border/60 bg-white/95 p-8 shadow-[0_42px_84px_-52px_rgba(12,28,42,0.45)] backdrop-blur lg:grid-cols-3"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {WORKFLOW.map((step) => (
            <div key={step.title} className="space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/15">
                  <step.icon className="h-5 w-5" />
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  {step.title}
                </p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col items-center gap-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-muted-foreground/80">
            Ready to simulate your next hire?
          </p>
          <Button
            type="button"
            size="lg"
            className="h-12 rounded-xl bg-primary px-8 text-base font-semibold text-primary-foreground shadow-[0_24px_44px_-24px_rgba(15,138,126,0.45)] transition hover:bg-primary-dark"
            onClick={() => setIsWaitlistModalOpen(true)}
          >
            Schedule a predictive hiring walk-through
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>

      <WaitlistModal
        isOpen={isWaitlistModalOpen}
        onClose={() => setIsWaitlistModalOpen(false)}
      />
    </section>
  )
}
