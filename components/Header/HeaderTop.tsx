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
      paddingTop={{ xs: "12px", md: "20px" }}
      px={{ xs: 1, md: 0 }}
      gap={{ xs: 1, sm: 2 }}
    >
      <Stack direction="row" alignItems="center" gap={{ xs: "4px", sm: "9px" }} flex={1}>
        <ElevatedLogo src={iiitLogo} alt="IIIT Naya Raipur Logo" />
        <Typography
          variant="subtitle1"
          sx={{
            fontSize: { xs: "10px", sm: "12px", md: "16px" },
            lineHeight: { xs: "12px", sm: "14px", md: "normal" }
          }}
        >
          IIIT Naya Raipur
        </Typography>
      </Stack>
      <Typography
        color="#334155"
        fontWeight="300"
        sx={{
          fontSize: { xs: "12px", sm: "16px", md: "20px" },
          lineHeight: { xs: "14px", sm: "18px", md: "24px" },
          display: { xs: "none", sm: "block" },
          textAlign: "center",
          whiteSpace: "nowrap"
        }}
      >
        Welcome To
      </Typography>
      <Stack direction="row" alignItems="center" gap={{ xs: "4px", sm: "9px" }} flex={1} justifyContent="flex-end">
        <Typography
          variant="subtitle1"
          textAlign="right"
          sx={{
            fontSize: { xs: "10px", sm: "12px", md: "16px" },
            lineHeight: { xs: "12px", sm: "14px", md: "normal" }
          }}
        >
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
