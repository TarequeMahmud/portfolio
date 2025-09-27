"use client";

import Image from "next/image";
import PageWrapper from "@/components/PageWrapper";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

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

// Example Vox AI project data (could be loaded from JSON)
const project: ProjectDetail = {
  id: 1,
  title: "VOX",
  subtitle: "A Realtime Chat Web Application",
  role: "Independent Developer",
  image: "/projects/vox.png",
  description: [
    {
      highlight: "AI Chat Application",
      text: "providing a feeling like ChatGPT or Gemini.",
    },
    {
      highlight: "Conversational AI Interface",
      text: "Powered by Gemini 2.0 Flash for smarter, faster responses.",
    },
    {
      highlight: "Advanced Authentication System",
      text: "Includes OTP-based registration, password recovery, and JWT-based secure session management. Utilizes Redis for caching and fast token validation.",
    },
    {
      highlight: "Real-Time Chat UX",
      text: "Typing simulation and quick response rendering for a human-like interaction.",
    },
    {
      highlight: "Context-Aware Messaging",
      text: "Uses history management with Redux and PostgreSQL to send chat history to the model and enable context-aware replies.",
    },
    {
      highlight: "Streamed Response",
      text: "Uses Redux Toolkit and the ReadableStream API to stream responses from the model in real-time.",
    },
    {
      highlight: "Title Prediction",
      text: "Automatically generates a chat title based on the first message.",
    },
    {
      highlight: "Temporary Chats",
      text: "Start disposable chat sessions that are not saved to your account or database, ensuring private, instant conversations.",
    },
    {
      highlight: "Search Messages",
      text: "Search through chat history with PostgreSQL full-text search capabilities.",
    },
    {
      highlight: "Dynamic Routing",
      text: "Chat sessions stored via clean URL slugs like /chat/[chatId].",
    },
    {
      highlight: "Responsive Design",
      text: "Pixel-perfect across desktop and mobile devices using Tailwind CSS.",
    },
    {
      highlight: "PostgreSQL Backend",
      text: "Persistent chat history stored in PostgreSQL (or any SQL-based DB).",
    },
    {
      highlight: "Serverless Architecture",
      text: "Next.js App Router API routes — zero Express or custom servers required.",
    },
    {
      highlight: "Built With",
      text: "Next.js, Redux, PostgreSQL, Tailwind, Redis, JWT, GitHub Actions (CI/CD), and Docker.",
    },
  ],
  techStack: [
    "Next.js",
    "Redux",
    "PostgreSQL",
    "Tailwind",
    "Redis",
    "JWT",
    "Docker",
  ],
  github: "https://github.com/TarequeMahmud/vox",
  live: "https://vox-chat-ai.vercel.app",
};

const ProjectPage = () => {
  return (
    <PageWrapper title={project.title} subtitle={project.subtitle}>
      <div className="w-full flex flex-col items-center space-y-6 mt-8">
        {/* Image */}
        <div className="w-full max-w-3xl aspect-[16/9] relative rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            className="object-cover"
          />
        </div>

        {/* Role */}
        <p className="text-lg text-gray-300 italic">
          Role:{" "}
          <span className="font-semibold text-[#fae900]">{project.role}</span>
        </p>

        {/* Description */}
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

        {/* Links */}
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
