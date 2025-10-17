import { ArrowRight, Sparkles, User } from "lucide-react"
import { motion } from "motion/react"
import { useState, type ReactNode } from "react"
import { WaitlistModal } from "./WaitlistModal"
import { Button } from "./ui/button"

const TIMELINE = [
  {
    title: "Context primer",
    duration: "00:00 – 02:30",
    detail: "Defines guardrails, key stakeholders, and success thresholds.",
  },
  {
    title: "Simulation walkthrough",
    duration: "02:31 – 10:15",
    detail: "Live work sample with narrated trade-offs and authentic decision cadence.",
  },
  {
    title: "Reflection & risks",
    duration: "10:16 – 12:00",
    detail: "Surfaces dependencies, failure modes, and follow-up actions.",
  },
]

const SCORE_CARDS = [
  {
    label: "Execution fidelity",
    value: "92",
    description: "Moves from analysis to action with measurable checkpoints.",
  },
  {
    label: "Team chemistry signal",
    value: "High",
    description: "Integrates CX, Product, and Sales touchpoints without prompting.",
  },
  {
    label: "Misuse indicators",
    value: "Low",
    description: "No tab switching, natural cadence, and authentic pauses.",
  },
]

export type IntegrationsSectionProps = {
  question?: string
  items?: ReactNode[]
}

export function IntegrationsSection({
  question = "Does Maya belong on the final slate?",
  items = [
    "Role Fit Score beats the benchmark by 18 points with confident decision cadence.",
    "Clip 04:12 stress-tests the rollout workflow with customer-first trade-offs.",
    "Team chemistry prediction: brings CX, Product, and Sales into the plan before payroll.",
  ],
}: IntegrationsSectionProps) {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false)

  return (
    <section id="evidence" className="relative overflow-hidden border-b border-border/60 bg-white py-24 lg:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_-10%,rgba(255,179,71,0.18),transparent_58%)]" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_10%_20%,rgba(15,138,126,0.14),transparent_60%)]" />
      <div className="container">
        <motion.div
          className="mx-auto max-w-2xl text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary ring-1 ring-primary/15">
            <Sparkles className="h-4 w-4" /> Evidence hub
          </div>
          <h2 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            A complete hiring brief, ready before your next debrief.
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            See the assessment timeline, qualitative evidence, and scored competencies—all packaged for hiring managers and compliance.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <motion.div
            className="rounded-3xl border border-border/60 bg-white/95 p-8 shadow-[0_36px_72px_-48px_rgba(12,28,42,0.45)] backdrop-blur"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                  <User className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground/80">
                    Candidate walkthrough
                  </p>
                  <h3 className="text-xl font-semibold text-foreground">Maya Chen · Product Ops Lead</h3>
                </div>
              </div>
              <span className="rounded-full bg-secondary/15 px-3 py-1 text-xs font-semibold text-secondary">
                47 min review
              </span>
            </div>

            <div className="mt-8 space-y-5">
              {TIMELINE.map((entry) => (
                <div key={entry.title} className="rounded-2xl border border-border/60 bg-muted/30 px-5 py-4 text-sm text-muted-foreground">
                  <div className="flex items-baseline justify-between gap-3">
                    <h4 className="text-base font-semibold text-foreground">{entry.title}</h4>
                    <span className="text-xs font-medium text-muted-foreground/80">{entry.duration}</span>
                  </div>
                  <p className="mt-2 leading-relaxed">{entry.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="rounded-3xl border border-border/60 bg-white/95 p-7 shadow-[0_32px_64px_-48px_rgba(12,28,42,0.45)] backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-muted-foreground/80">
                Scored summary
              </p>
              <h3 className="mt-2 text-3xl font-semibold text-foreground">{question}</h3>

              <div className="mt-6 space-y-4">
                {items.map((item, index) => (
                  <div
                    key={typeof item === "string" ? `${item}-${index}` : index}
                    className="flex items-start gap-3 rounded-2xl border border-border/60 bg-muted/40 px-4 py-3 text-sm text-muted-foreground"
                  >
                    <ArrowRight className="mt-0.5 h-4 w-4 text-primary" />
                    <span className="leading-relaxed text-foreground/95">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-primary/25 bg-primary/10 p-7 shadow-[0_30px_60px_-44px_rgba(15,138,126,0.45)]">
              <div className="space-y-4">
                {SCORE_CARDS.map((score) => (
                  <div key={score.label} className="rounded-2xl border border-primary/20 bg-white px-4 py-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/80">
                        {score.label}
                      </p>
                      <span className="text-sm font-semibold text-primary">{score.value}</span>
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                      {score.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between rounded-2xl bg-white/90 px-4 py-3 text-xs font-medium text-muted-foreground">
                <span>Attachable brief for hiring committee</span>
                <span className="text-primary">Shareable link</span>
              </div>
            </div>

            <div className="flex justify-center">
              <Button
                type="button"
                size="lg"
                className="h-12 rounded-xl bg-primary px-6 text-base font-semibold text-primary-foreground shadow-[0_24px_44px_-26px_rgba(51,84,255,0.6)] transition hover:bg-primary-dark"
                onClick={() => setIsWaitlistModalOpen(true)}
              >
                See a full hiring brief
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <WaitlistModal
        isOpen={isWaitlistModalOpen}
        onClose={() => setIsWaitlistModalOpen(false)}
      />
    </section>
  )
}
