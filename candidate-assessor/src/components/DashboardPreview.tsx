import {
  AlertCircle,
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  Calendar,
  CheckCircle,
  Clock,
  DollarSign,
  Target,
  Timer,
  TrendingDown,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react"
import { motion } from "motion/react"
import {
  Bar,
  BarChart,
  CartesianGrid,
  ReferenceLine,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts"
import { Badge } from "./ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Progress } from "./ui/progress"

export function DashboardPreview() {
  const kpiMetrics = [
    {
      title: "Monthly Recurring Revenue",
      value: "$847K",
      change: "+14.2%",
      changeAmount: "+$105K",
      trend: "up",
      icon: DollarSign,
      period: "vs last month",
      status: "excellent",
    },
    {
      title: "Cash Runway",
      value: "23.8 months",
      change: "+3.2 months",
      changeAmount: "Extended",
      trend: "up",
      icon: Timer,
      period: "at current burn",
      status: "healthy",
    },
    {
      title: "Monthly Burn Rate",
      value: "$286K",
      change: "-12.4%",
      changeAmount: "-$40K",
      trend: "down",
      icon: TrendingDown,
      period: "vs last month",
      status: "excellent",
    },
    {
      title: "Gross Margin",
      value: "78.4%",
      change: "+2.1%",
      changeAmount: "+$67K",
      trend: "up",
      icon: BarChart3,
      period: "improved efficiency",
      status: "strong",
    },
  ]

  const financialHealth = [
    {
      metric: "Quick Ratio",
      value: "2.43",
      target: "> 1.0",
      status: "excellent",
      description: "Very strong liquidity position",
    },
    {
      metric: "Debt-to-Equity",
      value: "0.18",
      target: "< 0.5",
      status: "excellent",
      description: "Conservative leverage",
    },
    {
      metric: "Customer CAC Payback",
      value: "8.2 months",
      target: "< 12 months",
      status: "good",
      description: "Efficient acquisition",
    },
    {
      metric: "Revenue Per Employee",
      value: "$312K",
      target: "> $200K",
      status: "excellent",
      description: "High productivity",
    },
  ]

  const closeProgress = [
    {
      task: "Bank Reconciliation",
      status: "complete",
      due: "Day 1",
      completedAt: "09:30 AM",
      variance: "$0",
    },
    {
      task: "Revenue Recognition",
      status: "complete",
      due: "Day 2",
      completedAt: "11:15 AM",
      variance: "+$12K",
    },
    {
      task: "Payroll Accruals",
      status: "complete",
      due: "Day 3",
      completedAt: "02:45 PM",
      variance: "$0",
    },
    {
      task: "Expense Allocation",
      status: "in-progress",
      due: "Day 3",
      completedAt: "In Progress",
      variance: "TBD",
    },
    {
      task: "Financial Statements",
      status: "pending",
      due: "Day 4",
      completedAt: "Scheduled",
      variance: "TBD",
    },
    {
      task: "Board Materials",
      status: "pending",
      due: "Day 5",
      completedAt: "Auto-Generate",
      variance: "TBD",
    },
  ]

  const cashFlowEvents = [
    {
      type: "Customer Payments",
      amount: "$124K",
      date: "Dec 15",
      confidence: "95%",
      category: "inflow",
      description: "Monthly subscriptions",
    },
    {
      type: "Payroll & Benefits",
      amount: "$198K",
      date: "Dec 15",
      confidence: "100%",
      category: "outflow",
      description: "Bi-weekly payroll",
    },
    {
      type: "AWS Infrastructure",
      amount: "$28K",
      date: "Dec 18",
      confidence: "100%",
      category: "outflow",
      description: "Monthly cloud costs",
    },
    {
      type: "Enterprise Renewals",
      amount: "$156K",
      date: "Dec 22",
      confidence: "85%",
      category: "inflow",
      description: "Q4 renewals",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent":
        return "text-emerald-600 bg-emerald-50 border-emerald-200"
      case "good":
        return "text-blue-600 bg-blue-50 border-blue-200"
      case "strong":
        return "text-violet-600 bg-violet-50 border-violet-200"
      case "healthy":
        return "text-green-600 bg-green-50 border-green-200"
      default:
        return "text-gray-600 bg-gray-50 border-gray-200"
    }
  }

  const completionPercentage =
    (closeProgress.filter((item) => item.status === "complete").length /
      closeProgress.length) *
    100

  // 13-month cash flow projection data
  const cashFlowData = [
    { month: "Dec", balance: 1470, inflow: 312, outflow: -498, net: -186 },
    { month: "Jan", balance: 1284, inflow: 298, outflow: -485, net: -187 },
    { month: "Feb", balance: 1097, inflow: 315, outflow: -502, net: -187 },
    { month: "Mar", balance: 910, inflow: 342, outflow: -529, net: -187 },
    { month: "Apr", balance: 723, inflow: 356, outflow: -543, net: -187 },
    { month: "May", balance: 536, inflow: 368, outflow: -555, net: -187 },
    { month: "Jun", balance: 349, inflow: 385, outflow: -572, net: -187 },
    { month: "Jul", balance: 162, inflow: 398, outflow: -585, net: -187 },
    { month: "Aug", balance: -25, inflow: 412, outflow: -599, net: -187 },
    { month: "Sep", balance: -212, inflow: 425, outflow: -612, net: -187 },
    { month: "Oct", balance: -399, inflow: 438, outflow: -625, net: -187 },
    { month: "Nov", balance: -586, inflow: 452, outflow: -639, net: -187 },
    { month: "Dec", balance: -773, inflow: 465, outflow: -652, net: -187 },
  ]

  return (
    <section
      id="dashboard"
      className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30"
    >
      <div className="container">
        <motion.div
          className="text-center space-y-6 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/5 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <Zap className="h-4 w-4" />
            Live Dashboard Preview
          </div>
          <h2 className="text-4xl lg:text-6xl font-medium tracking-tight">
            Your Financial
            <span className="bg-gradient-to-r from-primary via-blue-600 to-violet-600 bg-clip-text text-transparent block">
              Command Center
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Monitor performance, track cash flow, and make informed decisions
            with real-time financial intelligence at your fingertips.
          </p>
        </motion.div>

        <div className="max-w-8xl mx-auto space-y-8">
          {/* Key Performance Indicators */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {kpiMetrics.map((metric, index) => (
              <Card
                key={index}
                className="relative overflow-hidden border-0 shadow-lg bg-gradient-to-br from-white to-gray-50/50 hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`p-3 rounded-xl ${getStatusColor(metric.status)}`}
                    >
                      <metric.icon className="h-6 w-6" />
                    </div>
                    <div className="flex items-center gap-2">
                      {metric.trend === "up" ? (
                        <ArrowUpRight className="h-4 w-4 text-emerald-600" />
                      ) : (
                        <ArrowDownRight className="h-4 w-4 text-red-600" />
                      )}
                      <span
                        className={`text-sm font-semibold ${
                          metric.trend === "up"
                            ? "text-emerald-600"
                            : "text-red-600"
                        }`}
                      >
                        {metric.change}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="text-3xl font-bold tracking-tight">
                      {metric.value}
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm text-muted-foreground font-medium">
                        {metric.title}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {metric.changeAmount} {metric.period}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* Main Dashboard Grid */}
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Left Column - AI Chatbot Animation & Cash Flow */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-8 space-y-8"
            >
              {/* AI Chatbot Animation */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-purple-50/30">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-xl font-bold">
                    <div className="p-2 bg-purple-50 rounded-lg">
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Users className="h-5 w-5 text-purple-600" />
                      </motion.div>
                    </div>
                    AI-Powered Financial Assistant
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gradient-to-br from-white/80 via-blue-50/90 to-purple-50/80 backdrop-blur-sm rounded-2xl p-6 border border-white/60 shadow-lg">
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div
                        className="h-10 w-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg"
                        animate={{
                          boxShadow: [
                            "0 0 20px rgba(99, 102, 241, 0.3)",
                            "0 0 30px rgba(99, 102, 241, 0.5)",
                            "0 0 20px rgba(99, 102, 241, 0.3)",
                          ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Users className="h-5 w-5 text-white" />
                      </motion.div>
                      <div>
                        <div className="font-semibold text-gray-900">
                          CandidateAssessor AI
                        </div>
                        <div className="text-sm text-blue-600">
                          Processing financial insights...
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <motion.div
                        className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-blue-100/50 shadow-sm"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <div className="text-sm text-blue-700">
                          🔍 Analyzing Q4 performance...
                        </div>
                        <div className="w-full bg-blue-100/80 rounded-full h-1 mt-2">
                          <motion.div
                            className="bg-blue-500 h-1 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ delay: 0.7, duration: 2 }}
                          />
                        </div>
                      </motion.div>

                      <motion.div
                        className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-emerald-100/50 shadow-sm"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.5 }}
                      >
                        <div className="text-sm text-emerald-700">
                          ✅ Revenue forecasting updated
                        </div>
                        <div className="text-xs text-emerald-600 mt-1">
                          +14.2% growth detected
                        </div>
                      </motion.div>

                      <motion.div
                        className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-amber-100/50 shadow-sm"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 2.5 }}
                      >
                        <div className="text-sm text-amber-700">
                          ⚠️ Cash flow optimization suggested
                        </div>
                        <div className="text-xs text-amber-600 mt-1">
                          Potential 3-month runway extension
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Cash Flow & Runway Analysis */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-slate-50/50">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-3 text-xl font-bold">
                      <div className="p-2 bg-blue-50 rounded-lg">
                        <TrendingUp className="h-5 w-5 text-blue-600" />
                      </div>
                      13-Week Cash Flow Projection
                    </CardTitle>
                    <Badge
                      variant="secondary"
                      className="bg-green-50 text-green-700 border-green-200"
                    >
                      98.2% Accuracy
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="bg-gradient-to-r from-blue-50 to-violet-50 rounded-2xl p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2">
                          $1.47M
                        </div>
                        <div className="text-sm text-muted-foreground font-medium">
                          Current Balance
                        </div>
                        <div className="text-xs text-blue-600 mt-1">
                          Bank + Investments
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-emerald-600 mb-2">
                          $1.28M
                        </div>
                        <div className="text-sm text-muted-foreground font-medium">
                          Projected (13 weeks)
                        </div>
                        <div className="text-xs text-emerald-600 mt-1">
                          Conservative estimate
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-violet-600 mb-2">
                          23.8
                        </div>
                        <div className="text-sm text-muted-foreground font-medium">
                          Months Runway
                        </div>
                        <div className="text-xs text-violet-600 mt-1">
                          At current burn
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 13-Month Cash Flow Chart */}
                  <div className="bg-white rounded-2xl p-6 border border-gray-100">
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          13-Month Cash Flow Projection
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Monthly cash balance forecast
                        </p>
                      </div>
                      <div className="flex items-center gap-4 text-xs">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
                          <span className="text-muted-foreground">
                            Cash Balance
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-red-200 rounded-sm"></div>
                          <span className="text-muted-foreground">
                            Runway Alert
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={cashFlowData}
                          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                        >
                          <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="#f1f5f9"
                          />
                          <XAxis
                            dataKey="month"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 12, fill: "#64748b" }}
                          />
                          <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 12, fill: "#64748b" }}
                            tickFormatter={(value) => `${Math.abs(value)}K`}
                          />
                          <ReferenceLine
                            y={0}
                            stroke="#ef4444"
                            strokeWidth={2}
                            strokeDasharray="5 5"
                          />
                          <Bar
                            dataKey="balance"
                            fill="#3b82f6"
                            radius={[4, 4, 0, 0]}
                            maxBarSize={40}
                          />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>

                    <div className="mt-4 p-4 bg-amber-50 rounded-xl border border-amber-200">
                      <div className="flex items-center gap-2 text-amber-800">
                        <AlertCircle className="h-4 w-4" />
                        <span className="text-sm font-medium">
                          Runway Alert: Cash projected to turn negative in Aug
                          2024
                        </span>
                      </div>
                      <p className="text-xs text-amber-700 mt-1">
                        Consider fundraising or cost optimization by Q2 2024
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">Cash Flow Health</span>
                      <span className="text-emerald-600 font-medium">
                        Strong
                      </span>
                    </div>
                    <Progress value={87} className="h-3 bg-gray-100" />
                    <div className="grid grid-cols-3 gap-4 pt-4">
                      <div className="bg-emerald-50 rounded-xl p-4 text-center border border-emerald-100">
                        <div className="text-xl font-bold text-emerald-600">
                          +$312K
                        </div>
                        <div className="text-xs text-emerald-700 font-medium">
                          Expected Inflows
                        </div>
                      </div>
                      <div className="bg-orange-50 rounded-xl p-4 text-center border border-orange-100">
                        <div className="text-xl font-bold text-orange-600">
                          -$498K
                        </div>
                        <div className="text-xs text-orange-700 font-medium">
                          Projected Outflows
                        </div>
                      </div>
                      <div className="bg-violet-50 rounded-xl p-4 text-center border border-violet-100">
                        <div className="text-xl font-bold text-violet-600">
                          -$186K
                        </div>
                        <div className="text-xs text-violet-700 font-medium">
                          Net Change
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right Side Column - December Close & Critical Cash Events */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="lg:col-span-4 space-y-8"
            >
              {/* Monthly Close Progress */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-green-50/30">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-green-50 rounded-lg">
                      <Calendar className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <div className="text-lg font-bold">December Close</div>
                      <div className="text-sm text-muted-foreground font-normal">
                        Day 3 of 5 • {Math.round(completionPercentage)}%
                        Complete
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-green-800">
                        Progress
                      </span>
                      <span className="text-sm font-bold text-green-600">
                        {Math.round(completionPercentage)}%
                      </span>
                    </div>
                    <Progress
                      value={completionPercentage}
                      className="h-2 bg-green-100"
                    />
                    <div className="text-xs text-green-700 mt-2">
                      2 days ahead of schedule
                    </div>
                  </div>

                  <div className="space-y-3">
                    {closeProgress.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 rounded-lg bg-gray-50/50 border border-gray-100"
                      >
                        <div className="flex items-center gap-3">
                          {item.status === "complete" ? (
                            <CheckCircle className="h-5 w-5 text-emerald-600" />
                          ) : item.status === "in-progress" ? (
                            <Clock className="h-5 w-5 text-amber-500" />
                          ) : (
                            <AlertCircle className="h-5 w-5 text-gray-400" />
                          )}
                          <div>
                            <div className="text-sm font-medium">
                              {item.task}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {item.completedAt}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge
                            variant={
                              item.status === "complete"
                                ? "default"
                                : item.status === "in-progress"
                                  ? "secondary"
                                  : "outline"
                            }
                            className="text-xs mb-1"
                          >
                            {item.due}
                          </Badge>
                          <div className="text-xs text-muted-foreground">
                            {item.variance}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Critical Cash Events */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-orange-50/30">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-orange-50 rounded-lg">
                      <AlertCircle className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <div className="text-lg font-bold">
                        Critical Cash Events
                      </div>
                      <div className="text-sm text-muted-foreground font-normal">
                        Next 30 days
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {cashFlowEvents.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <div className="font-semibold text-gray-900 text-sm">
                              {item.type}
                            </div>
                            <Badge
                              variant="secondary"
                              className={`text-xs ${
                                item.category === "inflow"
                                  ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                                  : "bg-red-50 text-red-700 border-red-200"
                              }`}
                            >
                              {item.category}
                            </Badge>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {item.description}
                          </div>
                        </div>
                        <div className="text-right">
                          <div
                            className={`text-lg font-bold ${
                              item.category === "inflow"
                                ? "text-emerald-600"
                                : "text-red-600"
                            }`}
                          >
                            {item.category === "inflow" ? "+" : "-"}
                            {item.amount}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {item.confidence} confidence
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-xs font-medium text-gray-600">
                          {item.date}
                        </div>
                        <div className="w-12 bg-gray-100 rounded-full h-1">
                          <div
                            className={`h-1 rounded-full ${
                              item.category === "inflow"
                                ? "bg-emerald-500"
                                : "bg-red-500"
                            }`}
                            style={{ width: item.confidence }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
