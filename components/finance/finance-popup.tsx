"use client"

import { useState } from "react"
import { Phone, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { financeContact } from "@/lib/finance-contact"

const shellClass = "fixed right-4 bottom-20 z-[550] flex max-h-[calc(100vh-32px)] flex-col overflow-hidden sm:right-6 sm:bottom-6 lg:bottom-6"
const fabShellClass = "size-14"
const panelShellClass = "w-[calc(100vw-32px)] border border-line bg-white shadow-[0_16px_40px_-24px_hsl(222_47%_11%/0.45)] sm:w-[320px]"

/** Small screens start with the call button only so the panel never covers the first screen. */
export function FinancePopup() {
  const [isMinimized, setIsMinimized] = useState(false)
  const minimize = () => setIsMinimized(true)

  const fab = (
    <a
      href={financeContact.phoneHref}
      title={`Call ${financeContact.phoneDisplay} and talk with a live agent`}
      aria-label={`Call ${financeContact.phoneDisplay} and talk with a live agent`}
      className="flex size-full items-center justify-center bg-navy text-white hover:bg-navy-soft"
    >
      <Phone className="size-5" aria-hidden />
      <span className="sr-only">Call {financeContact.phoneDisplay}</span>
    </a>
  )

  const panel = (
    <div className="flex h-full flex-col">
      <div className="flex items-start justify-between gap-3 border-b border-line px-4 py-3">
        <div>
          <p className="index-no">Live agent</p>
          <h3 className="mt-1 font-display text-lg font-semibold text-navy">Talk with a live agent</h3>
          <p className="mt-1 text-sm text-navy/65">Call {financeContact.phoneDisplay}. No online payment is collected on this website.</p>
        </div>
        <button
          type="button"
          onClick={minimize}
          className="inline-flex size-8 items-center justify-center border border-line text-navy/60 hover:text-navy"
          aria-label="Close live agent popup"
        >
          <X className="size-4" />
        </button>
      </div>
      <div className="space-y-3 p-4">
        <ul className="grid grid-cols-3 border border-line text-center text-[11px] font-medium text-navy/70">
          <li className="border-r border-line px-2 py-2">Van Nuys, CA</li>
          <li className="border-r border-line px-2 py-2">Available 24/7</li>
          <li className="px-2 py-2">No card details</li>
        </ul>
        <a
          href={financeContact.phoneHref}
          title={`Call ${financeContact.phoneDisplay}`}
          className="flex h-12 w-full items-center justify-center gap-2 bg-navy text-sm font-semibold text-white hover:bg-navy-soft"
        >
          <Phone className="size-4 text-sky" aria-hidden />
          {financeContact.phoneDisplay}
        </a>
      </div>
    </div>
  )

  if (!isMinimized) {
    return (
      <>
        <div role="complementary" aria-label="Live agent" className={cn(shellClass, fabShellClass, "sm:hidden")}>
          {fab}
        </div>
        <div role="complementary" aria-label="Live agent" className={cn(shellClass, panelShellClass, "max-sm:hidden")}>
          {panel}
        </div>
      </>
    )
  }

  return (
    <div role="complementary" aria-label="Live agent" className={cn(shellClass, fabShellClass)}>
      {fab}
    </div>
  )
}
