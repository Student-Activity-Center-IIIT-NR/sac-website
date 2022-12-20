import Head from "next/head";
import TeamLayout from "../layouts/TeamLayout";

function Team() {
  return (
    <div>
      <Head>
        <title>SAC | Team</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TeamLayout />
    </div>
  );
}

export default Team;
