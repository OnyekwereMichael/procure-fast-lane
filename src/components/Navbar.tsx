import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 animate-fade-in ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}>
              ProcurAI
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#problem" className={`transition-colors duration-300 ${
                isScrolled ? 'text-muted-foreground hover:text-foreground' : 'text-white/80 hover:text-white'
              }`}>
                Problem
              </a>
              <a href="#solution" className={`transition-colors duration-300 ${
                isScrolled ? 'text-muted-foreground hover:text-foreground' : 'text-white/80 hover:text-white'
              }`}>
                Solution
              </a>
              <a href="#how-it-works" className={`transition-colors duration-300 ${
                isScrolled ? 'text-muted-foreground hover:text-foreground' : 'text-white/80 hover:text-white'
              }`}>
                How It Works
              </a>
              <a href="#benefits" className={`transition-colors duration-300 ${
                isScrolled ? 'text-muted-foreground hover:text-foreground' : 'text-white/80 hover:text-white'
              }`}>
                Benefits
              </a>
              <a href="#testimonials" className={`transition-colors duration-300 ${
                isScrolled ? 'text-muted-foreground hover:text-foreground' : 'text-white/80 hover:text-white'
              }`}>
                Testimonials
              </a>
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button className="btn-primary">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`focus:outline-none transition-colors duration-300 ${
                isScrolled ? 'text-muted-foreground hover:text-foreground' : 'text-white/80 hover:text-white'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-lg border-t border-border/50">
              <a
                href="#problem"
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-elegant"
                onClick={toggleMenu}
              >
                Problem
              </a>
              <a
                href="#solution"
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-elegant"
                onClick={toggleMenu}
              >
                Solution
              </a>
              <a
                href="#how-it-works"
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-elegant"
                onClick={toggleMenu}
              >
                How It Works
              </a>
              <a
                href="#benefits"
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-elegant"
                onClick={toggleMenu}
              >
                Benefits
              </a>
              <a
                href="#testimonials"
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-elegant"
                onClick={toggleMenu}
              >
                Testimonials
              </a>
              <div className="px-3 py-2">
                <Button className="btn-primary w-full" onClick={toggleMenu}>
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;