"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { FileText } from "lucide-react";

export function HeroSection() {
    const t = useTranslations("Hero");

    // ** Scroll fonksiyonu: Sayfa içi geçiş yapar **
    const handleScrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
            window.history.pushState(null, "", `#${id}`); // URL güncelleme
        } else {
            window.location.href = `/#${id}`; // Eğer sayfada değilse yönlendir
        }
    };

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
        <section className="relative py-20 md:py-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/5 dark:to-background z-0" />
            <div className="relative z-10 mx-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="flex flex-col gap-6">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">{t("title")}</h1>
                        <p className="text-xl text-muted-foreground">{t("subtitle")}</p>
                        <div className="flex flex-col sm:flex-row gap-4 mt-4">
                            <Button size="lg" className="gap-2 cursor-pointer" onClick={handleDownload}>
                                <FileText className="h-5 w-5" />
                                {t("downloadBrochure")}
                            </Button>
                            <Button className="cursor-pointer" size="lg" variant="outline" asChild>
                                <span onClick={() => handleScrollToSection("contact")}>{t("contactUs")}</span>
                            </Button>
                        </div>
                    </div>

                    {/* Carousel Container */}
                    <div className="relative w-full h-[500px] md:h-[500px] rounded-lg overflow-hidden">
                        <Carousel plugins={[
                            Autoplay({
                                delay: 1000,
                            }),
                        ]} className="w-full h-full">
                            <CarouselContent className="h-full">
                                {/* Carousel Items */}
                                {["/images/hedef.jpg", "/images/hedef2.jpg", "/images/mac.jpg"].map((src, index) => (
                                    <CarouselItem key={index} className="h-full object-fill">
                                        <img
                                            src={src}
                                            alt={t("imageAlt")}
                                            className="w-full h-full object-fill rounded-lg"
                                        />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            {/* Navigation Buttons */}
                            <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full" />
                            <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full" />
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>
    );
}
