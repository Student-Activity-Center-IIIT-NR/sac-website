import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Stack, Box, Typography } from "@mui/material";
import Map from "../../assets/campustour/map.jpeg";
import ReactPlayer from "react-player";
import dynamic from "next/dynamic";

const DynamicReactPlayer = dynamic(() => import("react-player"), {
  ssr: false, // Disable server-side rendering
});

const LandingPage = () => {
  const [isClient, setIsClient] = useState(false);
  const googleDriveVideoUrl = "https://www.youtube.com/watch?v=lj98IwHsGoM";
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <Stack direction="row" justifyContent="space-between">
      <Box margin={"auto"} style={{ marginTop: "-10px" }}>
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
        <div
          style={{
            borderRadius: "15px",
            overflow: "hidden",
            boxShadow: "13px 13px 25px #c9c8c5, -13px -13px 25px #ffffff",
          }}
        >
          <DynamicReactPlayer
            url={googleDriveVideoUrl}
            controls={true}
            width="800px"
            height="470px"
          />
        </div>
      </Box>
      <Box
        style={{
          borderRadius: "15px",
          overflow: "hidden",
          boxShadow: " -7px -7px 35px #c9c8c5 ,  7px 7px 35px #ffffff",
          marginTop: "100px",
          marginRight: "150px",
          height: "470px",
          width: "470px",
        }}
      >
        <Image src={Map} alt="Map" />
      </Box>
    </Stack>
  );
};

export default LandingPage;
