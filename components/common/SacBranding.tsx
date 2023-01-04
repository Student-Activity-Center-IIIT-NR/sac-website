import { Stack, StackProps } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import React from "react";
import sacBranding from "../../assets/sac_branding.svg";

interface Props extends StackProps {
  url?: StaticImageData;
}

const SacBranding = React.forwardRef((props: Props, ref) => {
  return (
    <Stack component="div" ref={ref} {...props}>
      <Image
        src={props.url ? props.url : sacBranding}
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
