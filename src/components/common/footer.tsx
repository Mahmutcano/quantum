"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function Footer() {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  const navItems = [
    { key: "home", href: "/" },
    { key: "program", href: "/weprogram" },
    { key: "about", href: "/about" },
    { key: "vision", href: "/partner" },
    { key: "contact", href: "/contact" },
  ];

  return (
    <footer className="bg-muted py-4">
      <div className="mx-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo ve Açıklama */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/images/quantum_logo_siyah.png" alt="Logo" width={85} height={85} />
            </Link>
            <p className="text-sm text-muted-foreground">{t("description")}</p>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h3 className="font-medium text-lg mb-4">{t("quickLinks")}</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t(`nav.${item.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim Bilgileri */}
          <div>
            <h3 className="font-medium text-lg mb-4">{t("contactInfo")}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <strong>{t("contact.phoneLabel")}:</strong><br />
                <a href="tel:+902129620101" className="text-primary hover:underline">
                  {t("contact.phone")}
                </a>
              </li>
              <li>
                <strong>{t("contact.emailLabel")}:</strong><br />
                <a href="mailto:info@glokey.com.tr" className="text-primary hover:underline">
                  {t("contact.email")}
                </a>
              </li>
              <li>
                <strong>{t("contact.addressLabel")}:</strong><br />
                <span className="whitespace-pre-line">{t("contact.address")}</span>
              </li>
              <li>
                <strong>{t("contact.workingHoursLabel")}:</strong><br />
                <span className="whitespace-pre-line">{t("contact.workingHours")}</span>
              </li>
            </ul>
          </div>

          {/* Sosyal Medya */}
          <div>
            <h3 className="font-medium text-lg mb-4">{t("followUs")}</h3>
            <div className="flex gap-4">
              <a href="#" className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors">
                {/* Facebook Icon */}
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors">
                {/* Instagram Icon */}
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#" className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors">
                {/* Twitter Icon */}
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t mt-12 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} {t("copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
