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
      <Box mt={"130px"} px={"80px"}>
        <Typography
          fontFamily={"Rubik"}
          fontStyle={"normal"}
          fontWeight={500}
          fontSize={"2rem"}
          lineHeight={"38px"}
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
            mt: "108px",
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
            }}
          >
            <KeyboardArrowLeft />
          </Button>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {recentMajorEventsData.map((step, index) => (
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"center"}
                columnGap={"120px"}
                key={step.desc}
              >
                {Math.abs(activeStep - index) <= 2 ? (
                  <Image
                    src={step.poster}
                    height={358}
                    width={358}
                    objectFit={"cover"}
                    alt=""
                    style={{
                      borderRadius: "18px",
                    }}
                  />
                ) : null}
                <Typography
                  fontFamily={"Rubik"}
                  fontStyle={"normal"}
                  fontWeight={400}
                  fontSize={"1rem"}
                  lineHeight={"28px"}
                  color={"#000"}
                  maxWidth={"453px"}
                >
                  {step.desc}
                </Typography>
              </Stack>
            ))}
          </AutoPlaySwipeableViews>
          <Button
            disableRipple
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            sx={{
              "&:hover": {
                bgcolor: "transparent",
              },
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
