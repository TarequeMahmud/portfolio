import Image from "next/image";

type Project = {
  id: number;
  title: string;
  tag: string;
  image: string;
  description: string;
  techStack: string;
  gradient: string;
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div
      className={`w-[90%] max-w-2xl bg-gradient-to-r ${project.gradient} 
      rounded-2xl border-4 border-[#ffffffde] shadow-lg overflow-hidden 
      cursor-pointer hover:scale-[1.02] transition-transform`}
    >
      {/* Image */}
      <div className="w-full aspect-[16/9] relative">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          className="object-cover rounded-t-2xl"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={project.id === 1}
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <span className="inline-block px-3 py-1 text-sm font-medium bg-black/60 text-white rounded-md">
          {project.tag}
        </span>

        <h2 className="text-2xl font-bold text-white">{project.title}</h2>

        <p className="text-gray-200 text-sm leading-relaxed">
          {project.description}
        </p>

        <p className="text-gray-300 text-xs italic">{project.techStack}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
