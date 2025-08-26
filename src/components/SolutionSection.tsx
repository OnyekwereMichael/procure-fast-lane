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
    <section className="section-padding bg-background animate-fade-in">
      <div className="container-custom">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-primary text-white rounded-full mb-8 shadow-lg">
            <Sparkles className="h-5 w-5 mr-2" />
            <span className="font-semibold">Your Procurement Co-Pilot</span>
          </div>
          <h2 className="section-title text-foreground mb-6">
            The Complete Procurement 
            <span className="text-gradient-primary block">Solution</span>
          </h2>
          <p className="subtitle-text max-w-4xl mx-auto">
            Transform your procurement process with AI-powered automation, global vendor networks, and guaranteed results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div key={index} className="bg-card border border-border rounded-3xl p-8 shadow-lg hover:shadow-xl transition-elegant group">
                <div className="mb-8">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:shadow-glow transition-elegant shadow-lg">
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="card-title text-foreground mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {solution.description}
                  </p>
                </div>
                
                <ul className="space-y-3">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-muted-foreground">
                      <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-20">
          <div className="inline-flex items-center px-10 py-6 bg-gradient-secondary rounded-2xl shadow-xl border border-border">
            <Sparkles className="h-8 w-8 mr-4 text-accent" />
            <div className="text-left">
              <div className="font-bold text-xl text-foreground">First-of-its-kind Pricing Engine</div>
              <div className="text-muted-foreground mt-1">Paste a product URL → Get instant price estimates</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;