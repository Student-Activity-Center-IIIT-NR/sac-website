import { Box, styled, Typography, useTheme } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import ElevatedLogo from "../common/ElevatedLogo";
import iiitLogo from "../../assets/iiitnr_logo.jpg";

type Props = {};

const LogoContainer = styled(Stack)({
  flexDirection: "row",
  justifyContent: "space-between",
});

function HeaderTop({}: Props) {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      paddingTop="20px"
    >
      <Stack direction="row" alignItems="center" gap="9px">
        <ElevatedLogo src={iiitLogo} />
        <Typography variant="subtitle1">IIIT Naya Raipur</Typography>
      </Stack>
      <Typography variant="subtitle1" color="neutral-700">
        Welcome To
      </Typography>
      <Stack direction="row" alignItems="center" gap="9px">
        <Typography variant="subtitle1" textAlign="right">
          Student Activity
          <br />
          Center
        </Typography>
        <ElevatedLogo src="" />
      </Stack>
    </Stack>
  );
}

export default HeaderTop;
