"use client"

import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Link } from "@/libs/i18nNavigation"

export function HeroSection() {
  const t = useTranslations("Hero")

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/5 dark:to-background z-0" />
      <div className="relative z-10 mx-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">{t("title")}</h1>
            <p className="text-xl text-muted-foreground">{t("subtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button size="lg" asChild>
                <Link href="/program">{t("learnMore")}</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">{t("contactUs")}</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
            <img
              src="/placeholder.svg"
              alt={t("imageAlt")}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

