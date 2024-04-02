import React from "react";
import ProjectLink from "./components/ProjectLink";
import axios from "axios";
import { Random } from "../../types";
import UnsplashImg from "./components/UnsplashImg";

async function getUnsplashPhoto() {
  const topics = {
    nature: "6sMVjTLSkeQ",
    architecture: "rnSKDHwwYUk",
    wallpapers: "bo8jQKTaE0Y",
  };

  const res = await axios.get(
    `https://api.unsplash.com/photos/random?client_id=${process.env.NEXT_PUBLIC_API_KEY}`,
    {
      params: {
        content_filter: "high",
        topics: `${topics.nature},${topics.architecture},${topics.wallpapers}`,
      },
    }
  );

  return res.data;
}

async function getDownloadLink(randomPhotoData: Random) {
  const res = await axios.get(
    `${randomPhotoData.links.download_location}&client_id=${process.env.NEXT_PUBLIC_API_KEY}`
  );

  return res.data;
}

export default async function Home() {
  const unsplash = await getUnsplashPhoto();
  const downloadLink = await getDownloadLink(unsplash);
  const blurhash = unsplash.blur_hash;

  return (
    <div className="w-full max-w-[700px] mx-auto min-h-screen flex flex-col items-center justify-center p-4 md:p-10">
      <div className="flex flex-col items-start space-y-3">
        <UnsplashImg
          photo={unsplash}
          blurHash={blurhash}
          download={downloadLink}
        />
        <h1 className="text-2xl">Brito</h1>
        <div className="flex flex-col space-y-2 text-sm font-light">
          <p>
            A front-end software engineer specializing in building & designing
            exceptional, high-quality websites and applications. As I continue
            this life-long journey of self-learning and mastering my craft, I
            hope to be shaped by the challenges and experiences coming my way
          </p>
          <p>
            I am passionate in combining my technical knowledge and artistic
            creativity to build beautiful UIs, and continue expanding my
            knowledge in all things front-end.
          </p>
          <p>
            In my free time, I enjoy photography, reading books, bike trails,
            traveling, hiking, and painting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div>
            <h2 className="text-lg font-light text-[#a0a0a0] mb-2">Projects</h2>
            <ProjectLink
              title="ArchitectGPT"
              url="https://www.architectgpt.io"
              description={
                <>
                  AI architect & interior designer using Nextjs, TypeScript,
                  Tailwind, Firebase, Stripe, OpenAI.
                </>
              }
            />
            <ProjectLink
              title="ArchiPi"
              url="https://www.archipi.io"
              description={
                <>
                  A Nextjs remake of{" "}
                  <a
                    className="text-white underline underline-offset-2"
                    href="https://github.com/cvdlab/react-planner"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    React Planner
                  </a>
                  , a 2D-to-3D floor plan app using the latest Threejs r162
                </>
              }
            />
            <ProjectLink
              title="BlogNLP"
              url="https://www.blognlp.com"
              description="AI Writing Assistant using Nextjs, TypeScript, Tailwind,
              Firebase, Stripe, OpenAI"
            />
            <ProjectLink
              title="Njs"
              url="https://njs-five.vercel.app/"
              description="Netflix clone using Nextjs, Recoil, & TypeScript"
            />
            <ProjectLink
              title="Apagon Puerto Rico"
              url="https://www.apagonpuertorico.com/"
              description="Web app to visualize data regarding LUMA outages in Puerto Rico"
            />
            <ProjectLink
              title="Next Spotify"
              url="https://www.kelvinbrito.dev/spotifyDemo.mp4"
              description="Spotify app built with Nextjs and Spotify API"
            />
            <ProjectLink
              title="Apple React"
              url="https://www.kelvinbrito.dev/react-apple.mp4"
              description="Spotify app built with Nextjs and Spotify API"
            />
            <ProjectLink
              title="Color Picker"
              url="https://color-picker-lyart.vercel.app/"
              description="A simple color picker app using Nextjs, React Colorful, & Colord"
            />
          </div>

          <div className="flex flex-col">
            <h2 className="text-lg font-light text-[#a0a0a0] mb-2">
              Photography
            </h2>
            <ProjectLink
              title="My Photo Blog"
              url="https://www.kelbrxto.com"
              description={
                <>
                  Original project by{" "}
                  <a
                    className="text-white underline underline-offset-2"
                    href="https://sambecker.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sam Becker
                  </a>
                </>
              }
            />
          </div>
        </div>

        <div>
          <h2 className="text-lg font-light text-[#a0a0a0] mb-2">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="flex flex-col space-y-2 text-sm">
              <h3>Code</h3>
              <p className="text-sm text-[#a0a0a0]">
                HTML, CSS, JavaScript (ES6+), TypeScript, Sass
              </p>
            </div>

            <div className="flex flex-col space-y-2 text-sm">
              <h3>Libraries & Frameworks</h3>
              <p className="text-sm text-[#a0a0a0]">
                React, Nextjs, Vue, Nuxtjs, NodeJS/Express, TailwindCSS, Styled
                Components, Framer Motion, Jest
              </p>
            </div>

            <div className="flex flex-col space-y-2 text-sm">
              <h3>Tools & Platform</h3>
              <p className="text-sm text-[#a0a0a0]">
                Git, Github, Netlify, Vercel, Contentful, Linear, Firebase,
                Figma, Storybook
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-light text-[#a0a0a0] mb-2">Connect</h2>
          <div className="flex space-x-3">
            <a
              href="mailto:britok30@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gmail
            </a>
            <a
              href="https://www.linkedin.com/in/kelvin-brito"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
            <a
              href="https://www.github.com/britok30"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
