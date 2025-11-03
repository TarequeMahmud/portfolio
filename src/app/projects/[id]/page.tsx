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
      <div className="w-full flex flex-col items-center space-y-6 mt-6 px-3 sm:px-6 md:px-8">
        {/* --- IMAGE --- */}
        <div className="w-full max-w-3xl aspect-video relative rounded-2xl overflow-hidden shadow-xl border border-white/10">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
            priority
          />
        </div>

        {/* --- ROLE --- */}
        <p className="text-base sm:text-lg text-gray-300 italic text-center">
          Role:&nbsp;
          <span className="font-semibold text-[#fae900]">{project.role}</span>
        </p>

        {/* --- DESCRIPTION --- */}
        <div className="w-full sm:max-w-5xl rounded-lg p-2 sm:p-6 bg-white/5 border border-white/10">
          <ul className="text-sm sm:text-[1.15rem] md:text-[1.25rem] text-justify mt-2 space-y-3 leading-relaxed">
            {project.description.map((point, idx) => (
              <li key={idx}>
                {point.highlight && (
                  <span className="font-semibold text-[#ffee00]">
                    {point.highlight}:
                  </span>
                )}{" "}
                {point.text}
              </li>
            ))}
          </ul>
        </div>

        {/* --- TECH STACK --- */}
        <div className="flex flex-wrap justify-center gap-3 max-w-2xl">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-black/40 text-white text-sm sm:text-base rounded-lg border border-white/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* --- LINKS --- */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 my-6 w-full">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2 rounded-lg bg-black/50 text-white font-semibold hover:bg-black/70 transition"
            >
              <FaGithub /> GitHub
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2 rounded-lg bg-linear-to-r from-cyan-600 to-blue-600 text-white font-semibold hover:scale-105 transition-transform"
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
