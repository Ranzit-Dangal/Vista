import FooterSection from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
import SellerSection from "@/components/sections/SellerSection";
import WhySection from "@/components/sections/WhySection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <SellerSection />
      <WhySection />
      <FooterSection />
    </div>
  );
}
