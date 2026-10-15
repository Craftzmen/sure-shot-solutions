import type { Metadata } from "next"
import { Suspense } from "react"
import { Hero } from "@/components/home/hero"
import { HomeCoverage } from "@/components/home/home-coverage"
import { HomeProcess } from "@/components/home/home-process"
import { HomePersonal } from "@/components/home/home-personal"
import { HomeFaq } from "@/components/home/home-faq"
import { CoverageRequestForm } from "@/components/forms/coverage-request-form"
import { LegalNotices } from "@/components/home/legal-notices"
import { siteConfig } from "@/lib/site-nav"

export const metadata: Metadata = {
  title: { absolute: "Insurance Coverage in North Carolina | Sure Shot Solutions LLC" },
  description: siteConfig.description,
  keywords: ["Sure Shot Solutions LLC", "North Carolina insurance", "auto insurance", "homeowners insurance", "renters insurance", "life insurance"],
  openGraph: {
    title: "Insurance Coverage in North Carolina | Sure Shot Solutions LLC",
    description: siteConfig.description,
    url: "/",
    type: "website",
  },
  alternates: { canonical: "/" },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeCoverage />
      <HomeProcess />
      <HomePersonal />
      <HomeFaq />
      <Suspense fallback={<div className="min-h-40 border-b border-line bg-ice" />}>
        <CoverageRequestForm />
      </Suspense>
      <LegalNotices />
    </>
  )
}
