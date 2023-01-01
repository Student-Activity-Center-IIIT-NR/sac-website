import Box from "@mui/material/Box";
import React, { ChangeEvent, useState } from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Pagination from "@mui/material/Pagination";
import Image from "next/image";
import test from "../../assets/test/test.jpeg"; //remove in prod
import { styled } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Divider from "@mui/material/Divider";
import layerIcon from "../../assets/icon_layer.svg";
import Button from "@mui/material/Button";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Link from "next/link";

const StyledButton = styled(Button)({
  fontFamily: "Rubik",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "15.2895px",
  lineHeight: "18px",
  textAlign: "center",
  letterSpacing: "0.08929em",
  textTransform: "uppercase",
  color: "#355389",
  height: "34px",
  padding: "0px 14px",
  margin: "0px 10px",

  transition: "all 200ms",
  "&:hover": {
    height: "44px",
    padding: "0px 24px",
    margin: "0px",
    background: "#394B73",
    color: "white",
  },
});

const StyledTypography = styled(Typography)({
  fontFamily: "Rubik",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "20px",
  lineHeight: "28px",
  color: "#355389",
  cursor: "pointer",
  maxWidth: "fit-content",
});

const Gallery = () => {
  const currYear = new Date().getFullYear();
  const [page, setPage] = useState(1);
  const [year, setYear] = useState("");

  const count = Math.ceil(images.length / 6);

  const handleChangePage = (event: ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setYear(event.target.value as string);
  };

  return (
    <>
      <Box mt={"64px"} mb={"70px"} mx={"80px"}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography
            fontFamily={"Rubik"}
            fontStyle={"normal"}
            fontWeight={700}
            fontSize={"24px"}
            lineHeight={"28px"}
            color={"#000000"}
          >
            Project Cognitio
          </Typography>
          <Typography
            fontFamily={"Rubik"}
            fontStyle={"normal"}
            fontWeight={700}
            fontSize={"24px"}
            lineHeight={"28px"}
            color={"#000000"}
          >
            Date
          </Typography>
        </Stack>
        <Grid2
          container
          spacing={6}
          mt={"24px"}
          justifyContent={"space-between"}
        >
          {images.slice((page - 1) * 6, (page - 1) * 6 + 6).map(() => {
            return (
              <>
                <Grid2 xs={4} maxWidth={"fit-content"}>
                  <Image
                    alt=""
                    src={test}
                    objectFit={"cover"}
                    style={{
                      borderRadius: "8px",
                    }}
                  />
                </Grid2>
              </>
            );
          })}
        </Grid2>
        <Box display={"flex"} justifyContent={"center"} marginTop={"36px"}>
          <div
            style={{
              border: "1px solid #C0CAF5",
              borderRadius: "24px",
              padding: "12px",
            }}
          >
            <Pagination count={count} page={page} onChange={handleChangePage} />
          </div>
        </Box>
        <Box
          sx={{
            background: "#FFFFFF",
            boxShadow:
              "-24px 24px 48px rgba(242, 242, 242, 0.2), 24px -24px 48px rgba(242, 242, 242, 0.2), -24px -24px 48px rgba(255, 255, 255, 0.9), 24px 24px 60px rgba(242, 242, 242, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(242, 242, 242, 0.5)",
            borderRadius: "24px",
            mx: "auto",
            my: "70px",
            maxWidth: "fit-content",
          }}
        >
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            height={"80px"}
            px={"50px"}
            columnGap={"80px"}
          >
            <Image
              src={layerIcon}
              alt=""
              width={"22px"}
              objectFit={"contain"}
            />
            <StyledButton>Major Events</StyledButton>
            <StyledButton>Cultural</StyledButton>
            <StyledButton>Technical</StyledButton>
            <StyledButton>Sports</StyledButton>
          </Stack>
        </Box>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          columnGap={"24px"}
        >
          <FormControl
            sx={{
              width: "166px",
            }}
          >
            <InputLabel>Year</InputLabel>
            <Select value={year} label="Age" onChange={handleChange}>
              <MenuItem value={2018}>2018</MenuItem>
              <MenuItem value={2019}>2019</MenuItem>
              <MenuItem value={2020}>2020</MenuItem>
              <MenuItem value={2021}>2021</MenuItem>
              <MenuItem value={2022}>2022</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            sx={{
              width: "166px",
            }}
          >
            <InputLabel>Clubs</InputLabel>
            <Select value={year} label="Age" onChange={handleChange}>
              <MenuItem value={2018}>TSOC</MenuItem>
              <MenuItem value={2019}>AIML</MenuItem>
            </Select>
          </FormControl>
        </Stack>
        <Grid2
          container
          spacing={6}
          mt={"42px"}
          justifyContent={"space-between"}
        >
          <Grid2 xs={4}>
            <Link href="">
              <StyledTypography>Event 1</StyledTypography>
            </Link>
            <Divider color={"#C0CAF5"} />
          </Grid2>
          <Grid2 xs={4}>
            <Link href="">
              <StyledTypography>Event 2</StyledTypography>
            </Link>
            <Divider color={"#C0CAF5"} />
          </Grid2>
          <Grid2 xs={4}>
            <Link href="">
              <StyledTypography>Event 3</StyledTypography>
            </Link>
            <Divider color={"#C0CAF5"} />
          </Grid2>
          <Grid2 xs={4}>
            <Link href="">
              <StyledTypography>Event 4</StyledTypography>
            </Link>
            <Divider color={"#C0CAF5"} />
          </Grid2>
          <Grid2 xs={4}>
            <Link href="">
              <StyledTypography>Event 5</StyledTypography>
            </Link>
            <Divider color={"#C0CAF5"} />
          </Grid2>
          <Grid2 xs={4}>
            <Link href="">
              <StyledTypography>Event 6</StyledTypography>
            </Link>
            <Divider color={"#C0CAF5"} />
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
};

export default Gallery;

const images = [
  {
    label: "TECHNOVATE 2022",
    imgPath: "./assets/test/test.jpeg",
    date: "5-7 Nov",
  },
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath: "https://images.unsplash.com/photo-1537944434965-cf4679d1a598",
    date: "112/21/21",
  },
  {
    label: "Bird",
    imgPath: "https://images.unsplash.com/photo-1538032746644-0212e812a9e7",
    date: "12/211/21",
  },
  {
    label: "Bali, Indonesia",
    imgPath: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
    date: "12/21/211",
  },
  {
    label: "Goč, Serbia",
    imgPath: "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8",
    date: "12/21/121",
  },
  {
    label: "Goč, Serbia",
    imgPath: "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8",
    date: "12/21/121",
  },
  {
    label: "Goč, Serbia",
    imgPath: "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8",
    date: "12/21/121",
  },
  {
    label: "Goč, Serbia",
    imgPath: "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8",
    date: "12/21/121",
  },
  {
    label: "Goč, Serbia",
    imgPath: "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8",
    date: "12/21/121",
  },
];
