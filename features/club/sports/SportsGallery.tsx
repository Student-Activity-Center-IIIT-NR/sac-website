import React, { useState } from "react";
import { styled } from "@mui/material";
import ImageGrid from "./ImageGrid";
import Image from "next/image";
import iconArrow from "../../../assets/icon/icon_arrow.svg";
import { Data } from "./SportsGalleryData";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

const StyledTypography = styled(Typography)({
  fontFamily: "Lato",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "28px",
  color: "#6B7280",
});

const SportsGallery = () => {
  const ArambhEstd = 2022;
  const [year, setYear] = useState(new Date().getFullYear());

  const yearDecrement = () => {
    year > ArambhEstd ? setYear(year - 1) : null;
  };

  const yearIncrement = () => {
    year < new Date().getFullYear() ? setYear(year + 1) : null;
  };

  let element = {
    Year: 2022,
    Introduction:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et sagittis massa. Cras neque ante, iaculis ac massa in, maximus egestas erat. Nullam pellentesque quam sit amet suscipit varius. Sed at cursus eros, eu ornare enim. Suspendisse potenti. Ut quis velit sed lorem convallis lacinia. ",
    Winners:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et sagittis massa. Cras neque ante, iaculis ac massa in, maximus egestas erat. Nullam pellentesque quam sit amet suscipit varius. Sed at cursus eros, eu ornare enim. Suspendisse potenti. Ut quis velit sed lorem convallis lacinia. ",
  };

  if (year !== element.Year) {
    Data.forEach((e) => {
      if (e.Year === year) {
        element = e;
        console.log(element);
        return;
      }
    });
  }

  return (
    <Stack
      direction={"row"}
      mt="150px"
      height="830px"
      justifyContent="space-between"
      px={"80px"}
    >
      <Stack maxWidth="370px" gap="25px">
        <Typography
          fontFamily="Touchdown Font"
          fontStyle="normal"
          fontWeight={400}
          fontSize={"64px"}
          color="#000000"
          textAlign="left"
          mt="130px"
        >
          GALLERY
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Image
            src={iconArrow}
            width="16px"
            height={"16px"}
            alt=""
            onClick={yearDecrement}
            style={{
              cursor: "pointer",
            }}
          />

          <Typography
            fontFamily="Lato"
            fontStyle="normal"
            fontWeight="400"
            fontSize="32px"
            lineHeight="58px"
            color="#000000"
            mx={"20px"}
          >
            ARAMBH &nbsp;{ArambhEstd}
            {/*ArambhEstd is constant Change it to "year"  for current data*/}
          </Typography>
          <Image
            src={iconArrow}
            width="16px"
            height={"16px"}
            alt=""
            onClick={yearIncrement}
            style={{
              cursor: "pointer",
              transform: "rotate(180deg)",
            }}
          />
        </Box>
        <StyledTypography pr={"20px"}>{element.Introduction}</StyledTypography>
        <StyledTypography>
          <strong>WINNERS</strong>
        </StyledTypography>
        <StyledTypography pr={"20px"}>{element.Winners}</StyledTypography>
      </Stack>
      <ImageGrid />
    </Stack>
  );
};

export default SportsGallery;
