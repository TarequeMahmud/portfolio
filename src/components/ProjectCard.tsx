import Image from "next/image";
import Link from "next/link";

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
    <Link
      href={`/projects/${project.id}`}
      className={`
        w-full max-w-[420px]
        bg-linear-to-r ${project.gradient}
        rounded-2xl border-4 border-[#ffffffde] 
        shadow-lg overflow-hidden 
        cursor-pointer 
        hover:scale-[1.02] active:scale-[0.99]
        transition-transform duration-300 ease-in-out
      `}
    >
      {/* Image */}
      <div className="relative w-full aspect-video">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          className="object-cover rounded-t-2xl"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={project.id === 1}
        />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4 text-white">
        <span className="inline-block px-3 py-1 text-xs sm:text-sm font-medium bg-black/60 rounded-md">
          {project.tag}
        </span>

        <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
          {project.title}
        </h2>

        <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
          {project.description}
        </p>

        <p className="text-gray-300 text-xs sm:text-sm italic">
          {project.techStack}
        </p>
      </div>
    </Link>
  );
};

export default ProjectCard;
