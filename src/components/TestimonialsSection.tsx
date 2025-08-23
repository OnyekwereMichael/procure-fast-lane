import { Quote, Star, Building2, Users, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "We saved 28% in just our first project. The process was seamless and the vendor quality exceeded our expectations.",
      author: "Sarah Johnson",
      title: "Head of Procurement",
      company: "TechCorp Industries",
      logo: "TC",
      savings: "28%",
      timeframe: "First project"
    },
    {
      quote: "The 48-hour turnaround is a game-changer. What used to take us 6 weeks now happens in 2 days.",
      author: "Michael Chen",
      title: "Supply Chain Director",
      company: "Global Manufacturing Co.",
      logo: "GM",
      savings: "35%",
      timeframe: "Q1 2024"
    },
    {
      quote: "Their vendor verification process gives us complete confidence. Zero quality issues in 12 months.",
      author: "Emma Rodriguez",
      title: "Chief Procurement Officer",
      company: "Enterprise Solutions Ltd.",
      logo: "ES",
      savings: "22%",
      timeframe: "Annual review"
    }
  ];

  const companies = [
    { name: "TechCorp", logo: "TC" },
    { name: "GlobalMfg", logo: "GM" },
    { name: "Enterprise", logo: "ES" },
    { name: "Innovation", logo: "IN" },
    { name: "Systems", logo: "SY" },
    { name: "Solutions", logo: "SO" }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-secondary text-secondary-foreground">
            <Award className="h-4 w-4 mr-2" />
            Client Success Stories
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by Leading 
            <span className="text-gradient-primary">Enterprises</span>
          </h2>
          <p className="subtitle-text max-w-3xl mx-auto">
            See how companies across industries are transforming their procurement processes and achieving measurable results.
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="feature-card">
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-warning fill-current" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-muted-foreground/30 mb-4" />
                <p className="text-foreground leading-relaxed text-lg mb-6">
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div className="border-t border-border pt-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold">
                    {testimonial.logo}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{testimonial.author}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent">{testimonial.savings}</div>
                      <div className="text-xs text-muted-foreground">Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-medium text-muted-foreground">{testimonial.timeframe}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Company Logos */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-foreground mb-8">
            Trusted by 500+ enterprises worldwide
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {companies.map((company, index) => (
              <div key={index} className="flex items-center justify-center">
                <div className="w-16 h-16 rounded-lg bg-muted flex items-center justify-center">
                  <span className="text-2xl font-bold text-muted-foreground">
                    {company.logo}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="flex items-center justify-center space-x-2">
            <Building2 className="h-6 w-6 text-primary" />
            <div>
              <div className="text-2xl font-bold text-foreground">500+</div>
              <div className="text-sm text-muted-foreground">Enterprise Clients</div>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Users className="h-6 w-6 text-primary" />
            <div>
              <div className="text-2xl font-bold text-foreground">10,000+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Award className="h-6 w-6 text-primary" />
            <div>
              <div className="text-2xl font-bold text-foreground">98.7%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Star className="h-6 w-6 text-primary" />
            <div>
              <div className="text-2xl font-bold text-foreground">4.9/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;