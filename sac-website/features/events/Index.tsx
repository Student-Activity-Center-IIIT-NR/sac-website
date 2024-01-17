import React from "react";
import Calendar from "../../components/EventCalendar/Calendar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MajorEvents from "./MajorEvents";
import MonthlyCalendar from "./MonthlyCalendar";

const Index = () => {
  return (
    <>
      <Box mt={"34px"} mb={"120px"}>
        <Typography
          fontFamily={"Playfair Display"}
          fontStyle={"normal"}
          fontWeight={"400"}
          fontSize={"64px"}
          lineHeight={"85px"}
          letterSpacing={"1em"}
          color={"#272727"}
          textAlign={"center"}
          mb={"104px"}
        >
          &nbsp;EVENTS
        </Typography>
        <Calendar />
        <MajorEvents />
        <MonthlyCalendar />
      </Box>
    </>
  );
};

export default Index;
