import Hero from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import WhyKrui from "@/components/WhyKrui";
import FeaturedDestinations from "@/components/FeaturedDestinations";
import HowItWorks from "@/components/HowItWorks";
import FeaturedPackages from "@/components/FeaturedPackages";
import MeetGuides from "@/components/MeetGuides";
import CulturePreview from "@/components/CulturePreview";
import { Testimonials, CtaGuide } from "@/components/TestimonialsAndCta";

export default function Home() {
  return (
    <main className="min-h-screen bg-light">
      <Hero />
      <StatsBar />
      <WhyKrui />
      <FeaturedDestinations />
      <HowItWorks />
      <FeaturedPackages />
      <MeetGuides />
      <CulturePreview />
      <Testimonials />
      <CtaGuide />
    </main>
  );
}
