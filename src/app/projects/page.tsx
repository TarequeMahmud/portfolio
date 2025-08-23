"use client";

import PageWrapper from "@/components/PageWrapper";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects.json";

const Page = () => {
  return (
    <PageWrapper title="PROJECTS EXPERIENCE">
      <div className="my-12 h-full w-full grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </PageWrapper>
  );
};

export default Page;
