import type { Metadata } from "next"
import { CoverageArticle } from "@/components/coverage/coverage-article"
import { getCoveragePage } from "@/lib/coverage-content"

const page = getCoveragePage("life-insurance")

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: { canonical: "/life-insurance" },
}

export default function LifeInsurancePage() {
  return <CoverageArticle page={page} />
}
