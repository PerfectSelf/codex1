import {
  AlertTriangle,
  CheckCircle,
  Clock,
  FileText,
  Shield,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react"
import { motion } from "motion/react"
import { Badge } from "./ui/badge"
import { Card, CardContent } from "./ui/card"

export function BenefitsSection() {
  const problems = [
    {
      icon: Clock,
      title: "Slow, inconsistent interviews",
      description:
        "Scheduling bottlenecks stretch hiring cycles for weeks while every interviewer asks something different.",
      impact: "6+ lost days per search",
    },
    {
      icon: AlertTriangle,
      title: "Signal loss and hidden bias",
      description:
        "Gut-feel notes and subjective impressions make it hard to defend why one candidate advanced over another.",
      impact: "Inconsistent decisions",
    },
    {
      icon: FileText,
      title: "Manual note taking",
      description:
        "Interviewers scramble to capture quotes and artifacts, then rebuild reports for hiring committees.",
      impact: "Hours per candidate",
    },
    {
      icon: TrendingUp,
      title: "No proof of fairness",
      description:
        "Auditors and leaders ask for evidence, but you only have scattered notes and hearsay to show.",
      impact: "Compliance risk",
    },
  ]

  const solutions = [
    {
      icon: CheckCircle,
      title: "Job-specific competency maps",
      description:
        "Upload the JD and CandidateAssessor builds calibrated rubrics, prompts, and scoring criteria in minutes.",
      benefit: "Aligned panels",
      color: "text-primary bg-primary/10 border-primary/30",
    },
    {
      icon: TrendingUp,
      title: "Structured work samples",
      description:
        "Candidates navigate guided scenarios while narrating their reasoning. Screen + audio recording stays synced.",
      benefit: "Comparable evidence",
      color: "text-blue-600 bg-blue-50 border-blue-200",
    },
    {
      icon: FileText,
      title: "Transparent hiring briefs",
      description:
        "Auto-generated summaries highlight strengths, risks, and cultural cues with time-stamped evidence clips.",
      benefit: "Decisions backed by proof",
      color: "text-purple-600 bg-purple-50 border-purple-200",
    },
    {
      icon: Zap,
      title: "Misuse detection & guardrails",
      description:
        "Speech cadence, browser telemetry, and keystroke analysis flag suspected AI assistance or copy-paste answers.",
      benefit: "Fair, defensible hiring",
      color: "text-orange-600 bg-orange-50 border-orange-200",
    },
  ]

  const metrics = [
    {
      value: "3 days",
      label: "Time to slate",
      description: "Average to deliver hiring brief",
    },
    {
      value: "92%",
      label: "Hiring team alignment",
      description: "Scored competencies with consensus",
    },
    {
      value: "4x",
      label: "More evidence captured",
      description: "Clips, transcripts, and artifacts per candidate",
    },
    {
      value: "2.1x",
      label: "Increase in offer acceptance",
      description: "When briefs are shared with finalists",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container">
        <motion.div
          className="text-center space-y-6 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Badge variant="secondary" className="mb-4">
            Evidence-Driven Hiring
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-medium tracking-tight">
            From{" "}
            <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              Interview Chaos
            </span>
            <br />
            to{" "}
            <span className="bg-gradient-to-r from-primary via-blue-600 to-secondary bg-clip-text text-transparent">
              CandidateAssessor Clarity
            </span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed text-[24px]">
            Deliver structured assessments, reduce bias, and give hiring teams a defensible story to share with stakeholders and auditors.
          </p>
        </motion.div>

        {/* Before & After Comparison */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Problems (Before) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-medium text-red-500 mb-2">
                Without CandidateAssessor
              </h3>
              <p className="text-muted-foreground">
                Interviews feel subjective, slow, and impossible to defend.
              </p>
            </div>

            {problems.map((problem, index) => (
              <Card key={index} className="border border-red-200/60 bg-red-50/40">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-red-100 rounded-lg flex-shrink-0">
                      <problem.icon className="h-5 w-5 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {problem.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        {problem.description}
                      </p>
                      <Badge
                        variant="outline"
                        className="text-red-600 border-red-200"
                      >
                        {problem.impact}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* Solutions (After) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-medium text-emerald-600 mb-2">
                With CandidateAssessor
              </h3>
              <p className="text-muted-foreground">
                Structured, unbiased, and audit-ready assessments
              </p>
            </div>

            {solutions.map((solution, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg bg-gradient-to-br from-white to-gray-50/30"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-2 rounded-lg flex-shrink-0 ${solution.color}`}
                    >
                      <solution.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {solution.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        {solution.description}
                      </p>
                      <Badge
                        variant="secondary"
                        className="bg-emerald-50 text-emerald-700 border-emerald-200"
                      >
                        {solution.benefit}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>

        {/* Results Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary/10 via-secondary/10 to-blue-100/20 rounded-2xl p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-medium mb-4">Proven Results</h3>
            <p className="text-lg text-muted-foreground">
              Teams that adopt CandidateAssessor make faster, fairer hiring decisions.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  {metric.value}
                </div>
                <div className="font-medium text-foreground mb-1">
                  {metric.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
