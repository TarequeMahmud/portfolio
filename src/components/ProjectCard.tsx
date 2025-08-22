import Image from "next/image";

type Project = {
  id: number;
  title: string;
  tag: string;
  image: string;
  description: string;
  techStack: string;
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="w-[45%] max-w-2xl bg-gradient-to-r from-[#176c94] to-[#092735] rounded-2xl border-4 border-cyan-900 shadow-lg overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform">
      {/* Image */}
      <div className="w-full h-64 relative">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          className="object-center"
          fill
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Tag */}
        <span className="inline-block px-3 py-1 text-sm font-medium bg-black/60 text-white rounded-md">
          {project.tag}
        </span>

        {/* Title */}
        <h2 className="text-2xl font-bold text-white">{project.title}</h2>

        {/* Description */}
        <p className="text-gray-200 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <p className="text-gray-300 text-xs italic">{project.techStack}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
