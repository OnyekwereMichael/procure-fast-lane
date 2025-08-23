import { Badge } from "@/components/ui/badge";
import { 
  Globe, 
  Zap, 
  Clock, 
  Brain, 
  BarChart3,
  CheckCircle,
  Sparkles
} from "lucide-react";

const SolutionSection = () => {
  const solutions = [
    {
      icon: Globe,
      title: "Global Vendor Network",
      description: "Pre-vetted, compliance-checked suppliers from around the world.",
      features: ["Verified credentials", "Quality assessments", "Financial stability checks"]
    },
    {
      icon: Zap,
      title: "Automated Negotiation Engine",
      description: "Multiple vendor negotiations running in parallel automatically.",
      features: ["AI-powered negotiations", "Real-time bidding", "Optimal price discovery"]
    },
    {
      icon: Clock,
      title: "48-Hour Turnaround",
      description: "Receive 3–5 best quotes within 48 hours guaranteed.",
      features: ["Fast response times", "Priority processing", "Instant notifications"]
    },
    {
      icon: Brain,
      title: "AI Market Intelligence",
      description: "Benchmark pricing using global market data and trends.",
      features: ["Price predictions", "Market analysis", "Cost optimization"]
    },
    {
      icon: BarChart3,
      title: "Transparency Dashboard",
      description: "Track negotiations, savings, and vendor credibility in real-time.",
      features: ["Live tracking", "Performance metrics", "Detailed analytics"]
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-primary text-primary-foreground">
            <Sparkles className="h-4 w-4 mr-2" />
            Your Procurement Co-Pilot
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            The Complete Procurement 
            <span className="text-gradient-primary block">Solution</span>
          </h2>
          <p className="subtitle-text max-w-3xl mx-auto">
            Transform your procurement process with AI-powered automation, global vendor networks, and guaranteed results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div key={index} className="feature-card group">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:shadow-glow transition-smooth">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {solution.description}
                  </p>
                </div>
                
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-secondary rounded-xl text-white">
            <Sparkles className="h-6 w-6 mr-3" />
            <div className="text-left">
              <div className="font-semibold text-lg">First-of-its-kind Pricing Engine</div>
              <div className="text-secondary-foreground/80">Paste a product URL → Get instant price estimates</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;