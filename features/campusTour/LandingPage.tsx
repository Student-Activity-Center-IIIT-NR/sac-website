import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Stack, Box, Typography } from "@mui/material";
import Map from "../../assets/campustour/map-iiitnr.png";
// import ReactPlayer from "react-player";
import dynamic from "next/dynamic";

const DynamicReactPlayer = dynamic(() => import("react-player"), {
  ssr: false, // Disable server-side rendering
});

const LandingPage = () => {
  const [isClient, setIsClient] = useState(false);
  const googleDriveVideoUrl = "https://youtu.be/YpxA0tJVJLA";
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <Stack
      direction={{ xs: "column", lg: "row" }}
      justifyContent="space-between"
      gap={{ xs: 4, lg: 0 }}
      px={{ xs: 2, sm: 3, md: 4, lg: 0 }}
      py={{ xs: 4, lg: 0 }}
    >
      <Box
        margin={{ xs: "0", lg: "auto" }}
        width={{ xs: "100%", lg: "auto" }}
        sx={{ marginTop: { xs: "0", lg: "-10px" } }}
      >
        <Typography
          fontSize={{ xs: "28px", sm: "32px", md: "36px", lg: "42px" }}
          fontWeight={"1000"}
          fontFamily={"Poppins"}
          fontStyle={"normal"}
          width={{ xs: "100%", lg: "670px" }}
          maxWidth="100%"
          height={"auto"}
          mb={{ xs: 3, lg: 2 }}
        >
          Welcome to IIIT-NR's Campus
        </Typography>
        <Box
          sx={{
            borderRadius: "15px",
            overflow: "hidden",
            boxShadow: "13px 13px 25px #c9c8c5, -13px -13px 25px #ffffff",
            width: "100%",
            maxWidth: { xs: "100%", lg: "700px" },
            aspectRatio: "700 / 470",
            position: "relative",
          }}
        >
          <DynamicReactPlayer
            url={googleDriveVideoUrl}
            controls={true}
            width="100%"
            height="100%"
          />
        </Box>
      </Box>
      <Box
        sx={{
          borderRadius: "15px",
          overflow: "hidden",
          boxShadow: "-7px -7px 35px #c9c8c5, 7px 7px 35px #ffffff",
          marginTop: { xs: "0", lg: "100px" },
          marginRight: { xs: "0", lg: "110px" },
          width: { xs: "100%", sm: "90%", md: "80%", lg: "596px" },
          maxWidth: "100%",
          aspectRatio: "596 / 470",
          position: "relative",
          mx: { xs: "auto", lg: 0 },
        }}
      >
        <Image
          src={Map}
          alt="Map"
          fill
          style={{ objectFit: "cover" }}
        />
      </Box>
    </Stack>
  );
};

export default LandingPage;
