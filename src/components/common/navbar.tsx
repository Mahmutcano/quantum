"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeaderActions } from "./header-actions";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  const t = useTranslations("Navbar");
  const { theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const phoneNumber = "+902129620101";

  const navItems = [
    { key: "home", href: "/" },
    { key: "program", href: "/program" },
    { key: "about", href: "/about" },
    { key: "partner", href: "/partner" },
    { key: "contact", href: "/contact" },
  ];  

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between mx-12">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={theme === "dark" ? "/images/quantum_logo.png" : "/images/quantum_logo.png"}
              alt="Logo"
              width={85}
              height={85}
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a key={item.key} href={item.href}>
              <Button
                variant="ghost"
                className={cn(
                  "text-sm font-medium cursor-pointer transition-colors hover:text-primary",
                  item.key === "contact" ? "hidden" : "block"
                )}
              >
                {t(item.key)}
              </Button>
            </a>
          ))}

          <Link href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer">
            <Button className="gap-2 cursor-pointer" variant="outline">
              <span>{t("contact")}</span>
              <span>
                <Image src="/images/whatsapp.png" alt="whatsapp" width={24} height={24} />
              </span>
            </Button>
          </Link>

          <div className="hidden md:block">
            <HeaderActions />
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <HeaderActions />
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed w-full top-16 z-[999999] bg-card md:hidden">
          <nav className="mx-12 flex flex-col gap-6 p-6">
            {navItems.map((item) => (
              <Link key={item.key} href={item.href}>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full text-left text-sm font-medium transition-colors hover:text-primary",
                    item.key === "contact" ? "hidden" : "block"
                  )}
                >
                  {t(item.key)}
                </Button>
              </Link>
            ))}

            <Link href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer">
              <Button className="w-full gap-2 cursor-pointer" variant="outline">
                <span>{t("contact")}</span>
                <span>
                  <Image src="/images/whatsapp.png" alt="whatsapp" width={24} height={24} />
                </span>
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
