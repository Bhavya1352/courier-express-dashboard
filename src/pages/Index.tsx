import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BrandMarquee from "@/components/BrandMarquee";
import ServicesSection from "@/components/ServicesSection";
import TrackingSection from "@/components/TrackingSection";
import TechStackSection from "@/components/TechStackSection";
import ComparisonSection from "@/components/ComparisonSection";
import GlobalNetworkSection from "@/components/GlobalNetworkSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <BrandMarquee />
    <ServicesSection />
    <TrackingSection />
    <TechStackSection />
    <ComparisonSection />
    <GlobalNetworkSection />
    <PricingSection />
    <TestimonialsSection />
    <FAQSection />
    <Footer />
  </div>
);

export default Index;
