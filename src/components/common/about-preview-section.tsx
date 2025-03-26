"use client";

import { useTranslations } from "next-intl";

const previews = [
  {
    image: "/images/q1.jpeg",
    titleKey: "preview1.title",
    descriptionKey: "preview1.description",
    points: ["preview1.point1", "preview1.point2", "preview1.point3"],
    imageAlt: "preview1.imageAlt",
    imagePosition: "left"
  },
  {
    image: "/images/q2.jpeg",
    titleKey: "preview2.title",
    descriptionKey: "preview2.description",
    points: ["preview2.point1", "preview2.point2", "preview2.point3"],
    imageAlt: "preview2.imageAlt",
    imagePosition: "right"
  },
  {
    image: "/images/q3.jpg",
    titleKey: "preview3.title",
    descriptionKey: "preview3.description",
    points: ["preview3.point1", "preview3.point2", "preview3.point3"],
    imageAlt: "preview3.imageAlt",
    imagePosition: "left"
  }
];

export function AboutPreviewSection() {
  const t = useTranslations("AboutPreview");

  return (
    <section className="py-4 md:py-12">
      <div className="mx-12 space-y-4">
        {previews.map((preview, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            {/* Resim */}
            <div
              className={`relative h-[300px] md:h-[400px] rounded-lg overflow-hidden ${
                preview.imagePosition === "right" ? "md:order-2" : "md:order-1"
              }`}
            >
              <img
                src={preview.image}
                alt={t(preview.imageAlt)}
                className="w-full h-full object-cover shadow"
              />
            </div>

            {/* Metin İçeriği */}
            <div
              className={`flex flex-col gap-6 ${
                preview.imagePosition === "right" ? "md:order-1" : "md:order-2"
              }`}
            >
              <h2 className="text-3xl font-bold tracking-tight">{t(preview.titleKey)}</h2>
              <p className="text-muted-foreground">{t(preview.descriptionKey)}</p>
              <ul className="space-y-2">
                {preview.points.map((pointKey, i) => (
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
                    <span>{t(pointKey)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
