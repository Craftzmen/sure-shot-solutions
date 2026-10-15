"use client"

import { useEffect } from "react"
import { legalNotices } from "@/lib/home-content"

export function LegalNotices() {
  useEffect(() => {
    const openFromHash = () => {
      const id = window.location.hash.replace("#", "")
      const target = id ? document.getElementById(id) : null
      if (target instanceof HTMLDetailsElement) target.open = true
    }
    openFromHash()
    window.addEventListener("hashchange", openFromHash)
    return () => window.removeEventListener("hashchange", openFromHash)
  }, [])

  return (
    <section className="border-b border-line bg-white" aria-labelledby="legal-heading">
      <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8">
        <p className="index-no">Legal & consumer information</p>
        <h2 id="legal-heading" className="heading-section mt-2 text-navy">
          Plain-language policies for a careful decision.
        </h2>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-navy/70">
          These notices are written for this static website and should be reviewed again before adding online payments, carrier integrations, or new communication programs.
        </p>
        <div className="mt-8 border-t border-line">
          {legalNotices.map((notice) => (
            <details key={notice.id} id={notice.id} className="group scroll-mt-24 border-b border-line">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-medium text-navy">
                {notice.title}
                <span className="font-display text-xl text-sky group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="font-display hidden text-xl text-sky group-open:inline" aria-hidden>
                  –
                </span>
              </summary>
              <div className="max-w-3xl space-y-3 pb-4">
                {notice.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-relaxed text-navy/70">
                    {paragraph}
                  </p>
                ))}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
