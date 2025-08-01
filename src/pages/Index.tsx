import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import BetaSignupSection from "@/components/BetaSignupSection";
import TeamSection from "@/components/TeamSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <BetaSignupSection />
      <div id="team">
        <TeamSection />
      </div>
    </div>
  );
};

export default Index;
