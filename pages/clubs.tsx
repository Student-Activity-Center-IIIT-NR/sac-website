import Head from "next/head";
import ClubsLayout from "../layouts/ClubsLayout";
import { NextPage } from "next";
import TechnicalOverview from "../features/club/TechnicalOverview";
import SportsOverview from "../features/club/SportsOverview";
import CulturalOverview from "../features/club/CulturalOverview";
import MediaOverview from "../features/club/MediaOverview";

const Clubs: NextPage = () => {
  return (
    <>
      <Head>
        <title>SAC | Clubs</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ClubsLayout>
        <TechnicalOverview />
        <CulturalOverview />
        <SportsOverview />
        <MediaOverview />
      </ClubsLayout>
    </>
  );
};

export default Clubs;
