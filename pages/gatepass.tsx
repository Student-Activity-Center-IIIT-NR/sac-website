import Head from "next/head";
import Index from "../features/gallery/Index";
import { NextPage } from "next";
import GatePassLayout from "../layouts/GatePassLayout";
import LandingPage from "../features/getpass/LandingPage";

const Gatepass: NextPage = () => {
  return (
    <>
      <Head>
        <title>SAC | Gatepass</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GatePassLayout>
        <LandingPage />
      </GatePassLayout>
    </>
  );
};

export default Gatepass;
