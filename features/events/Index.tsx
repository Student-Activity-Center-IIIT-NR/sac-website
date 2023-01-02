import React from "react";
import Calendar from "../../components/EventCalendar/Calendar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MajorEvents from "./MajorEvents";

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
          EVENTS
        </Typography>
        <Calendar />
        <MajorEvents />
      </Box>
    </>
  );
};

export default Index;
