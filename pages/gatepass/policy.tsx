import PrivacyPolicy from "../../features/getpass/PrivacyPolicy";
import GatePassLayout from "../../layouts/GatePassLayout";
import Head from "next/head";

const Policy = () => {
  return (
    <>
      <Head>
        <title>SAC | GATEPASS</title>
        <meta name="viewport" content="width=1200, minimum-scale=0.25" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GatePassLayout>
        <PrivacyPolicy />
      </GatePassLayout>
    </>
  );
};

export default Policy;
