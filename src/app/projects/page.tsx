"use client";

import PageWrapper from "@/components/PageWrapper";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects.json";

const Page = () => {
  return (
    <PageWrapper title="PROJECTS EXPERIENCE">
      <div className="w-[95%] sm:w-[90%] md:w-[85%] my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </PageWrapper>
  );
};

export default Page;
