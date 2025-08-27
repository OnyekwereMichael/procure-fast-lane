import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative  flex items-center justify-center overflow-hidden bg-gradient-hero pt-10 sm:pt-16 md:pt-28 max-sm:pt-28">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05)_0%,transparent_50%)]"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center text-white px-4">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <div className="mb-4 sm:mb-6">
            <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-accent font-medium text-xs sm:text-sm">
                Enterprise Procurement Platform
              </span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-8 leading-snug animate-fade-in">
            Revolutionizing Corporate
            <span className="block bg-gradient-to-r from-accent via-accent-light to-white bg-clip-text text-transparent mt-1">
              Procurement
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-10 max-w-2xl sm:max-w-4xl mx-auto text-white/90 font-medium animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Get the best vendor prices, faster turnaround, and complete transparency—without weeks of negotiations.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center items-center mb-8 sm:mb-16 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              size="lg"
              className="border-2 border-white/40 text-white bg-white/5 w-full sm:w-auto px-5 sm:px-8 md:px-10 py-3 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl"
            >
              Get Started – Try a Pilot Project
              <ArrowRight className="ml-2 sm:ml-3 h-4 sm:h-5 w-4 sm:w-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto px-5 sm:px-8 md:px-10 py-3 max-sm:mt-3 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg font-semibold rounded-xl border-2 border-white/40 text-white bg-white/5 hover:bg-white/15 hover:border-white/60 backdrop-blur-sm transition-elegant"
            >
              <Play className="mr-2 sm:mr-3 h-4 sm:h-5 w-4 sm:w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Executive Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-12 pt-10 sm:pt-16 border-t border-white/20 mb-6 sm:mb-10">
            <div className="text-center group">
              <div className="text-3xl sm:text-5xl font-bold text-accent mb-2 sm:mb-3 group-hover:scale-105 transition-elegant">
                48h
              </div>
              <div className="text-white/80 text-sm sm:text-base font-medium">
                Turnaround Guarantee
              </div>
            </div>
            <div className="text-center group">
              <div className="text-3xl sm:text-5xl font-bold text-accent mb-2 sm:mb-3 group-hover:scale-105 transition-elegant">
                30%
              </div>
              <div className="text-white/80 text-sm sm:text-base font-medium">
                Average Cost Savings
              </div>
            </div>
            <div className="text-center group col-span-2 sm:col-span-1">
              <div className="text-3xl sm:text-5xl font-bold text-accent mb-2 sm:mb-3 group-hover:scale-105 transition-elegant">
                1000+
              </div>
              <div className="text-white/80 text-sm sm:text-base font-medium">
                Certified Vendors
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
