import { AlertCircle, Clock, DollarSign, FileX, ShieldX } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: ShieldX,
      title: "Fragmented Vendor Ecosystem",
      description: "Hard to verify credibility and compliance across multiple suppliers."
    },
    {
      icon: Clock,
      title: "Time-Consuming Negotiations",
      description: "Weeks of back-and-forth communications delay critical procurement."
    },
    {
      icon: DollarSign,
      title: "Lack of Market Intelligence",
      description: "No real-time pricing data leads to overspending and poor decisions."
    },
    {
      icon: AlertCircle,
      title: "Operational Bottlenecks",
      description: "Delays in procurement cycles create downstream operational issues."
    },
    {
      icon: FileX,
      title: "Limited Transparency",
      description: "Poor visibility into processes frustrates management and stakeholders."
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            The Corporate Procurement 
            <span className="text-gradient-primary block">Challenge</span>
          </h2>
          <p className="subtitle-text max-w-3xl mx-auto">
            Traditional procurement processes are broken. Here's what's costing your business time and money.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div key={index} className="feature-card group">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center group-hover:bg-destructive/20 transition-smooth">
                      <Icon className="h-6 w-6 text-destructive" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {problem.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-destructive/10 rounded-full">
            <AlertCircle className="h-5 w-5 text-destructive mr-2" />
            <span className="text-destructive font-medium">
              These inefficiencies cost businesses an average of 15-25% in unnecessary procurement expenses
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;