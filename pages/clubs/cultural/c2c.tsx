import { FunctionComponent } from "react";
import ClubsLayout from "../../../layouts/ClubsLayout";
import ClubHeader from "../../../features/club/cultural/ClubHeader";
import ClubBanner from "../../../features/club/cultural/ClubBanner";
import ClubDescription from "../../../features/club/cultural/ClubDescription";
import ClubEvents from "../../../features/club/cultural/ClubEvents";
import c2cBg from "../../../assets/cultural_clubs_bg/c2c.png";
import c2cLogo from "../../../assets/cultural_clubs_bg/c2c_logo.png";
import Gallery from "../../../features/club/common/Gallery";
import Crew from "../../../features/club/common/Crew";
import { c2c } from "../../../data/Crews/CulturalClubCrew";
import { StaticImageData } from "next/image";

// import events
import ramp1 from "../../../assets/club_event_pics/cultural/ramp1.jpeg";
import ramp2 from "../../../assets/club_event_pics/cultural/ramp2.jpeg";
import ramp3 from "../../../assets/club_event_pics/cultural/ramp3.jpeg";
import ramp4 from "../../../assets/club_event_pics/cultural/ramp4.jpeg";

interface CoverToCoverProps {}

import { calendarData } from "../../../data/EventsAndGallery/EventCalendarData";
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
    event.club === "C2C"
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

const CoverToCover: FunctionComponent<CoverToCoverProps> = () => {
  return (
    <>
      <ClubsLayout>
        <ClubHeader />
        <ClubBanner clubName="Cover to Cover" bg={c2cBg} />
        <ClubDescription img={c2cLogo}>
          C2C is a literature club at IIIT Naya Raipur, that aims to promote the
          love and appreciation of literature among its members. The club
          creates a nurturing environment that encourages creativity and
          liberation by exploring different literary traditions and
          perspectives. The club&apos;s mission is to expose its members to a
          diverse array of literature and to inspire them to develop their own
          particularizing language for understanding and appreciating what they
          read. The club also encourages members to share their thoughts and
          ideas about literature and to engage in discussions about how
          literature relates to life. C2C club is a unique space for students to
          connect with literature and each other in a meaningful and
          transformative way.
        </ClubDescription>
        <ClubEvents props={earliestTwoEvents} />
        <Crew props={c2c} />
        <Gallery props={gallery} />
      </ClubsLayout>
    </>
  );
};

export default CoverToCover;

interface GalleryProps {
  name: string;
  img: StaticImageData[];
  date: string;
}

const gallery: GalleryProps[] = [
  {
    name: "Rampage",
    date: "12 Sept 2022",
    img: [ramp1, ramp2, ramp3, ramp4],
  },
];