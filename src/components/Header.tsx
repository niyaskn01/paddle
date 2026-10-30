import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 👈 mobile menu state

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
      setIsMenuOpen(false); // close menu after click
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary/90 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 text-2xl font-bold text-primary-foreground">
            <img
              src={logo}
              alt="PaddleX Adventures Logo"
              className="h-16 w-16 object-contain"
            />
            <span className="hidden md:inline">PaddleX Adventures</span>
          </div>

          {/* Desktop Nav */}
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

          {/* Book Now + Hamburger */}
          <div className="flex justify-center items-center  space-x-3">
            <Button
              variant="default"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
              onClick={() => scrollToSection("contact")}
            >
              Book Now
            </Button>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden text-primary-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-3 bg-primary/95 p-4 rounded-lg shadow">
            <button
              onClick={() => scrollToSection("home")}
              className="text-primary-foreground hover:text-accent transition-colors text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-primary-foreground hover:text-accent transition-colors text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-primary-foreground hover:text-accent transition-colors text-left"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-primary-foreground hover:text-accent transition-colors text-left"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-primary-foreground hover:text-accent transition-colors text-left"
            >
              Contact
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
