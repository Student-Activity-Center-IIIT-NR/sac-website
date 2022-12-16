import Head from "next/head";
import TeamContent from "../features/team/components/TeamContent";
import TeamLayout from "../layouts/TeamLayout";
import { NextPage } from "next";

const Team: NextPage = () => {
  return (
    <>
      <Head>
        <title>SAC | Team</title>
      </Head>

      <TeamLayout>
        <TeamContent />
      </TeamLayout>
    </>
  );
};

export default Team;
