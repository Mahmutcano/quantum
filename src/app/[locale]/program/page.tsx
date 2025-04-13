"use client";

import { useTranslations } from "next-intl";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const previews = [
  {
    image: "/images/q1.jpeg",
    titleKey: "summary.title",
    descriptionKey: "summary.description",
    points: [
      "summary.investment",
      "summary.duration",
      "summary.residency"
    ],
    imageAlt: "summary.imageAlt",
    imagePosition: "left"
  },
  {
    image: "/images/q2.jpeg",
    titleKey: "advantages.title",
    descriptionKey: "advantages.description",
    points: [
      "advantages.adv1",
      "advantages.adv2",
      "advantages.adv3",
      "advantages.adv4",
      "advantages.adv5"
    ],
    imageAlt: "advantages.imageAlt",
    imagePosition: "right"
  },
  {
    image: "/images/q3.jpg",
    titleKey: "requirements.title",
    descriptionKey: "requirements.description",
    points: [
      "requirements.req1",
      "requirements.req2",
      "requirements.req3",
      "requirements.req4",
      "requirements.req5"
    ],
    imageAlt: "requirements.imageAlt",
    imagePosition: "left"
  },
  {
    image: "/images/hedef.png",
    titleKey: "fund.title",
    descriptionKey: "fund.description",
    points: [],
    imageAlt: "fund.imageAlt",
    imagePosition: "right"
  }
];

export default function ProgramPage() {
  const t = useTranslations("AboutPreview");

  const handleDownload = async () => {
    try {
      const response = await fetch("/api/download")

      if (!response.ok) {
        throw new Error("Dosya indirilemedi!")
      }

      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = "Quantum_Brouer.pdf"
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error("Dosya indirme hatası:", error)
    }
  }

  return (
    <section className="py-6 md:py-12 bg-background text-foreground">
      <div className="mx-6 md:mx-12 space-y-12">
        {/* Başlık */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">{t("title")}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t("subtitle")}</p>
        </div>

        {/* Preview Kutuları */}
        {previews.map((preview, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
          >
            {/* Görsel */}
            <div
              className={`relative h-[250px] md:h-[400px] rounded-lg overflow-hidden shadow-md ${preview.imagePosition === "right" ? "md:order-2" : "md:order-1"
                }`}
            >
              <img
                src={preview.image}
                alt={t(preview.imageAlt)}
                className="w-full h-full object-cover shadow-2xl"
                width={24}
                height={24}
              />
            </div>

            {/* Metin */}
            <div
              className={`flex flex-col gap-4 ${preview.imagePosition === "right" ? "md:order-1" : "md:order-2"
                }`}
            >
              <h3 className="text-2xl font-semibold">{t(preview.titleKey)}</h3>
              {t(preview.descriptionKey).split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-muted-foreground">{paragraph}</p>
              ))}


              {preview.points.length > 0 && (
                <ul className="space-y-2 text-base">
                  {preview.points.map((pointKey, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="rounded-full bg-primary/10 p-1 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <span>{t(pointKey)}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-16 text-center space-y-4 bg-muted/50 py-4 md:py-12">
        <h3 className="text-2xl font-semibold">{t("brosurTitle")}</h3>
        <p className="text-muted-foreground">{t("brosurDescription")}</p>
        <Button size="lg" className="gap-2 cursor-pointer" onClick={handleDownload}>
          <FileText className="h-5 w-5" />
          {t("downloadBrochure")}
        </Button>
      </div>
    </section>
  );
}
