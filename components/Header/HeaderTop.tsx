import { Typography } from "@mui/material";
import { Stack } from "@mui/material";
import React from "react";
import ElevatedLogo from "../common/ElevatedLogo";
import iiitLogo from "../../assets/sac_iiit_logo/iiitnr_logo.png";
import sacLogo from "../../assets/sac_iiit_logo/sac_logo.png";

type Props = {};

function HeaderTop({}: Props) {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      paddingTop="20px"
    >
      <Stack direction="row" alignItems="center" gap="9px">
        <ElevatedLogo src={iiitLogo} alt="IIIT Naya Raipur Logo" />
        <Typography variant="subtitle1">IIIT Naya Raipur</Typography>
      </Stack>
      <Typography
        color="#334155"
        fontWeight="300"
        fontSize="20px"
        lineHeight="24px"
      >
        Welcome To
      </Typography>
      <Stack direction="row" alignItems="center" gap="9px">
        <Typography variant="subtitle1" textAlign="right">
          Student Activity
          <br />
          Center
        </Typography>
        <ElevatedLogo src={sacLogo} alt="SAC Logo" />
      </Stack>
    </Stack>
  );
}

export default HeaderTop;
