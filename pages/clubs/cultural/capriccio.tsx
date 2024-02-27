import { FunctionComponent } from "react";
import ClubsLayout from "../../../layouts/ClubsLayout";
import ClubHeader from "../../../features/club/cultural/ClubHeader";
import ClubBanner from "../../../features/club/cultural/ClubBanner";
import ClubDescription from "../../../features/club/cultural/ClubDescription";
import ClubEvents from "../../../features/club/cultural/ClubEvents";
import Gallery from "../../../features/club/common/Gallery";
import capriccioBg from "../../../assets/cultural_clubs_bg/capriccio.png";
import capriccioLogo from "../../../assets/cultural_clubs_bg/capriccio_logo.png";
import Crew from "../../../features/club/common/Crew";
import {capriccio} from "../../../data/Crews/CulturalClubCrew"

interface CapriccioProps {}

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
    event.club === "Capriccio"
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

const Capriccio: FunctionComponent<CapriccioProps> = () => {
  return (
    <>
      <ClubsLayout>
        <ClubHeader />
        <ClubBanner clubName="Capriccio" bg={capriccioBg} />
        <ClubDescription img={capriccioLogo}>
          Capriccio is a music club under SAC that encourages students to become
          immersed in the art and science of music. The club focuses on the
          creation and performance of music, emphasizing the importance of
          feeling the music in order to connect with audiences. Music has the
          power to bring people together and to create a sense of harmony and
          emotional connection. The club provides opportunities for students to
          explore their musical talents and interests, and to discover the joy
          and beauty of music. Additionally, being a part of the club allows
          students to develop a deeper understanding and appreciation for music,
          which can be an essential form of self-expression and a valuable
          companion throughout life&apos;s journey.
        </ClubDescription>
        <ClubEvents props={earliestTwoEvents} />
        <Crew props={capriccio} />
        <Gallery club="Capriccio" />
      </ClubsLayout>
    </>
  );
};

export default Capriccio;