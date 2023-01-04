import Head from "next/head";
import TeamLayout from "../layouts/TeamLayout";
import TeamNavbar from "../features/team/components/TeamNavbar";
import TeamHeader from "../features/team/components/TeamHeader/TeamHeader";

function Team() {
  return (
    <div>
      <Head>
        <title>SAC | Team</title>
        <meta name="viewport" content="width=1200, minimum-scale=0.25" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TeamLayout>
        <TeamHeader />
        <TeamNavbar />
      </TeamLayout>
    </div>
  );
}

export default Team;
