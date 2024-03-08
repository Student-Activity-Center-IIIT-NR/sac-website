import React from "react";
import Image from "next/image";
import { Stack, Box, Typography } from "@mui/material";
import Map from "../../assets/campustour/map.jpeg";
import ReactPlayer from "react-player";

const LandingPage = () => {
  const googleDriveVideoUrl = "https://www.youtube.com/watch?v=lj98IwHsGoM";

  return (
    <Stack direction="row" justifyContent="space-between">
      <Box margin={"auto"}>
        <Typography
          fontSize={"42px"}
          fontWeight={"1000"}
          fontFamily={"Poppins"}
          fontStyle={"normal"}
          width={"670px"}
          height={"110px"}
        >
          Welcome to IIIT-NR's Campus
        </Typography>
        <div style={{ borderRadius: "15px", overflow: "hidden" }}>
          <ReactPlayer
            url={googleDriveVideoUrl}
            controls={true}
            width="800px"
            height="470px"
          />
        </div>
      </Box>
      <Box marginTop={"45px"}>
        <Image src={Map} alt="" height={"600px"} width={"700px"} />
      </Box>
    </Stack>
  );
};

export default LandingPage;
