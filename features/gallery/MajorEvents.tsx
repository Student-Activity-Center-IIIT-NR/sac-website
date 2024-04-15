import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Carousel from "./Carousel";
import Image from "next/image";
import galleryThubmnail from "../../assets/static/gallery_thumbnail.svg";

const MajorEvents = () => {
  return (
    <>
      <Box mt={"-50px"}>
        <Stack mx={"80px"} mt={"120px"}>
          <Stack direction={"row"} columnGap={"48px"}>
            <Typography
              fontFamily={"Playfair Display"}
              fontStyle={"normal"}
              fontWeight={400}
              fontSize={"4rem"}
              lineHeight={"85px"}
              letterSpacing={"0.03571em"}
              color={"#000000"}
            >
              Gallery
            </Typography>
            <Image
              src={galleryThubmnail}
              alt=""
              width={"110px"}
              height="70px"
            />
          </Stack>
          <Typography
            fontFamily={"Rubik"}
            fontStyle={"normal"}
            fontWeight={500}
            fontSize={"2rem"}
            lineHeight={"38px"}
            letterSpacing={"0.0.03571em"}
            color={"#000000"}
            mt={"102px"}
          >
            Recent Major Events
          </Typography>
        </Stack>
        <Box my={"48px"} mx="80px">
          <Carousel />
        </Box>
      </Box>
    </>
  );
};

export default MajorEvents;
