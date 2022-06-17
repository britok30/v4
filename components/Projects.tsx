import React from "react";
import { Project } from "./Project";

export const Projects = () => {
  return (
    <main>
      <h1 className="heading">Some things Ive built</h1>

      <Project
        title="Spotify Next v2"
        description="Spotify app built with Next.js and Spotify API"
        github="https://github.com/britok30/spotify-next"
        demo="/spotifyDemo.mp4"
        imgSrc="/spotify.png"
        stack="Next.js, React, TypeScript, Tailwind, Recoil, Spotify API"
      />

      <Project
        title="Njs"
        description="Netflix app built with Next.js and TMDB API"
        github="https://github.com/britok30/njs"
        demo="https://njs-five.vercel.app/"
        imgSrc="/njs.png"
        stack="Next.js, React, TypeScript, Tailwind, Recoil, TMDB API"
      />

      <Project
        title="Playspace"
        description="A web app for visualizing video game data. View your
                            favorite video games, ratings, release dates, etc.
                            Grabs information from the Rawg Api."
        github="https://github.com/britok30/Play-Space"
        demo="https://playspace.netlify.com"
        imgSrc="/playspace.png"
        stack="React Hooks, Bootstrap, RAWG API"
      />

      <Project
        title="Spotify Connect"
        description="Spotify profile with personalized data"
        github="https://github.com/britok30/spotify-connect"
        demo="https://spotify-connect-v1.herokuapp.com/"
        imgSrc="/spotify-connect.png"
        stack="TypeScript, React, Tailwind, Spotify API"
      />

      <Project
        title="Apple News.js"
        description="Web app that features up-to-date news. Users can see top news and news based on certain categories. User can also search any topic and find news on it."
        github="https://github.com/britok30/applenews"
        demo="/AppleNewsDemo.mp4"
        imgSrc="/apple.png"
        stack="React, Node, Express, Bootstrap, News API"
      />

      <Project
        title="Horizon"
        description="Search engine web app featuring Google Search API"
        github="https://github.com/britok30/horizon-search"
        demo="https://horizonsearch.netlify.app/"
        imgSrc="/horizon.png"
        stack="React, Google Search API, Tailwind"
      />

      <Project
        title="Vizcaya Design Studio"
        description="Design studio website exploring design concept"
        github="https://github.com/britok30/Vizcaya2"
        demo="https://vizcaya.netlify.app"
        imgSrc="/vizcaya.png"
        stack="HTML, CSS, JavaScript"
      />

      <Project
        title="Apple React"
        description="Apple product page featuring Firebase authentication"
        github="https://github.com/britok30/react-apple-landing"
        demo="/react-apple.mp4"
        imgSrc="/apple-react.png"
        stack="React Hooks, Firebase, SCSS"
      />
    </main>
  );
};
