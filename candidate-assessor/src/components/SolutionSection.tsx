import { ArrowRight, CheckCircle } from "lucide-react"
import { ImageWithFallback } from "./figma/ImageWithFallback"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"

export function SolutionSection() {
  const benefits = [
    "Monthly close completed by business day 5 and board pack delivered automatically",
    "Clear 13-week cash view that updates as invoices, payroll, and vendor bills move",
    "Next twelve months as a living plan reflecting price changes, hiring, and pipeline in real time",
    "Convert messy inputs into a single source of truth, then turn that truth into decisions",
  ]

  const capabilities = [
    {
      title: "Recurring Work",
      description:
        "We do the recurring work the same way every month, surface the handful of choices that matter.",
    },
    {
      title: "Expense Visibility",
      description:
        "We keep procurement and renewals in view so large expenses do not surprise you.",
    },
    {
      title: "Pricing Intelligence",
      description:
        "We normalize pricing across products and contracts so you know where discounting erodes value.",
    },
    {
      title: "Revenue Mechanics",
      description:
        "We connect revenue mechanics to finance mechanics, so bookings turn into billings and billings turn into cash.",
    },
  ]

  return <></>
}
