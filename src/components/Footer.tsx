import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Facebook,
  ArrowRight,
  Building2
} from "lucide-react";

const Footer = () => {
  const footerLinks = {
    platform: [
      { name: "How It Works", href: "#how-it-works" },
      { name: "Vendor Network", href: "#vendors" },
      { name: "Pricing", href: "#pricing" },
      { name: "API Documentation", href: "#api" }
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "Press Kit", href: "#press" },
      { name: "Contact", href: "#contact" }
    ],
    resources: [
      { name: "Blog", href: "#blog" },
      { name: "Case Studies", href: "#case-studies" },
      { name: "Procurement Guide", href: "#guide" },
      { name: "Webinars", href: "#webinars" }
    ],
    legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Security", href: "#security" },
      { name: "Compliance", href: "#compliance" }
    ]
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container-custom py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-gradient-secondary flex items-center justify-center shadow-lg">
                <Building2 className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-3xl font-bold">ProcurAI</h3>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-8 text-lg">
              Revolutionizing corporate procurement through AI-powered vendor negotiations and market intelligence.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-accent" />
                <span className="text-primary-foreground/90 font-medium">hello@procurai.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-accent" />
                <span className="text-primary-foreground/90 font-medium">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-accent" />
                <span className="text-primary-foreground/90 font-medium">San Francisco, CA</span>
              </div>
            </div>
          </div>
          
          {/* Links Sections */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h4 className="font-bold text-xl mb-6">Platform</h4>
              <ul className="space-y-4">
                {footerLinks.platform.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-primary-foreground/70 hover:text-accent transition-elegant font-medium text-lg"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-xl mb-6">Company</h4>
              <ul className="space-y-4">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-primary-foreground/70 hover:text-accent transition-elegant font-medium text-lg"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-xl mb-6">Resources</h4>
              <ul className="space-y-4">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-primary-foreground/70 hover:text-accent transition-elegant font-medium text-lg"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-xl mb-6">Legal</h4>
              <ul className="space-y-4">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-primary-foreground/70 hover:text-accent transition-elegant font-medium text-lg"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Executive Newsletter Signup */}
        <div className="mt-20 pt-16 border-t border-primary-foreground/20">
          <div className="max-w-3xl mx-auto text-center">
            <h4 className="text-3xl font-bold mb-6">Stay Updated</h4>
            <p className="text-primary-foreground/80 mb-8 text-lg">
              Get the latest procurement insights and platform updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your corporate email"
                className="flex-1 px-6 py-4 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent text-lg"
              />
              <Button className="bg-accent hover:bg-accent-light text-foreground px-8 py-4 rounded-xl font-semibold text-lg">
                Subscribe
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20 bg-primary/90">
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-primary-foreground/80 text-lg">
              © 2024 ProcurAI. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-elegant">
                <Linkedin className="h-7 w-7" />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-elegant">
                <Twitter className="h-7 w-7" />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-elegant">
                <Facebook className="h-7 w-7" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;