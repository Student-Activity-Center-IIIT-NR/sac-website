import { Box } from "@mui/system";
import Image from "next/image";
import React from "react";
import darkModeIcon from "../../assets/dark_mode.svg";

type Props = {
  color?: string;
};

function DarkMode({ color }: Props) {
  return (
    <Box
      component={Image}
      sx={{
        fill: color,
      }}
      src={darkModeIcon}
    />
  );
}

export default DarkMode;
