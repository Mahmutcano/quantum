"use client"

import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Link } from "@/libs/i18nNavigation"

export function AboutPreviewSection() {
    const t = useTranslations("AboutPreview")

    return (
        <section className="py-20">
            <div className="mx-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                            <img
                                src="/placeholder.svg"
                                alt={t("imageAlt")}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="order-1 md:order-2 flex flex-col gap-6">
                        <h2 className="text-3xl font-bold tracking-tight">{t("title")}</h2>
                        <p className="text-muted-foreground">{t("description")}</p>
                        <ul className="space-y-2">
                            {[1, 2, 3].map((i) => (
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
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    <span>{t(`point${i}`)}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-4">
                            <Button asChild>
                                <Link href="/about">{t("learnMore")}</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

