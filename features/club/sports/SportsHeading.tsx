import Image from "next/image";
import AtharvLogo from "../../../assets/sports_icons/atharv_logo.png";
import UpcomingEvents from "./UpcomingEvents";
import { earliestTwoEvents } from "./EventData";
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
            height={248}
            width={248}
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
              date={earliestTwoEvents[0].date}
              name={earliestTwoEvents[0].eventName}
              content={earliestTwoEvents[0].desc}
            />
            <UpcomingEvents
              icon={require("../../../assets/sports_icons/icon_knight.svg")}
              date={earliestTwoEvents[1].date}
              name={earliestTwoEvents[1].eventName}
              content={earliestTwoEvents[1].desc}
            />
          </Box>
        </Stack>
      </Stack>
    </>
  );
};

export default SportsHeading;
