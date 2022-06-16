import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="bg-black min-h-screen flex justify-center flex-col">
      <Head>
        <title>Kelvin Brito</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Intro />
        <div className="mx-auto">
          <About />
          <Projects />
          <Skills />
          <Connect />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
