import { FunctionComponent } from "react";
import ClubsLayout from "../../../layouts/ClubsLayout";
import ClubHeader from "../../../features/club/cultural/ClubHeader";
import ClubBanner from "../../../features/club/cultural/ClubBanner";
import ClubDescription from "../../../features/club/cultural/ClubDescription";
import ClubEvents from "../../../features/club/cultural/ClubEvents";
import Gallery from "../../../features/club/common/Gallery";
import cdtBg from "../../../assets/cultural_clubs_bg/cdt.png";
import cdtLogo from "../../../assets/cultural_clubs_bg/cdt_logo.png";
import { StaticImageData } from "next/image";
import Crew from "../../../features/club/common/Crew";
import { cdt } from "../../../data/Crews/CulturalClubCrew";

// import events
import nukkad1 from "../../../assets/club_event_pics/cultural/nukkad1.jpeg";
import nukkad2 from "../../../assets/club_event_pics/cultural/nukkad2.jpeg";
import nukkad3 from "../../../assets/club_event_pics/cultural/nukkad3.jpeg";
import nukkad4 from "../../../assets/club_event_pics/cultural/nukkad4.jpeg";

interface ClubDeTheatreProps {}

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
    event.club === "CDT"
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
const ClubDeTheatre: FunctionComponent<ClubDeTheatreProps> = () => {
  return (
    <>
      <ClubsLayout>
        <ClubHeader />
        <ClubBanner clubName="Club De Théâtre" bg={cdtBg} />
        <ClubDescription img={cdtLogo}>
          Club De Théâtre is the drama club at IIIT-Naya Raipur that encourages
          students to participate in dramatic presentations such as skits, mime,
          plays, and street theatre. The club promotes the culture of drama,
          comedy, and other related forms of performance within the college. The
          club&apos;s goal is to provide opportunities for students to explore,
          participate, and learn as much as possible about the art of drama. The
          club serves as a platform for students to showcase their talents,
          develop their skills, and experience the joy of performance. It also
          helps in developing the students&apos; self-confidence, ability to
          express themselves, and working in a team.
        </ClubDescription>
        <ClubEvents props={earliestTwoEvents} />
        <Crew props={cdt} />
        <Gallery props={gallery} />
      </ClubsLayout>
    </>
  );
};

export default ClubDeTheatre;

interface GalleryProps {
  name: string;
  img: StaticImageData[];
  date: string;
}

const gallery: GalleryProps[] = [
  {
    name: "Nukkad Natak",
    date: "2 Nov 2022",
    img: [nukkad1, nukkad2, nukkad3, nukkad4],
  },
];
