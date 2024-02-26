import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import { NextPage } from "next";
import newsData from "../../data/NewsData";

interface NewsProps {
  img?: StaticImageData;
  title: string;
  children: ReactNode;
  authorImg?: StaticImageData;
  author?: string;
}

const News: NextPage = () => {
  const Item = ({ img, title, children, authorImg, author }: NewsProps) => {
    return (
      <Stack
        spacing={1.2}
        sx={{
          justifyContent: "center",
          maxHeight: 600,
        }}
      >
        {img && (
          <Box
            sx={{
              height: "208px",
              width: "262px",
            }}
          >
            <Image
              src={img}
              alt=""
              height="208px"
              width="262px"
              objectFit="cover"
              
            />
          </Box>
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
          overflow={"hidden"}
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
      <Container
        maxWidth="lg"
        sx={{
          mt: "120px",
        }}
      >
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
                img={newsData[0].img}
                title={newsData[0].title}
                authorImg={newsData[0].authImg}
                author={newsData[0].authName}
              >
                {newsData[0].text}
              </Item>
              {/* <Divider orientation="horizontal" /> */}
              {/* <Item
                img={newsData[1].img}
                title={newsData[1].title}
                authorImg={newsData[1].authImg}
                author={newsData[1].authName}
              >
                {newsData[1].text}
              </Item>  */}
            </Grid2>
            {/* <Divider orientation="vertical" flexItem /> */}
            <Grid2 xs={2.99} display="flex" flexDirection={"column"} gap={2}>
              {/* <Item
                img={newsData[2].img}
                title={newsData[2].title}
                authorImg={newsData[2].authImg}
                author={newsData[2].authName}
              >
                {newsData[2].text}
              </Item>
              <Divider orientation="horizontal" />
              <Item
                img={newsData[3].img}
                title={newsData[3].title}
                authorImg={newsData[3].authImg}
                author={newsData[3].authName}
              >
                {newsData[3].text}
              </Item> */}
            </Grid2>
            {/* <Divider orientation="vertical" flexItem /> */}
            <Grid2 xs={2.99} display="flex" flexDirection={"column"} gap={2}>
              {/* <Item
                img={newsData[4].img}
                title={newsData[4].title}
                authorImg={newsData[4].authImg}
                author={newsData[4].authName}
              >
                {newsData[4].text}
              </Item>
              <Divider orientation="horizontal" />
              <Item
                img={newsData[5].img}
                title={newsData[5].title}
                authorImg={newsData[5].authImg}
                author={newsData[5].authName}
              >
                {newsData[5].text}
            </Item> */}
            </Grid2>
            {/* <Divider orientation="vertical" flexItem />  */}
            <Grid2 xs={2.99} display="flex" flexDirection={"column"} gap={2}>
              {/* <Item
                img={newsData[6].img}
                title={newsData[6].title}
                authorImg={newsData[6].authImg}
                author={newsData[6].authName}
              >
                {newsData[6].text}
              </Item> */}
              {/* <Divider orientation="horizontal" /> */}
              {/* <Item
                img={newsData[7].img}
                title={newsData[7].title}
                authorImg={newsData[7].authImg}
                author={newsData[7].authName}
              >
                {newsData[7].text}
              </Item> */}
            </Grid2>
          </Grid2>
        </Box>
      </Container>
    </>
  );
};

export default News;
