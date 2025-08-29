import { Metadata } from "next";
import { Footer, HeroSection, ServicesSection } from "./components";

export const metadata: Metadata = {
  title: "Test",
  description: "NextJs ile geliştirildi",
};

export default function HomePage() {
  return (
    <div>
      <main role="main">
        <HeroSection />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
}
