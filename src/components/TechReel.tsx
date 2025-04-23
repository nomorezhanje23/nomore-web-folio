
const TechReel = () => {
  const technologies = [
    "JavaScript", "TypeScript", "React.js", "Next.js", "Node.js", 
    "Express", "GraphQL", "AWS", "Docker", "PostgreSQL", 
    "MongoDB", "Redis", "Tailwind CSS", "Figma", "Git"
  ];

  // Duplicate for endless effect
  const allTechs = [...technologies, ...technologies, ...technologies];

  return (
    <div className="bg-dark-accent py-8 overflow-hidden border-t border-b border-white/10">
      <div className="animate-slide-left whitespace-nowrap">
        {allTechs.map((tech, index) => (
          <span key={index} className="tech-item">
            {tech} <span className="text-highlight mx-1">•</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechReel;
