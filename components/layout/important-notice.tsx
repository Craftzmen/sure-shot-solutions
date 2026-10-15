import Link from "next/link"
import { PhoneIcon } from "lucide-react"
import { siteConfig } from "@/lib/site-nav"

export function ImportantNotice() {
  return (
    <section className="border-t border-line bg-white" aria-labelledby="important-notice-heading">
      <div className="mx-auto grid max-w-[1240px] gap-6 px-5 py-10 md:grid-cols-[1.4fr_auto] md:items-center md:px-8">
        <div className="border-l-2 border-sky pl-5">
          <h2 id="important-notice-heading" className="font-display text-xl font-semibold text-navy">
            Before you decide
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-navy/70">{siteConfig.legalNotice}</p>
        </div>
        <Link
          href={siteConfig.phoneTel}
          className="inline-flex h-12 items-center justify-center gap-2 bg-navy px-6 text-sm font-semibold text-white hover:bg-navy-soft"
        >
          <PhoneIcon className="size-4 text-sky" aria-hidden />
          Call {siteConfig.phone}
        </Link>
      </div>
    </section>
  )
}
