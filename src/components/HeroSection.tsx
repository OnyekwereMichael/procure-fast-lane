import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
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
          
          <h1 className="hero-text mb-8">
            Revolutionizing Corporate 
            <span className="block bg-gradient-to-r from-accent via-accent-light to-white bg-clip-text text-transparent">
              Procurement
            </span>
          </h1>
          
          <p className="subtitle-text mb-12 max-w-4xl mx-auto text-white/90 font-medium">
            Get the best vendor prices, faster turnaround, and complete transparency—without weeks of negotiations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="btn-primary px-10 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl"
            >
              Get Started – Try a Pilot Project
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="px-10 py-4 text-lg font-semibold rounded-xl border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm transition-elegant"
            >
              <Play className="mr-3 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
          
          {/* Executive Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-16 border-t border-white/20">
            <div className="text-center group">
              <div className="text-5xl font-bold text-accent mb-3 group-hover:scale-105 transition-elegant">48h</div>
              <div className="text-white/80 font-medium">Turnaround Guarantee</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl font-bold text-accent mb-3 group-hover:scale-105 transition-elegant">30%</div>
              <div className="text-white/80 font-medium">Average Cost Savings</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl font-bold text-accent mb-3 group-hover:scale-105 transition-elegant">1000+</div>
              <div className="text-white/80 font-medium">Certified Vendors</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;