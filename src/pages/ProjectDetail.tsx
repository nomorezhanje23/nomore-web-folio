
import { useParams, Link } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ArrowLeft, ArrowRight } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();
  
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A cutting-edge online shopping experience built with modern technologies. This platform offers a seamless shopping experience with features like real-time inventory management, secure payment processing, and responsive design for all devices.",
      fullDescription: "This e-commerce platform revolutionizes online shopping by combining intuitive design with powerful functionality. The platform includes features such as real-time inventory tracking, secure payment processing through Stripe, user authentication, and a responsive design that works flawlessly across all devices. The admin dashboard provides comprehensive analytics and inventory management tools.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      tags: ["React", "Node.js", "MongoDB", "AWS"],
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Redux", "Express", "Stripe API", "JWT Authentication"],
      link: "#"
    },
    {
      id: 2,
      title: "Financial Dashboard",
      description: "Data visualization tool for financial analytics.",
      fullDescription: "A comprehensive financial analytics dashboard that transforms complex data into actionable insights. Features include real-time market data integration, customizable chart widgets, portfolio tracking, and automated reporting systems. The platform uses advanced data visualization techniques to present financial information in an intuitive and accessible manner.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      tags: ["TypeScript", "Next.js", "D3.js", "PostgreSQL"],
      technologies: ["TypeScript", "Next.js", "D3.js", "PostgreSQL", "TailwindCSS", "React Query", "REST APIs"],
      link: "https://dashboard-nextjs-brown-theta.vercel.app/"
    },
    {
      id: 3,
      title: "Social Media App",
      description: "Connect and share with friends and communities",
      fullDescription: "A modern social media platform that prioritizes user engagement and community building. The app features real-time messaging, media sharing, community forums, and personalized content feeds. Advanced features include AI-powered content moderation, custom emoji support, and seamless mobile integration.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      tags: ["React Native", "Firebase", "GraphQL", "Redux"],
      technologies: ["React Native", "Firebase", "GraphQL", "Redux", "WebSocket", "Push Notifications", "Cloud Functions"],
      link: "#"
    },
    {
      id: 4,
      title: "AI Content Generator",
      description: "Machine learning powered content creation tool",
      fullDescription: "An innovative AI-powered platform that assists in content creation across multiple formats. The tool leverages advanced machine learning algorithms to generate high-quality, contextually relevant content. Features include style customization, tone adjustment, and multi-language support.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      tags: ["Python", "TensorFlow", "Flask", "React"],
      technologies: ["Python", "TensorFlow", "Flask", "React", "OpenAI API", "Docker", "Redis"],
      link: "#"
    }
  ];

  const project = projects.find(p => p.id === Number(id));
  if (!project) return <div>Project not found</div>;

  const currentIndex = projects.findIndex(p => p.id === Number(id));
  const prevProject = projects[currentIndex - 1];
  const nextProject = projects[currentIndex + 1];

  return (
    <div className="min-h-screen bg-dark text-white">
      <Header />
      <section className="pt-24 pb-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-[400px] object-cover rounded-lg shadow-xl mb-8" 
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-white/80 mb-8">{project.fullDescription}</p>
            
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/10 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-highlight text-white rounded-md hover:bg-highlight/80 transition-colors mb-12"
            >
              View Live Project
            </a>

            <div className="flex justify-between items-center border-t border-white/10 pt-8">
              {prevProject ? (
                <Link 
                  to={`/project/${prevProject.id}`}
                  className="flex items-center gap-2 hover:text-highlight transition-colors"
                >
                  <ArrowLeft size={20} />
                  <span>Previous Project</span>
                </Link>
              ) : <div />}
              
              {nextProject && (
                <Link 
                  to={`/project/${nextProject.id}`}
                  className="flex items-center gap-2 hover:text-highlight transition-colors"
                >
                  <span>Next Project</span>
                  <ArrowRight size={20} />
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
