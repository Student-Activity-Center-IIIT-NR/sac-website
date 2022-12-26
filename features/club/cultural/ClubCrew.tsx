import React from "react";
import Box from "@mui/material/Box";
import club_background from "../../../assets/cultural_clubs_bg/club_background.png";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import crew1 from "../../../assets/test/test.jpeg";
import Stack from "@mui/system/Stack";
import iconArrow from "../../../assets/icon_arrow_long.svg";

function ClubCrew() {
  const CrewCard = () => {
    return (
      <>
        <Stack direction={"column"} rowGap={"12px"}>
          <Box
            sx={{
              width: "286px",
              height: "380px",
            }}
          >
            <Image
              src={crew1}
              width={"286px"}
              height={"380px"}
              alt=""
              objectFit="cover"
            />
          </Box>
          <Typography
            fontFamily="Baskervville"
            fontStyle="Regular"
            fontWeight="400"
            fontSize="20px"
            lineHeight="27.5px"
          >
            Dr. Vivek Tiwari
            <br />
            Faculty Mentor
          </Typography>
        </Stack>
      </>
    );
  };

  return (
    <>
      <Stack mt={"117px"}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              rowGap: "16px",
              ml: "110px",
              mr: "90px",
            }}
          >
            <Typography
              fontFamily="Rubik"
              fontStyle="normal"
              fontWeight="400"
              fontSize="48px"
              lineHeight="57px"
              textAlign="center"
              color="#565A6E"
            >
              Meet the Crew
            </Typography>
            <Box
              sx={{
                width: "129px",
                height: "72px",
                border: "1px solid #C0CAF5",
                borderRadius: "24px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Image src={iconArrow} alt="" />
            </Box>
          </Box>
          <Box
            sx={{
              overflowX: "scroll",
              display: "flex",
              flexDirection: "row",
              columnGap: "96px",
              pr: "30px",
            }}
          >
            <CrewCard />
            <CrewCard />
            <CrewCard />
            <CrewCard />
          </Box>
        </Box>
      </Stack>
    </>
  );
}

export default ClubCrew;
