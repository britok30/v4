import React from "react";

export const Skills = () => {
  const skills = [
    "HTML",
    "CSS/Sass",
    "JavaScript (ES6+)",
    "TypeScript",
    "Tailwind",
    "React",
    "Redux",
    "Jest",
    "Next.js",
    "CSS-in-JS",
    "Vue",
    "Git/Github",
    "Agile & SCRUM",
    "REST APIs",
    "Figma",
    "Storybook",
  ];

  return (
    <div>
      <h1 className="heading">Skills</h1>

      <div className="mt-3 flex flex-col items-center justify-center space-y-2 md:flex-row md:items-center md:space-x-3 md:space-y-0">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="text-gray-400 text-sm font-light cursor-pointer hover:text-red-600 transition-all duration-[.4s] ease-in-out"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
