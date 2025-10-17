import {
  ArrowRight,
  ClipboardCheck,
  LineChart,
  MessageSquare,
  Play,
  ShieldCheck,
  Sparkles,
  Timer,
  Video,
} from "lucide-react"
import { motion } from "motion/react"
import { SubmitForm } from "./SubmitForm"
import { Button } from "./ui/button"

export type HeroProps = {
  onVideoClick: () => void
  title?: string
  highlight?: string
  description?: string
}

const BACKGROUND_AURAS = [
  "top-[-160px] left-[-120px] h-[420px] w-[420px] from-primary/30 via-primary/5 to-transparent",
  "bottom-[-200px] right-[-180px] h-[460px] w-[460px] from-secondary/25 via-secondary/5 to-transparent",
  "top-1/3 right-1/4 h-[260px] w-[260px] from-amber-400/20 via-transparent to-transparent",
]

const MICRO_METRICS = [
  { label: "Human realism score", value: "92%", tone: "text-primary", description: "Measures collaborative instincts from natural narration cadence" },

  {
    label: "Human realism score",
    value: "92%",
    tone: "text-primary",
    description: "Measures collaborative instincts from natural narration cadence",
  },
  {
    label: "Decision speed",
    value: "Decisive",
    tone: "text-secondary",
    description: "Average response < 3.2s with confident trade-offs",
  },
]

