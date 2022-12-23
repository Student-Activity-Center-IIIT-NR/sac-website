import React from 'react'
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Image from "next/image";
import { ReactNode } from "react";

interface Props {
  img:string;
  title: string;
  children: ReactNode;
}

const SportsTeam = () => {

const Item = ({ img, title, children}:Props) => {
    return (
      <Stack
        spacing={1}
        sx={{
          justifyContent: "center",
        }}
      >
        {img && (
          <Image
            src={img}
            alt=""
            height="394px"
            width="286px"
            objectFit="cover"
          />
        )}
        <Typography
          fontFamily={"Lato"}
          lineHeight={"27.5px"}
          fontWeight={700}
          color="#565A6E"
          fontSize="20px"
        >
          {title}
        </Typography>
        <Typography
          fontFamily={"Lato"}
          fontWeight={700}
          lineHeight={"22px"}
          color="#565A6E"
          fontSize="16px"
        >
          {children}
        </Typography>
      </Stack>
    );
  };
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          mt: "140px",
          mb:"50px",
        }}
      >
          <Typography fontSize={"64px"}  fontFamily="Touchdown Font" color="#000000" textAlign="center" fontWeight={800}>
            TEAM
          </Typography>
        <Box
          sx={{
              mt: "80px",
            }}
        >
          <Grid2 container rowSpacing={14}  justifyContent="center">
          <Grid2 xs={6} display="flex" flexDirection={"row"} gap={2} justifyContent="center">
              <Item
                img="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
                title={"Dr Vivek Tiwari"}
              >
              faculty mentor
              </Item>
              <Item
                img="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
                title={"Dr Vivek Tiwari"}
              >
              faculty mentor
              </Item>
            </Grid2>
            <Grid2 xs={15} display="flex" flexDirection={"row"} gap={2}>
              <Item
                img="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
                title={"Dr Vivek Tiwari"}
              >
              faculty mentor
              </Item>
              <Item
                img="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
                title={"Dr Vivek Tiwari"}
              >
              faculty mentor
              </Item>
              <Item
                img="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
                title={"Dr Vivek Tiwari"}
              >
              faculty mentor
              </Item>
              <Item
                img="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
                title={"Dr Vivek Tiwari"}
              >
              faculty mentor
              </Item>
            </Grid2>
             <Grid2 xs={15} display="flex" flexDirection={"row"} gap={2}>
              <Item
                img="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
                title={"Dr Vivek Tiwari"}
              >
              faculty mentor
              </Item>
              <Item
                img="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
                title={"Dr Vivek Tiwari"}
              >
              faculty mentor
              </Item>
              <Item
                img="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
                title={"Dr Vivek Tiwari"}
              >
              faculty mentor
              </Item>
              <Item
                img="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
                title={"Dr Vivek Tiwari"}
              >
              faculty mentor
              </Item>
            </Grid2>
            <Grid2 xs={15} display="flex" flexDirection={"row"} gap={2}>
              <Item
                img="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
                title={"Dr Vivek Tiwari"}
              >
              faculty mentor
              </Item>
              <Item
                img="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
                title={"Dr Vivek Tiwari"}
              >
              faculty mentor
              </Item>
              <Item
                img="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
                title={"Dr Vivek Tiwari"}
              >
              faculty mentor
              </Item>
              <Item
                img="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
                title={"Dr Vivek Tiwari"}
              >
              faculty mentor
              </Item>
            </Grid2>
          </Grid2>
        </Box>
      </Container>
    </>  
  )
}

export default SportsTeam

 