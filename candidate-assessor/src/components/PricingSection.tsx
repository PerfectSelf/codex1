import { ArrowRight, Building2, Check, Sparkles, Users } from "lucide-react"
import { motion } from "motion/react"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

export function PricingSection() {
  const plans = [
    {
      name: "Launch",
      price: "$1,950",
      period: "per month",
      description: "Built for talent teams making their first structured hires",
      badge: null,
      icon: Users,
      features: [
        "Competency map generator (3 roles/month)",
        "Structured work sample templates",
        "AI-authored script detection",
        "ATS exports (Greenhouse, Lever, Ashby)",
        "Evidence library with transcripts",
        "Email support",
      ],
      companySize: "Up to 40 hires/year",
      popular: false,
    },
    {
      name: "Scale",
      price: "$3,400",
      period: "per month",
      description: "Ideal for multi-team orgs running recurring hiring cycles",
      badge: "Most Popular",
      icon: Building2,
      features: [
        "Everything in Launch, plus:",
        "Unlimited role and rubric creation",
        "Custom scenario builder & scoring variants",
        "Live reviewer workspace with annotations",
        "Advanced telemetry (browser + device checks)",
        "Weekly insights review with hiring strategist",
        "Priority support (Slack)",
      ],
      companySize: "40-200 hires/year",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For global talent teams and regulated industries",
      badge: "White Glove",
      icon: Sparkles,
      features: [
        "Everything in Scale, plus:",
        "Dedicated success architect",
        "Custom compliance workflows (EEOC, GDPR)",
        "Unlimited ATS + HRIS integrations",
        "Private evidence retention controls",
        "Onsite interviewer enablement",
        "24/7 priority support",
      ],
      companySize: "200+ hires/year",
      popular: false,
    },
  ]

  const faqs = [
    {
      question: "How long does implementation take?",
      answer:
        "Most teams launch their first assessment in under two weeks. Week 1 covers competency mapping and integrations, Week 2 focuses on calibrating scoring and coaching interviewers.",
    },
    {
      question: "What if we already run structured interviews?",
      answer:
        "CandidateAssessor plugs into your existing process, automates the evidence capture, and gives you a defensible hiring brief without replacing human judgment.",
    },
    {
      question: "Can I change plans as I grow?",
      answer:
        "Absolutely. Upgrade or add hiring pods as your headcount plan changes. We’ll rebalance pricing quarterly to match your volume.",
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
            Pricing that Matches Your Hiring Velocity
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-medium tracking-tight">
            Plans that <span className="text-primary">Scale with Talent Teams</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-[24px]">
            Whether you’re closing your first five hires or running global loops, CandidateAssessor keeps interviews structured, evidence-rich, and fast.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className={`relative border-0 shadow-lg h-full ${
                  plan.popular
                    ? "bg-gradient-to-br from-primary/5 via-blue-50/50 to-violet-50/30 ring-2 ring-primary/20"
                    : "bg-gradient-to-br from-white to-gray-50/30"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      {plan.badge}
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4">
                    <plan.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <p className="text-muted-foreground">{plan.description}</p>
                  <div className="pt-4">
                    <div className="text-4xl font-bold text-primary">
                      {plan.price}
                      <span className="text-lg font-normal text-muted-foreground">
                        /{plan.period}
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground mt-2">
                      {plan.companySize}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-primary hover:bg-primary/90"
                        : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                    }`}
                  >
                    {plan.price === "Custom"
                      ? "Talk to sales"
                      : "Request a walkthrough"}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>

                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-3"
                      >
                        <div className="p-1 bg-emerald-50 rounded-full flex-shrink-0">
                          <Check className="h-3 w-3 text-emerald-600" />
                        </div>
                        <span
                          className={`text-sm ${
                            feature.startsWith("Everything in")
                              ? "font-medium text-primary"
                              : "text-muted-foreground"
                          }`}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* FAQs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-medium mb-4">
              Frequently Asked Questions
            </h3>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about CandidateAssessor
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-sm bg-gray-50/50">
                <CardContent className="p-8">
                  <h4 className="text-lg font-medium mb-3">{faq.question}</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
