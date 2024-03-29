import React from "react";
export const About = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="heading bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
        Hey there, I&apos;m Kelvin Brito!
      </h2>

      <div className="w-[18rem] md:w-[30rem]">
        <p className="paragraph mb-5">
          I&apos;m a front-end software engineer specializing in building &
          designing exceptional, high-quality websites and applications. As I
          continue this life-long journey of self-learning and mastering my
          craft, I hope to be shaped by the challenges and experiences coming my
          way.
        </p>
        <p className="paragraph mb-5">
          I thrive at the intersection of tech & art/design. I&apos;m passionate
          in combining my technical knowledge and artistic creativity to build
          beautiful UIs, and continue expanding my knowledge in all things
          front-end.
        </p>
        <p className="paragraph mb-5">
          In my free time, I enjoy photography, reading books, bike trails,
          traveling, hiking, and painting.
        </p>
      </div>
    </div>
  );
};
