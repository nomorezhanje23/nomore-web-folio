
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
            Hi, I'm Nomore — a Web Frontend Engineer based in Cape Town.
            With a strong foundation in front-end development and a passion for creating seamless user experiences,
            I specialize in crafting responsive, high-performance web applications using HTML, CSS, JavaScript, React, and Bootstrap.

            A graduate of ALX SE Africa and BYU-Idaho, I bring a unique blend of technical skill, 
            creative thinking, and a collaborative spirit to every project I work on. 
            My goal is to deliver digital solutions that are not only functional but also visually engaging and user-friendly.
            </p>
            <p className="text-white/80 leading-relaxed">
            When I’m not coding, you’ll find me hiking the trails around Cape Town, 
            experimenting with photography, or taking long drives to explore nature’s beauty. 
            I'm always open to new challenges, collaborations, and opportunities to build something exceptional.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
