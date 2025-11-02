"use client";

import Image from "next/image";
import PageWrapper from "@/components/PageWrapper";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projectDetails from "@/data/projectDetails.json";
import { useParams } from "next/navigation";

type ProjectDetail = {
  id: number;
  title: string;
  subtitle: string;
  role: string;
  image: string;
  description: { text: string; highlight?: string }[];
  techStack: string[];
  github?: string;
  live?: string;
};

const ProjectPage = () => {
  const params = useParams();
  const id = Number(params?.id);
  const project: ProjectDetail | undefined = projectDetails.projectDetails.find(
    (p) => p.id === id
  );

  if (!project) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl text-gray-400">
        Project not found.
      </div>
    );
  }

  return (
    <PageWrapper title={project.title} subtitle={project.subtitle}>
      <div className="w-full flex flex-col items-center space-y-6 mt-8">
        <div className="w-full max-w-3xl aspect-[16/9] relative rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            className="object-cover"
          />
        </div>

        <p className="text-lg text-gray-300 italic">
          Role:{" "}
          <span className="font-semibold text-[#fae900]">{project.role}</span>
        </p>

        <div className="w-full max-w-4xl rounded-lg p-6">
          <ul className="list-disc text-[1.3rem] mt-2 space-y-3 pl-6">
            {project.description.map((point, idx) => (
              <li key={idx}>
                {point.highlight && (
                  <span className="font-semibold text-[#ffee00]">
                    {point.highlight}
                  </span>
                )}{" "}
                {point.text}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-6 my-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 rounded-lg bg-black/50 text-white font-semibold hover:bg-black/70 transition"
            >
              <FaGithub /> GitHub
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold hover:scale-105 transition-transform"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </div>
      </div>
    </PageWrapper>
  );
};

export default ProjectPage;
