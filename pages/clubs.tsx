import Head from "next/head";
import ClubsLayout from "../layouts/ClubsLayout";
import ClubOverview from "../features/club/ClubOverview";

const Clubs = () => {
  return (
    <>
      <Head>
        <title>SAC | Clubs</title>
        <meta name="viewport" content="width=1200, minimum-scale=0.25" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ClubsLayout>
        <ClubOverview />
      </ClubsLayout>
    </>
  );
};

export default Clubs;
