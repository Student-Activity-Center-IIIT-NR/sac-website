import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useState } from "react";
import Image from "next/image";
import test from "../../assets/test/test.jpeg"; //remove in prod
import { Button, Stack, useTheme } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    url: "",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et sagittis massa. Cras neque ante, iaculis ac massa in, maximus egestas erat. Nullam pellentesque quam sit amet suscipit varius. Sed at cursus eros, eu ornare enim. Suspendisse potenti. Ut quis velit sed lorem convallis lacinia.  Nunc at erat feugiat, sodales justo quis, convallis urna. Nam non molestie nibh, ac luctus tellus. Vivamus quis sem ac elit gravida lacinia. Vestibulum malesuada augue vitae odio varius venenatis. Nulla dapibus purus quam, quis ultrices elit suscipit ac. Cras dictum ante sem, ut scelerisque ligula venenatis et. Nam congue leo purus, at varius justo lobortis in.`,
  },
  {
    url: "",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et sagittis massa. Cras neque ante, iaculis ac massa in, maximus egestas erat. Nullam pellentesque quam sit amet suscipit varius. Sed at cursus eros, eu ornare enim. Suspendisse potenti. Ut quis velit sed lorem convallis lacinia.  Nunc at erat feugiat, sodales justo quis, convallis urna. Nam non molestie nibh, ac luctus tellus. Vivamus quis sem ac elit gravida lacinia. Vestibulum malesuada augue vitae odio varius venenatis. Nulla dapibus purus quam, quis ultrices elit suscipit ac. Cras dictum ante sem, ut scelerisque ligula venenatis et. Nam congue leo purus, at varius justo lobortis in.`,
  },
  {
    url: "",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et sagittis massa. Cras neque ante, iaculis ac massa in, maximus egestas erat. Nullam pellentesque quam sit amet suscipit varius. Sed at cursus eros, eu ornare enim. Suspendisse potenti. Ut quis velit sed lorem convallis lacinia.  Nunc at erat feugiat, sodales justo quis, convallis urna. Nam non molestie nibh, ac luctus tellus. Vivamus quis sem ac elit gravida lacinia. Vestibulum malesuada augue vitae odio varius venenatis. Nulla dapibus purus quam, quis ultrices elit suscipit ac. Cras dictum ante sem, ut scelerisque ligula venenatis et. Nam congue leo purus, at varius justo lobortis in.`,
  },
  {
    url: "",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et sagittis massa. Cras neque ante, iaculis ac massa in, maximus egestas erat. Nullam pellentesque quam sit amet suscipit varius. Sed at cursus eros, eu ornare enim. Suspendisse potenti. Ut quis velit sed lorem convallis lacinia.  Nunc at erat feugiat, sodales justo quis, convallis urna. Nam non molestie nibh, ac luctus tellus. Vivamus quis sem ac elit gravida lacinia. Vestibulum malesuada augue vitae odio varius venenatis. Nulla dapibus purus quam, quis ultrices elit suscipit ac. Cras dictum ante sem, ut scelerisque ligula venenatis et. Nam congue leo purus, at varius justo lobortis in.`,
  },
  {
    url: "",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et sagittis massa. Cras neque ante, iaculis ac massa in, maximus egestas erat. Nullam pellentesque quam sit amet suscipit varius. Sed at cursus eros, eu ornare enim. Suspendisse potenti. Ut quis velit sed lorem convallis lacinia.  Nunc at erat feugiat, sodales justo quis, convallis urna. Nam non molestie nibh, ac luctus tellus. Vivamus quis sem ac elit gravida lacinia. Vestibulum malesuada augue vitae odio varius venenatis. Nulla dapibus purus quam, quis ultrices elit suscipit ac. Cras dictum ante sem, ut scelerisque ligula venenatis et. Nam congue leo purus, at varius justo lobortis in.`,
  },
  {
    url: "",
    text: `test.`,
  },
];

const MajorEvents = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

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
            {images.map((step, index) => (
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"center"}
                columnGap={"120px"}
                key={step.text}
              >
                {Math.abs(activeStep - index) <= 2 ? (
                  <Image
                    src={test}
                    height={"358px"}
                    width={"358px"}
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
                  {step.text}
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
