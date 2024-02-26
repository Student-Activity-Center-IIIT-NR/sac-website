import { FunctionComponent } from "react";
import ClubsLayout from "../../../layouts/ClubsLayout";
import TechnicalClub from "../../../features/club/technical/TechnicalClub";
import ClubDescription from "../../../features/club/technical/ClubDescription";
import Box from "@mui/material/Box";
import Crew from "../../../features/club/common/Crew";
import Gallery from "../../../features/club/common/Gallery";
import tsocBg from "../../../assets/technical_clubs_bg/tsoc.png";
import tsocBgTop from "../../../assets/technical_clubs_bg/bg_tsoc_top.svg";
import tsocBgBottom from "../../../assets/technical_clubs_bg/bg_tsoc_bottom.svg";
import tsocLogo from "../../../assets/technical_clubs_bg/tsoc_logo.jpg";
import { StaticImageData } from "next/image";
import { tsoc } from "../../../data/TechnicalClubCrew";

// import events
import bit1 from "../../../assets/club_event_pics/technical/bit1.jpeg";
import bit2 from "../../../assets/club_event_pics/technical/bit2.jpeg";
import bit3 from "../../../assets/club_event_pics/technical/bit3.jpeg";
import bit4 from "../../../assets/club_event_pics/technical/bit4.jpeg";
import bit5 from "../../../assets/club_event_pics/technical/bit5.jpeg";
import bit6 from "../../../assets/club_event_pics/technical/bit6.jpeg";
import bit7 from "../../../assets/club_event_pics/technical/bit7.jpeg";
import bit8 from "../../../assets/club_event_pics/technical/bit8.jpeg";

interface TSOCProps {}

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
    event.club === "TSoC"
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

const TSOC: FunctionComponent<TSOCProps> = () => {
  return (
    <>
      <ClubsLayout>
        <TechnicalClub
          name="TSOC"
          desc="The Society of Coders"
          bgTop={tsocBgTop}
          logo={tsocLogo}
          color={"#7AA2F7"}
          event1Name={event1Name}
          event1Date={event1Date}
          event1Desc={event1Desc}
          event2Name={event2Name}
          event2Date={event2Date}
          event2Desc={event2Desc}
        />
        <ClubDescription bg={tsocBg}>
          The Society of Coders at IIIT-Naya Raipur is a student-run club that
          aims to foster a culture of coding at the college by hosting various
          events such as hackathons, workshops, and competitions. The club
          emphasizes hands-on learning and provides a platform for students to
          share their ideas and experiences with programming in a supportive
          environment. It also serves as a forum for people to share their
          ideas, thoughts, and ambitions regarding programming in an encouraging
          and conducive environment. It&apos;s a club that welcomes everyone
          from first-time coders to experienced veterans of the trade.
        </ClubDescription>
        <Box
          sx={{
            height: "fit-content",
            background: `url(${tsocBgBottom.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            pb: 6,
          }}
        >
          <Crew props={tsoc} />
          <Gallery props={gallery} />
        </Box>
      </ClubsLayout>
    </>
  );
};

export default TSOC;

interface GalleryProps {
  name: string;
  img: StaticImageData[];
  date: string;
}

const gallery: GalleryProps[] = [
  {
    name: "Bit-2-Byte",
    date: "9-10 April 2022",
    img: [bit1, bit2, bit3, bit4, bit5, bit6, bit7, bit8],
  },
];
