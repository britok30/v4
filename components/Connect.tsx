import React from "react";

export const Connect = () => {
  return (
    <div>
      <h2 className="heading bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">Get in touch</h2>
      <ul className="flex list-none text-gray-400 justify-center items-center flex-col space-y-4 md:flex-row md:space-x-3 md:space-y-0  mt-3 font-light">
        <ListItem
          ariaLabel="Github"
          href="https://github.com/britok30"
          text="Github"
        />
        <ListItem
          ariaLabel="Gmail"
          href="mailto:britok30@gmail.com"
          text="Gmail"
        />
        <ListItem
          ariaLabel="Linkedin"
          href="https://www.linkedin.com/in/kelvin-brito/"
          text="Linkedin"
        />
        <ListItem ariaLabel="Resume" href="/resume.pdf" text="Resume" />
      </ul>
    </div>
  );
};

const ListItem = ({
  ariaLabel,
  href,
  text,
}: {
  ariaLabel: string;
  href: string;
  text: string;
}) => {
  return (
    <li>
      <a
        aria-label={ariaLabel}
        className="connectButton"
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        <span>{text}</span>
      </a>
    </li>
  );
};
