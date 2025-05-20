
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle smooth scrolling to sections
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    // Close mobile menu if it's open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-dark/95 backdrop-blur-sm py-4 shadow-lg" : "bg-transparent py-6"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="text-xl font-bold tracking-tighter text-white">
          NOMORE ZHANJE
        </Link>

        {/* Mobile Menu */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="nav-link">Home</Link>
          <a href="#work" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection("work"); }}>Work</a>
          <a href="#about" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection("about"); }}>About</a>
          <a href="#contact" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}>Contact</a>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-dark/95 z-40 flex flex-col items-center justify-center md:hidden">
            <nav className="flex flex-col space-y-8 text-center">
              <Link to="/" className="text-xl nav-link" onClick={toggleMenu}>Home</Link>
              <a href="#work" className="text-xl nav-link" onClick={(e) => { e.preventDefault(); scrollToSection("work"); }}>Work</a>
              <a href="#about" className="text-xl nav-link" onClick={(e) => { e.preventDefault(); scrollToSection("about"); }}>About</a>
              <a href="#contact" className="text-xl nav-link" onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}>Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
