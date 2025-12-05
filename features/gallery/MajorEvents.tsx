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
        <Stack mx={{ xs: 2, sm: 3, md: "40px", lg: "80px" }} mt={{ xs: "60px", sm: "80px", md: "120px" }}>
          <Stack direction={"row"} columnGap={"48px"}>
            <Typography
              fontFamily={"Playfair Display"}
              fontStyle={"normal"}
              fontWeight={400}
              fontSize={{ xs: "2.5rem", sm: "3rem", md: "4rem" }}
              lineHeight={{ xs: "50px", sm: "68px", md: "85px" }}
              letterSpacing={"0.03571em"}
              color={"#000000"}
            >
              Gallery
            </Typography>
          </Stack>
          <Typography
            fontFamily={"Rubik"}
            fontStyle={"normal"}
            fontWeight={500}
            fontSize={{ xs: "1.5rem", sm: "1.75rem", md: "2rem" }}
            lineHeight={{ xs: "32px", sm: "36px", md: "38px" }}
            letterSpacing={"0.0.03571em"}
            color={"#000000"}
            mt={{ xs: "48px", sm: "70px", md: "102px" }}
          >
            Recent Major Events
          </Typography>
        </Stack>
        <Box my={{ xs: "32px", md: "48px" }} mx={{ xs: 2, sm: 3, md: "40px", lg: "80px" }}>
          <Carousel />
        </Box>
      </Box>
    </>
  );
};

export default MajorEvents;
