import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Corporate procurement platform"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10 text-center text-white">
        <div className="max-w-5xl mx-auto">
          <h1 className="hero-text mb-6">
            Revolutionizing Corporate 
            <span className="text-gradient-primary block">Procurement</span>
          </h1>
          
          <p className="subtitle-text mb-8 max-w-3xl mx-auto text-gray-200">
            Get the best vendor prices, faster turnaround, and complete transparency—without weeks of negotiations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="btn-primary px-8 py-4 text-lg font-semibold rounded-xl"
            >
              Get Started – Try a Pilot Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-4 text-lg font-semibold rounded-xl border-white text-white hover:bg-white hover:text-primary transition-smooth"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-light mb-2">48h</div>
              <div className="text-gray-300">Turnaround Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-light mb-2">30%</div>
              <div className="text-gray-300">Average Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-light mb-2">1000+</div>
              <div className="text-gray-300">Verified Vendors</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;