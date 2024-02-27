import { FunctionComponent } from "react";
import ClubsLayout from "../../../layouts/ClubsLayout";
import ClubHeader from "../../../features/club/cultural/ClubHeader";
import ClubBanner from "../../../features/club/cultural/ClubBanner";
import ClubDescription from "../../../features/club/cultural/ClubDescription";
import ClubEvents from "../../../features/club/cultural/ClubEvents";
import Gallery from "../../../features/club/common/Gallery";
import munBg from "../../../assets/cultural_clubs_bg/mun.png";
import munLogo from "../../../assets/cultural_clubs_bg/mun_logo.png";
import Crew from "../../../features/club/common/Crew";
import { mun } from "../../../data/Crews/CulturalClubCrew";

interface ModelUnitedNationProps {}

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

const ModelUnitedNation: FunctionComponent<ModelUnitedNationProps> = () => {
  return (
    <>
      <ClubsLayout>
        <ClubHeader />
        <ClubBanner clubName="Model United Nations" bg={munBg} />
        <ClubDescription img={munLogo}>
          The IIIT NR MUN is a Model United Nations conference that provides
          delegates with a platform to discuss current global issues and to
          develop a range of skills such as public speaking, debate, writing,
          critical thinking, collaboration, and leadership. The conference
          simulates the roles of UN ambassadors and delegates engaging in
          activities such as drafting resolutions, strategizing, and negotiating
          with other delegates. The conference provides an opportunity to think
          critically and creatively, and to develop solutions to global issues.
          From having heated debates to forming alliances, this club will
          provide a platform to step into the shoes of UN ambassadors.
        </ClubDescription>
        <ClubEvents props={earliestTwoEvents} />
        <Crew props={mun} />
        <Gallery club="MUN" />
      </ClubsLayout>
    </>
  );
};

export default ModelUnitedNation;
