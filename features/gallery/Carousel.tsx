import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Typography from "@mui/material/Typography";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useState } from "react";
import Image from "next/image";
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
              <Image
                src={step.img}
                alt={step.label}
                height={"520px"}
                objectFit={"cover"}
                style={{
                  borderRadius: "24px",
                }}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
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
        fontSize={"24px"}
        lineHeight={"28px"}
        textAlign={"center"}
        color={"#000000"}
        mt={"40px"}
      >
        {majorEvents[activeStep].label}
      </Typography>
      <Typography
        fontFamily={"Rubik"}
        fontStyle={"italic"}
        fontWeight={700}
        fontSize={"14px"}
        lineHeight={"17px"}
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
