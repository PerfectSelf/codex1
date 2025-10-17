import { AlertTriangle, Clock, Eye, TrendingDown } from "lucide-react"
import { Card, CardContent } from "./ui/card"

export function ProblemSection() {
  const problems = [
    {
      icon: Clock,
      title: "Late Monthly Closes",
      description:
        "The close drags on past business day 5 again, and board members are asking questions you can't quickly answer.",
    },
    {
      icon: Eye,
      title: "No Cash Visibility",
      description:
        "No reliable 13-week cash view means payroll or vendor renewals become unwelcome surprises.",
    },
    {
      icon: TrendingDown,
      title: "Fragile Financial Models",
      description:
        "The 'final' runway model is always a version of an old spreadsheet, already stale by the time it's opened.",
    },
    {
      icon: AlertTriangle,
      title: "Manual Board Packs",
      description:
        "Board packs take days to build and don't stand up to hard questions from investors.",
    },
  ]

  return <></>
}
