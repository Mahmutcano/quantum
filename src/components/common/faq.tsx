"use client";

import { useTranslations } from "next-intl";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export default function FAQSection() {
    const t = useTranslations("FAQ");
    const phoneNumber = "+902129620101 ";

    const faqItems = Array.from({ length: 10 }, (_, i) => ({
        question: t(`q${i + 1}.question`),
        answer: t(`q${i + 1}.answer`)
    }));

    const openWhatsApp = () => {
        const whatsappUrl = `https://wa.me/${phoneNumber}`;
        window.open(whatsappUrl, "_blank");
    };

    return (
        <section className="py-4 md:py-12 px-12">
            <div className="mx-auto max-w-3xl">
                <h2 className="mb-8 text-center text-3xl font-bold">{t("title")}</h2>

                <Accordion type="single" collapsible className="w-full px-6">
                    {faqItems.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                {/* İletişim alanı */}
                <div className="mt-16 text-center space-y-4 bg-muted/50 py-4 md:py-12">
                    <h3 className="text-2xl font-semibold">{t("contactTitle")}</h3>
                    <p className="text-muted-foreground">{t("contactDescription")}</p>
                    <Button onClick={openWhatsApp} className="mt-2 cursor-pointer">
                        <span>
                            <img src="/images/whatsapp.png" alt="whatsapp" width={24} height={24} />
                        </span>
                        <span>
                            {t("contactButton")}
                        </span>
                    </Button>
                </div>
            </div>
        </section>
    );
}
