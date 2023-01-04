import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image, { StaticImageData } from "next/image";
import AIMLDescImage from "../../../assets/aiml_desc_img.png";
import bgTechMiddle from "../../../assets/bg_tech_middle.svg";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  url: StaticImageData;
}

const ClubDescription = ({ url, children }: Props) => {
  return (
    <>
      <Box
        sx={{
          py: "16px",
          background: `url(${bgTechMiddle.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          columnGap={"32px"}
          px={"80px"}
        >
          <Typography
            fontFamily="Rubik"
            fontStyle="normal"
            fontWeight="400"
            fontSize="20px"
            lineHeight="28px"
            color="#FFFFFF"
            maxWidth={"547px"}
          >
            {children}
          </Typography>
          <Image
            src={url}
            width={"548px"}
            height={"564px"}
            objectFit={"contain"}
            alt=""
          />
        </Stack>
      </Box>
    </>
  );
};

export default ClubDescription;
