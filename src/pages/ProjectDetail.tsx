
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { projects } from "../components/FeaturedWork";

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState<any>(null);
  const [nextProject, setNextProject] = useState<any>(null);
  const [prevProject, setPrevProject] = useState<any>(null);

  useEffect(() => {
    const currentIndex = projects.findIndex(p => p.id.toString() === id);
    if (currentIndex !== -1) {
      setProject(projects[currentIndex]);
      setPrevProject(currentIndex > 0 ? projects[currentIndex - 1] : null);
      setNextProject(currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null);
    }
  }, [id]);

  if (!project) return <div>Project not found</div>;

  return (
    <div className="min-h-screen bg-dark text-white">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-[400px] object-cover rounded-lg mb-8"
            />
            
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <p className="text-white/80 mb-8">{project.description}</p>
            
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag: string) => (
                  <span key={tag} className="px-3 py-1 bg-dark-accent rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="border-t border-white/10 pt-8 mt-12">
              <div className="flex justify-between items-center">
                {prevProject && (
                  <Link 
                    to={`/project/${prevProject.id}`}
                    className="flex items-center space-x-2 text-white/70 hover:text-highlight transition-colors"
                  >
                    <ChevronLeft size={20} />
                    <span>Previous Project</span>
                  </Link>
                )}
                
                {nextProject && (
                  <Link 
                    to={`/project/${nextProject.id}`}
                    className="flex items-center space-x-2 text-white/70 hover:text-highlight transition-colors ml-auto"
                  >
                    <span>Next Project</span>
                    <ChevronRight size={20} />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
