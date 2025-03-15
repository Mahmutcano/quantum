"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone } from "lucide-react";
import { useState, FormEvent } from "react";

export function ContactSection() {
    const t = useTranslations("Contact");
    const phoneNumber = "+901234567890"; // Without spaces for links
    const formEmail = "quantumtradelimited@gmail.com"; // Email where form submissions will be sent

    const [formSubmitting, setFormSubmitting] = useState<boolean>(false);
    const [formStatus, setFormStatus] = useState<"success" | "error" | null>(null);

    const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormSubmitting(true);
        setFormStatus(null);

        const formData = new FormData(e.currentTarget);
        const formDataObj: Record<string, string> = {};

        formData.forEach((value, key) => {
            formDataObj[key] = typeof value === "string" ? value : "";
        });

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formDataObj.name,
                    email: formDataObj.email,
                    subject: formDataObj.subject,
                    message: formDataObj.message,
                    to: formEmail,
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to send email");
            }

            e.currentTarget.reset();
            setFormStatus("success");
            setTimeout(() => setFormStatus(null), 5000);
        } catch (error) {
            console.error("Form submission error:", error);
            setFormStatus("error");
        } finally {
            setFormSubmitting(false);
        }
    };

    return (
        <section className="py-20">
            <div className="mx-12">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">{t("title")}</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("subtitle")}</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <Card className="lg:col-span-2">
                        <CardHeader>
                            <CardTitle>{t("formTitle")}</CardTitle>
                            <CardDescription>{t("formDescription")}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            {formStatus === "success" && (
                                <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-md">
                                    {t("formSuccessMessage")}
                                </div>
                            )}
                            {formStatus === "error" && (
                                <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-md">
                                    {t("formErrorMessage")}
                                </div>
                            )}
                            <form className="grid gap-6" onSubmit={handleFormSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium">
                                            {t("nameLabel")}
                                        </label>
                                        <Input id="name" name="name" placeholder={t("namePlaceholder")} required />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium">
                                            {t("emailLabel")}
                                        </label>
                                        <Input id="email" name="email" type="email" placeholder={t("emailPlaceholder")} required />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium">
                                        {t("subjectLabel")}
                                    </label>
                                    <Input id="subject" name="subject" placeholder={t("subjectPlaceholder")} required />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium">
                                        {t("messageLabel")}
                                    </label>
                                    <Textarea id="message" name="message" placeholder={t("messagePlaceholder")} className="min-h-[150px]" required />
                                </div>
                                <Button type="submit" className="w-full md:w-auto" disabled={formSubmitting}>
                                    {formSubmitting ? t("submittingButton") : t("submitButton")}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>{t("contactInfo")}</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                                    <div>
                                        <h3 className="font-medium">{t("addressTitle")}</h3>
                                        <p className="text-sm text-muted-foreground">{t("address")}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                                    <div>
                                        <h3 className="font-medium">{t("emailTitle")}</h3>
                                        <a href={`mailto:${formEmail}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                            {formEmail}
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Phone className="h-5 w-5 text-primary mt-0.5" />
                                    <div>
                                        <h3 className="font-medium">{t("phoneTitle")}</h3>
                                        <a href={`tel:${phoneNumber}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                            +36 70 359 6226
                                        </a>
                                    </div>
                                </div>
                                <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer" className="block w-full">
                                    <Button className="flex w-full mt-4 gap-4 cursor-pointer" variant="outline">
                                        <span><img src="/images/whatsapp.png" alt="whatsapp" width={24} height={24} /></span>
                                        <span>{t("whatsappButton")}</span>
                                    </Button>
                                </a>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
