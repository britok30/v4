"use client";

import React from "react";
import { ArrowUpRight } from "react-feather";

const ProjectLink = ({
  title,
  url,
  description,
}: {
  title: string;
  url: string;
  description: React.ReactNode;
}) => {
  return (
    <div className="space-y-1 mb-2">
      <div className="flex items-center space-x-1 cursor-pointer text-sm">
        <a
          className="underline underline-offset-2"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
        <ArrowUpRight size={18} strokeWidth={1} />
      </div>
      <div className="text-sm text-[#a0a0a0]">{description}</div>
    </div>
  );
};

export default ProjectLink;
