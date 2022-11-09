import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import testImage from "../../../assets/test/test.jpeg"; //test image; remove in production

// TODO: change the news data as json input from a file rendered by map function

interface Props {
  img?: StaticImageData;
  title: string;
  children: ReactNode;
  authorImg?: StaticImageData;
  author?: string;
}

const News = () => {
  const Item = ({ img, title, children, authorImg, author }: Props) => {
    return (
      <Stack
        spacing={1.2}
        sx={{
          justifyContent: "center",
        }}
      >
        {img && (
          <Image
            src={img}
            alt=""
            height="208px"
            width="262px"
            objectFit="cover"
          />
        )}
        <Typography
          variant="title1"
          fontWeight={700}
          fontFamily={"Rubik"}
          lineHeight={"28px"}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          fontFamily={"Playfair Display"}
          fontWeight={400}
          lineHeight={"33px"}
        >
          {children}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          {authorImg && (
            <Image
              src={authorImg}
              alt="author image"
              height="40px"
              width="40px"
              objectFit="cover"
              style={{ borderRadius: "5px" }}
            />
          )}
          {author && (
            <Typography
              variant="body1"
              px={1}
              fontFamily={"Playfair Display"}
              fontWeight={400}
              lineHeight={"33px"}
            >
              {author}
            </Typography>
          )}
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
            <Typography variant="title1">&nbsp;</Typography>
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
                img={testImage}
                title={"Garba Night Celebration"}
                authorImg={testImage}
                author={"Author"}
              >
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful before final copy is
                available.
              </Item>
              <Divider orientation="horizontal" />
              <Item
                img={testImage}
                title={"Garba Night Celebration"}
                authorImg={testImage}
                author={"Author"}
              >
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful before final copy is
                available.
              </Item>
            </Grid2>
            <Divider orientation="vertical" flexItem />
            <Grid2 xs={2.99} display="flex" flexDirection={"column"} gap={2}>
              <Item
                img={testImage}
                title={"Garba Night Celebration"}
                authorImg={testImage}
                author={"Author"}
              >
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful before final copy is
                available.
              </Item>
              <Divider orientation="horizontal" />
              <Item
                img={testImage}
                title={"Garba Night Celebration"}
                authorImg={testImage}
                author={"Author"}
              >
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful before final copy is
                available.
              </Item>
            </Grid2>
            <Divider orientation="vertical" flexItem />
            <Grid2 xs={2.99} display="flex" flexDirection={"column"} gap={2}>
              <Item
                img={testImage}
                title={"Garba Night Celebration"}
                authorImg={testImage}
                author={"Author"}
              >
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful before final copy is
                available.
              </Item>
              <Divider orientation="horizontal" />
              <Item
                img={testImage}
                title={"Garba Night Celebration"}
                authorImg={testImage}
                author={"Author"}
              >
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful before final copy is
                available.
              </Item>
            </Grid2>
            <Divider orientation="vertical" flexItem />
            <Grid2 xs={2.99} display="flex" flexDirection={"column"} gap={2}>
              <Item
                img={testImage}
                title={"Garba Night Celebration"}
                authorImg={testImage}
                author={"Author"}
              >
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful before final copy is
                available.
              </Item>
              <Divider orientation="horizontal" />
              <Item
                img={testImage}
                title={"Garba Night Celebration"}
                authorImg={testImage}
                author={"Author"}
              >
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful before final copy is
                available.
              </Item>
            </Grid2>
          </Grid2>
        </Box>
      </Container>
    </>
  );
};

export default News;
