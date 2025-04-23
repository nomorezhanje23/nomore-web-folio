
import ProjectCard from "./ProjectCard";

const FeaturedWork = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A modern shopping experience with React and Node.js",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      tags: ["React", "Node.js", "MongoDB", "AWS"],
      link: "#"
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
      title: "Social Media App",
      description: "Connect and share with friends and communities",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      tags: ["React Native", "Firebase", "GraphQL", "Redux"],
      link: "#"
    },
    {
      id: 4,
      title: "AI Content Generator",
      description: "Machine learning powered content creation tool",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      tags: ["Python", "TensorFlow", "Flask", "React"],
      link: "#"
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
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
