import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { StaticImageData } from "next/image";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  bg: StaticImageData;
}

const ClubDescription = ({ bg, children }: Props) => {
  return (
    <>
      <Box
        sx={{
          background: `url(${bg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "600px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          fontFamily="Rubik"
          fontStyle="normal"
          fontWeight="400"
          fontSize="20px"
          lineHeight="28px"
          color="#FFFFFF"
          maxWidth={700}
          px="80px"
        >
          {children}
        </Typography>
      </Box>
    </>
  );
};

export default ClubDescription;
