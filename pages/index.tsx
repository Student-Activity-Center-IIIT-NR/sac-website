import type { NextPage } from "next";
import Head from "next/head";
import News from "../features/home/components/News";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>SAC | IIIT Naya Raipur</title>
        <meta
          name="description"
          content="Student Activity Center IIIT Naya Raipur | SAC | SAC IIIT Naya Raipur"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <News />
    </>
  );
};

export default Home;
