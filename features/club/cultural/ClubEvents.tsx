import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import clubs from "./ClubsInfo";
import Image from "next/image";
import starIcon from "../../../assets/icon_star.png";

export default function ClubEvents({ clubName }: { clubName: any }) {
  const club_for_event = clubs
    .filter((item) => item.name == clubName)
    .map((data) => data.Events);
  return (
    <>
      <Typography
        variant={"h1"}
        fontWeight={"400"}
        fontSize={"48px"}
        fontFamily={"Baskervville"}
        lineHeight={"62px"}
        fontStyle={"Regular"}
        display={"flex"}
        justifyContent={"center"}
        sx={{ marginTop: "108px" }}
      >
        Upcoming Events
      </Typography>

      <Box>
        {club_for_event[0]?.map((item, index) => {
          return (
            <>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  columnGap: "13.11px",
                  marginTop: "108px",
                }}
              >
                <Typography
                  variant={"h1"}
                  fontWeight={"400"}
                  fontSize={"32px"}
                  fontFamily={"Cotta"}
                  lineHeight={"100%"}
                  fontStyle={"Regular"}
                  display={"flex"}
                  justifyContent={"center"}
                >
                  Events {index + 1}
                </Typography>

                <Image
                  src={starIcon}
                  alt=""
                  height={"17.5px"}
                  width={"17.5px"}
                />

                <Typography
                  variant={"h1"}
                  fontWeight={"400"}
                  fontSize={"32px"}
                  fontFamily={"Cotta"}
                  lineHeight={"100%"}
                  fontStyle={"Regular"}
                  display={"flex"}
                  justifyContent={"center"}
                >
                  {item.EventDate}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  columnGap: "13.11px",
                  marginTop: "20px",
                }}
              >
                <Typography
                  variant={"h1"}
                  fontWeight={"400"}
                  fontSize={"16px"}
                  fontFamily={"Baskervville"}
                  lineHeight={"20.69px"}
                  fontStyle={"italic"}
                  textAlign={"center"}
                  sx={{width:'930px'}}
                >
                  {item.EventDiscription}
                  <br/>
                 
                  <div style={{marginTop:'30px'}}> Form:{item.FormLink}</div>
                </Typography>
              </Box>
            </>
          );
        })}
      </Box>
    </>
  );
}
