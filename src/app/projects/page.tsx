"use client";

import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects.json";

const Page = () => {
  return (
    <div className="w-full min-h-[600px] p-5 flex flex-col items-center m-auto">
      <h1 className="mt-5 mb-2 h-10 text-3xl font-semibold">
        PROJECT EXPERIENCE
      </h1>
      <hr className="w-full border-gray-400" />

      <div className="my-12 w-full grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Page;
