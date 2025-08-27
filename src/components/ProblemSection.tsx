import { problems } from "@/lib/constants/dummy";
import { AlertCircle } from "lucide-react";


const ProblemSection = () => {
  return (
    <section className="section-padding bg-gradient-subtle animate-fade-in">
      <div className="container-custom">
        <div className="text-center mb-20 max-sm:mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-destructive/10 rounded-full mb-6">
            <AlertCircle className="h-4 w-4 text-destructive mr-2" />
            <span className="text-destructive font-medium">Critical Business Challenges</span>
          </div>
          <h2 className="section-title text-foreground mb-6 max-sm:mb-4">
            The Corporate Procurement Challenge
            {/* <span className="text-gradient-primary block">Challenge</span> */}
          </h2>
          <p className="subtitle-text max-w-2xl mx-auto">
            Traditional procurement processes are broken. Here's what's costing your business time and money.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div key={index} className="bg-card border border-gray rounded-3xl p-8  hover:shadow-xl transition-elegant group">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-destructive/10 flex items-center justify-center mb-6 group-hover:bg-destructive/20 transition-elegant">
                    <Icon className="h-8 w-8 text-destructive" />
                  </div>
                  <h3 className="card-title text-foreground mb-4 max-sm:mb-3">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground text-[15px] leading-relaxed">
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
            <span className="text-destructive font-semibold text-lg max-sm:text-base">
              These inefficiencies cost businesses an average of 15-25% in unnecessary procurement expenses
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;