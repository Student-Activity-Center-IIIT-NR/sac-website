import Head from "next/head";
import TeamContent from "../features/team/components/TeamContent";
import TeamLayout from "../layouts/TeamLayout";

function Team() {
  return (
    <div>
      <Head>
        <title>SAC | Team</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TeamLayout>
        <TeamContent />
      </TeamLayout>
    </div>
  );
}

export default Team;
