import React, { useState, useEffect } from "react";
import SwipeableViews from "react-swipeable-views-react-18-fix";
import { autoPlay } from "react-swipeable-views-utils-react-18-fix";
import Image from "next/image";
import { Box, Typography, Button, Stack, useTheme } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { recentMajorEventsData } from "../../data/EventsAndGallery/RecentMajorEventsData";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const MajorEvents = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = recentMajorEventsData.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <>
      <Box mt={{ xs: "60px", sm: "80px", md: "130px" }} px={{ xs: 2, sm: 3, md: "40px", lg: "80px" }}>
        <Typography
          fontFamily={"Rubik"}
          fontStyle={"normal"}
          fontWeight={500}
          fontSize={{ xs: "1.5rem", sm: "1.75rem", md: "2rem" }}
          lineHeight={{ xs: "32px", sm: "36px", md: "38px" }}
          color={"#000"}
          textAlign={"left"}
        >
          Recent Major Events
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            mt: { xs: "40px", sm: "60px", md: "108px" },
          }}
        >
          <Button
            disableRipple
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
            sx={{
              "&:hover": {
                bgcolor: "transparent",
              },
              display: { xs: "none", md: "block" },
            }}
          >
            <KeyboardArrowLeft />
          </Button>
          <Box sx={{ flex: 1, overflow: "hidden" }}>
            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {recentMajorEventsData.map((step, index) => (
                <Stack
                  direction={{ xs: "column", md: "row" }}
                  alignItems={"center"}
                  justifyContent={"center"}
                  columnGap={{ md: "60px", lg: "120px" }}
                  rowGap={{ xs: 3, md: 0 }}
                  key={step.desc}
                  px={{ xs: 1, md: 0 }}
                >
                  {Math.abs(activeStep - index) <= 2 ? (
                    <Box
                      sx={{
                        width: { xs: "280px", sm: "320px", md: "358px" },
                        height: { xs: "280px", sm: "320px", md: "358px" },
                        flexShrink: 0,
                      }}
                    >
                      <Image
                        src={step.poster}
                        height={358}
                        width={358}
                        objectFit={"cover"}
                        alt=""
                        style={{
                          borderRadius: "18px",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </Box>
                  ) : null}
                  <Typography
                    fontFamily={"Rubik"}
                    fontStyle={"normal"}
                    fontWeight={400}
                    fontSize={{ xs: "0.875rem", sm: "0.95rem", md: "1rem" }}
                    lineHeight={{ xs: "24px", sm: "26px", md: "28px" }}
                    color={"#000"}
                    maxWidth={{ xs: "100%", md: "453px" }}
                    textAlign={{ xs: "center", md: "left" }}
                  >
                    {step.desc}
                  </Typography>
                </Stack>
              ))}
            </AutoPlaySwipeableViews>
          </Box>
          <Button
            disableRipple
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            sx={{
              "&:hover": {
                bgcolor: "transparent",
              },
              display: { xs: "none", md: "block" },
            }}
          >
            <KeyboardArrowRight />
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default MajorEvents;
