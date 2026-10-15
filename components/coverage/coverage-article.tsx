import Link from "next/link"
import { PhoneIcon } from "lucide-react"
import { RouteHero } from "@/components/layout/route-hero"
import { siteConfig } from "@/lib/site-nav"
import { PHOTOS } from "@/lib/remote-images"
import type { CoveragePageContent } from "@/lib/coverage-content"

const images = {
  "auto-insurance": { src: PHOTOS.openRoad, alt: "A driver at the wheel of a car at dusk" },
  "home-renters-insurance": { src: PHOTOS.houseFront, alt: "A house with the lights on at dusk" },
  "life-insurance": { src: PHOTOS.generations, alt: "A parent with two young children outside a home" },
} as const

export function CoverageArticle({ page }: { page: CoveragePageContent }) {
  const image = images[page.slug]
  return (
    <>
      <RouteHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: page.crumb }]}
        eyebrow={page.eyebrow}
        title={page.headline}
        description={page.lead}
        actions={
          <>
            <Link href="/#request" className="inline-flex h-11 items-center bg-navy px-5 text-sm font-semibold text-white hover:bg-navy-soft">
              Request a review
            </Link>
            <Link href={siteConfig.phoneTel} className="inline-flex h-11 items-center gap-2 border border-line px-5 text-sm font-semibold text-navy hover:border-navy">
              <PhoneIcon className="size-4 text-sky" aria-hidden />
              Call {siteConfig.phone}
            </Link>
          </>
        }
        image={image.src}
        imageAlt={image.alt}
      />
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8">
          <p className="index-no">Start with clarity</p>
          <h2 className="heading-section mt-2 text-navy">Common conversation points</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-navy/70">
            Questions worth bringing to the table. These are starting points for a discussion, not a promise of coverage or a substitute for the policy documents.
          </p>
          <div className="mt-8 grid border-t border-line md:grid-cols-2">
            {page.points.map((point) => (
              <article key={point.index} className="border-b border-line py-6 md:border-r md:px-6 md:odd:pl-0 md:even:border-r-0 md:even:pr-0">
                <p className="index-no">{point.index}</p>
                <h3 className="mt-2 font-display text-xl font-semibold text-navy">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/70">{point.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="border-b border-line bg-ice">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-14 md:px-8 lg:grid-cols-2">
          <div>
            <p className="index-no">Prepare for a useful review</p>
            <h2 className="heading-section mt-2 text-navy">Bring context, not a stack of jargon.</h2>
            <p className="mt-3 text-sm leading-relaxed text-navy/70">
              A few practical details can make the first conversation more focused and help surface the questions that matter for your situation.
            </p>
          </div>
          <ul className="border-t border-line">
            {page.prepare.map((item) => (
              <li key={item} className="border-b border-line py-3 text-sm text-navy">
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm leading-relaxed text-navy/70 lg:col-span-2">{page.note}</p>
        </div>
      </section>
      <section className="border-b border-line">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-6 px-5 py-12 md:flex-row md:items-end md:justify-between md:px-8">
          <div>
            <p className="index-no">Coverage guide</p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-navy">{page.guideLabel}</h2>
            <p className="mt-2 text-sm text-navy/70">Review priorities, questions, and next steps at your pace.</p>
          </div>
          <div>
            <p className="index-no">Ready when you are</p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-navy">Let’s make the next question easier.</h2>
            <p className="mt-2 max-w-md text-sm text-navy/70">Tell us which coverage priority you want to discuss. No online payment is required.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href={page.slug === "home-renters-insurance" ? "/#request" : `/?coverage=${encodeURIComponent(page.title)}#request`} className="inline-flex h-11 items-center bg-navy px-5 text-sm font-semibold text-white hover:bg-navy-soft">
                Request a coverage review
              </Link>
              <Link href={siteConfig.phoneTel} className="inline-flex h-11 items-center text-sm font-semibold text-navy underline decoration-sky decoration-2 underline-offset-4">
                Call {siteConfig.phone}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
