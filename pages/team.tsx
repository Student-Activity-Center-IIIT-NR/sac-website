import Head from "next/head";
import TeamLayout from "../layouts/TeamLayout";
import TeamNavbar from "../features/team/TeamNavbar";
import TeamHeader from "../features/team/TeamHeader/TeamHeader";
import { NextPage } from "next";

const Team: NextPage = () => {
  return (
    <>
      <Head>
        <title>SAC | Team</title>
        <meta name="viewport" content="width=1200, minimum-scale=0.25" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TeamLayout>
        <TeamHeader />
        <TeamNavbar />
      </TeamLayout>
    </>
  );
};

export default Team;
