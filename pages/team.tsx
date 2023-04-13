import Head from "next/head";
import TeamLayout from "../layouts/TeamLayout";
import TeamNavbar from "../features/team/TeamNavbar";
import TeamHeader from "../features/team/TeamHeader/TeamHeader";
import { NextPage } from "next";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileTeamLayout from "../mobile_ui/layout/MobileTeamLayout";

const Team: NextPage = () => {
  const matches = useMediaQuery("(min-width:963px)");

  return (
    <>
      <Head>
        <title>SAC | Team</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {matches ? (
        <TeamLayout>
          <TeamHeader />
          <TeamNavbar />
        </TeamLayout>
      ) : (
        <MobileTeamLayout>TEST</MobileTeamLayout>
      )}
    </>
  );
};

export default Team;
