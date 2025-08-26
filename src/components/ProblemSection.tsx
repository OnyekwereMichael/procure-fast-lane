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
    <section className="section-padding bg-gradient-subtle animate-fade-in">
      <div className="container-custom">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-destructive/10 rounded-full mb-6">
            <AlertCircle className="h-4 w-4 text-destructive mr-2" />
            <span className="text-destructive font-medium">Critical Business Challenges</span>
          </div>
          <h2 className="section-title text-foreground mb-6">
            The Corporate Procurement 
            <span className="text-gradient-primary block">Challenge</span>
          </h2>
          <p className="subtitle-text max-w-4xl mx-auto">
            Traditional procurement processes are broken. Here's what's costing your business time and money.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div key={index} className="bg-card border border-border rounded-3xl p-8 shadow-lg hover:shadow-xl transition-elegant group">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-2xl bg-destructive/10 flex items-center justify-center mb-6 group-hover:bg-destructive/20 transition-elegant">
                    <Icon className="h-10 w-10 text-destructive" />
                  </div>
                  <h3 className="card-title text-foreground mb-4">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center">
          <div className="inline-flex items-center px-8 py-4 bg-destructive/10 rounded-2xl border border-destructive/20">
            <AlertCircle className="h-6 w-6 text-destructive mr-3" />
            <span className="text-destructive font-semibold text-lg">
              These inefficiencies cost businesses an average of 15-25% in unnecessary procurement expenses
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;