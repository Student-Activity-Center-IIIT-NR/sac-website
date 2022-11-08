import { Typography } from "@mui/material";
import { Stack, StackProps } from "@mui/system";
import Image from "next/image";
import React from "react";
import sacBranding from "../../assets/sac_branding.svg";

function SacBranding(props: StackProps) {
  return (
    <Stack alignItems="center"  gap="19px" {...props}>
      <Image src={sacBranding} />
    </Stack>
  );
}

export default SacBranding;
