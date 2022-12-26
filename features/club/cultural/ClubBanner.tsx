import React from "react";
import club_background from "../../../assets/cultural_clubs_bg/club_background.png";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface Props {
  clubName: string;
}

function ClubBanner({ clubName }: Props) {
  return (
    <>
      <Box
        height={"320px"}
        sx={{
          marginTop: "80px",
          maxWidth: "100vw",
          background: `url(${club_background.src}) no-repeat`,
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          fontFamily={"Rubik"}
          fontStyle={"normal"}
          fontWeight={"400"}
          fontSize={"96px"}
          color={"#FFFFFF"}
        >
          {clubName}
        </Typography>
      </Box>
    </>
  );
}

export default ClubBanner;
