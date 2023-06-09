import React from "react";
import Image from "next/image";
import { Stack, Box, Typography } from "@mui/material";
import Landingpg from "../../assets/gatepass/gatepass.svg";
import Google from "../../assets/gatepass/google.svg";
import Apple from "../../assets/gatepass/apple.svg";
import Link from "next/link";

const LandingPage = () => {
  return (
    <Stack direction="row" justifyContent="space-between">
      <Box margin={"auto"}>
        <Box
          sx={{
            backgroundColor: "#54DEE7",
            width: "fit-content",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <Typography
            height={"21px"}
            fontFamily={"Poppins"}
            fontWeight={"670"}
            fontSize={"19px"}
            lineHeight={"21px"}
            letterSpacing={"0.14em"}
            color={"#FFFFFF"}
          >
            INTRODUCING GATEPASS APP
          </Typography>
        </Box>

        <Typography
          marginTop={"25px"}
          fontSize={"51px"}
          fontWeight={"1000"}
          fontFamily={"Poppins"}
          lineHeight={"73px"}
          fontStyle={"normal"}
          width={"670px"}
          height={"219px"}
        >
          An Easy-to-Use <br /> Mobile App for Seamless Institute Entry and Exit
        </Typography>
        <Typography
          marginTop={"40px"}
          fontSize={"20px"}
          fontWeight={"400"}
          lineHeight={"32px"}
          width={"548px"}
          height={"143px"}
          color={"#80868B"}
        >
          Say goodbye to long lines and complex entry protocols with our new
          mobile app designed to simplify the process of entering and exiting
          the institute. Our app is easy to use and ensures a hassle-free
          experience for students, faculty, and staff alike. Download now and
          enjoy seamless access to the institute!{" "}
        </Typography>
        <Box marginTop={"100px"} display={"flex"} gap="60px">
          <Box
            sx={{
              cursor: "pointer",
            }}
          >
            <Link
              href={
                "https://drive.google.com/drive/folders/1EgHvarOl68TiMNuvLFSbPV1buuKR_PUE?usp=share_link"
              }
            >
              <Image src={Apple} alt="" height={"100px"} width={"200px"} />
            </Link>
          </Box>
          <Box
            sx={{
              cursor: "pointer",
            }}
          >
            <Link
              href={
                "https://drive.google.com/drive/folders/1EgHvarOl68TiMNuvLFSbPV1buuKR_PUE?usp=share_link"
              }
            >
              <Image src={Google} alt="" height={"100px"} width={"200px"} />
            </Link>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "#54DEE7",
            width: "fit-content",
            borderRadius: "8px",
            padding: "8px",
            mb: 4,
          }}
        >
          <Typography
            fontFamily={"Poppins"}
            fontWeight={"500"}
            fontSize={"18px"}
            letterSpacing={"0.14em"}
          >
            <Link href={"/gatepass/policy"}>Privacy Policy</Link>
          </Typography>
        </Box>
        <Typography
          marginTop={"40px"}
          fontSize={"20px"}
          fontWeight={"400"}
          lineHeight={"32px"}
          width={"548px"}
          height={"143px"}
          color={"#80868B"}
        >
          <strong>Data Deletion:</strong> The users can simply delete their
          accounts by logging out of the app. All the stored data will be
          deleted after the user completes the course (4 years) without any
          request being made.
        </Typography>
      </Box>
      <Box>
        <Image src={Landingpg} alt="" height={"900px"} width={"700px"} />
      </Box>
    </Stack>
  );
};

export default LandingPage;
