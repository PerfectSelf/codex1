import { Menu, X } from "lucide-react"
import { motion } from "motion/react"
import { useState } from "react"
import { SubmitForm } from "./SubmitForm"
import { Button } from "./ui/button"

const NAV_LINKS = [
  { label: "Platform", href: "#platform" },
  { label: "Evidence", href: "#evidence" },
  { label: "Workflow", href: "#workflow" },
  { label: "Security", href: "#security" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.header
      className="fixed top-0 z-50 w-full"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="absolute inset-0 bg-white/85 backdrop-blur-xl dark:bg-background/80 border-b border-border" />

      <div className="relative container flex h-20 items-center justify-between gap-6 py-4">
        <motion.a
          href="#top"
          className="flex items-center gap-3 z-10"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div className="grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground shadow-[0_18px_32px_-18px_rgba(18,26,54,0.6)]">
            <span className="text-lg font-semibold leading-none">CA</span>
          </div>
          <div className="flex flex-col">
            <span className="text-base font-semibold leading-tight tracking-tight text-foreground">
              Candidate
              <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
                Assessor
              </span>
            </span>
            <span className="text-xs text-muted-foreground">
              Structured evidence for every hire
            </span>
          </div>
        </motion.a>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          {NAV_LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group relative transition-colors hover:text-foreground"
            >
              {item.label}
              <span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-gradient-to-r from-primary to-secondary transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center">
          <SubmitForm shouldOpenWaitlistModal />
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden backdrop-blur-sm bg-white/60 dark:bg-white/10 border border-border hover:bg-white/80 dark:hover:bg-white/20 transition-all duration-300 z-10"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <motion.div
            animate={{ rotate: isMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </motion.div>
        </Button>
      </div>

      {isMenuOpen && (
        <motion.div
          className="lg:hidden absolute top-full left-0 right-0 backdrop-blur-xl bg-white/95 dark:bg-background/95 border-b border-border"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="relative container py-8 space-y-6">
            <div className="flex flex-col gap-3 text-base font-medium text-muted-foreground">
              {NAV_LINKS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-xl bg-muted/50 px-4 py-3 text-foreground shadow-sm transition hover:bg-muted"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <SubmitForm shouldOpenWaitlistModal />
            </motion.div>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
