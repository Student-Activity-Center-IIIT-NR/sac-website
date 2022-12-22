import Head from "next/head";
import ClubsLayout from "../layouts/ClubsLayout";

const Clubs = () => {
  return (
    <>
      <Head>
        <title>SAC | Clubs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ClubsLayout />
    </>
  );
};

export default Clubs;
