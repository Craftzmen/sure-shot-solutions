"use client"

import { useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { ChevronDownIcon } from "lucide-react"
import { coverageOptions } from "@/lib/home-content"
import { siteConfig } from "@/lib/site-nav"

function coverageFromSearch(searchParams: { get: (key: string) => string | null }) {
  const requested = searchParams.get("coverage") ?? ""
  return coverageOptions.includes(requested as (typeof coverageOptions)[number]) ? requested : ""
}

const fieldClass = "h-11 w-full rounded-none border border-line bg-white px-3 text-sm text-navy outline-none focus-visible:border-sky focus-visible:ring-2 focus-visible:ring-sky/30"
const labelClass = "text-xs font-semibold tracking-wide text-navy/60 uppercase"

export function CoverageRequestForm() {
  const searchParams = useSearchParams()
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle")
  const [coverage, setCoverage] = useState(() => coverageFromSearch(searchParams))

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    if (String(data.get("website") ?? "").trim()) {
      setStatus("error")
      return
    }
    const name = String(data.get("full_name") ?? "").trim()
    const email = String(data.get("email") ?? "").trim()
    const phone = String(data.get("phone") ?? "").trim()
    const focus = String(data.get("coverage_type") ?? "").trim()
    const state = String(data.get("state") ?? "").trim()
    const zip = String(data.get("zip") ?? "").trim()
    const message = String(data.get("message") ?? "").trim()
    const consent = data.get("consent")
    if (!name || !email || !focus || !state || !zip || !consent) {
      setStatus("error")
      return
    }

    const subject = encodeURIComponent(`[${siteConfig.name}] Coverage request from ${name}`)
    const body = encodeURIComponent(
      [
        message || "No message provided.",
        "",
        `Coverage focus: ${focus}`,
        `State: ${state}`,
        `ZIP code: ${zip}`,
        `Phone: ${phone || "Not provided"}`,
        "",
        name,
        email,
      ].join("\n")
    )
    window.location.href = `${siteConfig.emailMailto}?subject=${subject}&body=${body}`
    setStatus("sent")
  }

  return (
    <section id="request" className="scroll-mt-24 border-b border-line bg-ice">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-14 md:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="index-no">Start with your priorities</p>
          <h2 className="heading-section mt-2 text-navy">Ask a better coverage question.</h2>
          <p className="mt-3 text-base leading-relaxed text-navy/70">
            Share the basics and we will follow up about the next appropriate step. A request is not a quote, an application, a policy, or a binding instruction.
          </p>
          <dl className="mt-8 border-t border-line text-sm">
            <div className="border-b border-line py-3">
              <dt className="text-navy/50">Prefer to talk?</dt>
              <dd>
                <a href={siteConfig.phoneTel} className="font-semibold text-navy hover:text-sky-deep">
                  {siteConfig.phone}
                </a>
              </dd>
            </div>
            <div className="border-b border-line py-3">
              <dt className="text-navy/50">Send an email</dt>
              <dd>
                <a href={siteConfig.emailMailto} className="font-semibold break-all text-navy hover:text-sky-deep">
                  {siteConfig.email}
                </a>
              </dd>
            </div>
          </dl>
          <p className="mt-4 text-sm text-navy/60">No online payments or card details are collected on this website.</p>
        </div>

        <form className="relative border border-line bg-white p-5 md:p-8" onSubmit={handleSubmit} noValidate>
          <input type="hidden" name="form_type" value="insurance_review" />
          <div className="absolute h-0 w-0 overflow-hidden" aria-hidden="true">
            <label>
              Website
              <input name="website" tabIndex={-1} autoComplete="off" />
            </label>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="grid gap-1.5">
              <label htmlFor="full_name" className={labelClass}>Full name</label>
              <input id="full_name" name="full_name" type="text" autoComplete="name" required className={fieldClass} />
            </div>
            <div className="grid gap-1.5">
              <label htmlFor="email" className={labelClass}>Email address</label>
              <input id="email" name="email" type="email" autoComplete="email" required className={fieldClass} />
            </div>
            <div className="grid gap-1.5">
              <label htmlFor="phone" className={labelClass}>Phone number (optional)</label>
              <input id="phone" name="phone" type="tel" autoComplete="tel" className={fieldClass} />
            </div>
            <div className="grid gap-1.5">
              <label htmlFor="coverage_type" className={labelClass}>Coverage focus</label>
              <div className="relative">
                <select
                  id="coverage_type"
                  name="coverage_type"
                  required
                  value={coverage}
                  onChange={(event) => setCoverage(event.target.value)}
                  className={`${fieldClass} appearance-none pr-10`}
                >
                  <option value="">Choose one</option>
                  {coverageOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <ChevronDownIcon className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-navy/50" aria-hidden />
              </div>
            </div>
            <div className="grid gap-1.5">
              <label htmlFor="state" className={labelClass}>State</label>
              <input id="state" name="state" defaultValue="North Carolina" autoComplete="address-level1" required className={fieldClass} />
            </div>
            <div className="grid gap-1.5">
              <label htmlFor="zip" className={labelClass}>ZIP code</label>
              <input id="zip" name="zip" inputMode="numeric" autoComplete="postal-code" required className={fieldClass} />
            </div>
            <div className="grid gap-1.5 sm:col-span-2">
              <label htmlFor="message" className={labelClass}>What would you like to discuss?</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell us what you are trying to protect or plan for."
                className="w-full rounded-none border border-line bg-white px-3 py-2 text-sm text-navy outline-none focus-visible:border-sky focus-visible:ring-2 focus-visible:ring-sky/30"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="consent" className="flex items-start gap-3 text-sm leading-relaxed text-navy/80">
                <input id="consent" name="consent" type="checkbox" required className="mt-1 size-4 accent-navy" />
                <span>
                  I agree that {siteConfig.name} may contact me about this request by phone, email, or text. I understand this is not an appointment, quote, policy, or payment authorization.
                </span>
              </label>
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button type="submit" className="inline-flex h-11 items-center justify-center bg-navy px-5 text-sm font-semibold text-white hover:bg-navy-soft">
              Send coverage request
            </button>
            <p className="text-xs leading-relaxed text-navy/55">
              By submitting, you agree to the <Link href="/#privacy" className="underline">Privacy notice</Link> and <Link href="/#communications" className="underline">Communications policy</Link>.
            </p>
          </div>
          {status === "sent" ? (
            <p className="mt-4 border border-line bg-ice px-4 py-3 text-sm text-navy" role="status">
              <span className="font-semibold">Thanks—your request was sent.</span> We will review the details and follow up about availability and next steps.
            </p>
          ) : null}
          {status === "error" ? (
            <p className="mt-4 border border-line px-4 py-3 text-sm text-navy" role="alert">
              <span className="font-semibold">We could not send the request.</span> Please check the fields or call {siteConfig.phone} directly.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  )
}
