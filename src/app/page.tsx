import AboutStats from "@/components/landingpage/AboutStats";
import DevelopmentProcess from "@/components/landingpage/DevelopmentProcess";
import HeroSection from "@/components/landingpage/HeroSection";
import IndustriesWeServe from "@/components/landingpage/IndustriesWeServe";
import LogoSlider from "@/components/landingpage/LogoSlider";
import ServicesSection from "@/components/landingpage/ServicesSection";
import TeamSection from "@/components/landingpage/TeamSection";

export default function Home() {
  return (
    <div>
      <HeroSection />

      <ServicesSection />
      <AboutStats/>
      <IndustriesWeServe />
      <DevelopmentProcess />
      <LogoSlider/>
      <TeamSection />
    </div>
  );
}
