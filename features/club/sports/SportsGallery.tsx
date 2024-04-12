import React, { useState } from "react";
import { styled } from "@mui/material";
import ImageGrid from "./ImageGrid";
import Image from "next/image";
import iconArrow from "../../../assets/icon/icon_arrow.svg";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { data } from "../../../data/EventsAndGallery/SportsGalleryData";

const StyledTypography = styled(Typography)({
  fontFamily: "Lato",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "28px",
  color: "#6B7280",
});

interface dataProps {
  name: string;
  intro: string;
  winner: string;
}

const SportsGallery = () => {
  const [index, setIndex] = useState(0);

  const len = data.length;

  const yearDecrement = () => {
    if (index <= 0) {
      return;
    }
    setIndex(index - 1);
  };

  const yearIncrement = () => {
    if (index >= len - 1) {
      return;
    }
    setIndex(index + 1);
  };

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
          textAlign="center"
        >
          GALLERY
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
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
            textAlign="center"
          >
            {data[index].name}
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

        <StyledTypography textAlign="justify">
          {data[index].intro}
        </StyledTypography>
        <StyledTypography textAlign="justify">
          <strong>WINNER</strong>
        </StyledTypography>
        <StyledTypography textAlign="justify">
          {data[index].winner}
        </StyledTypography>
      </Stack>
      <ImageGrid />
    </Stack>
  );
};

export default SportsGallery;
