import React from "react";

export const Skills = () => {
  const skills = [
    "HTML",
    "CSS/Sass",
    "CSS-in-JS",
    "Tailwind",
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Next.js",
    "Vue",
    "Nuxt",
    "Redux",
    "Recoil",
    "Jest",
    "Git/Github",
    "Agile & SCRUM",
    "REST APIs",
    "Figma",
    "Storybook",
  ];

  return (
    <div>
      <h2 className="heading bg-gradient-to-r from-fuchsia-500 via-red-600 to-orange-400">
        Technical Skills
      </h2>
      <div className="md:w-[400px] grid grid-cols-1 md:grid-cols-3 gap-2 mx-auto justify-items-center">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="text-gray-400 text-sm font-medium cursor-pointer hover:text-red-600 transition-all duration-[.4s] ease-in-out"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
