import { Quote, Star } from "lucide-react"
import { motion } from "motion/react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Badge } from "./ui/badge"
import { Card, CardContent } from "./ui/card"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Head of Talent",
      company: "Arcadia Robotics",
      avatar: "SC",
      content:
        "CandidateAssessor gave us a defensible hiring brief for every loop. We cut a week of scheduling out of the process and finally have proof for why we advanced each finalist.",
      rating: 5,
      metric: "Time-to-slate down 58%",
      companySize: "Series B • 220 employees",
    },
    {
      name: "Michael Rodriguez",
      role: "Director of Recruiting",
      company: "Northbeam",
      avatar: "MR",
      content:
        "Our hiring managers used to rely on gut feel. Now they get a structured scorecard with evidence clips and cultural signals. Debriefs take half the time and we can defend every decision.",
      rating: 5,
      metric: "Debrief time cut in half",
      companySize: "Series A • 80 employees",
    },
    {
      name: "Emily Watson",
      role: "VP People",
      company: "Helix Health",
      avatar: "EW",
      content:
        "When compliance reviewed our hiring process, CandidateAssessor's briefs answered every question. We can show how we scored each competency and why we made the offer.",
      rating: 5,
      metric: "100% audit-ready loops",
      companySize: "Enterprise • 1,200 employees",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/20">
      <div className="container">
        <motion.div
          className="text-center space-y-6 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Badge variant="secondary" className="mb-4">
            Talent Teams on CandidateAssessor
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-medium tracking-tight">
            Trusted by <span className="text-primary">Evidence-Driven Teams</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-[24px]">
            See how high-velocity companies are hiring faster and proving every decision with CandidateAssessor.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-lg bg-white h-full">
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <Quote className="h-8 w-8 text-primary/20 mb-4" />

                  <blockquote className="mb-6 leading-relaxed text-[16px]">
                    "{testimonial.content}"
                  </blockquote>

                  <div className="space-y-3 mb-6">
                    <Badge
                      variant="secondary"
                      className="bg-emerald-50 text-emerald-700 border-emerald-200"
                    >
                      {testimonial.metric}
                    </Badge>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.companySize}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <Avatar className="h-12 w-12">
                      <AvatarImage
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${testimonial.name}`}
                      />
                      <AvatarFallback className="bg-primary/10 text-primary font-medium">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
