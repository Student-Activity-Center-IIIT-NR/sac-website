import Head from "next/head";
import { NextPage } from "next";
import CampusTourLayout from "../layouts/CampusTourLayout";
import LandingPage from "../features/campusTour/LandingPage";

const Gatepass: NextPage = () => {
  return (
    <>
      <Head>
        <title>SAC | CAMPUS TOUR</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CampusTourLayout>
        <LandingPage />
      </CampusTourLayout>
    </>
  );
};

export default Gatepass;
