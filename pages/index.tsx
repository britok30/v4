import Head from "next/head";
import Hero from "../components/Hero";
import axios, { AxiosResponse } from "axios";
import { DownloadPhoto, Random, Topics } from "../types";
import { About } from "../components/About";
import { Projects } from "../components/Projects";

interface HomeProps {
  randomPhotoData: Random;
  downloadData: DownloadPhoto;
  blurHash: string;
}

const Home = ({ randomPhotoData, downloadData, blurHash }: HomeProps) => {
  return (
    <div className="bg-black min-h-screen flex justify-center flex-col">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Kelvin Brito is a front end software engineer specializing in building & designing exceptional, high-quality websites and applications."
        />
        <title>Kelvin Brito</title>
      </Head>

      <div>
        <Hero
          random={randomPhotoData}
          download={downloadData}
          blurHash={blurHash}
        />
        <div className="mx-auto">
          <About />
          <Projects />
          {/* <Skills />
          <Connect />
          <Footer /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const topics: Topics = {
    nature: "6sMVjTLSkeQ",
    architecture: "rnSKDHwwYUk",
    wallpapers: "bo8jQKTaE0Y",
    experimental: "qPYsDzvJOYc",
  };

  const BASE_URL: string = "https://api.unsplash.com";

  // Random Photo Fetch
  const randomPhotoResponse: AxiosResponse = await axios.get(
    `${BASE_URL}/photos/random?client_id=${process.env.NEXT_PUBLIC_API_KEY}`,
    {
      params: {
        content_filter: "high",
        topics: `${topics.nature},${topics.architecture},${topics.wallpapers},${topics.experimental}`,
      },
    }
  );
  // Random Photo Data
  const randomPhotoData: Random = randomPhotoResponse.data;

  // Download Photo Fetch
  const downloadResponse = await axios.get(
    `${randomPhotoData.links.download_location}&client_id=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  // Download Photo Data
  const downloadData: DownloadPhoto = downloadResponse.data;
  const blurHash = randomPhotoData.blur_hash;

  return {
    props: {
      randomPhotoData,
      downloadData,
      blurHash,
    },
  };
};
