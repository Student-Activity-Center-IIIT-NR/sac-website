import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Typography from "@mui/material/Typography";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useState } from "react";
import Image from "next/image";
import test from "../../assets/test/test.jpeg"; //remove in prod

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "TECHNOVATE 2022",
    imgPath: "./assets/test/test.jpeg",
    date: "5-7 Nov",
  },
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath: "https://images.unsplash.com/photo-1537944434965-cf4679d1a598",
    date: "112/21/21",
  },
  {
    label: "Bird",
    imgPath: "https://images.unsplash.com/photo-1538032746644-0212e812a9e7",
    date: "12/211/21",
  },
  {
    label: "Bali, Indonesia",
    imgPath: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
    date: "12/21/211",
  },
  {
    label: "Goč, Serbia",
    imgPath: "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8",
    date: "12/21/121",
  },
];

const Carousel = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

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
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Image
                // src={step.imgPath}
                src={test}
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
        {images[activeStep].label}
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
        {images[activeStep].date}
      </Typography>
    </Box>
  );
};

export default Carousel;
