import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { ChangeEvent, useState } from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import Image from "next/image";
import Pagination from "@mui/material/Pagination";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import test from "../../../assets/test/test.jpeg"; //remove

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

  const [page, setPage] = useState(1);
  const [year, setYear] = useState("");

  const count = Math.ceil(images.length / 4);

  const handleChangePage = (event: ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setYear(event.target.value as string);
  };

  return (
    <>
      <Box ml={"84px"} mr={"82px"} mt={"164px"} mb={6}>
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
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              width={"60%"}
            >
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
          </Stack>
          <Stack direction={"row"} mt={"52px"} justifyContent={"space-between"}>
            <Stack direction={"column"} rowGap={"40px"} width={"30%"}>
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
            <Stack direction={"column"} maxWidth={"60%"}>
              <Grid2 container spacing={3} justifyContent={"space-between"}>
                {images.slice((page - 1) * 4, (page - 1) * 4 + 4).map(() => {
                  return (
                    <>
                      <Grid2 xs={6} maxWidth={"fit-content"}>
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
              <Box display={"flex"} justifyContent={"center"}>
                <div
                  style={{
                    border: "1px solid #C0CAF5",
                    borderRadius: "24px",
                    padding: "12px",
                    marginTop: 12,
                  }}
                >
                  <Pagination
                    count={count}
                    page={page}
                    onChange={handleChangePage}
                  />
                </div>
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Gallery;

const images = [
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
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];
