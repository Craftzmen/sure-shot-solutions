import Link from "next/link"
import { coveragePriorities } from "@/lib/home-content"

export function HomeCoverage() {
  return (
    <section id="coverage" className="scroll-mt-24 border-b border-line bg-white">
      <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8">
        <p className="index-no">Choose your starting point</p>
        <h2 className="heading-section mt-2 max-w-xl text-navy">Four priorities. One clearer path.</h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-navy/70">
          Every policy conversation is different. Begin with the part of life you want to keep protected, then explore the questions that matter most.
        </p>
        <div className="mt-10 border-t border-line">
          {coveragePriorities.map((item) => (
            <article key={item.href} className="grid gap-3 border-b border-line py-6 md:grid-cols-[4rem_1fr_auto] md:items-start md:gap-8">
              <p className="index-no">{item.index}</p>
              <div>
                <h3 className="font-display text-2xl font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-navy/70">{item.text}</p>
              </div>
              <Link href={item.href} className="text-sm font-semibold text-navy underline decoration-sky decoration-2 underline-offset-4">
                Review this coverage
              </Link>
            </article>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-navy/70">
          <span className="font-semibold text-navy">Not sure where to begin?</span> Choose “Multiple coverage types” in the request form and tell us what you want to protect first.
        </p>
        <Link href="/#request" className="mt-4 inline-flex h-11 items-center bg-sky px-5 text-sm font-semibold text-white hover:bg-sky-deep">
          Start a review
        </Link>
      </div>
    </section>
  )
}
