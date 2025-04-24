
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const Schedule = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Header />
      <section className="pt-24 pb-16 bg-dark-accent">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Schedule a Call</h1>
            <p className="text-white/80 mb-8">
              Let's discuss how I can help with your project. Fill out the form below and I'll get back to you shortly.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Schedule;
