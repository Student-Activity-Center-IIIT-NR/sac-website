import type { NextPage } from "next";
import Head from "next/head";
import ClubsOverview from "../features/home/components/ClubsOverview";
import News from "../features/home/components/News";
import BaseLayout from "../layouts/BaseLayout";
import Footer from "../components/Footer/Footer";
import SacOverview from "../features/home/components/SacOverview"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>SAC | IIIT Naya Raipur</title>
        <meta
          name="description"
          content="Student Activity Center IIIT Naya Raipur | SAC | SAC IIIT Naya Raipur"
        />
        <meta name="viewport" content="width=1200, minimum-scale=0.25" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BaseLayout>
        <SacOverview />
        <ClubsOverview />
        <News />
      </BaseLayout>
      <Footer/>
      
    </>
  );
};

export default Home;
