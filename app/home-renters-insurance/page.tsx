import type { Metadata } from "next"
import { CoverageArticle } from "@/components/coverage/coverage-article"
import { getCoveragePage } from "@/lib/coverage-content"

const page = getCoveragePage("home-renters-insurance")

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: { canonical: "/home-renters-insurance" },
}

export default function HomeRentersInsurancePage() {
  return <CoverageArticle page={page} />
}
