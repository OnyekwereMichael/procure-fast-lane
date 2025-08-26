import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Clock, Shield } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="section-padding bg-gradient-hero text-white relative overflow-hidden animate-fade-in">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.08)_0%,transparent_50%)]"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Executive Pitch */}
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-10 leading-tight">
            We don't just get you vendors.
            <span className="block text-accent bg-gradient-to-r from-accent via-accent-light to-white bg-clip-text text-transparent mt-4">
              We get you the best price, fastest turnaround, and full accountability—every time.
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-white/90 mb-16 leading-relaxed font-medium max-w-4xl mx-auto">
            Let's start with a pilot project. Share your next procurement requirement, and within 48 hours, we'll show you how much you could save.
          </p>
          
          {/* Primary CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent-light text-foreground px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-accent/25 transition-elegant hover:-translate-y-1"
            >
              Start Your Pilot Project
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="px-12 py-6 text-xl font-semibold rounded-2xl border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 backdrop-blur-sm transition-elegant hover:-translate-y-1"
            >
              Schedule Demo Call
            </Button>
          </div>
          
          {/* Executive Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-16 border-t border-white/20">
            <div className="group">
              <div className="flex items-center justify-center space-x-4">
                <Clock className="h-12 w-12 text-accent group-hover:scale-110 transition-elegant" />
                <div className="text-left">
                  <div className="font-bold text-xl">48-Hour Guarantee</div>
                  <div className="text-white/80 font-medium">Legally binding commitment</div>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="flex items-center justify-center space-x-4">
                <Shield className="h-12 w-12 text-accent group-hover:scale-110 transition-elegant" />
                <div className="text-left">
                  <div className="font-bold text-xl">Zero Risk Trial</div>
                  <div className="text-white/80 font-medium">No upfront costs or commitments</div>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="flex items-center justify-center space-x-4">
                <Zap className="h-12 w-12 text-accent group-hover:scale-110 transition-elegant" />
                <div className="text-left">
                  <div className="font-bold text-xl">Instant ROI</div>
                  <div className="text-white/80 font-medium">See savings immediately</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enterprise Social Proof */}
          <div className="mt-16 inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <div className="w-4 h-4 bg-accent rounded-full animate-pulse mr-4"></div>
            <span className="font-semibold text-lg">
              Join 500+ Fortune 1000 companies already saving millions with our platform
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;