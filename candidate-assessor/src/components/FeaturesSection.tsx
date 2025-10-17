import {
  ArrowRight,
  BarChart3,
  CheckSquare,
  Clock,
  Database,
  FileText,
  Globe,
  RefreshCw,
  Shield,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react"
import { motion } from "motion/react"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"

export function FeaturesSection() {
  const primaryFeatures = [
    {
      icon: Clock,
      title: "5-Day Close",
      description: "Automated monthly close process",
      metric: "5 days",
      metricLabel: "close time",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      textColor: "text-green-700",
    },
    {
      icon: BarChart3,
      title: "13-Week Visibility",
      description: "Rolling cash flow forecasts",
      metric: "98%",
      metricLabel: "accuracy",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
    },
    {
      icon: FileText,
      title: "Board Ready",
      description: "Auto-generated reports",
      metric: "1-click",
      metricLabel: "generation",
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2 compliant platform",
      metric: "Bank-grade",
      metricLabel: "security",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      textColor: "text-orange-700",
    },
  ]

  const capabilities = [
    {
      icon: Database,
      title: "System Integration",
      connections: ["QuickBooks", "Stripe", "Gusto", "Ramp"],
      feature: "Real-time sync",
    },
    {
      icon: RefreshCw,
      title: "Scenario Planning",
      connections: ["Revenue models", "Hiring plans", "What-if analysis"],
      feature: "Instant modeling",
    },
    {
      icon: CheckSquare,
      title: "Maker-Checker Controls",
      connections: ["Approval workflows", "Dual authorization", "Audit trails"],
      feature: "Full compliance",
    },
    {
      icon: Users,
      title: "Multi-Entity Support",
      connections: ["Consolidation", "Multi-currency", "Intercompany"],
      feature: "Global ready",
    },
  ]

  const implementationSteps = [
    {
      week: "Week 1",
      title: "Connect & Map",
      tasks: ["System integration", "Chart mapping", "Baseline model"],
      icon: Database,
      color: "text-blue-600",
    },
    {
      week: "Week 2",
      title: "Launch & Optimize",
      tasks: ["First close", "Dashboard setup", "Team training"],
      icon: Zap,
      color: "text-green-600",
    },
  ]

  return <></>
}
