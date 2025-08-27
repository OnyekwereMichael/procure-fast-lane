import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-16 md:pt-28 max-sm:pt-0">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05)_0%,transparent_50%)]"></div>
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10 text-center text-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
              <span className="text-accent font-medium">Enterprise Procurement Platform</span>
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 md:mb-8 leading-12 animate-fade-in">
            Revolutionizing Corporate 
            <span className="block bg-gradient-to-r from-accent via-accent-light to-white bg-clip-text text-transparent mt-1">
              Procurement
            </span>
          </h1>
          
          <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-12 max-w-4xl mx-auto text-white/90 font-medium animate-fade-in" style={{animationDelay: '0.2s'}}>
            Get the best vendor prices, faster turnaround, and complete transparency—without weeks of negotiations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-12 md:mb-16 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Button 
              size="lg" 
              className="btn-primary px-6 md:px-10 py-3 md:py-4 text-base md:text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl"
            >
              Get Started – Try a Pilot Project
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="px-6 md:px-10 py-3 md:py-4 text-base md:text-lg font-semibold rounded-xl border-2 border-white/40 text-white bg-white/5 hover:bg-white/15 hover:border-white/60 backdrop-blur-sm transition-elegant"
            >
              <Play className="mr-3 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
          
          {/* Executive Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 pt-16 border-t border-white/20 mb-10 max-sm:mb-0">
            <div className="text-center group">
              <div className="text-5xl font-bold text-accent mb-3 group-hover:scale-105 transition-elegant max-sm:text-3xl">48h</div>
              <div className="text-white/80 font-medium">Turnaround Guarantee</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl font-bold text-accent mb-3 group-hover:scale-105 transition-elegant max-sm:text-3xl">30%</div>
              <div className="text-white/80 font-medium">Average Cost Savings</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl font-bold text-accent mb-3 group-hover:scale-105 transition-elegant max-sm:text-3xl">1000+</div>
              <div className="text-white/80 font-medium">Certified Vendors</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;