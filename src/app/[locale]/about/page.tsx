"use client";

import { useTranslations } from "next-intl";
import { CheckCircle } from "lucide-react";

export default function AboutPage() {
  const t = useTranslations("Features");

  const supportPoints = [
    t("support.point1"),
    t("support.point2"),
    t("support.point3"),
    t("support.point4"),
    t("support.point5")
  ];

  return (
    <section className="py-8 md:py-20 bg-muted/50 text-foreground">
      <div className="mx-auto px-6 md:px-12 max-w-4xl space-y-12 text-center">
        {/* Başlık */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{t("title")}</h2>
          <p className="text-xl text-muted-foreground">{t("subtitle")}</p>
        </div>

        {/* Açıklama Metinleri
        <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
          <p>{t("paragraph1")}</p>
          <p>{t("paragraph2")}</p>
        </div> */}

        {/* Yardımcı Olur Başlığı ve Maddeler */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-center">{t("support.title")}</h3>
          <ul className="grid justify-center space-y-3 text-center">
            {supportPoints.map((point, index) => (
              <li key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1 shrink-0" />
                <span className="text-base text-muted-foreground text-start">{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-base text-muted-foreground mt-4 text-center">{t("support.note")}</p>
        </div>
      </div>
    </section>
  );
}
