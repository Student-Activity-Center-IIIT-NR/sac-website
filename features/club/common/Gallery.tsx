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
            <MenuItem value={"2021"}>2021</MenuItem>
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

  const count = Math.ceil((event?.image?.length ?? 0) / 4);

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
      <Box
        ml={{ xs: 2, sm: 3, md: "42px", lg: "84px" }}
        mr={{ xs: 2, sm: 3, md: "42px", lg: "82px" }}
        mt={{ xs: "80px", sm: "120px", md: "164px" }}
        mb={6}
      >
        <Stack>
          <Typography
            fontFamily="Rubik"
            fontStyle="normal"
            fontWeight="600"
            fontSize={{ xs: "32px", sm: "40px", md: "48px" }}
            lineHeight={{ xs: "40px", sm: "48px", md: "57px" }}
            textAlign="right"
            color="#565A6E"
          >
            Gallery
          </Typography>
          <Typography
            fontFamily="Rubik"
            fontStyle="normal"
            fontWeight="700"
            fontSize={{ xs: "24px", sm: "28px", md: "32px" }}
            lineHeight={{ xs: "32px", sm: "36px", md: "28px" }}
            textAlign="left"
            color="#565A6E"
            mt={{ xs: "32px", md: "48px" }}
          >
            Event log
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignItems={{ xs: "flex-start", sm: "center" }}
            justifyContent={"space-between"}
            mt={"21px"}
            gap={{ xs: 2, sm: 0 }}
          >
            <DropDown year={year} />
            <Stack
              direction={{ xs: "column", sm: "row" }}
              justifyContent={"space-between"}
              width={{ xs: "100%", sm: "50%", md: "50%" }}
              gap={{ xs: 1, sm: 0 }}
            >
              <Typography
                fontFamily="Rubik"
                fontStyle="normal"
                fontWeight="700"
                fontSize={{ xs: "18px", sm: "20px", md: "24px" }}
                lineHeight={{ xs: "24px", sm: "26px", md: "28px" }}
                color="#565A6E"
              >
                {event?.name ?? ""}
              </Typography>
              <Typography
                fontFamily="Rubik"
                fontStyle="normal"
                fontWeight="700"
                fontSize={{ xs: "16px", sm: "18px", md: "24px" }}
                lineHeight={{ xs: "22px", sm: "24px", md: "28px" }}
                color="#565A6E"
              >
                {event?.date ?? ""}
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction={{ xs: "column", md: "row" }}
            mt={{ xs: "32px", md: "52px" }}
            justifyContent={"space-between"}
            gap={{ xs: 4, md: 0 }}
          >
            <Stack
              direction={"column"}
              gap={{ xs: 3, md: 6 }}
              width={{ xs: "100%", md: "30%" }}
            >
              {events.map((step, index) => {
                return (
                  <Box key={index}>
                    <Typography
                      fontFamily="Rubik"
                      fontStyle="normal"
                      fontWeight="700"
                      fontSize={{ xs: "16px", sm: "18px", md: "20px" }}
                      lineHeight={{ xs: "24px", sm: "26px", md: "28px" }}
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
            <Stack
              direction={"column"}
              maxWidth={{ xs: "100%", md: "60%" }}
              width="100%"
            >
              <Grid2
                container
                spacing={{ xs: 2, sm: 3 }}
                justifyContent={"space-between"}
              >
                {event?.image
                  ?.slice((page - 1) * 4, (page - 1) * 4 + 4)
                  .map((step, index) => {
                    return (
                      <Grid2 xs={12} sm={6} key={index}>
                        <Box
                          sx={{
                            width: "100%",
                            height: { xs: "250px", sm: "200px", md: "232px" },
                            position: "relative",
                          }}
                        >
                          <Image
                            alt=""
                            fill
                            src={step}
                            style={{
                              objectFit: "cover",
                              borderRadius: "8px",
                            }}
                          />
                        </Box>
                      </Grid2>
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
