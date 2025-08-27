import { Badge } from "@/components/ui/badge";
import { solutions } from "@/lib/constants/dummy";
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
  

  return (
    <section className=" bg-background animate-fade-in">
      <div className="container-custom">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-primary text-white rounded-full mb-8 shadow-lg">
            <Sparkles className="h-5 w-5 mr-2" />
            <span className="font-semibold">Your Procurement Co-Pilot</span>
          </div>
          <h2 className="section-title text-foreground mb-6">
            The Complete Procurement Solution
            {/* <span className="text-gradient-primary block"></span> */}
          </h2>
          <p className="subtitle-text max-w-2xl mx-auto">
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
        
        {/* <div className="text-center mt-20">
          <div className="inline-flex items-center px-10 py-6 bg-gradient-secondary rounded-2xl shadow-xl border border-border">
            <Sparkles className="h-8 w-8 mr-4 text-accent" />
            <div className="text-left">
              <div className="font-bold text-xl text-foreground">First-of-its-kind Pricing Engine</div>
              <div className="text-muted-foreground mt-1">Paste a product URL → Get instant price estimates</div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default SolutionSection;