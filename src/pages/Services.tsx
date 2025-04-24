
import Header from "../components/Header";
import Footer from "../components/Footer";

const Services = () => {
  const services = [
    {
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces using React, TypeScript, and modern CSS frameworks.",
    },
    {
      title: "Backend Integration",
      description: "Connecting frontend applications with robust backend services and APIs.",
    },
    {
      title: "Web Application Development",
      description: "Creating full-stack web applications with modern technologies and best practices.",
    },
    {
      title: "Technical Consultation",
      description: "Providing expert advice on technology stack selection and architecture design.",
    },
    {
      title: "Code Review & Optimization",
      description: "Reviewing codebases for quality and performance improvements.",
    }
  ];

  return (
    <div className="min-h-screen bg-dark text-white">
      <Header />
      <section className="pt-24 pb-16 bg-dark-accent">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-12">Services</h1>
            <div className="grid gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-dark/50 p-6 rounded-lg border border-white/10">
                  <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
                  <p className="text-white/80">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
