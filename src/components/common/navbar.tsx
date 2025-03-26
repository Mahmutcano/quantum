"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeaderActions } from "./header-actions";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Navbar() {
    const t = useTranslations("Navbar");
    const { theme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const phoneNumber = "+36703596226"; // WhatsApp için kullanılacak numara

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    // 📌 WhatsApp Açma Fonksiyonu
    const openWhatsApp = () => {
        const whatsappUrl = `https://wa.me/${phoneNumber}`;
        window.open(whatsappUrl, "_blank");
    };

    // ** Scroll fonksiyonu: Sayfa içi geçiş yapar **
    const handleScrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
            window.history.pushState(null, "", `#${id}`); // URL güncelleme
        } else {
            window.location.href = `/#${id}`; // Eğer sayfada değilse yönlendir
        }
        closeMenu();
    };

    const navItems = [
        { key: "home", id: "home" },
        { key: "features", id: "features" },
        { key: "about", id: "about" },
        { key: "vision", id: "vision" },
        { key: "contact", id: "contact" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-16 items-center justify-between mx-12">
                <div className="flex items-center gap-2">
                    {/* Tema değişimine göre logo */}
                    <button className="flex items-center gap-2" onClick={() => handleScrollToSection("home")}>
                        <Image
                            src={theme === "dark" ? "/images/quantum_logo.png" : "/images/quantum_logo.png"}
                            alt="Logo"
                            width={85}
                            height={85}
                        />
                    </button>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => (
                        <button
                            key={item.key}
                            onClick={() => handleScrollToSection(item.id)}
                            className={cn(
                                "text-sm font-medium cursor-pointer transition-colors hover:text-primary",
                                item.key === "contact" ? "hidden" : "block"
                            )}
                        >
                            {t(item.key)}
                        </button>
                    ))}
                    <button onClick={openWhatsApp}>
                        <Button className="gap-2 cursor-pointer" variant="outline">
                            <span>{t("contact")}</span>
                            <span>
                                    <img src="/images/whatsapp.png" alt="whatsapp" width={24} height={24} />
                                </span>
                        </Button>
                    </button>
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
                <div className="fixed w-full top-16 z-[999999] bg-card md:hidden">
                    <nav className="mx-12 flex flex-col gap-6 p-6">
                        {navItems.map((item) => (
                            <button
                                key={item.key}
                                onClick={() => handleScrollToSection(item.id)}
                                className={cn(
                                    "text-sm font-medium cursor-pointer transition-colors hover:text-primary",
                                    item.key === "contact" ? "hidden" : "block"
                                )}
                            >
                                {t(item.key)}
                            </button>
                        ))}
                        <button onClick={openWhatsApp}>
                            <Button className="w-full gap-2 cursor-pointer">
                                <span>{t("contact")}</span>
                                <span>
                                <img src="/images/whatsapp.png" alt="whatsapp" width={24} height={24} />
                                </span>
                            </Button>
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
}
