import { Quote, Star, Building2, Users, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { testimonials } from "@/lib/constants/dummy";

const TestimonialsSection = () => {
  

  const companies = [
    { name: "TechCorp", logo: "TC" },
    { name: "GlobalMfg", logo: "GM" },
    { name: "Enterprise", logo: "ES" },
    { name: "Innovation", logo: "IN" },
    { name: "Systems", logo: "SY" },
    { name: "Solutions", logo: "SO" }
  ];

  return (
    <section className="section-padding bg-background animate-fade-in">
      <div className="container-custom">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-primary text-white rounded-full mb-8 shadow-lg">
            <Award className="h-5 w-5 mr-2" />
            <span className="font-semibold">Client Success Stories</span>
          </div>
          <h2 className="section-title text-foreground mb-6">
            Trusted by Leading 
            <span className="text-gradient-primary"> Enterprises</span>
          </h2>
          <p className="subtitle-text max-w-4xl mx-auto">
            See how companies across industries are transforming their procurement processes and achieving measurable results.
          </p>
        </div>
        
        {/* Executive Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card border border-border rounded-3xl p-8 shadow-lg hover:shadow-xl transition-elegant">
              <div className="mb-8">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-accent fill-current" />
                  ))}
                </div>
                <Quote className="h-12 w-12 text-accent/20 mb-6" />
                <p className="text-foreground leading-relaxed text-lg font-medium mb-6">
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div className="border-t border-border pt-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {testimonial.logo}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-foreground text-lg">{testimonial.author}</h4>
                    <p className="text-muted-foreground font-medium">{testimonial.title}</p>
                    <p className="text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="bg-accent/10 rounded-xl p-4 flex items-center justify-between">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent">{testimonial.savings}</div>
                    <div className="text-muted-foreground font-medium">Cost Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-foreground">{testimonial.timeframe}</div>
                    <div className="text-muted-foreground">Achievement</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Enterprise Logos */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-10">
            Trusted by 500+ enterprises worldwide
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {companies.map((company, index) => (
              <div key={index} className="flex items-center justify-center group">
                <div className="w-20 h-20 rounded-2xl bg-secondary border border-border flex items-center justify-center group-hover:shadow-lg transition-elegant">
                  <span className="text-2xl font-bold text-foreground">
                    {company.logo}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Executive Performance Metrics */}
        <div className="bg-gradient-subtle rounded-3xl p-12 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <Building2 className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-elegant" />
              <div className="text-4xl font-bold text-foreground mb-2">500+</div>
              <div className="text-muted-foreground font-medium">Enterprise Clients</div>
            </div>
            <div className="group">
              <Users className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-elegant" />
              <div className="text-4xl font-bold text-foreground mb-2">10,000+</div>
              <div className="text-muted-foreground font-medium">Projects Completed</div>
            </div>
            <div className="group">
              <Award className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-elegant" />
              <div className="text-4xl font-bold text-foreground mb-2">98.7%</div>
              <div className="text-muted-foreground font-medium">Client Satisfaction</div>
            </div>
            <div className="group">
              <Star className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-elegant" />
              <div className="text-4xl font-bold text-foreground mb-2">4.9/5</div>
              <div className="text-muted-foreground font-medium">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;