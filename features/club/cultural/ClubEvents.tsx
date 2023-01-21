import React, { ReactNode } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import starIcon from "../../../assets/icon/icon_star.svg";
import Stack from "@mui/material/Stack";
import Link from "next/link";

interface EventProps {
  name: string;
  date: string;
  children: ReactNode;
  link: string;
}

const Event = ({ name, date, children, link }: EventProps) => {
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
            {name}
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
            {date}
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
          {children}
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
          <Link href={link}>Register</Link>
        </Typography>
      </Stack>
    </>
  );
};

function ClubEvents() {
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
        mt={"108px"}
      >
        Upcoming Events
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          rowGap: "44px",
          pt: "48px",
        }}
      >
        <Event name="Event1" date={"12/01/2023"} link="">
          In a technical institute like ours we aim at bringing out the hidden
          artists in IIIT-NR. We bring together all forms of art- digital art,
          canvas painting, pencil art, mandala art, pen art, doodling and the
          list goes on. We are also a bridge that connects art to craft. To name
          a few craft work that artists in the club practice are quilling,
          origami and handicraft.
        </Event>
        <Event name="Event1" date={"12/01/2023"} link="">
          In a technical institute like ours we aim at bringing out the hidden
          artists in IIIT-NR. We bring together all forms of art- digital art,
          canvas painting, pencil art, mandala art, pen art, doodling and the
          list goes on. We are also a bridge that connects art to craft. To name
          a few craft work that artists in the club practice are quilling,
          origami and handicraft.
        </Event>
        <Event name="Event1" date={"12/01/2023"} link="">
          In a technical institute like ours we aim at bringing out the hidden
          artists in IIIT-NR. We bring together all forms of art- digital art,
          canvas painting, pencil art, mandala art, pen art, doodling and the
          list goes on. We are also a bridge that connects art to craft. To name
          a few craft work that artists in the club practice are quilling,
          origami and handicraft.
        </Event>
      </Box>
    </>
  );
}

export default ClubEvents;
