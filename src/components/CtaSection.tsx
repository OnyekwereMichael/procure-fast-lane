import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Clock, Shield } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="section-padding bg-gradient-hero text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Pitch */}
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
            We don't just get you vendors.
            <span className="block text-accent-light">
              We get you the best price, fastest turnaround, and full accountability—every time.
            </span>
          </h2>
          
          <p className="text-2xl lg:text-3xl text-gray-200 mb-12 leading-relaxed">
            Let's start with a pilot project. Share your next procurement requirement, and within 48 hours, we'll show you how much you could save.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="btn-secondary px-10 py-6 text-xl font-semibold rounded-xl shadow-xl hover:shadow-2xl"
            >
              Start Your Pilot Project
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="px-10 py-6 text-xl font-semibold rounded-xl border-2 border-white text-white hover:bg-white hover:text-primary transition-smooth"
            >
              Schedule Demo Call
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/20">
            <div className="flex items-center justify-center space-x-3">
              <Clock className="h-8 w-8 text-accent-light" />
              <div className="text-left">
                <div className="font-bold text-lg">48-Hour Guarantee</div>
                <div className="text-gray-300">Legally binding commitment</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <Shield className="h-8 w-8 text-accent-light" />
              <div className="text-left">
                <div className="font-bold text-lg">Zero Risk Trial</div>
                <div className="text-gray-300">No upfront costs or commitments</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <Zap className="h-8 w-8 text-accent-light" />
              <div className="text-left">
                <div className="font-bold text-lg">Instant ROI</div>
                <div className="text-gray-300">See savings immediately</div>
              </div>
            </div>
          </div>
          
          {/* Urgency Element */}
          <div className="mt-12 inline-flex items-center px-6 py-3 bg-white/10 rounded-full backdrop-blur-sm">
            <div className="w-3 h-3 bg-accent rounded-full animate-pulse mr-3"></div>
            <span className="font-medium">
              Join 500+ companies already saving millions with our platform
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;