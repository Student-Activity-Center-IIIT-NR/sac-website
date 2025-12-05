import Box from "@mui/material/Box";
import React, { ChangeEvent, useState } from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Pagination from "@mui/material/Pagination";
import Image from "next/image";
import { styled } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Divider from "@mui/material/Divider";
import layerIcon from "../../assets/icon/icon_layer.svg";
import Button from "@mui/material/Button";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { ClubEvents } from "../../data/EventsAndGallery/GalleryData";
import { StaticImageData } from "next/image";

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

type Name = "cultural" | "technical" | "sports" | "media" | "major";

const Gallery = () => {
  const [page, setPage] = useState(1);
  const [year, setYear] = useState("2023");
  const [name, setName] = useState<Name>("major");
  const [event, setEvent] = useState(
    (
      ClubEvents[name] as {
        name: string;
        date?: string;
        image: StaticImageData[];
        club: string;
        year: string;
      }[]
    ).filter((event) => event.year === year)[0]
  );

  const handleClickName = (name: Name) => {
    setName(name);
  };

  const handleClickEvent = (index: number) => {
    setEvent(
      (
        ClubEvents[name] as {
          name: string;
          date?: string;
          image: StaticImageData[];
          club: string;
          year: string;
        }[]
      ).filter((event) => event.year === year)[index]
    );
  };

  const count = Math.ceil(event.image.length / 6);

  const handleChangePage = (event: ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setYear(event.target.value);
  };

  return (
    <>
      <Box
        mt={{ xs: "32px", sm: "48px", md: "64px" }}
        mb={{ xs: "40px", sm: "56px", md: "70px" }}
        mx={{ xs: 2, sm: 3, md: "40px", lg: "80px" }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems={{ xs: "flex-start", sm: "center" }}
          justifyContent={"space-between"}
          gap={{ xs: 1, sm: 0 }}
        >
          <Typography
            fontFamily={"Rubik"}
            fontStyle={"normal"}
            fontWeight={700}
            fontSize={{ xs: "18px", sm: "20px", md: "24px" }}
            lineHeight={{ xs: "24px", sm: "26px", md: "28px" }}
            color={"#000000"}
          >
            {event.name}
          </Typography>
          <Typography
            fontFamily={"Rubik"}
            fontStyle={"normal"}
            fontWeight={700}
            fontSize={{ xs: "16px", sm: "18px", md: "24px" }}
            lineHeight={{ xs: "22px", sm: "24px", md: "28px" }}
            color={"#000000"}
          >
            {event.date}
          </Typography>
        </Stack>
        <Grid2
          container
          spacing={{ xs: 2, sm: 3, md: 6 }}
          mt={{ xs: "16px", md: "24px" }}
          justifyContent={"space-between"}
        >
          {event.image.slice((page - 1) * 6, (page - 1) * 6 + 6).map((step, index) => {
            return (
              <Grid2 xs={12} sm={6} md={4} key={index}>
                <Box
                  sx={{
                    width: "100%",
                    height: { xs: "250px", sm: "220px", md: "266px" },
                    position: "relative",
                  }}
                >
                  <Image
                    src={step}
                    alt=""
                    fill
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
            my: { xs: "40px", sm: "56px", md: "70px" },
            maxWidth: { xs: "100%", md: "fit-content" },
            overflow: "auto",
          }}
        >
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={{ xs: "flex-start", md: "center" }}
            height={{ xs: "auto", md: "80px" }}
            px={{ xs: "16px", sm: "24px", md: "50px" }}
            py={{ xs: 2, md: 0 }}
            columnGap={{ xs: "16px", sm: "32px", md: "80px" }}
            flexWrap={{ xs: "wrap", md: "nowrap" }}
          >
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Image
                src={layerIcon}
                alt=""
                width={22}
                objectFit={"contain"}
              />
            </Box>
            <StyledButton
              onClick={() => {
                handleClickName("major");
              }}
            >
              Major Events
            </StyledButton>
            <StyledButton
              onClick={() => {
                handleClickName("cultural");
              }}
            >
              Cultural
            </StyledButton>
            <StyledButton
              onClick={() => {
                handleClickName("technical");
              }}
            >
              Technical
            </StyledButton>
            <StyledButton
              onClick={() => {
                handleClickName("sports");
              }}
            >
              Sports
            </StyledButton>
            <StyledButton
              onClick={() => {
                handleClickName("media");
              }}
              sx={{ whiteSpace: { xs: "nowrap", md: "normal" } }}
            >
              Media & IT Cell
            </StyledButton>
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
              <MenuItem value={"2021"}>2021</MenuItem>
              <MenuItem value={"2022"}>2022</MenuItem>
              <MenuItem value={"2023"}>2023</MenuItem>
            </Select>
          </FormControl>
          {/* <FormControl
            disabled
            sx={{
              width: "166px",
            }}
          >
            <InputLabel>Clubs</InputLabel>
            <Select value={year} label="Age" onChange={handleChange}>
              <MenuItem value={2018}>TSOC</MenuItem>
              <MenuItem value={2019}>AIML</MenuItem>
              <MenuItem value={2019}>CipherCell</MenuItem>
              <MenuItem value={2019}>Inquizitive</MenuItem>
              <MenuItem value={2019}>Comet</MenuItem>
            </Select>
          </FormControl> */}
        </Stack>
        <Grid2
          container
          spacing={{ xs: 2, sm: 3, md: 6 }}
          mt={{ xs: "32px", md: "42px" }}
          justifyContent={"space-between"}
        >
          {(
            ClubEvents[name] as {
              name: string;
              date?: string;
              image: StaticImageData[];
              club: string;
              year: string;
            }[]
          )
            .filter((event) => event.year === year)
            .map((step, index) => {
              return (
                <Grid2 xs={12} sm={6} md={4} key={index}>
                  <StyledTypography
                    onClick={() => {
                      handleClickEvent(index);
                      scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    {step.name}
                  </StyledTypography>
                  <Divider color={"#C0CAF5"} />
                </Grid2>
              );
            })}
        </Grid2>
      </Box>
    </>
  );
};

export default Gallery;
