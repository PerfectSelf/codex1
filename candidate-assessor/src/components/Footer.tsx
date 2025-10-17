import { twMerge } from "tailwind-merge"

type FooterProps = {
  className?: string
}

export const Footer: React.FC<FooterProps> = ({ className }) => (
  <footer
    className={twMerge(
      "bg-gradient-to-b from-white via-white/70 to-transparent py-12 text-muted-foreground dark:from-background dark:via-background/80",
      className,
    )}
  >
    <div className="container flex flex-col gap-6 text-sm md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-3 text-foreground">
        <div className="grid size-10 place-items-center rounded-2xl bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground shadow-[0_16px_28px_-18px_rgba(24,32,68,0.55)]">
          <span className="text-sm font-semibold leading-none">CA</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground/80">
            CandidateAssessor
          </span>
          <span className="text-xs text-muted-foreground">
            Structured hiring evidence, delivered.
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <a
          href="mailto:hello@candidateassessor.com"
          className="transition-colors hover:text-primary"
        >
          hello@candidateassessor.com
        </a>
        <a
          href="https://candidateassessor.com/privacy"
          className="transition-colors hover:text-primary"
        >
          Privacy
        </a>
        <a
          href="https://candidateassessor.com/security"
          className="transition-colors hover:text-primary"
        >
          Security
        </a>
      </div>

      <p className="text-xs text-muted-foreground/80">
        © {new Date().getFullYear()} CandidateAssessor. Evidence-first hiring.
      </p>
    </div>
  </footer>
)
