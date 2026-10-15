"use client"

import * as React from "react"
import { startTransition } from "react"
import { createPortal } from "react-dom"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MenuIcon, PhoneIcon, XIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { audienceNav, mainNav, siteConfig } from "@/lib/site-nav"
import { BrandLogo } from "@/components/layout/brand-logo"

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [mobileSlideIn, setMobileSlideIn] = React.useState(false)
  const mobilePanelRef = React.useRef<HTMLDivElement>(null)
  const mobileClosingUserRef = React.useRef(false)

  const closeMobile = React.useCallback(() => {
    mobileClosingUserRef.current = true
    setMobileSlideIn((slideIn) => {
      if (!slideIn) {
        queueMicrotask(() => setMobileOpen(false))
      }
      return false
    })
  }, [])

  const openMobile = React.useCallback(() => {
    mobileClosingUserRef.current = false
    setMobileOpen(true)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setMobileSlideIn(true))
    })
  }, [])

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  React.useEffect(() => {
    startTransition(() => {
      setMobileSlideIn(false)
      setMobileOpen(false)
    })
  }, [pathname])

  React.useEffect(() => {
    if (!mobileOpen) return
    const html = document.documentElement
    const prevHtmlOverflow = html.style.overflow
    const prevBodyOverflow = document.body.style.overflow
    html.style.overflow = "hidden"
    document.body.style.overflow = "hidden"
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobile()
    }
    document.addEventListener("keydown", onKey)
    return () => {
      html.style.overflow = prevHtmlOverflow
      document.body.style.overflow = prevBodyOverflow
      document.removeEventListener("keydown", onKey)
    }
  }, [mobileOpen, closeMobile])

  React.useEffect(() => {
    if (!mobileOpen || mobileSlideIn || !mobileClosingUserRef.current) return
    const id = window.setTimeout(() => {
      mobileClosingUserRef.current = false
      setMobileOpen(false)
    }, 400)
    return () => window.clearTimeout(id)
  }, [mobileOpen, mobileSlideIn])

  React.useEffect(() => {
    if (!mobileOpen) return
    const panel = mobilePanelRef.current
    if (!panel) return

    const onTransitionEnd = (e: TransitionEvent) => {
      if (e.target !== panel || e.propertyName !== "opacity") return
      setMobileSlideIn((current) => {
        if (!current) {
          mobileClosingUserRef.current = false
          queueMicrotask(() => setMobileOpen(false))
        }
        return current
      })
    }

    panel.addEventListener("transitionend", onTransitionEnd)
    return () => panel.removeEventListener("transitionend", onTransitionEnd)
  }, [mobileOpen])

  const isActive = (href: string) => {
    const path = href.split("?")[0].split("#")[0]
    if (!path || path === "/") return pathname === "/" && !href.includes("#")
    return pathname === path || pathname.startsWith(`${path}/`)
  }

  const menuOpen = mobileOpen && mobileSlideIn

  return (
    <header className={cn("sticky top-0 z-50 w-full border-b border-line bg-white", scrolled && "shadow-[0_1px_0_hsl(214_18%_86%)]")}>
      <div className="border-b border-line">
        <div className="mx-auto flex h-8 max-w-[1240px] items-center justify-between gap-4 px-5 text-xs text-navy/60 md:px-8">
          <span className="truncate">{siteConfig.announcement}</span>
          <a href={siteConfig.emailMailto} className="truncate hover:text-navy">
            {siteConfig.email}
          </a>
        </div>
      </div>
      <nav aria-label="Primary" className="mx-auto flex h-14 max-w-[1240px] items-center justify-between gap-4 px-5 md:px-8">
        <BrandLogo size="sm" className="shrink-0" />

        <ul className="hidden h-full items-center lg:flex">
          {mainNav.map((item) => (
            <li key={item.href} className="h-full">
              <Link
                href={item.href}
                className={cn(
                  "relative inline-flex h-full items-center px-3 text-sm font-medium after:absolute after:inset-x-3 after:bottom-0 after:h-0.5",
                  isActive(item.href) ? "text-navy after:bg-sky" : "text-navy/60 after:bg-transparent hover:text-navy"
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href={siteConfig.phoneTel}
            className="inline-flex h-10 items-center gap-2 bg-sky px-4 text-sm font-semibold text-white transition hover:bg-sky-deep"
          >
            <PhoneIcon className="size-4" aria-hidden />
            <span className="hidden sm:inline">{siteConfig.phone}</span>
            <span className="sm:hidden">Call</span>
          </Link>
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={menuOpen ? closeMobile : openMobile}
            className="inline-flex size-10 items-center justify-center border border-line text-navy lg:hidden"
          >
            {menuOpen ? <XIcon className="size-5" /> : <MenuIcon className="size-5" />}
          </button>
        </div>
      </nav>

      {typeof document !== "undefined" && mobileOpen
        ? createPortal(
            <div className={cn("fixed inset-0 z-[610] lg:hidden", mobileSlideIn ? "" : "pointer-events-none")}>
              <button
                type="button"
                aria-label="Close menu"
                className={cn("absolute inset-0 bg-navy/50 transition-opacity", mobileSlideIn ? "opacity-100" : "opacity-0")}
                onClick={closeMobile}
              />
              <div
                ref={mobilePanelRef}
                id="mobile-navigation"
                role="dialog"
                aria-modal="true"
                aria-label="Site navigation"
                className={cn(
                  "absolute inset-y-0 left-0 flex h-dvh w-[min(100%,22rem)] flex-col bg-navy text-white transition-[opacity,transform] duration-300 ease-out",
                  mobileSlideIn ? "translate-x-0 opacity-100" : "pointer-events-none -translate-x-6 opacity-0"
                )}
              >
                <div className="flex h-14 shrink-0 items-center justify-between border-b border-white/15 px-5">
                  <BrandLogo size="sm" tone="dark" />
                  <button
                    type="button"
                    className="inline-flex size-10 items-center justify-center border border-white/20"
                    onClick={closeMobile}
                    aria-label="Close menu"
                  >
                    <XIcon className="size-5" />
                  </button>
                </div>
                <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-5 pb-8">
                  <ol className="mt-4">
                    {mainNav.map((link, index) => (
                      <li key={link.href} className="border-b border-white/10">
                        <Link
                          href={link.href}
                          onClick={closeMobile}
                          className={cn(
                            "flex items-baseline gap-4 py-4 text-lg font-medium",
                            isActive(link.href) ? "text-sky" : "text-white"
                          )}
                        >
                          <span className="font-display text-sm text-sky">{String(index + 1).padStart(2, "0")}</span>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ol>
                  <ul className="mt-6 space-y-2">
                    {audienceNav.map((link) => (
                      <li key={link.label}>
                        {link.external ? (
                          <a href={link.href} className="text-sm text-white/70 hover:text-white" target="_blank" rel="noreferrer">
                            {link.label}
                          </a>
                        ) : (
                          <Link href={link.href} onClick={closeMobile} className="text-sm text-white/70 hover:text-white">
                            {link.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={siteConfig.phoneTel}
                    onClick={closeMobile}
                    className="mt-auto flex h-12 items-center justify-center gap-2 bg-sky text-sm font-semibold text-white"
                  >
                    <PhoneIcon className="size-4" aria-hidden />
                    {siteConfig.phone}
                  </Link>
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </header>
  )
}
