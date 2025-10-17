import { Award, Building2, CheckCircle, Shield } from "lucide-react"
import { motion } from "motion/react"
import { Badge } from "./ui/badge"
import { Card, CardContent } from "./ui/card"

export function TrustSection() {
  const certifications = [
    { name: "SOC 2 Type II", icon: Shield },
    { name: "AICPA Certified", icon: Award },
    { name: "Bank-grade Security", icon: Shield },
    { name: "GDPR Compliant", icon: CheckCircle },
  ]

  const integrations = [
    "QuickBooks",
    "Xero",
    "NetSuite",
    "Stripe",
    "Gusto",
    "Ramp",
    "Brex",
    "Mercury",
    "SVB",
    "AWS",
    "Salesforce",
    "HubSpot",
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50/20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Certifications & Security */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div>
                <Badge variant="secondary" className="mb-4">
                  Enterprise Ready
                </Badge>
                <h3 className="text-3xl font-medium mb-4 text-[36px]">
                  Built for{" "}
                  <span className="text-primary">Enterprise Security</span>
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Your financial data deserves bank-grade security. We're SOC 2
                  Type II certified with enterprise-grade controls and
                  compliance standards.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                  >
                    <div className="p-2 bg-green-50 rounded-lg">
                      <cert.icon className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">{cert.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Integrations */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-blue-50/30">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <Building2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium">Native Integrations</h4>
                    <p className="text-sm text-muted-foreground">
                      Connect your existing tools seamlessly
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {integrations.map((integration, index) => (
                    <div
                      key={index}
                      className="text-center p-3 bg-white rounded-lg border border-gray-100 shadow-sm"
                    >
                      <div className="text-sm font-medium text-gray-700">
                        {integration}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
                  <div className="flex items-center gap-2 text-blue-800">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-sm font-medium">
                      Real-time sync • Zero manual data entry
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
