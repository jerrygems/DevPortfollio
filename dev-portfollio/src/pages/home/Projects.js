import React from "react";
import styled, { keyframes } from "styled-components";

// Sample project data
const projects = [
  {
    id: 1,
    title: "Discord Clone",
    technologies: [
      "Next.js 13",
      "React Hook Form",
      "Zustand",
      "Shaders",
      "Typescript",
    ],
    backgroundImage: "../../discord-clone.png",
  },
  {
    id: 2,
    title: "Spotify Clone",
    technologies: [
      "Next.js 13",
      "React Hook Form",
      "Zustand",
      "Radix UI",
      "Typescript",
      "Tailwind CSS",
    ],
    backgroundImage: "../../discord-clone.png",
  },
  {
    id: 3,
    title: "Amazon Clone",
    technologies: [
      "Node.js",
      "Express",
      "Mongoose",
      "Next.js 13",
      "Next Auth",
      "React",
      "Hook Form",
      "Typescript",
      "Tailwind CSS",
    ],
    backgroundImage: "../../discord-clone.png",
  },
  {
    id: 4,
    title: "DALL-E Clone",
    technologies: [
      "OpenAI",
      "Node.js",
      "Express",
      "Mongoose",
      "React.js",
      "Tailwind CSS",
    ],
    backgroundImage: "../../discord-clone.png",
  },
  {
    id: 4,
    title: "DALL-E Clone",
    technologies: [
      "OpenAI",
      "Node.js",
      "Express",
      "Mongoose",
      "React.js",
      "Tailwind CSS",
    ],
    backgroundImage: "../../discord-clone.png",
  },
  {
    id: 4,
    title: "DALL-E Clone",
    technologies: [
      "OpenAI",
      "Node.js",
      "Express",
      "Mongoose",
      "React.js",
      "Tailwind CSS",
    ],
    backgroundImage: "../../discord-clone.png",
  },
  {
    id: 4,
    title: "DALL-E Clone",
    technologies: [
      "OpenAI",
      "Node.js",
      "Express",
      "Mongoose",
      "React.js",
      "Tailwind CSS",
    ],
    backgroundImage: "../../discord-clone.png",
  },
  {
    id: 4,
    title: "DALL-E Clone",
    technologies: [
      "OpenAI",
      "Node.js",
      "Express",
      "Mongoose",
      "React.js",
      "Tailwind CSS",
    ],
    backgroundImage: "../../discord-clone.png",
  },
  {
    id: 4,
    title: "DALL-E Clone",
    technologies: [
      "OpenAI",
      "Node.js",
      "Express",
      "Mongoose",
      "React.js",
      "Tailwind CSS",
    ],
    backgroundImage: "../../discord-clone.png",
  },
];

const ProjectCard = ({ project }) => (
  <div className="flex-shrink-0 w-70 h-60 relative m-2 bg-gray-300 rounded-lg overflow-auto ">
    <img
      src={`/images/${project.backgroundImage}`}
      alt={project.title}
      className="object-cover w-full h-full"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
    <div className="absolute inset-0 flex flex-col justify-end p-4">
      <h3 className="text-white font-bold text-lg">{project.title}</h3>
      <div className="flex flex-wrap mt-2">
        {project.technologies.map((tech, index) => (
          <span key={index} className="text-gray-300 text-sm mr-2">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Project = () => (
  <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8 text-black">
        Projects
      </h2>
      <div className="overflow-x-auto flex gap-4 py-8 px-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  </>
);

export default Project;
