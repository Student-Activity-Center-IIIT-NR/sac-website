import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import filter from "../../../assets/icon_arrow.svg";
import event_image from "../../../assets/test/test.jpeg";
import clubs from "./ClubsInfo";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Pagination from "@mui/material/Pagination";

function ClubGallery({ clubName }: { clubName: any }) {
  const club_for_event = clubs
    .filter((item) => item.name == clubName)
    .map((data) => data.Events);

  const [EventNo, setEventNo] = useState(1);

  const handleEvents = (value: number) => {
    setEventNo(value);
  };

  // handling pagination

  const [page, setPage] = React.useState(1);

  const rows = [1, 2, 3, 4, 5, 6, 7];

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  return (
    <>
      <Typography
        variant={"h1"}
        fontWeight={"400"}
        fontSize={"48px"}
        fontFamily={"Baskervville"}
        lineHeight={"62px"}
        fontStyle={"Regular"}
        sx={{ marginTop: "129px", display: "flex", justifyContent: "center" }}
      >
        Gallery
      </Typography>

      <Typography
        variant={"h1"}
        fontWeight={"400"}
        fontSize={"32px"}
        fontFamily={"Baskervville"}
        lineHeight={"28px"}
        fontStyle={"Regular"}
        px={5}
        sx={{ marginTop: "70px" }}
      >
        Event Log
      </Typography>
      <Box
        display={"flex"}
        my={"21px"}
        columnGap={"140px"}
        position="relative"
        padding={"10px 80px"}
      >
        <div>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            p={2}
            columnGap={"13.68px"}
            border={"1px solid black"}
            borderRadius={"24px"}
            width={"95px"}
          >
            <Image src={filter} alt="" width={"18.65px"} height={"13.05px"} />
            <Typography
              variant={"body1"}
              fontWeight={"400"}
              fontSize={"16px"}
              fontFamily={"Baskervville"}
              lineHeight={"28px"}
              fontStyle={"Italic"}
            >
              Year
            </Typography>
          </Box>

          <Stack
            divider={<Divider orientation="horizontal" />}
            spacing={2}
            sx={{ marginTop: "35px", width: "50vw" }}
          >
            {club_for_event[0]?.map((item, index) => {
              return (
                <>
                  <Typography
                    variant={"h1"}
                    fontWeight={"400"}
                    fontSize={"20px"}
                    fontFamily={"Baskervville"}
                    lineHeight={"28px"}
                    fontStyle={"Regular"}
                    onClick={() => handleEvents(index + 1)}
                    sx={{ cursor: "pointer" }}
                  >
                    Event {index + 1}
                  </Typography>
                </>
              );
            })}
          </Stack>
        </div>

        <div>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography
              variant={"body1"}
              fontWeight={"400"}
              fontSize={"24px"}
              fontFamily={"Baskervville"}
              lineHeight={"28px"}
              fontStyle={"Regular"}
            >
              Event {EventNo}
            </Typography>

            <Typography
              variant={"body1"}
              fontWeight={"400"}
              fontSize={"24px"}
              fontFamily={"Baskervville"}
              lineHeight={"28px"}
              fontStyle={"Regular"}
            >
              Date
            </Typography>
          </Box>

          <Grid2 container columnSpacing={"24px"} rowGap={"24px"} mt={"52px"}>
            {rows.slice((page - 1) * 4, (page - 1) * 4 + 4).map(() => {
              return (
                <>
                  <Grid2 xs={6}>
                    <Image alt="" src={event_image} />
                  </Grid2>
                </>
              );
            })}
          </Grid2>

          <Box display={"flex"} justifyContent={"center"} marginTop={"40px"}>
            <div
              style={{
                border: "1px solid black",
                borderRadius: "24px",
                padding: "12px",
              }}
            >
              <Pagination
                count={5}
                page={page}
                onChange={handleChangePage}
                sx={{ textDecoration: "underline" }}
              />
            </div>
          </Box>
        </div>
      </Box>
    </>
  );
}

export default ClubGallery;
