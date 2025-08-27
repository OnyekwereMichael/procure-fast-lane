import { Badge } from "@/components/ui/badge";
import { differentiators } from "@/lib/constants/dummy";
import { 
  Zap, 
  Shield, 
  Target,
  Award
} from "lucide-react";

const DifferentiatorsSection = () => {
  return (
    <section className=" bg-background">
      <div className="container-custom">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-primary text-white rounded-full mb-8 shadow-lg">
            <Award className="h-5 w-5 mr-2" />
            <span className="font-semibold">Key Differentiators</span>
          </div>
          <h2 className="section-title text-foreground mb-6">
            Why Choose  Our Platform
            {/* <span className="text-gradient-primary"></span> */}
          </h2>
          <p className="subtitle-text max-w-2xl mx-auto">
            We're not just another vendor marketplace. We're your strategic procurement partner with industry-first innovations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-card border border-border rounded-3xl p-8 shadow-lg hover:shadow-xl transition-elegant group max-sm:p-6">
                <div className="flex items-start space-x-8">
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 max-sm:w-14 max-sm:h-14 rounded-2xl ${item.color} flex items-center justify-center group-hover:shadow-glow transition-elegant shadow-lg`}>
                      <Icon className="h-8 w-8 max-sm:w-6 max-sm:h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="card-title text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-5 max-sm:text-[15px]">
                      {item.description}
                    </p>
                    <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-xl border border-accent/20">
                      <Target className="h-5 w-5 text-accent mr-2" />
                      <span className="text-accent text-[15px] font-medium max-sm:text-[14px]">
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
          <div className="p-10 bg-gradient-primary rounded-xl text-white shadow-xl">
            <div className="flex items-center mb-6">
              <Zap className="h-8 w-8 mr-4" />
              <h3 className="text-2xl font-bold">Zero Risk Guarantee</h3>
            </div>
            <p className="text-primary-foreground/90 leading-relaxed text-md">
              If we don't save you money or meet our turnaround commitment, you don't pay. That's our promise.
            </p>
          </div>
          
          <div className="p-10 bg-accent rounded-xl text-accent-foreground/90 shadow-xl">
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 mr-4" />
              <h3 className="text-2xl font-bold">Compliance First</h3>
            </div>
            <p className="text-accent-foreground/90 leading-relaxed text-md">
              Every vendor passes our 47-point compliance check including financial stability, quality certifications, and legal verification.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorsSection;