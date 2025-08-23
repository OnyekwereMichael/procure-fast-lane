import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Shield, 
  Clock, 
  TrendingUp, 
  Target,
  Star,
  Award
} from "lucide-react";

const DifferentiatorsSection = () => {
  const differentiators = [
    {
      icon: Star,
      title: "First-of-its-kind Pricing Engine",
      description: "Revolutionary URL-to-price technology that provides instant estimates.",
      highlight: "Paste a link → Get estimated price",
      color: "bg-gradient-primary"
    },
    {
      icon: Clock,
      title: "48-Hour Turnaround Guarantee",
      description: "Industry-leading speed with legally binding turnaround commitments.",
      highlight: "Guaranteed delivery in 48h",
      color: "bg-gradient-secondary"
    },
    {
      icon: Shield,
      title: "Verified Vendor Partners",
      description: "Comprehensive vetting process for national and regional suppliers.",
      highlight: "100% compliance checked",
      color: "bg-accent"
    },
    {
      icon: TrendingUp,
      title: "Performance-Based Model",
      description: "We only succeed when you save money. Aligned incentives guaranteed.",
      highlight: "Pay for results, not promises",
      color: "bg-primary"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-primary text-primary-foreground">
            <Award className="h-4 w-4 mr-2" />
            Key Differentiators
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Choose 
            <span className="text-gradient-primary">Our Platform</span>
          </h2>
          <p className="subtitle-text max-w-3xl mx-auto">
            We're not just another vendor marketplace. We're your strategic procurement partner with industry-first innovations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="feature-card group">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 rounded-xl ${item.color} flex items-center justify-center group-hover:shadow-glow transition-smooth`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div className="inline-flex items-center px-3 py-1 bg-accent/10 rounded-full">
                      <Target className="h-4 w-4 text-accent mr-2" />
                      <span className="text-accent font-medium text-sm">
                        {item.highlight}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Special Callouts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 bg-gradient-primary rounded-xl text-white">
            <div className="flex items-center mb-4">
              <Zap className="h-8 w-8 mr-3" />
              <h3 className="text-2xl font-bold">Zero Risk Guarantee</h3>
            </div>
            <p className="text-primary-foreground/90 leading-relaxed">
              If we don't save you money or meet our turnaround commitment, you don't pay. That's our promise.
            </p>
          </div>
          
          <div className="p-8 bg-accent rounded-xl text-white">
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 mr-3" />
              <h3 className="text-2xl font-bold">Compliance First</h3>
            </div>
            <p className="text-accent-foreground/90 leading-relaxed">
              Every vendor passes our 47-point compliance check including financial stability, quality certifications, and legal verification.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorsSection;