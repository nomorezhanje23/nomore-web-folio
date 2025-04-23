
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, tags, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a 
      href={link}
      className="block group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overflow-hidden rounded-lg aspect-video relative mb-4">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-105"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className={`absolute inset-0 bg-dark/70 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}></div>
      </div>
      
      <h3 className="text-xl md:text-2xl font-semibold mb-2 group-hover:text-highlight transition-colors">
        {title}
      </h3>
      
      <p className="text-white/70 mb-3">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs px-2 py-1 rounded-full bg-dark-accent text-white/70"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
};

export default ProjectCard;
