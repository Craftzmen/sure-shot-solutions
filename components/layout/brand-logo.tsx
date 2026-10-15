import Link from "next/link"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/lib/site-nav"
import { LogoMark } from "@/components/layout/logo-mark"

type BrandLogoProps = {
  size?: "sm" | "md" | "lg"
  className?: string
  tone?: "light" | "dark"
}

const markSize = { sm: 22, md: 24, lg: 28 } as const
const textSize = { sm: "text-[15px]", md: "text-base", lg: "text-lg" } as const

export function BrandLogo({ size = "md", className, tone = "light" }: BrandLogoProps) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} home`}
      className={cn(
        "inline-flex items-center gap-2 whitespace-nowrap",
        tone === "dark" ? "text-white" : "text-navy",
        className
      )}
    >
      <LogoMark size={markSize[size]} tone={tone} />
      <span className={cn("font-display leading-none font-semibold tracking-[-0.03em]", textSize[size])}>
        Sure Shot <span className={tone === "dark" ? "font-medium text-sky" : "font-medium text-sky-deep"}>Solutions</span>
      </span>
    </Link>
  )
}
