import Head from "next/head";
import { NextPage } from "next";
import GatePassLayout from "../../layouts/GatePassLayout";
import LandingPage from "../../features/getpass/LandingPage";

const Gatepass: NextPage = () => {
  return (
    <>
      <Head>
        <title>SAC | GATEPASS</title>
        <meta name="viewport" content="width=1200, minimum-scale=0.25" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GatePassLayout>
        <LandingPage />
      </GatePassLayout>
    </>
  );
};

export default Gatepass;
