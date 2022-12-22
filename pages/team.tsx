import Head from "next/head";
import TeamLayout from "../layouts/TeamLayout";

function Team() {
  return (
    <div>
      <Head>
        <title>SAC | Team</title>
        <meta name="viewport" content="width=1200, minimum-scale=0.25" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TeamLayout />
    </div>
  );
}

export default Team;
