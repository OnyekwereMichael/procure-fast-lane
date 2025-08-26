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
    <section className="section-padding bg-gradient-subtle animate-fade-in">
      <div className="container-custom">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-primary/10 rounded-full mb-8">
            <Clock className="h-5 w-5 text-primary mr-2" />
            <span className="text-primary font-semibold">Streamlined Process</span>
          </div>
          <h2 className="section-title text-foreground mb-6">
            How It 
            <span className="text-gradient-primary"> Works</span>
          </h2>
          <p className="subtitle-text max-w-4xl mx-auto">
            From requirement to supplier selection in just 5 simple steps. Our automated process saves you weeks of work.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
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