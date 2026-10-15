export const siteConfig = {
  name: "Sure Shot Solutions LLC",
  wordmark: ["Sure Shot", "Solutions LLC"],
  tagline: "Clear, practical insurance conversations for North Carolina households",
  description:
    "Sure Shot Solutions LLC helps North Carolina households start a clearer conversation about auto, homeowners, renters, and life insurance—so the next step feels informed and practical.",
  announcement: "North Carolina insurance conversations, available 24/7",
  phone: "(888) 273-2055",
  phoneTel: "tel:+18882732055",
  email: "support@sureshotsolutions.me",
  emailMailto: "mailto:support@sureshotsolutions.me",
  addressLines: ["Charlotte, North Carolina"],
  hqLabel: "Location",
  hours: "Available 24/7",
  legalNotice:
    "Information on this website is general and educational. Policy availability, eligibility, premiums, limits, exclusions, underwriting, claims, and binding are controlled by the applicable insurer and policy documents. This website does not collect online payments.",
} as const

export type NavItem = { href: string; label: string; description?: string; external?: boolean }

export const mainNav: NavItem[] = [
  { href: "/", label: "Coverage overview" },
  { href: "/auto-insurance", label: "Auto insurance" },
  { href: "/home-renters-insurance", label: "Home + renters" },
  { href: "/life-insurance", label: "Life insurance" },
  { href: "/#request", label: "Request a review" },
]

export const audienceNav: NavItem[] = [
  { href: "/#coverage", label: "Coverage guide" },
  { href: "/#faq", label: "Common questions" },
  { href: "https://www.ncdoi.gov/consumers", label: "NC consumer resources", external: true },
]

export const utilityNav: NavItem[] = []

export const footerCoverageLinks: NavItem[] = [
  { href: "/", label: "Coverage overview" },
  { href: "/auto-insurance", label: "Auto insurance" },
  { href: "/home-renters-insurance", label: "Home + renters" },
  { href: "/life-insurance", label: "Life insurance" },
]

export const footerDecideLinks: NavItem[] = [
  { href: "/#request", label: "Request a review" },
  { href: "/#coverage", label: "Coverage guide" },
  { href: "/#faq", label: "Common questions" },
  { href: "https://www.ncdoi.gov/consumers", label: "NC consumer resources", external: true },
]

export const footerLegalLinks: NavItem[] = [
  { href: "/#privacy", label: "Privacy notice" },
  { href: "/#terms", label: "Terms" },
  { href: "/#payments", label: "Payment policy" },
  { href: "/#communications", label: "Communications" },
  { href: "/#coverage-disclosure", label: "Coverage disclosure" },
  { href: "/#accessibility", label: "Accessibility" },
]
