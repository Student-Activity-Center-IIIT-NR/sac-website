import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Stack, useTheme, MobileStepper } from "@mui/material";
import Image from "next/image";
import SwipeableViews from "react-swipeable-views-react-18-fix";
import { autoPlay } from "react-swipeable-views-utils-react-18-fix";
import { majorEvents } from "../../data/EventsAndGallery/GalleryData";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Carousel = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = majorEvents.length;

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: { xs: "100%", sm: "600px", md: "800px", lg: "1000px" },
        }}
      >
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          style={{
            borderRadius: "24px",
          }}
        >
          {majorEvents.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  sx={{
                    width: "100%",
                    height: { xs: "300px", sm: "400px", md: "520px" },
                    position: "relative",
                  }}
                >
                  <Image
                    src={step.img}
                    alt={step.label}
                    fill
                    style={{
                      objectFit: "cover",
                      borderRadius: "24px",
                    }}
                  />
                </Box>
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
      </Box>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={""}
        backButton={""}
      />
      <Typography
        fontFamily={"Rubik"}
        fontStyle={"normal"}
        fontWeight={500}
        fontSize={{ xs: "18px", sm: "20px", md: "24px" }}
        lineHeight={{ xs: "24px", sm: "26px", md: "28px" }}
        textAlign={"center"}
        color={"#000000"}
        mt={{ xs: "24px", md: "40px" }}
        px={{ xs: 2, md: 0 }}
      >
        {majorEvents[activeStep].label}
      </Typography>
      <Typography
        fontFamily={"Rubik"}
        fontStyle={"italic"}
        fontWeight={700}
        fontSize={{ xs: "12px", sm: "13px", md: "14px" }}
        lineHeight={{ xs: "16px", sm: "17px" }}
        textAlign={"center"}
        color={"#4B5563"}
        mt={"12px"}
      >
        {majorEvents[activeStep].date}
      </Typography>
    </Box>
  );
};

export default Carousel;
