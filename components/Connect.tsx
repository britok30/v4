import React from "react";

export const Connect = () => {
  return (
    <>
      <h1 className="heading">Get in touch</h1>

      <ul className="flex list-none text-gray-400 justify-center items-center flex-col space-y-4 md:flex-row md:space-x-3 md:space-y-0  mt-3 font-light">
        <li>
          <a
            aria-label="Github"
            className="connectButton"
            href="https://github.com/britok30"
            target="_blank"
            rel="noreferrer"
          >
            <span>Github</span>
          </a>
        </li>
        <li>
          <a
            aria-label="Gmail"
            className="connectButton"
            href="mailto:britok30@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <span>Gmail</span>
          </a>
        </li>
        <li>
          <a
            aria-label="Linkedin"
            className="connectButton"
            href="https://www.linkedin.com/in/kelvin-brito/"
            target="_blank"
            rel="noreferrer"
          >
            <span>Linkedin</span>
          </a>
        </li>
        <li>
          <a
            aria-label="Resume"
            className="connectButton"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <span>Resume</span>
          </a>
        </li>
      </ul>
    </>
  );
};
