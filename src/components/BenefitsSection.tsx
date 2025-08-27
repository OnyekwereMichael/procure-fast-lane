import { benefits } from "@/lib/constants/dummy";
import { 
  BarChart3, 
  CheckCircle,
  TrendingDown
} from "lucide-react";

const BenefitsSection = () => {

  return (
    <section className="section-padding bg-gradient-subtle animate-fade-in">
      <div className="container-custom">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-accent/10 rounded-full mb-8">
            <BarChart3 className="h-5 w-5 text-accent mr-2" />
            <span className="text-accent font-semibold">Measurable Results</span>
          </div>
          <h2 className="section-title text-foreground mb-6">
            Measurable Corporate Benefits
            {/* <span className="text-gradient-primary"> </span> */}
          </h2>
          <p className="subtitle-text max-w-2xl mx-auto">
            Real results that impact your bottom line. Here's what our clients achieve within the first 90 days.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 mb-20">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="bg-card border border-border rounded-3xl p-8 shadow-lg hover:shadow-xl transition-elegant group text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:shadow-glow transition-elegant shadow-lg">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex items-center  mb-4">
                    <CheckCircle className="h-6 w-6 text-accent mr-3" />
                    <h3 className="card-title text-foreground">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {benefit.description}
                  </p>
                  <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-xl border border-primary/20">
                    <span className="text-primary font-semibold">
                      {benefit.metric}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Executive ROI Showcase */}
        <div className="bg-gradient-primary rounded-3xl p-12 lg:p-16 text-white text-center shadow-2xl">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-5xl lg:text-3xl font-bold mb-10">
              Average ROI in First Quarter
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10">
              <div className="text-center group">
                <div className="text-4xl font-bold text-accent mb-4 group-hover:scale-105 transition-elegant">285%</div>
                <div className="text-primary-foreground/90 text-lg font-medium">Return on Investment</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-accent mb-4 group-hover:scale-105 transition-elegant">$2.3M</div>
                <div className="text-primary-foreground/90 text-lg font-medium">Average Annual Savings</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-accent mb-4 group-hover:scale-105 transition-elegant">3.2x</div>
                <div className="text-primary-foreground/90 text-lg font-medium">Productivity Increase</div>
              </div>
            </div>
            <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-2xl py-4 px-8">
              <TrendingDown className="h-6 w-6 mr-3" />
              <span className="text-lg font-semibold">
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