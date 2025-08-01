import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-card' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
            <span className={`text-xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}>
              AI Startup
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('demo')}
              className={`transition-colors duration-300 hover:text-primary ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              Demo
            </button>
            <button 
              onClick={() => scrollToSection('beta-signup')}
              className={`transition-colors duration-300 hover:text-primary ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              Beta Access
            </button>
            <button 
              onClick={() => window.location.href = '#team'}
              className={`transition-colors duration-300 hover:text-primary ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              Team
            </button>
          </div>
          
          <Button 
            onClick={() => scrollToSection('beta-signup')}
            className={`transition-all duration-300 ${
              isScrolled 
                ? 'bg-gradient-primary text-white hover:scale-105' 
                : 'bg-white text-primary hover:bg-white/90 hover:scale-105'
            }`}
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;