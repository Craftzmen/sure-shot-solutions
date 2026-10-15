import Link from "next/link"
import { ArrowRightIcon, PhoneIcon } from "lucide-react"
import { siteConfig } from "@/lib/site-nav"

type SupportBlockProps = {
  title?: string
  description?: string
  ctaLabel?: string
  ctaHref?: string
}

export function SupportBlock({
  title = "Prefer to talk?",
  description = "Call a live agent any time. A request is not a quote, an application, a policy, or a payment authorization.",
  ctaLabel = "Request a review",
  ctaHref = "/#request",
}: SupportBlockProps) {
  return (
    <section className="border-t border-line bg-white">
      <div className="mx-auto grid max-w-[1240px] gap-8 border-l-2 border-sky px-5 py-12 md:px-8 lg:grid-cols-[1.4fr_1fr] lg:items-start">
        <div>
          <h2 className="heading-section text-navy">{title}</h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-navy/70">{description}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={siteConfig.phoneTel} className="inline-flex h-11 items-center gap-2 bg-navy px-5 text-sm font-semibold text-white hover:bg-navy-soft">
              <PhoneIcon className="size-4 text-sky" aria-hidden />
              {siteConfig.phone}
            </Link>
            <Link href={ctaHref} className="inline-flex h-11 items-center gap-2 border border-line px-5 text-sm font-semibold text-navy hover:border-navy">
              {ctaLabel}
              <ArrowRightIcon className="size-4" aria-hidden />
            </Link>
          </div>
        </div>
        <dl className="grid border-t border-line text-sm">
          <div className="grid grid-cols-[8rem_1fr] gap-3 border-b border-line py-3">
            <dt className="text-navy/50">Hours</dt>
            <dd className="font-medium text-navy">{siteConfig.hours}</dd>
          </div>
          <div className="grid grid-cols-[8rem_1fr] gap-3 border-b border-line py-3">
            <dt className="text-navy/50">Email</dt>
            <dd>
              <Link href={siteConfig.emailMailto} className="font-medium break-all text-navy hover:text-sky-deep">
                {siteConfig.email}
              </Link>
            </dd>
          </div>
          <div className="grid grid-cols-[8rem_1fr] gap-3 py-3">
            <dt className="text-navy/50">{siteConfig.hqLabel}</dt>
            <dd className="font-medium text-navy">{siteConfig.addressLines.join(", ")}</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