export function Hero({
  onVideoClick,
  title = "Meet your next teammate before day one.",
  highlight = "Simulate real work. Predict the outcome.",
  description =
    "CandidateAssessor translates your role into a competency map, runs context-aware simulations with narrated screen capture, and delivers a transparent brief so you already know how they’ll operate on your team.",
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#f5f7fb]">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_-10%,rgba(15,138,126,0.22),transparent_55%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_0%,rgba(255,179,71,0.2),transparent_52%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-white via-white/70 to-transparent" />

      <div className="pointer-events-none absolute inset-0 -z-10">
        {BACKGROUND_AURAS.map((classes, index) => (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={`hero-aura-${index}`}
            className={`absolute rounded-full bg-gradient-to-br blur-3xl ${classes}`}
          />
        ))}
      </div>


      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[12%] left-[8%] h-[380px] w-[380px] rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute top-[55%] right-[2%] h-[420px] w-[420px] rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute bottom-[5%] left-[40%] h-[260px] w-[260px] rounded-full bg-amber-300/15 blur-3xl" />
      </div>
      <div className="container grid gap-16 py-28 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-primary ring-1 ring-primary/20 shadow-[0_8px_24px_-12px_rgba(8,23,35,0.3)]">
            <Sparkles className="h-4 w-4" /> Predictive hiring intelligence
          </div>

          <div className="space-y-6">
            <motion.h1
              className="text-4xl font-semibold leading-[1.05] text-foreground sm:text-5xl lg:text-[56px]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
            >
              {title}
              <span className="block bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
                {highlight}
              </span>
            </motion.h1>

            <motion.p
              className="max-w-2xl text-base text-muted-foreground sm:text-lg"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            >
              {description}
            </motion.p>
          </div>

          <motion.div
            className="flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
          >
            <SubmitForm shouldOpenWaitlistModal />
            <Button
              variant="outline"
              size="lg"
              type="button"
              onClick={onVideoClick}
              className="h-12 cursor-pointer rounded-xl border border-border/70 bg-white/70 px-6 text-base font-semibold text-foreground shadow-[0_16px_32px_-20px_rgba(12,36,54,0.25)] transition hover:border-primary hover:text-primary"
            >
              <Play className="mr-2 h-4 w-4" />
              Watch product walkthrough
            </Button>
          </motion.div>

          <motion.ul
            className="grid gap-4 text-sm text-muted-foreground sm:grid-cols-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
          >
            {[
              "Generate precision competency maps tuned to your team context",
              "Simulate real work with narrated screen capture and artifacts",
              "See bias-resistant scoring with human-realistic insights, not sentiment",
              "Push evidence-rich briefs and risk signals straight into your ATS",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 rounded-xl border border-border/60 bg-white/95 px-4 py-3 shadow-[0_18px_36px_-24px_rgba(12,28,42,0.25)] backdrop-blur"
              >
                <span className="mt-1 inline-flex size-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                  •
                </span>
                <span>{item}</span>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="absolute -inset-10 -z-10 rounded-[36px] bg-gradient-to-br from-primary/25 via-secondary/25 to-transparent blur-3xl" />

          <div className="relative grid gap-4">
            <motion.div
              className="rounded-3xl border border-border/60 bg-white/80 p-6 shadow-[0_42px_90px_-48px_rgba(12,28,42,0.55)] backdrop-blur-xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground/70">
                    Assessment workspace
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-foreground">
                    Senior PM · Simulation Review
                  </h3>
                </div>
                <span className="rounded-full bg-secondary/20 px-3 py-1 text-xs font-semibold text-secondary">
                  Fit predicted
                </span>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="group rounded-2xl border border-border/60 bg-white/85 px-5 py-4 shadow-[0_24px_48px_-36px_rgba(12,28,42,0.35)] backdrop-blur-xl transition-transform duration-200 hover:-translate-y-1">
                  <LineChart className="h-5 w-5 text-primary" />
                  <p className="mt-3 text-sm font-semibold text-foreground">Signals & scoring</p>
                  <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
                    <li className="flex items-center justify-between">
                      <span>Role Fit Score</span>
                      <span className="text-foreground font-semibold">87</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Decision cadence</span>
                      <span className="font-medium text-primary">Decisive</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Misuse risk</span>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-secondary">
                        <ShieldCheck className="h-3.5 w-3.5" /> Low
                      </span>
                    </li>
                  </ul>
                  <p className="mt-3 text-[11px] text-primary/80">+18 vs team benchmark</p>
                </div>

                <div className="rounded-2xl border border-border/60 bg-white/85 px-5 py-4 text-sm text-muted-foreground shadow-[0_20px_40px_-30px_rgba(12,28,42,0.32)] backdrop-blur-xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground/70">
                    Evidence clips
                  </p>
                  <div className="mt-3 space-y-2">
                    <div className="rounded-xl bg-muted/40 px-3 py-2">Clip 03:02 · Customer escalation simulation</div>
                    <div className="rounded-xl bg-muted/40 px-3 py-2">Clip 05:47 · Stakeholder alignment plan</div>
                    <div className="rounded-xl bg-muted/40 px-3 py-2">Clip 08:11 · Runway impact walk-through</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-border/60 bg-white px-5 py-4">
                <div className="flex items-center justify-between text-xs font-medium text-muted-foreground/80">
                  <span>Decision log ready for ATS export</span>
                  <span className="inline-flex items-center gap-1 text-primary">
                    Share brief <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="ml-auto w-full max-w-[340px] rounded-3xl border border-border/60 bg-white/85 px-5 py-4 shadow-[0_36px_72px_-42px_rgba(12,28,42,0.45)] backdrop-blur-xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground/70">
                <span>Simulation timeline</span>
                <Timer className="h-4 w-4 text-primary" />
              </div>
              <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
                <li className="rounded-xl bg-muted/40 px-3 py-2">00:00 – 02:30 · Context & guiding guardrails</li>
                <li className="rounded-xl bg-muted/40 px-3 py-2">02:31 – 08:45 · Product launch scenario</li>
                <li className="rounded-xl bg-muted/40 px-3 py-2">08:46 – 12:00 · Risk, comms, next steps</li>
              </ul>
            </motion.div>

            <motion.div
              className="pointer-events-auto w-max rounded-2xl border border-white/60 bg-white/85 px-5 py-4 shadow-[0_24px_48px_-24px_rgba(12,28,42,0.4)] backdrop-blur-xl"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground/70">
                Predictive clarity signals
              </p>
              <div className="mt-3 grid gap-3">
                {MICRO_METRICS.map((metric) => (
                  <div key={metric.label} className="rounded-xl bg-muted/30 px-4 py-3">
                    <div className="flex items-center justify-between text-xs font-medium text-muted-foreground/80">
                      <span>{metric.label}</span>
                      <span className={metric.tone}>{metric.value}</span>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground/70">{metric.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
