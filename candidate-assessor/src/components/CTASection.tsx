import { CheckCircle2, Sparkles } from "lucide-react"
import { motion } from "motion/react"
import { SubmitForm } from "./SubmitForm"
import { Badge } from "./ui/badge"

export function CTASection() {
  const benefits = [
    "Structured simulations live in under 48 hours",
    "Predict team chemistry before payroll hits",
    "Bias-resistant scoring with transparent rubrics",
    "SOC 2 Type II, GDPR, and SSO out of the box",
  ]

  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-b from-[#0b1723] via-[#121f30] to-[#0b1723]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(15,138,126,0.35),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(255,179,71,0.28),transparent_58%)]" />
      <div className="container relative">
        <motion.div
          className="mx-auto max-w-5xl rounded-[32px] border border-border/60 bg-[#141a2a] px-10 py-16 text-white shadow-[0_48px_96px_-56px_rgba(7,12,31,0.8)]"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center text-center space-y-8">
            <Badge
              variant="secondary"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/90"
            >
              <Sparkles className="h-4 w-4" /> Early access cohort
            </Badge>

            <div className="space-y-5">
              <h2 className="text-4xl font-semibold leading-[1.15] sm:text-[44px]">
                Ready to forecast the impact of your next hire?
              </h2>
              <p className="mx-auto max-w-2xl text-base text-white/75 sm:text-lg">
                CandidateAssessor builds the rubric, runs the simulation, and packages the decision brief so your recruiters and hiring managers move fast with confidence.
              </p>
            </div>

            <motion.ul
              className="grid w-full gap-3 text-sm text-white/80 sm:grid-cols-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/5 px-4 py-3 backdrop-blur"
                >
                  <CheckCircle2 className="h-5 w-5 text-secondary" />
                  <span>{benefit}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              className="w-full max-w-md"
            >
              <SubmitForm inputClassName="text-center" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
