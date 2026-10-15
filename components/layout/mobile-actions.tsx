import Link from "next/link"
import { PhoneIcon } from "lucide-react"
import { siteConfig } from "@/lib/site-nav"

export function MobileActions() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white lg:hidden">
      <div className="grid grid-cols-2">
        <Link href={siteConfig.phoneTel} className="flex h-14 items-center justify-center gap-2 bg-navy text-sm font-semibold text-white">
          <PhoneIcon className="size-4 text-sky" aria-hidden />
          Call
        </Link>
        <Link href="/#request" className="flex h-14 items-center justify-center text-sm font-semibold text-navy">
          Request review
        </Link>
      </div>
    </div>
  )
}
