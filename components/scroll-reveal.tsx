import type { ComponentPropsWithoutRef, ReactNode } from "react"
import { cn } from "@/lib/utils"

type ScrollRevealProps = ComponentPropsWithoutRef<"div"> & {
  children: ReactNode
  direction?: "up" | "left" | "right" | "fade" | "scale"
  delay?: number
  threshold?: number
}

export function ScrollReveal({
  children,
  className,
  direction: _direction,
  delay: _delay,
  threshold: _threshold,
  ...rest
}: ScrollRevealProps) {
  void _direction
  void _delay
  void _threshold
  return (
    <div className={cn(className)} {...rest}>
      {children}
    </div>
  )
}
