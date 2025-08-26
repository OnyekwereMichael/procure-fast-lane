import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import DifferentiatorsSection from "@/components/DifferentiatorsSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <div id="problem"><ProblemSection /></div>
      <div id="solution"><SolutionSection /></div>
      <div id="how-it-works"><HowItWorksSection /></div>
      <DifferentiatorsSection />
      <div id="benefits"><BenefitsSection /></div>
      <div id="testimonials"><TestimonialsSection /></div>
      <CtaSection />
      <Footer />
    </main>
  );
};

export default Index;
