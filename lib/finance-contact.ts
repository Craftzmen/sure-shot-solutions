import { siteConfig } from "@/lib/site-nav"

/** Phone line for the floating assistance widget (same as main customer service). */
export const financeContact = {
  phoneDisplay: siteConfig.phone,
  phoneHref: siteConfig.phoneTel,
} as const
