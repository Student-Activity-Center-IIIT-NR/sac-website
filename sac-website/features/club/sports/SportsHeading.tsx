import Image from "next/image";
import AtharvLogo from "../../../assets/sports_icons/atharv_logo.png";
import UpcomingEvents from "./UpcomingEvents";
import { EventData } from "./EventData";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const SportsHeading = () => {
  return (
    <>
      <Stack
        direction={"row"}
        justifyContent="space-between"
        mx="auto"
        px={"80px"}
        columnGap={"60px"}
        alignItems={"center"}
      >
        <Stack
          direction={"row"}
          columnGap={"38px"}
          alignItems={"center"}
          mt={5}
        >
          <Image
            src={AtharvLogo}
            height="248px"
            width="248px"
            alt="Atharv_IIITNR"
            objectFit="contain"
          />
          <Stack maxWidth="240px" textAlign="left" rowGap={"10px"}>
            <Typography
              fontFamily="Lato"
              fontStyle={"normal"}
              fontWeight={800}
              fontSize={"16px"}
              color={"#000000"}
            >
              The Official Sports Club of IIIT Naya Raipur
            </Typography>
            <Typography
              fontFamily="Lato"
              fontStyle={"normal"}
              fontWeight={400}
              fontSize={"16px"}
              color={"#6B7280"}
            >
              Atharv is the sports club at IIIT-NR. It is responsible for
              organizing and conducting sports and eSports events and
              competitions within the college, such as basketball
              leagues,cricket, football, CS:GO Valorant & Fifa tournaments.
            </Typography>
          </Stack>
        </Stack>
        <Stack rowGap="23px" width={700}>
          <Typography
            fontFamily="Rubik"
            fontStyle="normal"
            fontWeight={400}
            fontSize={"48px"}
            textAlign="right"
            color="#000000"
          >
            UPCOMING EVENTS
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              rowGap: "26px",
            }}
          >
            <UpcomingEvents
              icon={require("../../../assets/sports_icons/icon_knight.svg")}
              date={EventData[0].Date}
              name={EventData[0].event}
              content={EventData[0].Info}
            />
            <UpcomingEvents
              icon={require("../../../assets/sports_icons/icon_knight.svg")}
              date={EventData[1].Date}
              name={EventData[1].event}
              content={EventData[1].Info}
            />
          </Box>
        </Stack>
      </Stack>
    </>
  );
};

export default SportsHeading;
