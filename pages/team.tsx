// import Head from "next/head";
// import React from "react";
// import Card from "../features/team/components/Card";

// const Team = () => {
//   return (
//     <>
//       <Head>
//         <title>SAC Team</title>
//       </Head>
//       {/* <div>Welcome to the team page</div> */}
//       <Card />
//     </>
//   );
// };

// export default Team;

import Head from "next/head";
import React from "react";
import Card from "../features/team/components/Card";
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
        <TeamContent/>
      </TeamLayout>
    </div>
  )
}

export default Team
