import Head from "next/head";
import React from "react";
import Card from "../features/team/components/Card";

const Team = () => {
  return (
    <>
      <Head>
        <title>SAC Team</title>
      </Head>
      {/* <div>Welcome to the team page</div> */}
      <Card />
    </>
  );
};

export default Team;
