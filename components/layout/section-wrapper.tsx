import * as React from "react"
import { cn } from "@/lib/utils"

export type SectionBackground = "white" | "ice" | "navy"

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  containerClassName?: string
  id?: string
  background?: SectionBackground
  padding?: "default" | "sm" | "lg" | "none"
}

const bgMap: Record<SectionBackground, string> = {
  white: "bg-white",
  ice: "bg-ice",
  navy: "bg-navy text-white",
}

const paddingMap = {
  default: "border-t border-line py-14 md:py-20",
  sm: "border-t border-line py-10 md:py-14",
  lg: "border-t border-line py-16 md:py-24",
  none: "",
}

export function SectionWrapper({
  children,
  className,
  containerClassName,
  id,
  background = "white",
  padding = "default",
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn("scroll-mt-28", bgMap[background], paddingMap[padding], background === "navy" && "border-navy", className)}>
      <div className={cn("mx-auto max-w-[1240px] px-5 md:px-8", containerClassName)}>{children}</div>
    </section>
  )
}
