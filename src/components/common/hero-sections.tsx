"use client"

import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"

export function HeroSection() {
  const t = useTranslations("Hero")
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }))

  // ** Scroll fonksiyonu: Sayfa içi geçiş yapar **
  const handleScrollToSection = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" })
      window.history.pushState(null, "", `#${id}`) // URL güncelleme
    } else {
      window.location.href = `/#${id}` // Eğer sayfada değilse yönlendir
    }
  }

  return (
    <div className="relative h-[420px] md:h-[700px]">
      {/* Full-width carousel */}
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[plugin.current]}
        className="w-full h-full"
      >
        <CarouselContent className="h-[420px] md:h-[700px]">
          {["/images/q1.jpeg", "/images/q2.jpeg", "/images/q3.jpg"].map((src, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="relative w-full h-full">
                <img src={src || "/placeholder.svg"} alt={t("imageAlt")} className="w-full h-full object-cover" />
                {/* Dark overlay on each image */}
                <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Text content positioned over the carousel */}
        <div className="absolute inset-0 z-10 container mx-auto h-full flex items-center">
          <div className="max-w-2xl px-4 md:px-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">{t("title")}</h1>
            <p className="text-xl text-white/80 mt-6">{t("subtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button className="cursor-pointer" size="lg" variant="outline" asChild>
                <span
                  onClick={() => handleScrollToSection("contact")}
                  className="bg-white/20 hover:bg-white/30 text-white"
                >
                  {t("contactUs")}
                </span>
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation buttons */}
        <CarouselPrevious className="hidden md:absolute left-4 z-20 top-1/2 -translate-y-1/2" />
        <CarouselNext className="hidden md:absolute right-4 z-20 top-1/2 -translate-y-1/2" />
      </Carousel>
    </div>
  )
}

