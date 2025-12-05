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
          minHeight: { xs: "400px", sm: "500px", md: "600px" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          py: { xs: 4, md: 0 },
        }}
      >
        <Typography
          fontFamily="Rubik"
          fontStyle="normal"
          fontWeight="400"
          fontSize={{ xs: "16px", sm: "18px", md: "20px" }}
          lineHeight={{ xs: "24px", sm: "26px", md: "28px" }}
          color="#FFFFFF"
          maxWidth={{ xs: "100%", sm: "90%", md: 700 }}
          px={{ xs: 2, sm: 3, md: "40px", lg: "80px" }}
        >
          {children}
        </Typography>
      </Box>
    </>
  );
};

export default ClubDescription;
