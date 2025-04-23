
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 pb-16">
      <div className="container-custom">
        <div className="max-w-3xl mb-12 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Software Engineer <span className="text-highlight">crafting</span> exceptional digital experiences
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
            I build innovative solutions that blend clean code with stunning design, 
            turning complex problems into elegant user experiences.
          </p>
          <a 
            href="#work" 
            className="inline-flex items-center gap-2 text-lg px-6 py-3 bg-highlight text-white rounded-md hover:bg-highlight/80 transition-colors"
          >
            View Work <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
