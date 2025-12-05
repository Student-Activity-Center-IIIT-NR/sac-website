import React from "react";
import Calendar from "../../components/EventCalendar/Calendar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MajorEvents from "./MajorEvents";
import MonthlyCalendar from "./MonthlyCalendar";

const Index = () => {
  return (
    <>
      <Box mt={{ xs: "24px", md: "34px" }} mb={{ xs: "60px", md: "120px" }}>
        <Box sx={{ mb: { xs: "48px", md: "104px" }, overflow: "hidden" }}>
          <Typography
            fontFamily={"Playfair Display"}
            fontStyle={"normal"}
            fontWeight={"400"}
            fontSize={{ xs: "40px", sm: "52px", md: "64px" }}
            lineHeight={{ xs: "52px", sm: "68px", md: "85px" }}
            letterSpacing={{ xs: "0.2em", sm: "0.5em", md: "1em" }}
            color={"#272727"}
            textAlign={"center"}
            sx={{ wordBreak: "keep-all" }}
          >
            &nbsp;EVENTS
          </Typography>
        </Box>
        <Calendar />
        <MajorEvents />
        <MonthlyCalendar />
      </Box>
    </>
  );
};

export default Index;
