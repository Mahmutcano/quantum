import { AboutPreviewSection } from "@/components/common/about-preview-section";
import { ContactSection } from "@/components/common/contact-section";
import { FeaturesSection } from "@/components/common/features-sections";
import { HeroSection } from "@/components/common/hero-sections";
import { VisionPreviewSection } from "@/components/common/vision-preview-section";

export default function Home() {
  return (
    <main>
      <section id="home">
        <HeroSection />
      </section>
      <section id="features">
        <FeaturesSection />
      </section>
      <section id="about">
        <AboutPreviewSection />
      </section>
      <section id="vision">
        <VisionPreviewSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </main>
  );
}
