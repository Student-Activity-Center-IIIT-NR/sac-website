import { Stack, Typography, styled } from "@mui/material";
import Image from "next/image";
import React from "react";
import infoIcon from "../../assets/icon/icon_info.svg";
import overviewArt from "../../assets/static/art_overview.png";
import aimIcon from "../../assets/icon/icon_aim.svg";

const DescriptionContainerStyled = styled(Stack)({
  gap: "26px",
  textAlign: "center",
  maxWidth: "357px",
});

const Overview = () => {
  return (
    <Stack
      direction="row"
      maxWidth={"lg"}
      mx="auto"
      mt={"78px"}
      justifyContent="space-between"
      alignItems="center"
      gap="24px"
    >
      <DescriptionContainerStyled>
        <Image src={infoIcon} priority alt="" />
        <Typography fontSize={"14px"} lineHeight="17px">
          SAC is a student body established in the year 2018 that aims to
          support, develop and promote student activities at IIIT Naya Raipur
        </Typography>
      </DescriptionContainerStyled>
      <Image src={overviewArt} priority alt="" />
      <DescriptionContainerStyled>
        <Image src={aimIcon} priority alt="" />
        <Typography fontSize={"14px"} lineHeight="17px">
          We aim to enhance undergraduates&apos; aesthetic, invasive, artistic,
          intellectual, and social development.
        </Typography>
      </DescriptionContainerStyled>
    </Stack>
  );
};

export default Overview;
