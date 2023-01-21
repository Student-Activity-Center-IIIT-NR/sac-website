import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { StaticImageData } from "next/image";

interface Props {
  clubName: string;
  bg: StaticImageData;
}

function ClubBanner({ clubName, bg }: Props) {
  return (
    <>
      <Box
        sx={{
          height: "320px",
          marginTop: "80px",
          maxWidth: "100vw",
          background: `url(${bg.src}) no-repeat`,
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
          color={"#fff"}
        >
          {clubName}
        </Typography>
      </Box>
    </>
  );
}

export default ClubBanner;
