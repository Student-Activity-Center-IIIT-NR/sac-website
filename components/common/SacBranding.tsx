import { Typography } from "@mui/material";
import { Stack, StackProps } from "@mui/system";
import Image from "next/image";
import React from "react";
import sacBranding from "../../assets/sac_branding.svg";

const SacBranding = React.forwardRef((props: StackProps, ref) => {
  return (
    <Stack component="div" ref={ref} {...props}>
      <Image
        src={sacBranding}
        height={props.height as number}
        width={props.width as number}
        priority={true}
        alt="SAC IIITNR Branding"
      />
    </Stack>
  );
});

SacBranding.displayName = "SacBranding";

export default SacBranding;
