"use client"

import { LanguageSwitcher } from "@/components/common/language-switcher"
import { ThemeToggle } from "@/components/common/theme-toggle"
import { useTranslations } from "next-intl"

export default function Home() {
  const t = useTranslations("Home")

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto space-y-6">
        <div className="flex justify-end">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h1 className="text-2xl font-bold mb-4">{t("title")}</h1>
          <p className="text-muted-foreground">{t("description")}</p>
        </div>
      </div>
    </div>
  )
}

