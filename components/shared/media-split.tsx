import Image, { type StaticImageData } from "next/image"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type MediaSplitProps = {
  image: StaticImageData
  imageAlt: string
  children: ReactNode
  reverse?: boolean
  badge?: ReactNode
  imageClassName?: string
  className?: string
}

export function MediaSplit({ image, imageAlt, children, reverse = false, badge, imageClassName, className }: MediaSplitProps) {
  return (
    <div className={cn("grid items-start gap-8 lg:grid-cols-2", className)}>
      <div className={cn("relative", reverse && "lg:order-2")}>
        <div className={cn("relative aspect-[4/3] overflow-hidden bg-ice", imageClassName)}>
          <Image src={image} alt={imageAlt} fill sizes="(max-width: 1024px) 100vw, 50vw" quality={70} className="object-cover" />
        </div>
        {badge ? <div className="mt-3 border-l-2 border-sky pl-3 text-sm">{badge}</div> : null}
      </div>
      <div className={cn(reverse && "lg:order-1")}>{children}</div>
    </div>
  )
}
