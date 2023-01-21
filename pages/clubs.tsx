import Head from "next/head";
import ClubsLayout from "../layouts/ClubsLayout";
import { NextPage } from "next";
import TechnicalOverview from "../features/club/TechnicalOverview";
import SportsOverview from "../features/club/SportsOverview";
import CulturalOverview from "../features/club/CulturalOverview";

const Clubs: NextPage = () => {
  return (
    <>
      <Head>
        <title>SAC | Clubs</title>
        <meta name="viewport" content="width=1200, minimum-scale=0.25" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ClubsLayout>
        <TechnicalOverview />
        <CulturalOverview />
        <SportsOverview />
      </ClubsLayout>
    </>
  );
};

export default Clubs;
