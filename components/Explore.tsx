import React from "react";
import Image from "next/image";

export const Explore = () => {
  const images = [
    "/north-star.png",
    "/alchemist-2.png",
    "/city.png",
    "/theatre.png",
    "/sunset-mountain.png",
    "/louvre.png",
    "/daft-punk.png",
    "/starry.png",
    "/barcelona.png",
  ];
  return (
    <div className="flex flex-col items-center">
      <h2 className="heading">
        Exploring the unknown
      </h2>

      <div className="w-[17rem] md:w-96">
        <p className="paragraph mb-5">
          Lately, I have been exploring GPT-3 and all of its capabilities when
          it comes to the connections of natural langauge and code. I believe
          Open AI&apos;s initiatives with creating realistic images and art with
          natural language is the coolest thing I&apos;ve dabbled with lately.
          Learn more{" "}
          <a className="underline" href="https://openai.com/dall-e-2/">
            here
          </a>
          .
        </p>

        <p className="paragraph mb-8">
          Here are some images I&apos;ve created with the help of AI using{" "}
          <a className="underline" href="https://www.midjourney.com/home/">
            Midjourney
          </a>
        </p>
      </div>

      <div className="md:w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-5 justify-items-center">
        {images.map((image, index) => (
          <Image
            key={image}
            className="w-72 rounded-lg"
            src={image}
            alt={`midjourney-img-${index}`}
            layout="fixed"
            objectFit="cover"
            width={288}
            height={180}
          />
        ))}
      </div>
    </div>
  );
};
