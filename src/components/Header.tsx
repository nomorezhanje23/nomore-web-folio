
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
          <Link to="/#work" className="nav-link">Work</Link>
          <Link to="/#about" className="nav-link">About</Link>
          <Link to="/#contact" className="nav-link">Contact</Link>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-dark/95 z-40 flex flex-col items-center justify-center md:hidden">
            <nav className="flex flex-col space-y-8 text-center">
              <Link to="/" className="text-xl nav-link" onClick={toggleMenu}>Home</Link>
              <Link to="/#work" className="text-xl nav-link" onClick={toggleMenu}>Work</Link>
              <Link to="/#about" className="text-xl nav-link" onClick={toggleMenu}>About</Link>
              <Link to="/#contact" className="text-xl nav-link" onClick={toggleMenu}>Contact</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
