
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";

const FeaturedWork = () => {
  const projects = [
    {
      id: 1,
      title: "Luxury Tours & Events Platform",
      description: "A bespoke travel experience platform showcasing the beauty of Cape Town",
      image: "https://images.unsplash.com/photo-1606799955515-85468ee78c26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhcGUlMjB0b3dufGVufDB8fDB8fHww",
      tags: ["React", "Node.js", "MongoDB", "AWS"],
      link: "https://preview--lcte-journeys-unveiled.lovable.app/"
    },
    {
      id: 2,
      title: "Financial Dashboard",
      description: "Data visualization tool for financial analytics. Username: user@nextmail.com & password: 123456",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      tags: ["TypeScript", "Next.js", "D3.js", "PostgreSQL"],
      link: "https://dashboard-nextjs-brown-theta.vercel.app/"
    },
    {
      id: 3,
      title: "Logistics Management System for Travel & Tours",
      description: "Complete logistics solution for travel agencies and tour operators",
      image: "https://images.unsplash.com/photo-1737404181140-1614a7709f0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bG9naXN0aWNzJTIwbWFuYWdlbWVudCUyMHN5c3RlbXxlbnwwfHwwfHx8MA%3D%3D",
      tags: ["React Native", "Firebase", "GraphQL", "Redux"],
      link: "https://preview--choix-voyage-logistics-hub.lovable.app/"
    },
    {
      id: 4,
      title: "Tour Track Connect",
      description: "Real-time tour guide and traveler tracking application with geo-location features",
      image: "https://plus.unsplash.com/premium_photo-1737066451197-93d342a476c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYWNrZXIlMjBhcHAlMjBkcml2ZXJ8ZW58MHx8MHx8fDA%3D",
      tags: ["React", "Express", "MongoDB", "Socket.io"],
      link: "https://preview--tour-pulse-connect.lovable.app/"
    }
  ];

  return (
    <section id="work" className="section-padding bg-dark">
      <div className="container-custom">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Featured Work</h2>
          <p className="text-white/70 max-w-2xl">
            A selection of my recent projects, showcasing my skills in design and development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <Link key={project.id} to={`/project/${project.id}`}>
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                link={project.link}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
