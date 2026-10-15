import Image from "next/image"
import { personalPoints } from "@/lib/home-content"
import { PHOTOS } from "@/lib/remote-images"

export function HomePersonal() {
  return (
    <section className="border-b border-line bg-white">
      <div className="mx-auto grid max-w-[1240px] lg:grid-cols-12">
        <div className="px-5 py-14 md:px-8 lg:col-span-7">
          <p className="index-no">Built around your priorities</p>
          <h2 className="heading-section mt-2 text-navy">Protection is personal. The conversation should be, too.</h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-navy/70">
            The right questions change with the season of life. A new driver, a first home, a growing family, a rental, or a new financial responsibility can all prompt a different review.
          </p>
          <ul className="mt-8 border-t border-line">
            {personalPoints.map((point) => (
              <li key={point} className="border-b border-line py-3 text-sm leading-relaxed text-navy/80">
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative min-h-72 bg-ice lg:col-span-5">
          <Image
            src={PHOTOS.generations}
            alt="A parent with two young children outside a home"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </div>
      </div>
    </section>
  )
}
