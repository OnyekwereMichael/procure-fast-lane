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
      color: "bg-accent"
    },
    {
      icon: Shield,
      title: "Verified Vendor Partners",
      description: "Comprehensive vetting process for national and regional suppliers.",
      highlight: "100% compliance checked",
      color: "bg-primary"
    },
    {
      icon: TrendingUp,
      title: "Performance-Based Model",
      description: "We only succeed when you save money. Aligned incentives guaranteed.",
      highlight: "Pay for results, not promises",
      color: "bg-primary-light"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-primary text-white rounded-full mb-8 shadow-lg">
            <Award className="h-5 w-5 mr-2" />
            <span className="font-semibold">Key Differentiators</span>
          </div>
          <h2 className="section-title text-foreground mb-6">
            Why Choose 
            <span className="text-gradient-primary"> Our Platform</span>
          </h2>
          <p className="subtitle-text max-w-4xl mx-auto">
            We're not just another vendor marketplace. We're your strategic procurement partner with industry-first innovations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-card border border-border rounded-3xl p-8 shadow-lg hover:shadow-xl transition-elegant group">
                <div className="flex items-start space-x-8">
                  <div className="flex-shrink-0">
                    <div className={`w-20 h-20 rounded-2xl ${item.color} flex items-center justify-center group-hover:shadow-glow transition-elegant shadow-lg`}>
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="card-title text-foreground mb-4">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {item.description}
                    </p>
                    <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-xl border border-accent/20">
                      <Target className="h-5 w-5 text-accent mr-2" />
                      <span className="text-accent font-semibold">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-10 bg-gradient-primary rounded-3xl text-white shadow-xl">
            <div className="flex items-center mb-6">
              <Zap className="h-10 w-10 mr-4" />
              <h3 className="text-3xl font-bold">Zero Risk Guarantee</h3>
            </div>
            <p className="text-primary-foreground/90 leading-relaxed text-lg">
              If we don't save you money or meet our turnaround commitment, you don't pay. That's our promise.
            </p>
          </div>
          
          <div className="p-10 bg-accent rounded-3xl text-white shadow-xl">
            <div className="flex items-center mb-6">
              <Shield className="h-10 w-10 mr-4" />
              <h3 className="text-3xl font-bold">Compliance First</h3>
            </div>
            <p className="text-accent-foreground/90 leading-relaxed text-lg">
              Every vendor passes our 47-point compliance check including financial stability, quality certifications, and legal verification.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorsSection;