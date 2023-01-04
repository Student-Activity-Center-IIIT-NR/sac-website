import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Image from "next/image";

const Gallery = () => {
  const DropDown = () => {
    const [year, setYear] = useState("");

    const handleChange = (event: SelectChangeEvent) => {
      setYear(event.target.value as string);
    };

    return (
      <>
        <FormControl
          sx={{
            width: "128px",
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
      </>
    );
  };
  return (
    <>
      <Box ml={"84px"} mr={"82px"} mt={"164px"}>
        <Stack>
          <Typography
            fontFamily="Rubik"
            fontStyle="normal"
            fontWeight="600"
            fontSize="48px"
            lineHeight="57px"
            textAlign="right"
            color="#565A6E"
          >
            Gallery
          </Typography>
          <Typography
            fontFamily="Rubik"
            fontStyle="normal"
            fontWeight="700"
            fontSize="32px"
            lineHeight="28px"
            textAlign="left"
            color="#565A6E"
            mt={"48px"}
          >
            Event log
          </Typography>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            mt={"21px"}
          >
            <DropDown />
            <Typography
              fontFamily="Rubik"
              fontStyle="normal"
              fontWeight="700"
              fontSize="24px"
              lineHeight="28px"
              color="#565A6E"
            >
              Event Name
            </Typography>
            <Typography
              fontFamily="Rubik"
              fontStyle="normal"
              fontWeight="700"
              fontSize="24px"
              lineHeight="28px"
              color="#565A6E"
            >
              Event Date
            </Typography>
          </Stack>
          <Stack direction={"row"} mt={"52px"} justifyContent={"space-between"}>
            <Stack direction={"column"} rowGap={"40px"} width={"359px"}>
              <Typography
                fontFamily="Rubik"
                fontStyle="normal"
                fontWeight="700"
                fontSize="20px"
                lineHeight="28px"
                color="#565A6E"
              >
                Event 1
              </Typography>
              <Divider />
              <Typography
                fontFamily="Rubik"
                fontStyle="normal"
                fontWeight="700"
                fontSize="20px"
                lineHeight="28px"
                color="#565A6E"
              >
                Event 2
              </Typography>
            </Stack>
            <ImageList sx={{ width: 700, height: 500 }} cols={2}>
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <Image
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    objectFit={"cover"}
                    alt={item.title}
                    loading="lazy"
                    width={"311px"}
                    height={"232px"}
                    style={{
                      borderRadius: "8px",
                    }}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Gallery;

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];
