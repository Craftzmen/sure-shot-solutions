import Image from "next/image"
import Link from "next/link"
import { PhoneIcon } from "lucide-react"
import { conversationPoints, homeHero } from "@/lib/home-content"
import { PHOTOS } from "@/lib/remote-images"
import { siteConfig } from "@/lib/site-nav"

export function Hero() {
  return (
    <section className="border-b border-line bg-white">
      <div className="mx-auto grid max-w-[1240px] lg:grid-cols-12">
        <div className="px-5 py-10 md:px-8 md:py-14 lg:col-span-7">
          <p className="index-no">{homeHero.eyebrow}</p>
          <h1 className="heading-display mt-3 text-navy">{homeHero.title}</h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-navy/70">{homeHero.lead}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={homeHero.primary.href} className="inline-flex h-11 items-center bg-navy px-5 text-sm font-semibold text-white hover:bg-navy-soft">
              {homeHero.primary.label}
            </Link>
            <Link href={siteConfig.phoneTel} className="inline-flex h-11 items-center gap-2 border border-line px-5 text-sm font-semibold text-navy hover:border-navy">
              <PhoneIcon className="size-4 text-sky" aria-hidden />
              {homeHero.secondary.label}
            </Link>
          </div>
          <ul className="mt-8 grid border-t border-line sm:grid-cols-3">
            {homeHero.chips.map((chip) => (
              <li key={chip} className="border-b border-line px-3 py-3 text-sm font-medium text-navy sm:border-r sm:border-b-0 sm:last:border-r-0">
                {chip}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative min-h-72 bg-ice lg:col-span-5 lg:min-h-full">
          <Image
            src={PHOTOS.familyHome}
            alt="A multigenerational family standing together at sunset"
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto grid max-w-[1240px] md:grid-cols-3">
          <div className="border-b border-line px-5 py-6 md:col-span-3 md:border-b md:px-8">
            <p className="font-display text-lg font-semibold text-navy">Start with one clear conversation</p>
            <p className="mt-1 text-sm text-navy/55">Auto · Home · Life</p>
          </div>
          {conversationPoints.map((point) => (
            <div key={point.title} className="border-b border-line px-5 py-5 last:border-b-0 md:border-r md:border-b-0 md:px-8 md:last:border-r-0">
              <p className="font-display text-base font-semibold text-navy">{point.title}</p>
              <p className="mt-1 text-sm text-navy/65">{point.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
