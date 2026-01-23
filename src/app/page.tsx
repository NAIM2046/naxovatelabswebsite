import HeroSection from "@/components/landingpage/HeroSection";
import IndustriesWeServe from "@/components/landingpage/IndustriesWeServe";
import ProjectsSection from "@/components/landingpage/ProjectsSection";
import ServicesSection from "@/components/landingpage/ServicesSection";
import TeamSection from "@/components/landingpage/TeamSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <IndustriesWeServe />
      <TeamSection />
    </div>
  );
}
