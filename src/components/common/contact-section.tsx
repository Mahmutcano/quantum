"use client"

import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Mail, Phone } from "lucide-react"

export function ContactSection() {
    const t = useTranslations("Contact")

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
                            <form className="grid gap-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="name"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            {t("nameLabel")}
                                        </label>
                                        <Input id="name" placeholder={t("namePlaceholder")} />
                                    </div>
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="email"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            {t("emailLabel")}
                                        </label>
                                        <Input id="email" type="email" placeholder={t("emailPlaceholder")} />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label
                                        htmlFor="subject"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        {t("subjectLabel")}
                                    </label>
                                    <Input id="subject" placeholder={t("subjectPlaceholder")} />
                                </div>
                                <div className="space-y-2">
                                    <label
                                        htmlFor="message"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        {t("messageLabel")}
                                    </label>
                                    <Textarea id="message" placeholder={t("messagePlaceholder")} className="min-h-[150px]" />
                                </div>
                                <Button type="submit" className="w-full md:w-auto">
                                    {t("submitButton")}
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
                                        <p className="text-sm text-muted-foreground">info@example.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Phone className="h-5 w-5 text-primary mt-0.5" />
                                    <div>
                                        <h3 className="font-medium">{t("phoneTitle")}</h3>
                                        <p className="text-sm text-muted-foreground">+90 123 456 7890</p>
                                    </div>
                                </div>
                                <Button className="w-full mt-4 gap-2">
                                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.6 6.32A7.85 7.85 0 0 0 12.05 4c-4.38 0-7.93 3.55-7.93 7.93 0 1.41.37 2.78 1.07 3.98l-1.14 4.15 4.24-1.11a7.9 7.9 0 0 0 3.79.96h.01c4.38 0 7.93-3.55 7.93-7.93 0-2.12-.82-4.11-2.32-5.66zm-5.55 12.17h-.01a6.56 6.56 0 0 1-3.35-.92l-.24-.14-2.49.65.67-2.43-.16-.25a6.59 6.59 0 0 1-1.01-3.47c0-3.64 2.96-6.59 6.6-6.59 1.76 0 3.42.69 4.66 1.93a6.57 6.57 0 0 1 1.94 4.66c-.01 3.64-2.97 6.59-6.61 6.59zm3.62-4.93c-.2-.1-1.17-.58-1.35-.64-.18-.06-.32-.1-.45.1-.13.2-.52.64-.64.77-.12.13-.23.15-.43.05-.2-.1-.86-.32-1.63-1.01-.6-.54-1.01-1.2-1.13-1.4-.12-.2-.01-.31.09-.41.09-.09.2-.23.3-.35.1-.12.13-.2.2-.34.07-.13.03-.25-.02-.35-.05-.1-.45-1.08-.62-1.48-.16-.39-.33-.33-.45-.34-.12-.01-.25-.01-.38-.01-.13 0-.35.05-.53.25-.18.2-.7.68-.7 1.67 0 .98.72 1.93.82 2.06.1.13 1.4 2.14 3.4 3 .47.21.85.33 1.14.42.48.15.91.13 1.26.08.38-.06 1.17-.48 1.34-.94.16-.46.16-.86.12-.94-.05-.08-.18-.13-.38-.23z" />
                                    </svg>
                                    {t("whatsappButton")}
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}

