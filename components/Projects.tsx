import React from "react";
import { Project } from "./Project";

export const Projects = () => {
  const BASE_GITUB: string = "https://github.com/britok30";
  return (
    <main>
      <h2 className="heading">Some things I&apos;ve built</h2>
      <Project
        title="Spotify Next v2"
        description="Spotify app built with Next.js and Spotify API"
        github={`${BASE_GITUB}/spotify-next`}
        demo="/spotifyDemo.mp4"
        imgSrc="/spotify.png"
        stack="Next.js, React, TypeScript, Tailwind, Recoil, Spotify API"
      />

      <Project
        title="Njs"
        description="Netflix app built with Next.js and TMDB API"
        github={`${BASE_GITUB}/britok30/njs`}
        demo="https://njs-five.vercel.app/"
        imgSrc="/njs.png"
        stack="Next.js, React, TypeScript, Tailwind, Recoil, TMDB API"
      />

      <Project
        title="Playspace v2"
        description="A web app for visualizing video game data"
        github={`${BASE_GITUB}/playspace-v2`}
        demo="https://playspace-v2.vercel.app/"
        imgSrc="/playspace.png"
        stack="Next.js, React, TypeScript, Tailwind"
      />

      <Project
        title="Spotify Connect"
        description="Spotify profile with personalized data"
        github={`${BASE_GITUB}/spotify-connect`}
        demo="https://spotify-connect-v1.herokuapp.com/"
        imgSrc="/spotify-connect.png"
        stack="TypeScript, React, Tailwind, Spotify API"
      />

      <Project
        title="Apple News.js"
        description="Web app that features up-to-date news."
        github={`${BASE_GITUB}/applenews`}
        demo="/AppleNewsDemo.mp4"
        imgSrc="/apple.png"
        stack="React, Node, Express, Bootstrap, News API"
      />

      <Project
        title="Horizon"
        description="Search engine web app featuring Google Search API"
        github={`${BASE_GITUB}/horizon-search`}
        demo="https://horizonsearch.netlify.app/"
        imgSrc="/horizon.png"
        stack="React, Google Search API, Tailwind"
      />

      <Project
        title="Vizcaya Design Studio"
        description="Design studio website exploring design concept"
        github={`${BASE_GITUB}/Vizcaya2`}
        demo="https://vizcaya.netlify.app"
        imgSrc="/vizcaya.png"
        stack="HTML, CSS, JavaScript"
      />

      <Project
        title="Apple React"
        description="Apple product page featuring Firebase authentication"
        github={`${BASE_GITUB}/react-apple-landing`}
        demo="/react-apple.mp4"
        imgSrc="/apple-react.png"
        stack="React Hooks, Firebase, SCSS"
      />

      <Project
        title="Color Picker"
        description="Color picker with useful color conversions"
        github={`${BASE_GITUB}/color-picker`}
        demo="https://colorhuepicker.com/"
        imgSrc="/color.png"
        stack="Next.js, React, TypeScript, Tailwind"
      />
    </main>
  );
};
