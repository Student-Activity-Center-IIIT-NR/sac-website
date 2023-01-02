import { Stack, Box, Typography, styled } from "@mui/material";
import Image from "next/image";
import React from "react";
import infoIcon from "../../../assets/icon_info.svg";
import overviewArt from "../../../assets/art_overview.svg";
import aimIcon from "../../../assets/icon_aim.svg";

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
          SAC is a student body established in the year 2018 which aims to
          support, develop and promote student activities at IIIT Naya Raipur
        </Typography>
      </DescriptionContainerStyled>
      <Image src={overviewArt} priority alt="" />
      <DescriptionContainerStyled>
        <Image src={aimIcon} priority alt="" />
        <Typography fontSize={"14px"} lineHeight="17px">
          Our aim is to enhance the aesthetic, invasive, artistic, intellectual
          and social development of the undergraduates
        </Typography>
      </DescriptionContainerStyled>
    </Stack>
  );
};

export default Overview;
