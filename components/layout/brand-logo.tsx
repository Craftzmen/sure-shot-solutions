import Link from "next/link"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/lib/site-nav"
import { LogoMark } from "@/components/layout/logo-mark"

type BrandLogoProps = {
  size?: "sm" | "md" | "lg"
  className?: string
  tone?: "light" | "dark"
}

const markSize = { sm: 26, md: 28, lg: 32 } as const
const textSize = { sm: "text-[12px] min-[420px]:text-[13px]", md: "text-sm", lg: "text-base" } as const

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
      <span className={cn("font-display leading-none font-semibold tracking-[-0.04em]", textSize[size])}>
        {siteConfig.wordmark[0]}{" "}
        <span className={tone === "dark" ? "font-medium text-sky" : "font-medium text-sky-deep"}>{siteConfig.wordmark[1]}</span>
        <span className="ml-1 text-[0.72em] font-semibold tracking-[0.14em]">{siteConfig.wordmark[2]}</span>
      </span>
    </Link>
  )
}
