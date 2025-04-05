"use client";

import { useTranslations } from "next-intl";

export default function ProcessPage() {
  const t = useTranslations("Process");

  const steps = [
    {
      title: t("step1.title"),
      description: t("step1.description"),
    },
    {
      title: t("step2.title"),
      description: t("step2.description"),
    },
    {
      title: t("step3.title"),
      description: t("step3.description"),
    },
    {
      title: t("step4.title"),
      description: t("step4.description"),
    },
    {
      title: t("step5.title"),
      description: t("step5.description"),
    },
    {
      title: t("step6.title"),
      description: t("step6.description"),
    },
    {
      title: t("step7.title"),
      description: t("step7.description"),
    },
    {
      title: t("step8.title"),
      description: t("step8.description"),
    },
  ];

  return (
    <section className="py-4 md:py-12 bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold">{t("title")}</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {t("description")}
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          {steps.map((step, index) => (
            <div key={index} className="relative mb-12 pl-10 last:mb-0">
              {index < steps.length - 1 && (
                <div className="absolute left-4 top-10 h-full w-0.5 -translate-x-1/2 bg-muted" />
              )}
              <div className="absolute left-0 top-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                {index + 1}
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
