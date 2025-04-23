
import Header from "../components/Header";
import Footer from "../components/Footer";

const VoluntaryWork = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-8">Voluntary Work</h1>
          
          <div className="max-w-3xl mx-auto bg-dark-accent p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Full-Time Missionary</h2>
            <p className="text-lg text-white/80 mb-2">The Church of Jesus Christ of Latter-day Saints - Kinshasa, DRC</p>
            
            <ul className="list-disc pl-6 space-y-3 text-white/80 mt-4">
              <li>Led and mentored a team of volunteers, improving leadership and communication skills.</li>
              <li>Used digital tools to reach and engage diverse audiences.</li>
              <li>Became fluent in French, making me bilingual (English & French).</li>
              <li>Organized and conducted community service projects.</li>
              <li>Developed strong problem-solving and adaptability skills in a multicultural environment.</li>
              <li>Facilitated educational workshops and training sessions.</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VoluntaryWork;
