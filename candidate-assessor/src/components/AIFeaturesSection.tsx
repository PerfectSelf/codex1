import {
  BarChart3,
  Bot,
  Brain,
  Calendar,
  DollarSign,
  FileText,
  MessageSquare,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react"
import { motion } from "motion/react"
import { Badge } from "./ui/badge"
import { Card, CardContent } from "./ui/card"

export function AIFeaturesSection() {
  const aiCapabilities = [
    {
      icon: Brain,
      title: "Intelligent Forecasting",
      description: "AI-powered 13-week rolling forecasts with 98% accuracy",
      metrics: "98% accuracy",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: MessageSquare,
      title: "Natural Language Queries",
      description: "Ask questions about your finances in plain English",
      metrics: "Instant insights",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Smart automation for monthly close and reporting",
      metrics: "5-day close",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Identify trends and risks before they impact your business",
      metrics: "Early detection",
      color: "from-orange-500 to-red-500",
    },
  ]

  return <></>
}
