import Link from "next/link"
import Image, { type StaticImageData } from "next/image"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export type RouteHeroBreadcrumb = { label: string; href?: string }

type RouteHeroProps = {
  breadcrumbs: RouteHeroBreadcrumb[]
  eyebrow?: string
  title: ReactNode
  description?: string
  aside?: ReactNode
  actions?: ReactNode
  image?: StaticImageData
  imageAlt?: string
  className?: string
}

export function Breadcrumbs({ items, className }: { items: RouteHeroBreadcrumb[]; className?: string }) {
  return (
    <nav aria-label="Breadcrumb" className={cn("text-sm text-navy/55", className)}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((c, i) => (
          <li key={`${c.label}-${i}`} className="flex items-center gap-2">
            {i > 0 ? <span aria-hidden>/</span> : null}
            {c.href ? (
              <Link href={c.href} className="hover:text-navy">
                {c.label}
              </Link>
            ) : (
              <span aria-current="page" className="font-medium text-navy">
                {c.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export function RouteHero({
  breadcrumbs,
  eyebrow,
  title,
  description,
  aside,
  actions,
  image,
  imageAlt = "",
  className,
}: RouteHeroProps) {
  return (
    <section className={cn("border-b border-line bg-white", className)}>
      <div className="mx-auto max-w-[1240px] px-5 py-10 md:px-8 md:py-14">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          {eyebrow ? <p className="index-no">{eyebrow}</p> : null}
          <Breadcrumbs items={breadcrumbs} className="mb-0" />
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-12 lg:items-end">
          <h1 className="heading-display text-navy lg:col-span-7">{title}</h1>
          <div className="lg:col-span-5">
            {description ? <p className="text-base leading-relaxed text-navy/70">{description}</p> : null}
            {actions ? <div className="mt-6 flex flex-wrap gap-3">{actions}</div> : null}
            {aside ? <div className="mt-6">{aside}</div> : null}
          </div>
        </div>
      </div>
      {image ? (
        <div className="relative aspect-[21/8] max-h-[420px] min-h-48 w-full bg-ice">
          <Image src={image} alt={imageAlt} fill priority sizes="100vw" quality={72} className="object-cover" />
        </div>
      ) : null}
    </section>
  )
}
