"use client"

import { LanguageSwitcher } from "./language-switcher"
import { ThemeToggle } from "./theme-toggle"

export function HeaderActions() {
  return (
    <div className="flex items-center gap-2">
      <ThemeToggle />
      <LanguageSwitcher />
    </div>
  )
}

