import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useState } from "react";
import Image from "next/image";
import test from "../../assets/test/test.jpeg"; //remove in prod

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const RecentClubEvents = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  //   const maxSteps = images.length;

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

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
            {images.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    sx={{
                      width: "270px",
                      height: "270px",
                      mx: "auto",
                    }}
                  >
                    <Image
                      // src={step.imgPath}
                      src={test}
                      alt={step.label}
                      height={"270px"}
                      width={"270px"}
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
            {images.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    sx={{
                      width: "356px",
                      height: "356px",
                      mx: "auto",
                    }}
                  >
                    <Image
                      // src={step.imgPath}
                      src={test}
                      alt={step.label}
                      height={"356px"}
                      width={"356px"}
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
            {images.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    sx={{
                      width: "270px",
                      height: "270px",
                      mx: "auto",
                    }}
                  >
                    <Image
                      // src={step.imgPath}
                      src={test}
                      alt={step.label}
                      height={"270px"}
                      width={"270px"}
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
          {images[activeStep].label}
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
          mt={"10px"}
        >
          {images[activeStep].label}
        </Typography>
      </Box>
    </>
  );
};

export default RecentClubEvents;

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
