import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Carousel from "./Carousel";

const MajorEvents = () => {
  return (
    <>
      <Box mt={"-50px"}>
        <Stack mx={"80px"} mt={"120px"}>
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
        <Box
          my={"48px"}
          mx="80px"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: { xs: "100%", md: "calc(100% - 160px)" },
            maxWidth: "1400px",
            margin: { xs: "48px auto", md: "48px auto" },
          }}
        >
          <Carousel />
        </Box>
      </Box>
    </>
  );
};

export default MajorEvents;
