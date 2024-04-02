"use client";

import React, { useState, useEffect } from "react";

export const Footer = () => {
  return (
    <div className="flex justify-center flex-col space-y-2 items-center text-white text-xs my-10 font-light">
      <p>&copy; {new Date().getFullYear()} | Kelvin Brito</p>
      <p>
        Made with
        <span className="mx-2" role="img" aria-label="emoji">
          ❤️
        </span>
        with{" "}
        <a
          className="underline underline-offset-2 cursor-pointer"
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Next.js
        </a>
        ,{" "}
        <a
          className="underline underline-offset-2 cursor-pointer"
          href="https://vercel.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vercel
        </a>
        , TypeScript,{" "}
        <a
          className="underline underline-offset-2 cursor-pointer"
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          TailwindCSS
        </a>
        . Inspired by{" "}
        <a
          className="underline underline-offset-2 cursor-pointer"
          href="https://paco.me/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Paco
        </a>
      </p>
    </div>
  );
};
