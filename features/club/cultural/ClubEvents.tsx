import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import clubs from "./ClubsInfo";
import Image from "next/image";
import starIcon from "../../../assets/icon_star.svg";
import Stack from "@mui/material/Stack";
import Link from "next/link";

const Event = () => {
  return (
    <>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        rowGap={"20px"}
        maxWidth={"930px"}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          columnGap={"13px"}
        >
          <Typography
            fontFamily="Cotta"
            fontStyle="normal"
            fontWeight="400"
            fontSize="32px"
            lineHeight="35px"
            textAlign="center"
            color="#000000"
          >
            Event 1
          </Typography>
          <Image src={starIcon} alt="" width={"17px"} objectFit="contain" />
          <Typography
            fontFamily="Cotta"
            fontStyle="normal"
            fontWeight="400"
            fontSize="32px"
            lineHeight="35px"
            textAlign="center"
            color="#000000"
          >
            12/1/23
          </Typography>
        </Stack>
        <Typography
          fontFamily="Baskervville"
          fontStyle="normal"
          fontWeight="400"
          fontSize="16px"
          lineHeight="21px"
          textAlign="center"
          color="#000000"
        >
          In a technical institute like ours we aim at bringing out the hidden
          artists in IIIT-NR. We bring together all forms of art- digital art,
          canvas painting, pencil art, mandala art, pen art, doodling and the
          list goes on. {"We're"} also a bridge that connects art to craft. To
          name a few craft work that artists in the club practice are quilling,
          origami and handicraft.
        </Typography>
        <Typography
          fontFamily="Baskervville"
          fontStyle="normal"
          fontWeight="400"
          fontSize="16px"
          lineHeight="21px"
          textAlign="center"
          color="#000000"
        >
          Form:
          <Link href={""}>&nbsp; https://bit.ly/3WrawB6</Link>
        </Typography>
      </Stack>
    </>
  );
};

function ClubEvents({ clubName }: { clubName: any }) {
  const club_for_event = clubs
    .filter((item) => item.name == clubName)
    .map((data) => data.Events);

  return (
    <>
      <Typography
        fontFamily={"Baskervville"}
        fontStyle={"normal"}
        fontWeight={"400"}
        fontSize={"48px"}
        lineHeight={"62px"}
        color={"#000"}
        mx={"auto"}
        sx={{ marginTop: "60px" }}
      >
        Upcoming Events
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          rowGap: "64px",
          pt: "28px",
        }}
      >
        {club_for_event[0]?.map((item, index) => {
          return (
            <>
              <Event />
              <Event />
              <Event />
            </>
          );
        })}
      </Box>
    </>
  );
}

export default ClubEvents;
