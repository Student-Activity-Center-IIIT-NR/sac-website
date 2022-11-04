import { Box, Divider, Stack, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Image from "next/image";
import testImage from "../../../assets/test/test.jpg"; //test image; remove in production

// TODO: Need to change Items function as a parameterised function
// TODO: change the news data as json input from a file rendered by map function

const News = () => {
  const Item = () => {
    return (
      <Stack
        spacing={1.2}
        sx={{
          justifyContent: "center",
        }}
      >
        <Image
          src={testImage}
          alt=""
          height="208px"
          width="262px"
          objectFit="cover"
        />
        <Typography
          variant="title1"
          fontWeight={700}
          fontFamily={"Rubik"}
          lineHeight={"28px"}
        >
          Garba Night Celebration
        </Typography>
        <Typography
          variant="body1"
          fontFamily={"Playfair Display"}
          fontWeight={400}
          lineHeight={"33px"}
        >
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful before final copy is available.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Image
            src={testImage}
            alt="author image"
            height="40px"
            width="40px"
            objectFit="cover"
            style={{ borderRadius: "5px" }}
          />
          <Typography
            variant="body1"
            px={1}
            fontFamily={"Playfair Display"}
            fontWeight={400}
            lineHeight={"33px"}
          >
            Author
          </Typography>
        </Box>
      </Stack>
    );
  };
  return (
    <>
      <Container maxWidth="lg" disableGutters>
        <Box>
          <Typography
            variant="h1"
            fontFamily={"Playfair Display"}
            letterSpacing={"1em"}
            textTransform={"uppercase"}
            fontWeight={400}
            lineHeight={"115px"}
            textAlign={"center"}
          >
            News
          </Typography>
        </Box>
        <Box
          sx={{
            mt: "44px",
          }}
        >
          <Grid2 container spacing={1.5} justifyContent="center">
            <Grid2 xs={2.99} display="flex" flexDirection={"column"} gap={2}>
              <Item
                img={"/test.jpg"}
                title={"Garba Night Celebration"}
                author={"Author"}
              >
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful before final copy is
                available.
              </Item>
              <Divider orientation="horizontal" />
              <Item />
            </Grid2>
            <Divider orientation="vertical" flexItem />
            <Grid2 xs={2.99} display="flex" flexDirection={"column"} gap={2}>
              <Item />
              <Divider orientation="horizontal" />
              <Item />
            </Grid2>
            <Divider orientation="vertical" flexItem />
            <Grid2 xs={2.99} display="flex" flexDirection={"column"} gap={2}>
              <Item />
              <Divider orientation="horizontal" />
              <Item />
            </Grid2>
            <Divider orientation="vertical" flexItem />
            <Grid2 xs={2.99} display="flex" flexDirection={"column"} gap={2}>
              <Item />
              <Divider orientation="horizontal" />
              <Item />
            </Grid2>
          </Grid2>
        </Box>
      </Container>
    </>
  );
};

export default News;
