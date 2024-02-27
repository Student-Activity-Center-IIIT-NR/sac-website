import { FunctionComponent } from "react";
import ClubsLayout from "../../../layouts/ClubsLayout";
import ClubHeader from "../../../features/club/cultural/ClubHeader";
import ClubBanner from "../../../features/club/cultural/ClubBanner";
import ClubDescription from "../../../features/club/cultural/ClubDescription";
import ClubEvents from "../../../features/club/cultural/ClubEvents";
import Gallery from "../../../features/club/common/Gallery";
import indradhanushBg from "../../../assets/cultural_clubs_bg/indradhanush.png";
import indradhanushLogo from "../../../assets/cultural_clubs_bg/indradhanush_logo.png";
import Crew from "../../../features/club/common/Crew";
import { StaticImageData } from "next/image";
import { indradhanush } from "../../../data/Crews/CulturalClubCrew";

// import events
import canva1 from "../../../assets/club_event_pics/cultural/canva1.jpeg";
import canva2 from "../../../assets/club_event_pics/cultural/canva2.jpeg";
import canva3 from "../../../assets/club_event_pics/cultural/canva3.jpeg";
import canva4 from "../../../assets/club_event_pics/cultural/canva4.jpeg";

interface IndradhanushProps {}

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
    event.club === "Indradhanush"
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

const Indradhanush: FunctionComponent<IndradhanushProps> = () => {
  return (
    <>
      <ClubsLayout>
        <ClubHeader />
        <ClubBanner clubName="Indradhanush" bg={indradhanushBg} />
        <ClubDescription img={indradhanushLogo}>
          Indradhanush as the name suggests is a club made to add colors to the
          routine college life. So that creativity follows right behind logic,
          symmetry, and expression. Indradhanush is a cultural club of the
          institute and is behind the beautiful artistic work behind every
          event. This club works on the power of imagination and visualization
          which is a primary solid requirement even while working with codes.
          The club recognizes the need for humans to express ideas to upgrade
          living standards.
        </ClubDescription>
        <ClubEvents props={earliestTwoEvents} />
        <Crew props={indradhanush} />
        <Gallery props={gallery} />
      </ClubsLayout>
    </>
  );
};

export default Indradhanush;

interface GalleryProps {
  name: string;
  img: StaticImageData[];
  date: string;
}

interface EventProps {
  name: string;
  date: string;
  desc: string;
  link: string;
}

const gallery: GalleryProps[] = [
  {
    name: "CanvaKar",
    date: "24 Sept 2022",
    img: [canva1, canva2, canva3, canva4],
  },
];

