"use client"

import { useTranslations } from "next-intl"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, BookOpen, Users } from "lucide-react"

export function FeaturesSection() {
  const t = useTranslations("Features")

  const features = [
    {
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      title: t("feature1.title"),
      description: t("feature1.description"),
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: t("feature2.title"),
      description: t("feature2.description"),
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: t("feature3.title"),
      description: t("feature3.description"),
    },
  ]

  return (
    <section className="py-20 bg-muted/50">
      <div className="mx-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">{t("title")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-md">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

