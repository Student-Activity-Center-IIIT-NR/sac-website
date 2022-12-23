import Head from "next/head";
import ClubsLayout from "../layouts/ClubsLayout";

const Clubs = () => {
  return (
    <>
      <Head>
        <title>SAC | Clubs</title>
        <meta name="viewport" content="width=1200, minimum-scale=0.25" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ClubsLayout />
    </>
  );
};

export default Clubs;
