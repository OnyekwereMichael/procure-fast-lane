import { steps } from "@/lib/constants/dummy";
import { 
  Upload, 
  Brain, 
  MessageSquare, 
  Clock, 
  CheckCircle2 
} from "lucide-react";

const HowItWorksSection = () => {
  return (
    <section className="section-padding bg-gradient-subtle animate-fade-in">
      <div className="container-custom">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-primary/10 rounded-full mb-8">
            <Clock className="h-5 w-5 text-primary mr-2" />
            <span className="text-primary font-semibold">Streamlined Process</span>
          </div>
          <h2 className="section-title text-foreground mb-6">
         How It Works - Step by Step
          </h2>
          <p className="subtitle-text max-w-2xl mx-auto">
            From requirement to supplier selection in just 5 simple steps. Our automated process saves you weeks of work.
          </p>
        </div>
        
        <div className=" mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;
            
            return (
              <div key={index} className="relative group">
                <div className="flex items-start space-x-8 pb-16">
                  {/* Step Number & Icon */}
                  <div className="flex-shrink-0 relative">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-elegant">
                      <span className="text-2xl font-bold text-white">{step.number}</span>
                    </div>
                    <div className="mt-6 w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-elegant">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    
                    {/* Connecting Line */}
                    {!isLast && (
                      <div className="absolute top-24 left-10 w-px h-20 bg-gradient-to-b from-primary via-primary/50 to-primary/20"></div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pt-6 bg-card border border-border rounded-2xl p-8 shadow-lg group-hover:shadow-xl transition-elegant">
                    <h3 className="card-title text-foreground mb-4">
                      {step.title}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-4 leading-relaxed font-medium">
                      {step.description}
                    </p>
                    <p className="text-muted-foreground/80 leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-8 py-4 bg-accent/10 rounded-2xl border border-accent/20">
            <Clock className="h-6 w-6 text-accent mr-3" />
            <span className="text-accent font-bold text-lg">
              Average time from posting to final selection: 2.5 days
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;