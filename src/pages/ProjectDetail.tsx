
import { useParams, Link } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ArrowLeft, ArrowRight } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();
  
  const projects = [
    {
      id: 1,
      title: "Luxury Tours & Events Platform",
      description: "A bespoke travel experience platform showcasing the beauty of Cape Town",
      fullDescription: "LCTE - Journeys Unveiled is a premium travel experience platform that offers curated tours and exclusive events across Cape Town and its surrounding areas. The platform provides users with immersive virtual previews of destinations, seamless booking experiences, and personalized itinerary creation. Users can discover hidden gems of Cape Town, from wine tours in Stellenbosch to private yacht charters along the Atlantic Seaboard, all within an elegant, user-friendly interface. The platform also offers event planning services for corporate retreats, weddings, and special occasions, showcasing the natural beauty and cultural richness of the region.",
      image: "https://images.unsplash.com/photo-1606799955515-85468ee78c26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhcGUlMjB0b3dufGVufDB8fDB8fHww",
      tags: ["React", "Node.js", "MongoDB", "AWS"],
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Redux", "Express", "Payment Gateway Integration", "Google Maps API"],
      link: "https://preview--lcte-journeys-unveiled.lovable.app/"
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
      title: "Logistics Management System for Travel & Tours",
      description: "Complete logistics solution for travel agencies and tour operators",
      fullDescription: "Choix Voyage Logistics Hub is a comprehensive management system designed specifically for travel agencies and tour operators. This powerful platform streamlines operations by integrating itinerary planning, inventory management, vehicle tracking, and customer relationship management into one cohesive system. It features real-time fleet monitoring, automated scheduling for tours and transfers, dynamic pricing models, and comprehensive reporting dashboards. The system optimizes route planning to reduce operational costs while enhancing the customer experience with timely service delivery. Its user-friendly interface allows travel agencies to efficiently manage logistics across multiple destinations while maintaining quality service standards.",
      image: "https://images.unsplash.com/photo-1737404181140-1614a7709f0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bG9naXN0aWNzJTIwbWFuYWdlbWVudCUyMHN5c3RlbXxlbnwwfHwwfHx8MA%3D%3D",
      tags: ["React Native", "Firebase", "GraphQL", "Redux"],
      technologies: ["React", "Firebase", "GraphQL", "Redux", "Google Maps API", "Real-time Tracking", "Automated Scheduling", "Route Optimization"],
      link: "https://preview--choix-voyage-logistics-hub.lovable.app/"
    },
    {
      id: 4,
      title: "Youth Event Hub",
      description: "A dynamic platform connecting young people through community events and activities",
      fullDescription: "Youth Event Hub is a comprehensive community platform designed to bring young people together through organized events and activities. This vibrant platform serves as a central hub where youth can discover, create, and participate in various community events ranging from sports tournaments and creative workshops to volunteer opportunities and social gatherings. The application features an intuitive event calendar, user-friendly event creation tools, RSVP management, and community messaging features. Young people can easily find events that match their interests, connect with like-minded peers, and build meaningful relationships within their community. The platform also includes features for event organizers to manage registrations, send updates, and track engagement metrics, fostering a strong sense of community and belonging among youth participants.",
      image: "/lovable-uploads/daafd15f-0f74-4274-92da-e1e4522b8e59.png",
      tags: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
      technologies: ["React", "TypeScript", "Supabase", "Tailwind CSS", "Real-time Updates", "Event Management", "User Authentication", "Community Features"],
      link: "https://preview--bellville-stake-connect.lovable.app/"
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
