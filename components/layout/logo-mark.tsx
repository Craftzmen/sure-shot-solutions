import { cn } from "@/lib/utils"

type LogoMarkProps = {
  size?: number
  className?: string
  tone?: "light" | "dark"
}

const colors = {
  light: { tile: "hsl(222 47% 11%)", check: "hsl(199 89% 48%)" },
  dark: { tile: "hsl(199 89% 48%)", check: "hsl(222 47% 11%)" },
} as const

/** Compact square and check, sized to sit on one line with the wordmark. */
export function LogoMark({ size = 22, className, tone = "light" }: LogoMarkProps) {
  const { tile, check } = colors[tone]
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden
    >
      <rect width="20" height="20" fill={tile} />
      <path d="M5 10.2 8.3 13.5 15 6.4" stroke={check} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
