import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden pt-20">
      
      <div className="container mx-auto px-6 text-center text-white relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6 space-x-4">
            <div className="flex items-center bg-orange-600/20 border border-orange-600/30 rounded-full px-3 py-1 text-xs text-orange-400">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
              Backed by Y Combinator
            </div>
            <div className="flex items-center bg-green-600/20 border border-green-600/30 rounded-full px-3 py-1 text-xs text-green-400">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Backed by NVIDIA
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Build The Future
            <span className="block">
              <span className="text-primary">With AI</span> Innovation
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/80 max-w-2xl mx-auto leading-relaxed">
            Revolutionary AI-powered platform that transforms how businesses operate, 
            making intelligent automation accessible to everyone.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-white/90"
              onClick={() => scrollToSection('beta-signup')}
            >
              Join Beta Program
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10"
              onClick={() => scrollToSection('demo')}
            >
              Watch Demo
            </Button>
          </div>
          
          {/* Demo Video Section */}
          <div id="demo" className="mt-16">
            <div className="relative max-w-4xl mx-auto">
              <div className="aspect-video bg-black/40 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden shadow-elevated">
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto border border-primary/30">
                      <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-white/80">Demo Video Coming Soon</p>
                    <p className="text-sm text-white/60 mt-2">
                      Replace this with your actual demo video embed
                    </p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;