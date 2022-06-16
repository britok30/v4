import React, { useEffect, useState } from "react";
import { ArrowDown, Download } from "react-feather";
import axios, { AxiosResponse } from "axios";
import { Blurhash } from "react-blurhash";
import { DownloadPhoto, Random } from "../types";

interface Topics {
  nature: string;
  architecture: string;
  wallpapers: string;
  experimental: string;
}

const Hero = () => {
  const [randomPhotoData, setRandomPhotoData] = useState<Random | null>(null);
  const [showImage, setShowImage] = useState<boolean>(false);
  const [downloadPhoto, setDownloadPhoto] = useState<DownloadPhoto | null>(
    null
  );
  const baseUrl: string = "https://api.unsplash.com";

  useEffect(() => {
    const topics: Topics = {
      nature: "6sMVjTLSkeQ",
      architecture: "rnSKDHwwYUk",
      wallpapers: "bo8jQKTaE0Y",
      experimental: "qPYsDzvJOYc",
    };

    const fetchUnsplash = async () => {
      const response: AxiosResponse = await axios.get(
        `${baseUrl}/photos/random?client_id=${process.env.REACT_APP_API_KEY}`,
        {
          params: {
            content_filter: "high",
            topics: `${topics.nature},${topics.architecture},${topics.wallpapers},${topics.experimental}`,
          },
        }
      );
      const data: Random = response.data;
      setRandomPhotoData(data);

      setTimeout(() => {
        setShowImage(true);
      }, 500);
    };

    fetchUnsplash();
  }, []);

  useEffect(() => {
    if (!randomPhotoData) return;

    const fetchDownload = async (data: Random) => {
      const response = await axios.get(
        `${data.links.download_location}&client_id=${process.env.REACT_APP_API_KEY}`
      );
      const downloadData: DownloadPhoto = response.data;
      setDownloadPhoto(downloadData);
    };

    fetchDownload(randomPhotoData);
  }, [randomPhotoData]);
  return (
    <div className="relative h-screen max-h-screen min-w-full">
      {!showImage && randomPhotoData && randomPhotoData?.blur_hash && (
        <Blurhash
          hash={randomPhotoData.blur_hash}
          height="100vh"
          className="opacity-50 object-cover h-screen max-h-screen min-w-full"
        />
      )}

      {showImage && (
        <a
          href={`https://unsplash.com/photos/${randomPhotoData?.id}`}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="opacity-50 object-cover h-screen max-h-screen min-w-full"
            src={randomPhotoData?.urls.raw}
            alt={
              randomPhotoData?.alt_description
                ? randomPhotoData.alt_description
                : "hero-img"
            }
          />
        </a>
      )}

      <div
        className="absolute flex justify-center items-center flex-col top-[50%] left-[50%]"
        style={{
          transform: "translate(-50%,-50%)",
        }}
      >
        <h1 className="text-3xl lg:text-6xl font-light text-center mb-3 text-white antialiased">
          Brito
        </h1>

        <p className="text-lg font-extralight text-center mb-8 text-white antialiased">
          Frontend Engineer
        </p>

        <div className="mt-8">
          <ArrowDown className="animate-bounce" color="#fff" size={22} />
        </div>
      </div>

      <div className="absolute text-white text-sm right-3 bottom-3 opacity-50">
        {randomPhotoData && (
          <span>
            Photo by{" "}
            <a
              href={`https://unsplash.com/${randomPhotoData?.user.username}`}
              target="_blank"
              rel="noreferrer"
            >
              {randomPhotoData?.user.name}
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com" target="_blank" rel="noreferrer">
              Unsplash
            </a>
          </span>
        )}
      </div>

      <div className="absolute bottom-3 left-3 opacity-70 text-white">
        {downloadPhoto && (
          <a
            href={downloadPhoto?.url}
            download={randomPhotoData?.user.name}
            target="_blank"
            rel="noreferrer"
          >
            <Download color="#fff" size={28} />
          </a>
        )}
      </div>
    </div>
  );
};

export default Hero;
