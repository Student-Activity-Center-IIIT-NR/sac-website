import React from "react";
import Box from "@mui/material/Box";
import club_background from "../../../assets/club_background.png";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import crew1 from "../../../assets/Mentor_1.png";
import Stack from "@mui/system/Stack";

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
      <Box
        height={"296px"}
        sx={{
          marginTop: "261px",
          background: `url(${club_background.src}) no-repeat`,
          backgroundSize: "cover",
          maxHeight: "296px",
          alignItems: "center",
          display: "flex",
          // justifyContent: "center",
          columnGap: "94px",
          // overflowX: "scroll",
        }}
      >
        <Typography
          variant="body1"
          fontFamily={"Cotta"}
          fontStyle={"Regular"}
          fontWeight={400}
          fontSize={"48px"}
          lineHeight={"70px"}
          color={"#FFFFFF"}
          sx={{
            textAlign: "center",
            display: "flex",
            // alignItems: "center",
            // justifyContent: "center",
          }}
        >
          Meet the crew
        </Typography>

        <Box
          sx={{
            overflowX: "scroll",
            scrollbarWidth:"none",
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
    </>
  );
}

export default ClubCrew;
