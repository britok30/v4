import React, { useEffect, useState } from "react";
import { ArrowDown, Download } from "react-feather";
import { decode } from "blurhash";
//@ts-ignore
import { getImgFromArr } from "array-to-image";

import Image from "next/image";
import { DownloadPhoto, Random } from "../types";

interface HeroProps {
  random: Random;
  download: DownloadPhoto;
  blurHash: string;
}

const Hero = ({ random, download, blurHash }: HeroProps) => {
  const [blurUrl, setBlurUrl] = useState<string>("");
  const BASE_URL = "https://unsplash.com";

  useEffect(() => {
    // Handle dataBlurUrl here
    const u8 = decode(blurHash, 32, 32);
    const img = getImgFromArr(u8, 32, 32);
    const src = img.src;

    setBlurUrl(src);
  }, []);

  return (
    <div className="relative h-screen max-h-screen min-w-full">
      <a
        href={`${BASE_URL}/photos/${random?.id}`}
        target="_blank"
        rel="noreferrer"
      >
        <div className="opacity-50 h-screen max-h-screen min-w-full">
          {blurUrl && (
            <Image
              src={random?.urls.raw}
              alt={random?.alt_description || "hero-img"}
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL={blurUrl}
            />
          )}
        </div>
      </a>
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
        {random && (
          <span>
            Photo by{" "}
            <a
              href={`${BASE_URL}/${random?.user.username}`}
              target="_blank"
              rel="noreferrer"
            >
              {random?.user.name}
            </a>{" "}
            on{" "}
            <a href={`${BASE_URL}`} target="_blank" rel="noreferrer">
              Unsplash
            </a>
          </span>
        )}
      </div>
      <div className="absolute bottom-3 left-3 opacity-70 text-white">
        {download && (
          <a
            href={download?.url}
            download={random?.user.name}
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
