
import Header from "../components/Header";
import Footer from "../components/Footer";

const VoluntaryWork = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Header />
      <section className="pt-24 pb-16 bg-dark-accent">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Voluntary Work</h1>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c" 
                  alt="Missionary Work"
                  className="rounded-lg shadow-xl w-full" 
                />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">Full-Time Missionary</h2>
                <h3 className="text-xl text-white/80 mb-6">The Church of Jesus Christ of Latter-day Saints - Kinshasa, DRC</h3>
                <ul className="space-y-4 text-white/80">
                  <li>• Led and mentored a team of volunteers, improving leadership and communication skills.</li>
                  <li>• Used digital tools to reach and engage diverse audiences.</li>
                  <li>• Became fluent in French, making me bilingual (English & French).</li>
                  <li>• Organized and conducted community service projects.</li>
                  <li>• Developed strong interpersonal skills through daily interactions with people from diverse backgrounds.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default VoluntaryWork;
