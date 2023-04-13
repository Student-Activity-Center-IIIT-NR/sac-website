import React from "react";
import iconArrow from "../../../assets/icon/icon_arrow.svg";
import { Typography, Stack, Box } from "@mui/material";
import Image from "next/image";

const NavUpdates = () => {
  return (
    <Stack
      direction="row"
      mx={"16px"}
      overflow={"hidden"}
      borderRadius={"8px"}
      boxShadow={
        "-5px 5px 10px rgba(230, 230, 230, 0.2), 5px -5px 10px rgba(230, 230, 230, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.9), 5px 5px 13px rgba(230, 230, 230, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(230, 230, 230, 0.5);"
      }
      gap={"16px"}
      alignItems={"center"}
    >
      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUZ4z0AXFXs8FFbRpJfaF-ndfIlLjie869h1j5v0uhBg&s"
        height={"88px"}
        width={"88px"}
        alt=""
      />
      <Typography
        sx={{
          color: "#000000",
          fontSize: "14px",
          width: "134px",
          height: "51px",
          fontWeight: 600,
          letterSpacing: "0.03571em",
          textTransform: "uppercase",
        }}
      >
        scintfic registration starts!
      </Typography>
      <Box
        sx={{
          transform: `rotate(180deg)`,
          width: "12px",
          height: "20px",
          mx: "22px",
          cursor: "pointer",
        }}
      >
        <Image src={iconArrow} height={""} width={""} alt="" />
      </Box>
    </Stack>
  );
};

export default NavUpdates;
