import type { Metadata } from "next"
import { CoverageArticle } from "@/components/coverage/coverage-article"
import { getCoveragePage } from "@/lib/coverage-content"

const page = getCoveragePage("auto-insurance")

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: { canonical: "/auto-insurance" },
}

export default function AutoInsurancePage() {
  return <CoverageArticle page={page} />
}
