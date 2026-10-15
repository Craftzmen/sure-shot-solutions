import Link from "next/link"
import { footerCoverageLinks, footerDecideLinks, footerLegalLinks, siteConfig, type NavItem } from "@/lib/site-nav"
import { BrandLogo } from "@/components/layout/brand-logo"

type Column = { heading: string; links: NavItem[] }

const columns: Column[] = [
  { heading: "Coverage", links: footerCoverageLinks },
  { heading: "Before you decide", links: footerDecideLinks },
  { heading: "Legal & privacy", links: footerLegalLinks },
]

function FooterLink({ link }: { link: NavItem }) {
  if (link.external) {
    return (
      <a href={link.href} className="text-sm text-white/70 hover:text-white" target="_blank" rel="noreferrer">
        {link.label}
      </a>
    )
  }
  return (
    <Link href={link.href} className="text-sm text-white/70 hover:text-white">
      {link.label}
    </Link>
  )
}

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8">
        <div className="grid gap-10 border-b border-white/15 pb-10 lg:grid-cols-[16rem_1fr]">
          <div>
            <BrandLogo size="md" tone="dark" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">{siteConfig.tagline}.</p>
            <ul className="mt-6 space-y-2 text-sm">
              <li>{siteConfig.addressLines.join(", ")}</li>
              <li>
                <Link href={siteConfig.phoneTel} className="hover:text-sky">
                  {siteConfig.phone}
                </Link>
              </li>
              <li>
                <Link href={siteConfig.emailMailto} className="break-all hover:text-sky">
                  {siteConfig.email}
                </Link>
              </li>
              <li className="text-white/55">{siteConfig.hours}</li>
            </ul>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.heading} className="border-t border-white/15 pt-4 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-4">
                <p className="mb-3 font-display text-sm font-semibold tracking-wide uppercase">{column.heading}</p>
                <ul className="space-y-2">
                  {column.links.map((link) => (
                    <li key={`${column.heading}-${link.label}`}>
                      <FooterLink link={link} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-8 text-xs leading-relaxed text-white/55">{siteConfig.legalNotice}</p>
        <div className="mt-6 border-t border-white/15 pt-6 text-xs text-white/45">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
