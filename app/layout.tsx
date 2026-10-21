import type { Metadata } from "next"
import { IBM_Plex_Sans, IBM_Plex_Sans_Condensed } from "next/font/google"
import { Suspense } from "react"

import "./globals.css"
import { FinancePopup } from "@/components/finance/finance-popup"
import { ImportantNotice } from "@/components/layout/important-notice"
import { MobileActions } from "@/components/layout/mobile-actions"
import { Navbar } from "@/components/layout/navbar"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/lib/site-nav"

const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
})

const plexCondensed = IBM_Plex_Sans_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://sureshotsolutions.me"),
  title: {
    default: `Insurance Coverage in North Carolina | ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: "website",
    url: "/",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.tagline,
  },
  keywords: [
    siteConfig.name,
    "North Carolina insurance",
    "auto insurance",
    "homeowners insurance",
    "renters insurance",
    "life insurance",
  ],
}

async function DeferredFooter() {
  const { SiteFooter } = await import("@/components/layout/site-footer")
  return <SiteFooter />
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={cn("antialiased", plex.variable, plexCondensed.variable, "font-sans")}>
      <body className="bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: siteConfig.name,
              url: "https://sureshotsolutions.me",
              email: siteConfig.email,
              telephone: siteConfig.phone,
              address: {
                "@type": "PostalAddress",
                streetAddress: siteConfig.streetAddress,
                addressLocality: siteConfig.addressLocality,
                addressRegion: siteConfig.addressRegion,
                postalCode: siteConfig.postalCode,
                addressCountry: siteConfig.addressCountry,
              },
              areaServed: { "@type": "State", name: "North Carolina" },
            }),
          }}
        />
        <Navbar />
        <main className="min-h-screen pb-14 lg:pb-0">{children}</main>
        <ImportantNotice />
        <Suspense fallback={<footer className="min-h-40 bg-navy" aria-hidden />}>
          <DeferredFooter />
        </Suspense>
        <FinancePopup />
        <MobileActions />
      </body>
    </html>
  )
}
