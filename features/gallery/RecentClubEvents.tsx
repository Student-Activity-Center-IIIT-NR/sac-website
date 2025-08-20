import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Stack, useTheme } from "@mui/material";
import Image from "next/image";
import SwipeableViews from "react-swipeable-views-react-18-fix";
import { autoPlay } from "react-swipeable-views-utils-react-18-fix";
import { recentClubEvents } from "../../data/EventsAndGallery/GalleryData";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const RecentClubEvents = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  const len = recentClubEvents.length;

  return (
    <>
      <Box
        sx={{
          my: "64px",
          mx: "80px",
        }}
      >
        <Typography
          fontFamily={"Rubik"}
          fontStyle={"normal"}
          fontWeight={500}
          fontSize={"2rem"}
          lineHeight={"38px"}
          letterSpacing={"0.03571em"}
          color={"#000000"}
        >
          Recent Club Events
        </Typography>
        <Stack
          direction={"row"}
          mt={"84px"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
            style={{
              width: "270px",
              height: "270px",
              borderRadius: "24px",
            }}
          >
            {recentClubEvents.map((step, index) => (
              <div key={step.name}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    sx={{
                      width: "270px",
                      height: "270px",
                      mx: "auto",
                    }}
                  >
                    <Image
                      src={
                        index === 0
                          ? recentClubEvents[len - 1].image[0]
                          : recentClubEvents[index - 1].image[0]
                      }
                      alt={""}
                      height={270}
                      width={270}
                      objectFit={"cover"}
                      style={{
                        borderRadius: "24px",
                      }}
                    />
                  </Box>
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
            style={{
              width: "356px",
              height: "356px",
              borderRadius: "24px",
            }}
          >
            {recentClubEvents.map((step, index) => (
              <div key={step.name}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    sx={{
                      width: "356px",
                      height: "356px",
                      mx: "auto",
                    }}
                  >
                    <Image
                      src={step.image[0]}
                      alt={step.name}
                      height={356}
                      width={356}
                      objectFit={"cover"}
                      style={{
                        borderRadius: "24px",
                      }}
                    />
                  </Box>
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
            style={{
              width: "270px",
              height: "270px",
              borderRadius: "24px",
            }}
          >
            {recentClubEvents.map((step, index) => (
              <div key={step.name}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    sx={{
                      width: "270px",
                      height: "270px",
                      mx: "auto",
                    }}
                  >
                    <Image
                      src={
                        index === len - 1
                          ? recentClubEvents[0].image[0]
                          : recentClubEvents[index + 1].image[0]
                      }
                      alt={""}
                      height={270}
                      width={270}
                      objectFit={"cover"}
                      style={{
                        borderRadius: "24px",
                      }}
                    />
                  </Box>
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
        </Stack>
        <Typography
          fontFamily={"Rubik"}
          fontStyle={"normal"}
          fontWeight={500}
          fontSize={"24px"}
          lineHeight={"28px"}
          textAlign={"center"}
          color={"#000000"}
          mt={"24px"}
        >
          {recentClubEvents[activeStep].name}
        </Typography>
        <Typography
          fontFamily={"Rubik"}
          fontStyle={"normal"}
          fontWeight={500}
          fontSize={"16px"}
          lineHeight={"19px"}
          textAlign={"center"}
          color={"#000000"}
          mt={"10px"}
        >
          {recentClubEvents[activeStep].club}
        </Typography>
        <Typography
          fontFamily={"Rubik"}
          fontStyle={"italic"}
          fontWeight={700}
          fontSize={"14px"}
          lineHeight={"17px"}
          textAlign={"center"}
          color={"#4B5563"}
          mt={"10px"}
        >
          {recentClubEvents[activeStep].date}
        </Typography>
      </Box>
    </>
  );
};

export default RecentClubEvents;
