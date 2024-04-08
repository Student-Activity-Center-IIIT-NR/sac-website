import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { ChangeEvent, useState } from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import Image, { StaticImageData } from "next/image";
import Pagination from "@mui/material/Pagination";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { allEvents } from "../../../data/EventsAndGallery/ClubGalleryData";

interface allEvents {
  allEvents: GalleryProps[];
}

interface GalleryProps {
  name: string;
  date?: string;
  image: StaticImageData[];
  club: string;
  year: string;
}
interface Props {
  club: string;
}
const Gallery = ({ club }: Props) => {
  const [year, setYear] = useState("2023");

  const DropDown = ({ year }: { year: string }) => {
    const handleChange = (event: SelectChangeEvent) => {
      setYear(event.target.value);
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
            <MenuItem value={"2022"}>2022</MenuItem>
            <MenuItem value={"2023"}>2023</MenuItem>
          </Select>
        </FormControl>
      </>
    );
  };

  const [page, setPage] = useState(1);

  const events = allEvents.filter((event) => {
    return event.club === club && event.year === year;
  });
  const [event, setEvent] = useState(events[0]);
  const count = Math.ceil(event.image.length / 4);

  const handleChangePage = (event: ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage);
  };

  const handleClickEvent = (index: number) => {
    setEvent(events[index]);
    setPage(1);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setYear(event.target.value);
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
            <DropDown year={year} />
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              width={"50%"}
            >
              <Typography
                fontFamily="Rubik"
                fontStyle="normal"
                fontWeight="700"
                fontSize="24px"
                lineHeight="28px"
                color="#565A6E"
              >
                {event.name}
              </Typography>
              <Typography
                fontFamily="Rubik"
                fontStyle="normal"
                fontWeight="700"
                fontSize="24px"
                lineHeight="28px"
                color="#565A6E"
              >
                {event.date}
              </Typography>
            </Stack>
          </Stack>
          <Stack direction={"row"} mt={"52px"} justifyContent={"space-between"}>
            <Stack direction={"column"} gap={6} width={"30%"}>
              {events.map((step, index) => {
                return (
                  <Box key={index}>
                    <Typography
                      fontFamily="Rubik"
                      fontStyle="normal"
                      fontWeight="700"
                      fontSize="20px"
                      lineHeight="28px"
                      color="#565A6E"
                      sx={{ cursor: "pointer" }}
                      onClick={() => {
                        handleClickEvent(index);
                      }}
                    >
                      {step.name}
                    </Typography>
                    <Divider />
                  </Box>
                );
              })}
            </Stack>
            <Stack direction={"column"} maxWidth={"50%"}>
              <Grid2 container spacing={3} justifyContent={"space-between"}>
                {event.image
                  .slice((page - 1) * 4, (page - 1) * 4 + 4)
                  .map((step) => {
                    return (
                      <>
                        <Grid2 xs={6} maxWidth={"fit-content"}>
                          <Box
                            sx={{
                              width: "311px",
                              height: "232px",
                            }}
                          >
                            <Image
                              alt=""
                              width="311px"
                              height="232px"
                              src={step}
                              objectFit={"cover"}
                              style={{
                                borderRadius: "8px",
                              }}
                            />
                          </Box>
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
