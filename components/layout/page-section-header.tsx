import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type PageSectionHeaderProps = {
  eyebrow?: string
  title: ReactNode
  description?: string
  action?: ReactNode
  align?: "left" | "center"
  tone?: "light" | "dark"
  className?: string
}

export function PageSectionHeader({
  eyebrow,
  title,
  description,
  action,
  align = "left",
  tone = "light",
  className,
}: PageSectionHeaderProps) {
  const dark = tone === "dark"
  return (
    <div
      className={cn(
        "mb-8 grid gap-4 border-b border-line pb-6 md:mb-10",
        align === "center" ? "" : "lg:grid-cols-12 lg:items-end",
        dark && "border-white/15",
        className
      )}
    >
      <div className={cn(align === "center" ? "" : "lg:col-span-8")}>
        {eyebrow ? <p className={cn("index-no", dark && "text-sky")}>{eyebrow}</p> : null}
        <h2 className={cn("heading-section", eyebrow && "mt-2", dark ? "text-white" : "text-navy")}>{title}</h2>
        {description ? (
          <p className={cn("mt-3 max-w-2xl text-base leading-relaxed", dark ? "text-white/70" : "text-navy/70")}>{description}</p>
        ) : null}
      </div>
      {action ? <div className="lg:col-span-4 lg:justify-self-end">{action}</div> : null}
    </div>
  )
}
