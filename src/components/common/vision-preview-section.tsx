"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

export function VisionPreviewSection() {
    const t = useTranslations("VisionPreview");

    const handleDownload = async () => {
        try {
            const response = await fetch("/api/download");

            if (!response.ok) {
                throw new Error("Dosya indirilemedi!");
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "Quantum_Brouer.pdf";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Dosya indirme hatası:", error);
        }
    };

    return (
        <section className="py-4 md:py-12 bg-primary/5">
            <div className="mx-12">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold tracking-tight mb-6">{t("title")}</h2>
                    <p className="text-xl text-muted-foreground mb-8">{t("description")}</p>
                    <Button size="lg" className="gap-2 cursor-pointer" onClick={handleDownload}>
                        <FileText className="h-5 w-5" />
                        {t("downloadBrochure")}
                    </Button>
                </div>
            </div>
        </section>
    );
}
