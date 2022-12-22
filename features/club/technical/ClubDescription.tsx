import Box from "@mui/material/Box";
import stylesClub from "../../../styles/Clubs.module.css";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import AIMLDescImage from "../../../assets/aiml_desc_img.png";

const ClubDescription = () => {
  return (
    <>
      <Box className={stylesClub.bgmiddle} sx={{ py: "16px" }}>
        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          columnGap={"32px"}
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
            We were born in the age of internet and are now evolving to the age
            of Artificial Intelligence, and here is where we develop it. Here in
            the AI/ML club, we learn how to go from an admirer of this new
            technology to a capable and complete developer in this new
            technology. We will build projects from scratch with open source
            tools like TensorFlow and Keras with application development in
            Python environments, all while attending competitions, hackathons
            and maybe even contributing to the open source technology that we
            work with!
          </Typography>
          <Image
            src={AIMLDescImage}
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
