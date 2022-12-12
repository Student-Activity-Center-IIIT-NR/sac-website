import Head from "next/head";
import React from "react";
import Card from "../features/team/components/Card";
import {Pill} from "../features/team/components/Pill"

const Team = () => {
  return (
    <>
      <Head>
        <title>SAC Team</title>
      </Head>
      {/* <div>Welcome to the team page</div> */}
      <Card />
      <Pill/>
    </>
  );
};

export default Team;
