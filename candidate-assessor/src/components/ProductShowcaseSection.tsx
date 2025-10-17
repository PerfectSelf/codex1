import { BarChart3, ClipboardSignature, LineChart, Shield, Sparkles } from "lucide-react"
import { motion } from "motion/react"

const PRIMARY_PANEL_METRICS = [
  { label: "Role Fit Score", value: "87", delta: "+18 vs benchmark" },
  { label: "Human realism score", value: "92%", delta: "Measures collaboration instincts" },
  { label: "Misuse risk", value: "Low", delta: "Telemetry clean" },
]

const SECONDARY_PANELS = [
  {
    icon: Shield,
    title: "Compliance view",
    description: "Evidence, notes, and decisions tracked automatically for auditors and HRBP.",
    footer: "Exported to Workday • 3 reviewers signed",
  },
  {
    icon: BarChart3,
    title: "Score distribution",
    description: "See how every candidate lands against the calibrated competency map before debrief.",
    footer: "Runway, GTM, Ops trending above target",
  },
  {
    icon: ClipboardSignature,
    title: "Candidate brief",
    description: "Share the highlight reel, cultural signals, and suggested onboarding focus in minutes.",
    footer: "Link viewed by Hiring Manager & VP Product",
  },
]

export function ProductShowcaseSection() {
  return (
    <section className="relative overflow-hidden bg-[#f0f4f9] py-24">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_15%_10%,rgba(15,138,126,0.18),transparent_55%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_0%,rgba(255,179,71,0.2),transparent_60%)]" />

      <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-primary ring-1 ring-primary/15 shadow-[0_12px_32px_-20px_rgba(12,30,46,0.4)]">
            <Sparkles className="h-4 w-4" /> Predictive hiring console
          </div>
          <h2 className="text-3xl font-semibold leading-[1.15] text-foreground sm:text-4xl">
            See how a candidate thinks, decides, and collaborates before payroll hits.
          </h2>
          <p className="text-base text-muted-foreground sm:text-lg">
            CandidateAssessor connects competencies, simulations, and risk signals so every decision maker gets the same transparent, predictive story about fit.
          </p>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>• Each rubric score links to real clips, transcripts, and interviewer context.</li>
            <li>• Panels collaborate on one workspace instead of scattered docs and notes.</li>
            <li>• Compliance sees a ready-to-share audit trail for every offer and reject.</li>
          </ul>
        </motion.div>

        <motion.div
          className="relative grid gap-5"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute -inset-12 -z-10 rounded-[48px] bg-gradient-to-br from-primary/25 via-secondary/20 to-transparent blur-3xl" />

          <motion.div
            className="rounded-[30px] border border-border/60 bg-white p-6 shadow-[0_48px_96px_-56px_rgba(12,28,42,0.55)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-muted-foreground/70">
                  Candidate overview
                </p>
                <h3 className="mt-2 text-xl font-semibold text-foreground">Runway Optimisation Simulation</h3>
              </div>
              <span className="rounded-full bg-secondary/15 px-3 py-1 text-xs font-semibold text-secondary">
                Slate ready
              </span>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border/60 bg-muted/20 px-5 py-4">
                <LineChart className="h-5 w-5 text-primary" />
                <p className="mt-3 text-sm font-semibold text-foreground">Signals & scoring</p>
                <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
                  {PRIMARY_PANEL_METRICS.map((metric) => (
                    <li key={metric.label} className="flex items-center justify-between">
                      <span>{metric.label}</span>
                      <span className="text-foreground font-semibold">{metric.value}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-[11px] text-primary/80">{PRIMARY_PANEL_METRICS[0].delta}</p>
              </div>

              <div className="rounded-2xl border border-border/60 bg-white px-5 py-4 text-sm text-muted-foreground">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground/70">
                  Evidence reels
                </p>
                <div className="mt-3 space-y-2">
                  <div className="rounded-xl bg-muted/40 px-3 py-2">Clip 02:14 · Runway guardrails explanation</div>
                  <div className="rounded-xl bg-muted/40 px-3 py-2">Clip 05:32 · Stakeholder alignment plan</div>
                  <div className="rounded-xl bg-muted/40 px-3 py-2">Clip 07:18 · Risk mitigation checklist</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="grid gap-4 sm:grid-cols-3"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {SECONDARY_PANELS.map((panel) => (
              <div
                key={panel.title}
                className="rounded-2xl border border-border/60 bg-white/95 px-4 py-4 shadow-[0_32px_64px_-48px_rgba(12,28,42,0.45)] backdrop-blur"
              >
                <panel.icon className="h-5 w-5 text-primary" />
                <h4 className="mt-3 text-sm font-semibold text-foreground">{panel.title}</h4>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{panel.description}</p>
                <p className="mt-3 text-[11px] font-medium text-muted-foreground/80">{panel.footer}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
