import { motion } from "motion/react"
import { useId } from "react"
import { Link } from "react-router"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { useSubmitFormToGoogleSheet } from "../components/useSubmitFormToGoogleSheet"
import { ROUTES } from "../constants/routes"

export const SubmitPage = () => {
  const emailId = useId()

  const {
    handleSubmit,
    getButtonContent,
    handleStartForm,
    isComplete,
    formRef,
  } = useSubmitFormToGoogleSheet({
    projectName: "CandidateAssessor",
    submitButtonText: "Request Early Access",
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar with just logo */}
      <motion.header
        className="fixed top-0 z-50 w-full"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-white/85 backdrop-blur-xl border-b border-border" />

        <div className="relative container flex h-20 items-center justify-center py-4">
          <Link
            to={ROUTES.HOME}
            className="flex items-center justify-center z-10"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-3">
                <div className="grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground shadow-[0_18px_32px_-18px_rgba(18,26,54,0.6)]">
                  <span className="text-lg font-semibold leading-none">
                    CA
                  </span>
                </div>
                <span className="text-base font-semibold tracking-tight text-foreground">
                  Candidate
                  <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
                    Assessor
                  </span>
                </span>
              </div>
            </motion.div>
          </Link>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="pt-20 min-h-screen flex items-center justify-center">
        <div className="container py-8 md:py-16">
          {/* Header Section */}
          <motion.div
            className="text-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
              CandidateAssessor is rolling out in waves.
            </h1>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Tell us where you recruit from and we'll reach out with a guided tour, pricing, and timelines to bring structured assessments into your hiring workflow.
            </p>
          </motion.div>

          {/* Email Form */}
          <motion.form
            onSubmit={handleSubmit}
            ref={formRef}
            className="max-w-md mx-auto mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="space-y-3 md:space-y-4">
              <Label
                htmlFor={emailId}
                className="text-center block text-base md:text-lg font-medium text-foreground"
              >
                Work Email
              </Label>
              <Input
                id={emailId}
                type="email"
                name="email"
                placeholder="you@example.com"
                className="text-center text-base md:text-lg py-3 md:py-4 rounded-xl border border-primary/40 bg-white focus:border-primary focus:ring-2 focus:ring-primary/25 shadow-[0_24px_44px_-28px_rgba(35,45,91,0.35)]"
                required
                onChange={handleStartForm}
              />
              <Button
                type="submit"
                className="w-full text-base md:text-lg font-semibold py-3 md:py-4 rounded-xl bg-primary text-white shadow-[0_28px_52px_-26px_rgba(91,63,247,0.7)] transition hover:bg-primary-dark"
                disabled={isComplete}
              >
                {getButtonContent()}
              </Button>
              <p className="text-center text-xs md:text-sm text-muted-foreground">
                We respect your privacy. Your email will only be used for
                CandidateAssessor launch communications.
              </p>
            </div>
          </motion.form>
        </div>
      </main>
    </div>
  )
}
