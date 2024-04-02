"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { DownloadPhoto, Random } from "../../../types";
import { decode } from "blurhash";
// @ts-ignore
import { getImgFromArr } from "array-to-image";
import { Download } from "react-feather";

const UnsplashImg = ({
  photo,
  blurHash,
  download,
}: {
  photo: Random;
  blurHash: string;
  download: DownloadPhoto;
}) => {
  const [blurUrl, setBlurUrl] = useState<string>("");
  const BASE_URL = "https://unsplash.com";

  useEffect(() => {
    // Handle dataBlurUrl here
    const u8 = decode(blurHash, 32, 32);
    const img = getImgFromArr(u8, 32, 32);
    const src = img.src;

    setBlurUrl(src);
  }, [blurHash]);

  return (
    <div className="relative w-full">
      <div className="opacity-40 w-full h-[300px] relative">
        {blurUrl && (
          <Image
            className="object-cover object-center rounded-lg"
            src={photo?.urls.raw}
            alt={photo?.alt_description || "main-page-img"}
            fill
            placeholder="blur"
            blurDataURL={blurUrl}
          />
        )}
      </div>
      <div className="absolute bottom-5 left-5 text-xs">
        Photo by:{" "}
        <a
          className="underline underline-offset-2 cursor-pointer"
          aria-label="photo by"
          href={`${BASE_URL}/${photo?.user.username}`}
          target="_blank"
          rel="noreferrer"
        >
          {photo?.user.username}
        </a>{" "}
        on{" "}
        <a
          className="underline underline-offset-2 cursor-pointer"
          href={`${BASE_URL}`}
        >
          Unsplash
        </a>
      </div>

      <div className="absolute bottom-5 right-5 text-xs">
        <a
          className="cursor-pointer"
          aria-label="download"
          href={download?.url}
          download={photo?.user.name}
          target="_blank"
          rel="noreferrer"
        >
          <Download color="#fff" size={18} />
        </a>
      </div>
    </div>
  );
};

export default UnsplashImg;
