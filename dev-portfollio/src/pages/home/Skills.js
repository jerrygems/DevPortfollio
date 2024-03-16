import React from "react";

const skills = {
  frontend: [
    "HTML",
    "CSS",
    "Tailwind",
    "JavaScript",
    "Typescript",
    "React Js",
    "Next Js 13",
  ],
  backend: ["Node Js", "Express Js", "BUN Js", "Elysia", "Next Auth"],
  database: ["MySql", "MongoDB", "PostgreSQL", "Redis", "Elastic Search"],
  devops: [
    "Docker",
    "Kubernetes",
    "GIT",
    "Jenkins",
    "Ansible",
    "Terraform",
    "AWS",
  ],
  //   blockchain: ["multichain", "openzeppline", "solidity", "chainlink", "eth"],
};

const Skills = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div className="max-w-4xl mx-auto py-16">
      <h2 className="text-3xl font-bold mb-8 text-center ">What I know</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 min-w-screen">
        {Object.entries(skills).map(([category, techs]) => (
          <div key={category} className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-bold mb-4 text-white">{category}</h3>
            <div className="flex flex-wrap">
              {techs.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-700 text-gray-300 py-1 px-2 mr-2 mb-2 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Skills;
