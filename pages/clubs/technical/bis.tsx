import { FunctionComponent } from "react";
import ClubsLayout from "../../../layouts/ClubsLayout";
import TechnicalClub from "../../../features/club/technical/TechnicalClub";
import ClubDescription from "../../../features/club/technical/ClubDescription";
import Box from "@mui/material/Box";
import Crew from "../../../features/club/common/Crew";
import Gallery from "../../../features/club/common/Gallery";
import BISBg from "../../../assets/technical_clubs_bg/BIS.jpg";
import BISBgTop from "../../../assets/technical_clubs_bg/bg_BIS_top.png";
import BISBgBottom from "../../../assets/technical_clubs_bg/bg_BIS_bottom.png";
import BISLogo from "../../../assets/technical_clubs_bg/BIS_logo.png";
import { StaticImageData } from "next/image";
import { bis } from "../../../data/TechnicalClubCrew";

interface BISProps {}

import { calendarData } from "../../../data/EventCalendarData";
interface CalendarDataProps {
  date: string;
  eventName: string;
  club: string;
  desc: string;
}
const today = new Date();
const sortedEvents = calendarData.filter((event) => {
  const [eventDay, eventMonth, eventYear] = event.date.split("-").map(Number);
  const eventDate = new Date(eventYear, eventMonth - 1, eventDay);

  return (
    eventDate.getFullYear() >= today.getFullYear() &&
    (eventDate.getMonth() > today.getMonth() ||
      (eventDate.getMonth() === today.getMonth() &&
        eventDate.getDate() >= today.getDate())) &&
    event.club === "BIS"
  );
});
let earliestTwoEvents: CalendarDataProps[] = [];
if (sortedEvents.length >= 2) {
  earliestTwoEvents = sortedEvents.slice(0, 2);
} else if (sortedEvents.length === 1) {
  earliestTwoEvents = [
    ...sortedEvents,
    { date: "", eventName: "No Upcoming Event", club: "", desc: "" },
  ];
} else {
  earliestTwoEvents = [
    { date: "", eventName: "No Upcoming Event", club: "", desc: "" },
    { date: "", eventName: "No Upcoming Event", club: "", desc: "" },
  ];
}

const event1Name = earliestTwoEvents[0].eventName;
const event1Date = earliestTwoEvents[0].date;
const event1Desc = earliestTwoEvents[0].desc;
const event2Name = earliestTwoEvents[1].eventName;
const event2Date = earliestTwoEvents[1].date;
const event2Desc = earliestTwoEvents[1].desc;

const BIS: FunctionComponent<BISProps> = () => {
  return (
    <>
      <ClubsLayout>
        <TechnicalClub
          name="BIS"
          desc="Bureau of Indian standards"
          bgTop={BISBgTop}
          logo={BISLogo}
          color={"#CA50F5"}
          event1Name={event1Name}
          event1Date={event1Date}
          event1Desc={event1Desc}
          event2Name={event2Name}
          event2Date={event2Date}
          event2Desc={event2Desc}
        />
        <ClubDescription bg={BISBg}>
          The Bureau of Indian Standards (BIS) has a program called Standards
          Clubs in schools and colleges. The program aims to teach students the
          importance of quality, standards, and scientific temperament.
          <br /> The clubs are made up of students <br />
          and teachers, and offer <br />
          learning opportunities in <br />
          the field of quality and <br />
          standardization.
        </ClubDescription>
        <Box
          sx={{
            height: "fit-content",
            background: `url(${BISBgBottom.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            pb: 6,
          }}
        >
          {/* <Crew props={bis} /> */}
        </Box>
      </ClubsLayout>
    </>
  );
};

export default BIS;

interface GalleryProps {
  name: string;
  img: StaticImageData[];
  date: string;
}
