import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type InfoBarGridProps = {
  children: ReactNode
  columns?: 2 | 3 | 4
  className?: string
  "aria-label"?: string
}

const columnClasses: Record<2 | 3 | 4, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
}

export function InfoBarGrid({ children, columns = 4, className, "aria-label": ariaLabel }: InfoBarGridProps) {
  return (
    <ul aria-label={ariaLabel} className={cn("grid grid-cols-1 border-t border-line", columnClasses[columns], className)}>
      {children}
    </ul>
  )
}

type InfoBarCellProps = {
  children: ReactNode
  className?: string
}

export function InfoBarCell({ children, className }: InfoBarCellProps) {
  return <li className={cn("min-w-0", className)}>{children}</li>
}

export const infoBarLinkClass = "group flex h-full min-w-0 items-start gap-4 border-r border-b border-line bg-white p-5 transition hover:bg-ice"

export const infoBarStaticClass = "flex h-full min-w-0 items-start gap-4 border-r border-b border-line bg-white p-5"
