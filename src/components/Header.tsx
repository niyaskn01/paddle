import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import logo from "../assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-primary/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-2xl font-bold text-primary-foreground">
            <img
              src={logo}
              alt="PaddleX Adventures Logo"
              className="h-16 w-16 object-contain"
            />
            {/* Hide text on small screens, show from md up */}
            <span className="hidden md:inline">PaddleX Adventures</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-primary-foreground hover:text-accent transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-primary-foreground hover:text-accent transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-primary-foreground hover:text-accent transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-primary-foreground hover:text-accent transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-primary-foreground hover:text-accent transition-colors"
            >
              Contact
            </button>
          </div>

          <Button 
            variant="default" 
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
            onClick={() => scrollToSection("contact")}
          >
            Book Now
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;