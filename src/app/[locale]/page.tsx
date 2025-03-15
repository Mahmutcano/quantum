import { AboutPreviewSection } from "@/components/common/about-preview-section";
import { ContactSection } from "@/components/common/contact-section";
import { FeaturesSection } from "@/components/common/features-sections";
import { HeroSection } from "@/components/common/hero-sections";
import { VisionPreviewSection } from "@/components/common/vision-preview-section";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <AboutPreviewSection />
      <VisionPreviewSection />
      <ContactSection />
    </main>
  )
}

