
import Header from "../components/Header";
import Hero from "../components/Hero";
import TechReel from "../components/TechReel";
import FeaturedWork from "../components/FeaturedWork";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Header />
      <Hero />
      <TechReel />
      <FeaturedWork />
      <section id="about" className="section-padding bg-dark-accent">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <p className="text-white/80 mb-6 leading-relaxed">
              I'm a passionate software engineer based in Cape Town with over 5 years of experience creating innovative digital solutions. 
              Specializing in full-stack development, I combine technical expertise with a keen eye for design to build applications 
              that are both powerful and beautiful.
            </p>
            <p className="text-white/80 leading-relaxed">
              When I'm not coding, you'll find me exploring the mountains around Cape Town, 
              experimenting with photography, or contributing to open-source projects. 
              I'm always open to discussing new projects and opportunities to create something amazing together.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
