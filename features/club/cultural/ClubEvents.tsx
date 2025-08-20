import React, { ReactNode } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import starIcon from "../../../assets/icon/icon_star.svg";
import Stack from "@mui/material/Stack";
import { calendarData } from "../../../data/EventsAndGallery/EventCalendarData";

interface CalendarDataProps {
  date: string;
  eventName: string;
  club: string;
  desc: string;
}

interface EventProps {
  name: string;
  date: string;
  children: ReactNode;
}

interface Props {
  club: string;
}

const Event = ({ name, date, children }: EventProps) => {
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
          <Image src={starIcon} alt="" width={17} objectFit="contain" />
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
        ></Typography>
      </Stack>
    </>
  );
};

function ClubEvents({ club }: Props) {
  const today = new Date();

  const sortedEvents = calendarData.filter((event) => {
    const [eventDay, eventMonth, eventYear] = event.date.split("-").map(Number);
    const eventDate = new Date(eventYear, eventMonth - 1, eventDay);

    return (
      eventDate.getFullYear() >= today.getFullYear() &&
      (eventDate.getMonth() > today.getMonth() ||
        (eventDate.getMonth() === today.getMonth() &&
          eventDate.getDate() >= today.getDate())) &&
      event.club === club
    );
  });

  let earliestTwoEvents: CalendarDataProps[] = [];

  if (sortedEvents.length >= 2) {
    earliestTwoEvents = sortedEvents.slice(0, 2);
  } else if (sortedEvents.length === 1) {
    earliestTwoEvents = [
      ...sortedEvents,
      { date: "", eventName: "No Upcoming Event", club: "", desc: "" },
    ];
  } else {
    earliestTwoEvents = [
      { date: "", eventName: "No Upcoming Event", club: "", desc: "" },
      { date: "", eventName: "No Upcoming Event", club: "", desc: "" },
    ];
  }

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
        {earliestTwoEvents.map((event, key) => {
          return (
            <Event name={event.eventName} date={event.date} key={key}>
              {event.desc}
            </Event>
          );
        })}
      </Box>
    </>
  );
}

export default ClubEvents;
