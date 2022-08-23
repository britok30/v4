import React from "react";
export const About = () => {
  return (
    <div>
      <h1 className="text-white text-2xl md:text-4xl text-center font-bold mt-14">
        Hey there, I&apos;m Kelvin Brito! 👨🏽‍💻
      </h1>

      <div className="w-[17rem] md:w-96 mx-auto">
        <p className="paragraph my-5">
          I&apos;m a front-end software engineer specializing in building & designing
          exceptional, high-quality websites and applications. As I continue
          this life-long journey of self-learning and mastering my craft, I hope
          to be shaped by the challenges and experiences coming my way.
        </p>
        <p className="paragraph mb-5">
          I thrive at the intersection of tech & art/design. I&apos;m passionate in
          combining my technical knowledge and artistic creativity to build
          beautiful UIs, and continue expanding my knowledge in all things
          front-end.
        </p>
        <p className="paragraph mb-5">
          In my free time, I enjoy photography, reading books, bike trails,
          traveling, hiking, and painting.
        </p>
        {/* TODO: Add photography */}
        {/* <p className="paragraph">
          Speaking of photography, here are some of my{" "}
          <Link href="/photos">
            <span className="cursor-pointer underline">shots</span> 
          </Link>
        </p> */}
      </div>
    </div>
  );
};
