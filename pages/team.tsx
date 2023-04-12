import Head from "next/head";
import TeamLayout from "../layouts/TeamLayout";
import TeamNavbar from "../features/team/TeamNavbar";
import TeamHeader from "../features/team/TeamHeader/TeamHeader";
import { NextPage } from "next";
import { useMediaQuery } from "@mui/material";
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import MobileTeamLayout from "../mobile_ui/layouts/MobileTeamLayout";
import TeamContent from "../mobile_ui/features/team/TeamContent";

const Team: NextPage = () => {

  const matches = useMediaQuery('(min-width:963px)')

  return (
    <>
      <Head>
        <title>SAC | Team</title>
        <meta name="viewport" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {matches ? <TeamLayout>
        <TeamHeader />
        <TeamNavbar />
      </TeamLayout> : 
      <MobileTeamLayout>
        <TeamContent/>
      </MobileTeamLayout>
      }
      
    </>
  );
};

export default Team;
