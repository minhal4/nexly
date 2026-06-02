import HeroSection from "@/components/ui/hero-section";
import TrendingCarousel from "@/components/TrendingCarousel";
import NexlySuggestions from "@/components/NexlySuggestions";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrendingCarousel />
      <NexlySuggestions />
      <Footer />
    </>
  );
}
