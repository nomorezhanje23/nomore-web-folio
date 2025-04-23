
import { MapPin, Linkedin, Twitter, Instagram, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-dark-accent border-t border-white/10 py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Location */}
          <div>
            <div className="flex items-center mb-4 text-white">
              <MapPin size={20} className="mr-2 text-highlight" />
              <p className="font-medium">Based in Cape Town</p>
            </div>
            <p className="text-white/70">
              Working globally, inspired locally
            </p>
          </div>
          
          {/* Work Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Work</h3>
            <ul className="space-y-2">
              <li>
                <a href="#work" className="text-white/70 hover:text-highlight transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-highlight transition-colors">
                  Services
                </a>
              </li>
              <li>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-highlight transition-colors">
                  Case Studies
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:hello@example.com" className="text-white/70 hover:text-highlight transition-colors">
                  nomorezhanje100@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+27123456789" className="text-white/70 hover:text-highlight transition-colors">
                  +27 74 531 9940
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-highlight transition-colors">
                  Schedule a call
                </a>
              </li>
            </ul>
          </div>
          
          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="www.linkedin.com/in/nomore-zhanje" className="text-white/70 hover:text-highlight transition-colors p-2">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://github.com/nomorezhanje23/" className="text-white/70 hover:text-highlight transition-colors p-2">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Nomore Zhanje. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/50 text-sm hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/50 text-sm hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
