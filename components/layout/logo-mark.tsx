import { cn } from "@/lib/utils"

type LogoMarkProps = {
  size?: number
  className?: string
  tone?: "light" | "dark"
}

const colors = {
  light: { tile: "hsl(222 47% 11%)", body: "hsl(199 89% 48%)", lamp: "#ffffff" },
  dark: { tile: "hsl(199 89% 48%)", body: "hsl(222 47% 11%)", lamp: "#ffffff" },
} as const

/** Square badge with a geometric car front, sized to sit with the wordmark. */
export function LogoMark({ size = 22, className, tone = "light" }: LogoMarkProps) {
  const { tile, body, lamp } = colors[tone]
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden
    >
      <rect width="32" height="32" fill={tile} />
      <path fill={body} d="M4.5 17.4 8.6 12.4 11.2 10h9.6l2.6 2.4 4.1 5V24.2h-23V17.4Z" />
      <path fill={tile} d="M12.1 15.4 13.6 11.6h4.8l1.5 3.8v1.6h-7.8v-1.6Z" />
      <path fill={lamp} d="M6.5 17.8h3.1v2.3H6.5zM22.4 17.8H25.5v2.3H22.4z" />
      <path fill={tile} d="M11.3 20.1h9.4v1.7h-9.4z" />
    </svg>
  )
}
