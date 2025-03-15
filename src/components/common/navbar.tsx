"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Link } from "@/libs/i18nNavigation"
import { HeaderActions } from "./header-actions"

export function Navbar() {
    const t = useTranslations("Navbar")
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
    const closeMenu = () => setIsMenuOpen(false)

    const navItems = [
        { key: "home", href: "/" },
        { key: "about", href: "/about" },
        { key: "program", href: "/program" },
        { key: "vision", href: "/vision" },
        { key: "contact", href: "/contact" },
    ]

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-16 items-center justify-between mx-12">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
                        <span className="h-8 w-8 rounded-md bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">L</span>
                        <span className="font-bold text-xl hidden md:inline-block">{t("logo")}</span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.key}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-primary",
                                item.key === "contact" ? "hidden" : "block"
                            )}
                        >
                            {t(item.key)}
                        </Link>
                    ))}
                    <Link href="/contact" className="hidden md:block">
                        <Button className="gap-2 bg-green-500">
                            <span>{t("contact")}</span>
                            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.6 6.32A7.85 7.85 0 0 0 12.05 4c-4.38 0-7.93 3.55-7.93 7.93 0 1.41.37 2.78 1.07 3.98l-1.14 4.15 4.24-1.11a7.9 7.9 0 0 0 3.79.96h.01c4.38 0 7.93-3.55 7.93-7.93 0-2.12-.82-4.11-2.32-5.66zm-5.55 12.17h-.01a6.56 6.56 0 0 1-3.35-.92l-.24-.14-2.49.65.67-2.43-.16-.25a6.59 6.59 0 0 1-1.01-3.47c0-3.64 2.96-6.59 6.6-6.59 1.76 0 3.42.69 4.66 1.93a6.57 6.57 0 0 1 1.94 4.66c-.01 3.64-2.97 6.59-6.61 6.59zm3.62-4.93c-.2-.1-1.17-.58-1.35-.64-.18-.06-.32-.1-.45.1-.13.2-.52.64-.64.77-.12.13-.23.15-.43.05-.2-.1-.86-.32-1.63-1.01-.6-.54-1.01-1.2-1.13-1.4-.12-.2-.01-.31.09-.41.09-.09.2-.23.3-.35.1-.12.13-.2.2-.34.07-.13.03-.25-.02-.35-.05-.1-.45-1.08-.62-1.48-.16-.39-.33-.33-.45-.34-.12-.01-.25-.01-.38-.01-.13 0-.35.05-.53.25-.18.2-.7.68-.7 1.67 0 .98.72 1.93.82 2.06.1.13 1.4 2.14 3.4 3 .47.21.85.33 1.14.42.48.15.91.13 1.26.08.38-.06 1.17-.48 1.34-.94.16-.46.16-.86.12-.94-.05-.08-.18-.13-.38-.23z" />
                            </svg>
                        </Button>
                    </Link>
                    <div className="hidden md:block">
                        <HeaderActions />
                    </div>
                </nav>

                {/* Mobile Navigation Toggle */}
                <div className="flex md:hidden items-center gap-2">
                    <HeaderActions />
                    <Button variant="outline" size="icon" onClick={toggleMenu} aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
                        {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </Button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <div className="fixed inset-0 top-16 z-50 bg-background md:hidden">
                    <nav className="mx-12 flex flex-col gap-6 p-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.key}
                                href={item.href}
                                className="text-lg font-medium transition-colors hover:text-primary"
                                onClick={closeMenu}
                            >
                                {t(item.key)}
                            </Link>
                        ))}
                        <Link href="/contact" onClick={closeMenu}>
                            <Button className="w-full gap-2">
                                <span>{t("contact")}</span>
                                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.6 6.32A7.85 7.85 0 0 0 12.05 4c-4.38 0-7.93 3.55-7.93 7.93 0 1.41.37 2.78 1.07 3.98l-1.14 4.15 4.24-1.11a7.9 7.9 0 0 0 3.79.96h.01c4.38 0 7.93-3.55 7.93-7.93 0-2.12-.82-4.11-2.32-5.66zm-5.55 12.17h-.01a6.56 6.56 0 0 1-3.35-.92l-.24-.14-2.49.65.67-2.43-.16-.25a6.59 6.59 0 0 1-1.01-3.47c0-3.64 2.96-6.59 6.6-6.59 1.76 0 3.42.69 4.66 1.93a6.57 6.57 0 0 1 1.94 4.66c-.01 3.64-2.97 6.59-6.61 6.59zm3.62-4.93c-.2-.1-1.17-.58-1.35-.64-.18-.06-.32-.1-.45.1-.13.2-.52.64-.64.77-.12.13-.23.15-.43.05-.2-.1-.86-.32-1.63-1.01-.6-.54-1.01-1.2-1.13-1.4-.12-.2-.01-.31.09-.41.09-.09.2-.23.3-.35.1-.12.13-.2.2-.34.07-.13.03-.25-.02-.35-.05-.1-.45-1.08-.62-1.48-.16-.39-.33-.33-.45-.34-.12-.01-.25-.01-.38-.01-.13 0-.35.05-.53.25-.18.2-.7.68-.7 1.67 0 .98.72 1.93.82 2.06.1.13 1.4 2.14 3.4 3 .47.21.85.33 1.14.42.48.15.91.13 1.26.08.38-.06 1.17-.48 1.34-.94.16-.46.16-.86.12-.94-.05-.08-.18-.13-.38-.23z" />
                                </svg>
                            </Button>
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    )
}
