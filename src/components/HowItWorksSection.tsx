import { 
  Upload, 
  Brain, 
  MessageSquare, 
  Clock, 
  CheckCircle2 
} from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      icon: Upload,
      title: "Post Your Requirement",
      description: "Upload specifications or simply paste a product URL to get started.",
      detail: "Our platform accepts various formats including RFQs, product links, or detailed specifications."
    },
    {
      number: 2,
      icon: Brain,
      title: "AI Price Suggestion",
      description: "Get instant preliminary pricing estimates powered by market intelligence.",
      detail: "Our AI analyzes millions of data points to provide accurate price ranges within seconds."
    },
    {
      number: 3,
      icon: MessageSquare,
      title: "Automated Negotiations",
      description: "Our system handles negotiations with multiple pre-vetted vendors simultaneously.",
      detail: "No more back-and-forth emails. Our AI manages the entire negotiation process for you."
    },
    {
      number: 4,
      icon: Clock,
      title: "48-Hour Results",
      description: "Receive 3-5 best vendor quotes with full transparency and recommendations.",
      detail: "Complete vendor profiles, pricing breakdowns, and delivery timelines included."
    },
    {
      number: 5,
      icon: CheckCircle2,
      title: "Finalize & Execute",
      description: "Choose your preferred supplier and proceed to execution with confidence.",
      detail: "Seamless handoff with contract management and performance tracking included."
    }
  ];

  return (
    <section className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How It 
            <span className="text-gradient-primary">Works</span>
          </h2>
          <p className="subtitle-text max-w-3xl mx-auto">
            From requirement to supplier selection in just 5 simple steps. Our automated process saves you weeks of work.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;
            
            return (
              <div key={index} className="relative">
                <div className="flex items-start space-x-6 pb-12">
                  {/* Step Number & Icon */}
                  <div className="flex-shrink-0 relative">
                    <div className="step-number shadow-lg">
                      {step.number}
                    </div>
                    <div className="mt-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    
                    {/* Connecting Line */}
                    {!isLast && (
                      <div className="absolute top-20 left-6 w-px h-16 bg-gradient-to-b from-primary to-primary/20"></div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pt-3">
                    <h3 className="text-2xl font-semibold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-3 leading-relaxed">
                      {step.description}
                    </p>
                    <p className="text-sm text-muted-foreground/80 leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-accent/10 rounded-full">
            <Clock className="h-5 w-5 text-accent mr-2" />
            <span className="text-accent font-medium">
              Average time from posting to final selection: 2.5 days
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;