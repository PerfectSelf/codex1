import {
  AlertCircle,
  BarChart3,
  Bot,
  Clock,
  FileText,
  Maximize2,
  Minimize2,
  Send,
  Shield,
  Sparkles,
  TrendingUp,
  User,
} from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Card, CardContent, CardHeader } from "./ui/card"
import { Input } from "./ui/input"

export function AIAssistantChat() {
  const [isExpanded, setIsExpanded] = useState(true)
  const [isTyping, setIsTyping] = useState(false)
  const [messages] = useState([
    {
      id: 1,
      type: "assistant",
      content:
        "Hi! I'm your CandidateAssessor copilot. I can help unpack competency scores, evidence clips, and cultural signals from your latest assessments.",
      timestamp: "2:34 PM",
      avatar: "🤖",
    },
    {
      id: 2,
      type: "user",
      content: "Which candidates should I advance for the Senior PM loop?",
      timestamp: "2:35 PM",
      avatar: "SC",
    },
    {
      id: 3,
      type: "assistant",
      content:
        "Here’s what the panel surfaced. Two candidates exceed the competency benchmark. Let me break down why:",
      timestamp: "2:35 PM",
      avatar: "🤖",
      data: {
        type: "metrics",
        items: [
          { label: "Role Fit Score", value: "88 / 100", status: "healthy" },
          { label: "Reasoning Quality", value: "Strong", status: "improved" },
          { label: "External Aid Risk", value: "Low", status: "strong" },
        ],
      },
    },
    {
      id: 4,
      type: "user",
      content: "Any red flags I should be aware of?",
      timestamp: "2:36 PM",
      avatar: "SC",
    },
    {
      id: 5,
      type: "assistant",
      content:
        "I've highlighted three signals to review before final decisions:",
      timestamp: "2:36 PM",
      avatar: "🤖",
      data: {
        type: "risks",
        items: [
          {
            icon: AlertCircle,
            label: "Stakeholder Alignment",
            impact: "Medium",
            date: "Clip 04:12",
            description: "Candidate relies heavily on PM to handle comms. Suggest probing their cross-functional plan.",
          },
          {
            icon: TrendingUp,
            label: "Product Sensing",
            impact: "High",
            date: "Rubric: Design Tradeoffs",
            description: "Scored 4.7/5 with strong qualitative evidence tied to customer empathy.",
          },
          {
            icon: Shield,
            label: "Misuse Monitoring",
            impact: "Low",
            date: "Session Logs",
            description: "No indicators of external AI usage. Browser telemetry stayed clean.",
          },
        ],
      },
    },
  ])

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  const simulateTyping = () => {
    setIsTyping(true)
    setTimeout(() => setIsTyping(false), 2000)
  }

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Card
        className={`transition-all duration-300 shadow-2xl border-0 bg-white/95 backdrop-blur-sm ${
          isExpanded ? "w-96 h-[600px]" : "w-80 h-16"
        }`}
      >
        {/* Chat Header */}
        <CardHeader className="p-4 border-b bg-gradient-to-r from-primary to-primary/90 text-primary-foreground rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="h-10 w-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 border-2 border-white rounded-full" />
              </div>
              <div>
                <div className="font-semibold">CandidateAssessor AI</div>
                <div className="text-xs text-primary-foreground/80">
                  Hiring Evidence Copilot
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge
                variant="secondary"
                className="bg-white/20 text-primary-foreground text-xs"
              >
                Online
              </Badge>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleToggleExpand}
                className="h-8 w-8 p-0 hover:bg-white/20 text-primary-foreground"
              >
                {isExpanded ? (
                  <Minimize2 className="h-4 w-4" />
                ) : (
                  <Maximize2 className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </CardHeader>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col h-full"
            >
              {/* Messages Area */}
              <CardContent className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[460px]">
                <AnimatePresence>
                  {messages.map((message, index) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`flex gap-3 ${message.type === "user" ? "flex-row-reverse" : "flex-row"}`}
                    >
                      <Avatar className="h-8 w-8 flex-shrink-0">
                        <AvatarImage src="" />
                        <AvatarFallback
                          className={`text-xs ${
                            message.type === "assistant"
                              ? "bg-primary/10 text-primary"
                              : "bg-blue-50 text-blue-600"
                          }`}
                        >
                          {message.type === "assistant" ? (
                            <Bot className="h-4 w-4" />
                          ) : (
                            <User className="h-4 w-4" />
                          )}
                        </AvatarFallback>
                      </Avatar>

                      <div
                        className={`flex flex-col space-y-2 max-w-[280px] ${
                          message.type === "user" ? "items-end" : "items-start"
                        }`}
                      >
                        <div
                          className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                            message.type === "user"
                              ? "bg-primary text-primary-foreground rounded-br-md"
                              : "bg-gray-50 text-gray-900 rounded-bl-md border"
                          }`}
                        >
                          {message.content}
                        </div>

                        {/* Data Visualization for Assistant Messages */}
                        {message.data && (
                          <div className="w-full mt-2">
                            {message.data.type === "metrics" && (
                              <div className="bg-white border rounded-lg p-3 shadow-sm space-y-2">
                                {message.data.items.map(
                                  (item: any, i: number) => (
                                    <div
                                      key={i}
                                      className="flex justify-between items-center"
                                    >
                                      <span className="text-sm text-gray-600">
                                        {item.label}
                                      </span>
                                      <div className="flex items-center gap-2">
                                        <span className="font-semibold">
                                          {item.value}
                                        </span>
                                        <Badge
                                          variant="secondary"
                                          className={`text-xs ${
                                            item.status === "healthy"
                                              ? "bg-green-50 text-green-700"
                                              : item.status === "strong"
                                                ? "bg-blue-50 text-blue-700"
                                                : "bg-orange-50 text-orange-700"
                                          }`}
                                        >
                                          {item.status}
                                        </Badge>
                                      </div>
                                    </div>
                                  ),
                                )}
                              </div>
                            )}

                            {message.data.type === "risks" && (
                              <div className="space-y-2">
                                {message.data.items.map(
                                  (risk: any, i: number) => (
                                    <div
                                      key={i}
                                      className="bg-white border rounded-lg p-3 shadow-sm"
                                    >
                                      <div className="flex items-start gap-3">
                                        <risk.icon
                                          className={`h-4 w-4 mt-0.5 ${
                                            risk.impact === "High"
                                              ? "text-red-500"
                                              : risk.impact === "Medium"
                                                ? "text-orange-500"
                                                : "text-yellow-500"
                                          }`}
                                        />
                                        <div className="flex-1 space-y-1">
                                          <div className="flex justify-between items-start">
                                            <span className="text-sm font-medium">
                                              {risk.label}
                                            </span>
                                            <Badge
                                              variant="outline"
                                              className={`text-xs ${
                                                risk.impact === "High"
                                                  ? "border-red-200 text-red-700"
                                                  : risk.impact === "Medium"
                                                    ? "border-orange-200 text-orange-700"
                                                    : "border-yellow-200 text-yellow-700"
                                              }`}
                                            >
                                              {risk.impact}
                                            </Badge>
                                          </div>
                                          <p className="text-xs text-gray-500">
                                            {risk.description}
                                          </p>
                                          <div className="text-xs text-gray-400">
                                            {risk.date}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  ),
                                )}
                              </div>
                            )}
                          </div>
                        )}

                        <div className="text-xs text-gray-400">
                          {message.timestamp}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Typing Indicator */}
                <AnimatePresence>
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex gap-3"
                    >
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-primary/10 text-primary">
                          <Bot className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                      <div className="bg-gray-50 border rounded-2xl rounded-bl-md px-4 py-3">
                        <div className="flex space-x-1">
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0ms" }}
                          />
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "150ms" }}
                          />
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "300ms" }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>

              {/* Input Area */}
              <div className="border-t p-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="Ask about your candidate assessments..."
                    className="flex-1 border-gray-200 focus:border-primary"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        simulateTyping()
                      }
                    }}
                  />
                  <Button size="sm" className="px-3" onClick={simulateTyping}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 px-2 text-xs"
                  >
                    <BarChart3 className="h-3 w-3 mr-1" />
                    Role Fit
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 px-2 text-xs"
                  >
                    <FileText className="h-3 w-3 mr-1" />
                    Evidence Clips
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 px-2 text-xs"
                  >
                    <Shield className="h-3 w-3 mr-1" />
                    Misuse Watch
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  )
}
