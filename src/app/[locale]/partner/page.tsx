"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

import { Card, CardContent } from "@/components/ui/card";

export default function PartnerPage() {
  const t = useTranslations("Partner");

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{t("header.title")}</h1>
            <p className="text-lg text-slate-200">{t("header.subtitle")}</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center items-start">
          <img src="/images/image.png" alt="partner" />
          </div>
          <div className="prose prose-slate max-w-none">
            <p className="text-lg leading-relaxed mb-6">{t("content.paragraph1")}</p>
            <p className="text-lg leading-relaxed mb-6">{t("content.paragraph2")}</p>
            <p className="text-lg leading-relaxed mb-10">{t("content.paragraph3")}</p>
          </div>

          {/* How Glokey Works */}
          <div className="mt-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">{t("steps.title")}</h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Card key={i} className="border-slate-200">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-900">
                        {i + 1}
                      </div>
                      <div>
                        <p className="text-base">{t(`steps.step${i + 1}`)}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-slate-50 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">{t("cta.title")}</h3>
            <p className="mb-6">
              <Link href="https://www.glokey.com.tr" className="text-slate-900 font-medium hover:underline">
                www.glokey.com.tr
              </Link>
            </p>
            {/* <Button size="lg" className="bg-slate-900 hover:bg-slate-800">
              {t("cta.button")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button> */}
          </div>
        </div>
      </main>
    </div>
  );
}
