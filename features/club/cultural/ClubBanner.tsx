import React from "react";
import club_background from "../../../assets/club_background.png";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function ClubBanner({clubName} : {clubName : any}) {
  return (
    <>
      <Box
        height={"272px"}
        sx={{
          marginTop: "97.23px",
          maxWidth: "100vw",
          background: `url(${club_background.src}) no-repeat`,
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant={"h1"}
          fontWeight={"400"}
          fontSize={"96px"}
          fontFamily={"Cotta"}
          lineHeight={"28px"}
          fontStyle={"normal"}
          color={"#FFFFFF"}
        >
          {clubName}
        </Typography>
      </Box>
    </>
  );
}

export default ClubBanner;
