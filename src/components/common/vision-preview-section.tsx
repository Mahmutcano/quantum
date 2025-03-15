"use client"

import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"
import { Link } from "@/libs/i18nNavigation"

export function VisionPreviewSection() {
    const t = useTranslations("VisionPreview")

    return (
        <section className="py-20 bg-primary/5">
            <div className="mx-12">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold tracking-tight mb-6">{t("title")}</h2>
                    <p className="text-xl text-muted-foreground mb-8">{t("description")}</p>
                    <Button size="lg" className="gap-2" asChild>
                        <Link href="/vision">
                            <FileText className="h-5 w-5" />
                            {t("downloadBrochure")}
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}

