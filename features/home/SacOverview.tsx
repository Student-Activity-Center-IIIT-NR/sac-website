import { Stack, Typography, styled, Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import infoIcon from "../../assets/icon/icon_info.svg";
import overviewArt from "../../assets/static/art_overview.png";
import aimIcon from "../../assets/icon/icon_aim.svg";

const DescriptionContainerStyled = styled(Stack)(({ theme }) => ({
  gap: "26px",
  textAlign: "center",
  maxWidth: "357px",
  [theme.breakpoints.down('md')]: {
    maxWidth: "100%",
    padding: "0 16px",
  },
}));

const Overview = () => {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      maxWidth={"lg"}
      mx="auto"
      mt={{ xs: "40px", md: "78px" }}
      px={{ xs: 2, md: 0 }}
      justifyContent="space-between"
      alignItems="center"
      gap={{ xs: "40px", md: "24px" }}
    >
      <DescriptionContainerStyled>
        <Image src={infoIcon} priority alt="Information icon" />
        <Typography fontSize={{ xs: "14px", md: "14px" }} lineHeight="17px">
          SAC is a student body established in the year 2018 that aims to
          support, develop and promote student activities at IIIT Naya Raipur
        </Typography>
      </DescriptionContainerStyled>
      <Box sx={{ maxWidth: { xs: "100%", md: "auto" } }}>
        <Image src={overviewArt} priority alt="SAC overview illustration" style={{ maxWidth: "100%", height: "auto" }} />
      </Box>
      <DescriptionContainerStyled>
        <Image src={aimIcon} priority alt="Aim icon" />
        <Typography fontSize={{ xs: "14px", md: "14px" }} lineHeight="17px">
          We aim to enhance undergraduates&apos; aesthetic, invasive, artistic,
          intellectual, and social development.
        </Typography>
      </DescriptionContainerStyled>
    </Stack>
  );
};

export default Overview;
