import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"
import { motion, type TargetAndTransition, type Transition } from "motion/react"
import { cn } from "./ui/utils"

export type BoxProps = {
  icon: LucideIcon
  title: string
  titleClassName?: string
  value: ReactNode
  valueClassName?: string
  iconWrapperClassName?: string
  iconClassName?: string
  subtitle?: ReactNode
  subtitleClassName?: string
  className?: string
  initial?: TargetAndTransition
  animate?: TargetAndTransition
  transition?: Transition
  whileHover?: TargetAndTransition
  isCompact?: boolean
}

export function Box({
  icon: Icon,
  title,
  titleClassName,
  value,
  valueClassName,
  iconWrapperClassName,
  iconClassName,
  subtitle,
  subtitleClassName,
  className,
  initial = { opacity: 0, y: 20 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.6 },
  whileHover = { scale: 1.05, y: -5 },
  isCompact = false,
}: BoxProps) {
  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border/60 bg-white px-6 py-6 shadow-[0_24px_48px_-28px_rgba(20,28,58,0.35)]",
        isCompact && "px-5 py-4",
        className,
      )}
      initial={initial}
      animate={animate}
      transition={transition}
      whileHover={whileHover}
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-transparent to-transparent" />
      <div
        className={cn(
          "relative flex h-full flex-col gap-4",
          isCompact && "gap-3",
        )}
      >
        <div className={cn("flex items-center gap-3", isCompact && "gap-2.5")}>
          <div
            className={cn(
              "flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/10",
              isCompact && "size-10",
              iconWrapperClassName,
            )}
          >
            <Icon
              className={cn("size-5", isCompact && "size-4", iconClassName)}
            />
          </div>
          <div
            className={cn(
              "text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground",
              isCompact && "text-[0.7rem]",
              titleClassName,
            )}
          >
            {title}
          </div>
        </div>
        <div
          className={cn(
            "text-lg leading-6 font-medium text-foreground",
            isCompact && "text-base",
            valueClassName,
          )}
        >
          {value}
        </div>
      </div>
      {subtitle ? (
        <div
          className={cn(
            "-mt-1 mb-1 inline-flex max-w-max items-center justify-center self-start rounded-full bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground/80",
            subtitleClassName,
          )}
        >
          {subtitle}
        </div>
      ) : null}
    </motion.div>
  )
}
