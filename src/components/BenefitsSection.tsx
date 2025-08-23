import { 
  DollarSign, 
  Zap, 
  Shield, 
  BarChart3, 
  Users,
  CheckCircle,
  TrendingDown
} from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "20–30% Cost Savings",
      description: "Proven reduction in procurement costs through optimized vendor selection and negotiation.",
      metric: "Average savings across 500+ projects"
    },
    {
      icon: Zap,
      title: "50% Faster Procurement Cycles",
      description: "Cut procurement time from weeks to days with automated processes and parallel negotiations.",
      metric: "From 4-6 weeks to 2-3 days average"
    },
    {
      icon: Shield,
      title: "Zero Vendor Fraud Risk",
      description: "Complete vendor verification and compliance checking eliminates fraud and quality issues.",
      metric: "100% vendor verification rate"
    },
    {
      icon: BarChart3,
      title: "Transparent Savings Dashboard",
      description: "Real-time visibility into savings, vendor performance, and procurement metrics.",
      metric: "Live tracking and reporting"
    },
    {
      icon: Users,
      title: "Reduced Procurement Workload",
      description: "Free up your procurement team to focus on strategic initiatives instead of vendor management.",
      metric: "75% reduction in manual tasks"
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Measurable Corporate 
            <span className="text-gradient-primary">Benefits</span>
          </h2>
          <p className="subtitle-text max-w-3xl mx-auto">
            Real results that impact your bottom line. Here's what our clients achieve within the first 90 days.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="feature-card group text-center">
                <div className="mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-smooth">
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="flex items-center justify-center mb-3">
                    <CheckCircle className="h-6 w-6 text-accent mr-2" />
                    <h3 className="text-2xl font-bold text-foreground">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {benefit.description}
                  </p>
                  <div className="inline-flex items-center px-3 py-1 bg-primary/10 rounded-full">
                    <span className="text-primary font-medium text-sm">
                      {benefit.metric}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* ROI Showcase */}
        <div className="bg-gradient-primary rounded-2xl p-8 lg:p-12 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              Average ROI in First Quarter
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-6xl font-bold text-accent-light mb-2">285%</div>
                <div className="text-primary-foreground/80">Return on Investment</div>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold text-accent-light mb-2">$2.3M</div>
                <div className="text-primary-foreground/80">Average Annual Savings</div>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold text-accent-light mb-2">3.2x</div>
                <div className="text-primary-foreground/80">Productivity Increase</div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <TrendingDown className="h-6 w-6 mr-2" />
              <span className="text-lg font-medium">
                Based on analysis of 500+ enterprise implementations
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;