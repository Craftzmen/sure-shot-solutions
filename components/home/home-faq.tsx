"use client"

import { useState } from "react"
import { faqs } from "@/lib/home-content"

export function HomeFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="scroll-mt-24 border-b border-line bg-white">
      <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8">
        <p className="index-no">Common questions</p>
        <h2 className="heading-section mt-2 text-navy">A clearer starting point.</h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-navy/70">
          Use these answers to understand what the website can—and cannot—do.
        </p>
        <div className="mt-8 border-t border-line">
          {faqs.map((item, index) => {
            const open = openIndex === index
            return (
              <div key={item.question} className="border-b border-line">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 py-4 text-left"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? null : index)}
                >
                  <span className="font-medium text-navy">{item.question}</span>
                  <span className="font-display text-xl text-sky" aria-hidden>
                    {open ? "–" : "+"}
                  </span>
                </button>
                {open ? <p className="max-w-3xl pb-4 text-sm leading-relaxed text-navy/70">{item.answer}</p> : null}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
