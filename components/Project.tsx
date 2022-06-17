import Image  from "next/image";
import React from "react";
import { GitHub, Share } from "react-feather";

interface ProjectProps {
  title: string;
  description: string;
  github: string;
  demo: string;
  imgSrc: string;
  stack: string;
}

export const Project = ({
  title,
  description,
  github,
  demo,
  imgSrc,
  stack,
}: ProjectProps) => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col md:flex-row md:items-start mb-12">
        <Image
          className="w-72 rounded-lg"
          src={imgSrc}
          alt={`project-${title}-img`}
          layout="fixed"
          objectFit="cover"
          width={288}
          height={180}
        />

        <div className="flex justify-between items-start flex-col w-64 mt-10 md:ml-10 md:mt-0 antialiased">
          <h2 className="text-2xl text-white mb-2 ">{title}</h2>
          <p className="text-gray-400 mb-2 text-sm">{description}</p>
          <p className="text-gray-200 mb-2 text-sm font-bold">{stack}</p>
          <div className="flex justify-center items-center">
            <a
              aria-label="Source"
              className="mr-2"
              href={github}
              target="_blank"
              rel="noreferrer"
            >
              <GitHub color="#fff" size={22} />
            </a>
            <a
              aria-label="Link-Demo"
              href={demo}
              target="_blank"
              rel="noreferrer"
            >
              <Share color="#fff" size={22} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
