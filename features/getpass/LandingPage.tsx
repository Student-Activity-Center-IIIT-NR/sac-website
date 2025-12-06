import React from "react";
import Image from "next/image";
import { Stack, Box, Typography } from "@mui/material";
import Landingpg from "../../assets/gatepass/gatepass.svg";
import Google from "../../assets/gatepass/google.svg";
import lan from "../../assets/gatepass/lan.svg";
import Link from "next/link";

const LandingPage = () => {
  return (
    <Stack
      direction={{ xs: "column", lg: "row" }}
      justifyContent="space-between"
      gap={{ xs: 4, lg: 0 }}
      px={{ xs: 2, sm: 3, md: 4, lg: 0 }}
      py={{ xs: 4, lg: 0 }}
    >
      <Box margin={{ xs: "0", lg: "auto" }} width={{ xs: "100%", lg: "auto" }}>
        <Box
          sx={{
            backgroundColor: "#54DEE7",
            width: "fit-content",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            padding: { xs: "8px 12px", md: "10px" },
          }}
        >
          <Typography
            height={"auto"}
            fontFamily={"Poppins"}
            fontWeight={"670"}
            fontSize={{ xs: "14px", sm: "16px", md: "19px" }}
            lineHeight={{ xs: "18px", sm: "20px", md: "21px" }}
            letterSpacing={{ xs: "0.08em", md: "0.14em" }}
            color={"#FFFFFF"}
          >
            INTRODUCING GATEPASS APP
          </Typography>
        </Box>

        <Typography
          marginTop={{ xs: "20px", md: "25px" }}
          fontSize={{ xs: "28px", sm: "36px", md: "44px", lg: "51px" }}
          fontWeight={"1000"}
          fontFamily={"Poppins"}
          lineHeight={{ xs: "38px", sm: "48px", md: "60px", lg: "73px" }}
          fontStyle={"normal"}
          width={{ xs: "100%", lg: "670px" }}
          maxWidth="100%"
          height={"auto"}
        >
          An Easy-to-Use <br /> Mobile App for Seamless Institute Entry and Exit
        </Typography>
        <Typography
          marginTop={{ xs: "24px", md: "40px" }}
          fontSize={{ xs: "16px", sm: "18px", md: "20px" }}
          fontWeight={"400"}
          lineHeight={{ xs: "26px", sm: "28px", md: "32px" }}
          width={{ xs: "100%", lg: "548px" }}
          maxWidth="100%"
          height={"auto"}
          color={"#80868B"}
        >
          Say goodbye to long lines and complex entry protocols with our new
          mobile app designed to simplify the process of entering and exiting
          the institute. Our app is easy to use and ensures a hassle-free
          experience for students, faculty, and staff alike. Download now and
          enjoy seamless access to the institute!{" "}
        </Typography>
        <Box
          marginTop={{ xs: "40px", md: "60px", lg: "100px" }}
          display={"flex"}
          gap={{ xs: "20px", sm: "40px", md: "60px" }}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <Box
            sx={{
              cursor: "pointer",
              width: { xs: "100%", sm: "auto" },
              maxWidth: { xs: "250px", sm: "200px" },
            }}
          >
            <a href={"https://hms.iiitnr.edu.in:3000/#/"} target="_blank">
              <Image
                src={lan}
                alt="Download from LAN"
                height={100}
                width={200}
                style={{ width: "100%", height: "auto" }}
              />
            </a>
          </Box>
          <Box
            sx={{
              cursor: "pointer",
              width: { xs: "100%", sm: "auto" },
              maxWidth: { xs: "250px", sm: "200px" },
            }}
          >
            <Link
              href={
                "https://drive.google.com/drive/folders/1EgHvarOl68TiMNuvLFSbPV1buuKR_PUE?usp=share_link"
              }
            >
              <Image
                src={Google}
                alt="Download from Google Drive"
                height={100}
                width={200}
                style={{ width: "100%", height: "auto" }}
              />
            </Link>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "#54DEE7",
            width: "fit-content",
            borderRadius: "8px",
            padding: { xs: "6px 10px", md: "8px" },
            mb: { xs: 2, md: 4 },
            mt: { xs: 3, md: 4 },
          }}
        >
          <Typography
            fontFamily={"Poppins"}
            fontWeight={"500"}
            fontSize={{ xs: "16px", md: "18px" }}
            letterSpacing={{ xs: "0.08em", md: "0.14em" }}
          >
            <Link href={"/gatepass/policy"}>Privacy Policy</Link>
          </Typography>
        </Box>
        <Typography
          marginTop={{ xs: "24px", md: "40px" }}
          fontSize={{ xs: "16px", sm: "18px", md: "20px" }}
          fontWeight={"400"}
          lineHeight={{ xs: "26px", sm: "28px", md: "32px" }}
          width={{ xs: "100%", lg: "548px" }}
          maxWidth="100%"
          height={"auto"}
          color={"#80868B"}
          mb={{ xs: 4, lg: 0 }}
        >
          <strong>Data Deletion:</strong> The users can simply delete their
          accounts by logging out of the app. All the stored data will be
          deleted after the user completes the course (4 years) without any
          request being made.
        </Typography>
      </Box>
      <Box
        sx={{
          width: { xs: "100%", sm: "90%", md: "80%", lg: "700px" },
          maxWidth: "100%",
          height: { xs: "auto", lg: "900px" },
          position: "relative",
          mx: { xs: "auto", lg: 0 },
        }}
      >
        <Image
          src={Landingpg}
          alt="Gatepass App"
          fill
          style={{ objectFit: "contain" }}
        />
      </Box>
    </Stack>
  );
};

export default LandingPage;
