import { FunctionComponent } from "react";
import ClubsLayout from "../../../layouts/ClubsLayout";
import ClubHeader from "../../../features/club/media/ClubHeader";
import ClubBanner from "../../../features/club/cultural/ClubBanner";
import ClubDescription from "../../../features/club/cultural/ClubDescription";
import ClubEvents from "../../../features/club/cultural/ClubEvents";
import Gallery from "../../../features/club/common/Gallery";
import shutterbugBg from "../../../assets/cultural_clubs_bg/shutterbug.png";
import shutterbugLogo from "../../../assets/cultural_clubs_bg/shutterbug_logo.jpeg";
import Crew from "../../../features/club/common/Crew";
import { shutterbug } from "../../../data/Crews/MediaClubCrew";


interface ShutterBugProps {}

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
    event.club === "Shutterbug"
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
const ShutterBug: FunctionComponent<ShutterBugProps> = () => {
  return (
    <>
      <ClubsLayout>
        <ClubHeader />
        <ClubBanner clubName="Shutterbug" bg={shutterbugBg} />
        <ClubDescription img={shutterbugLogo}>
          Shutterbug is IIIT Naya Raipur&apos;s official photography club.
          <br /> This club intends to help interested students of photography to
          learn about the fundamentals of this field. It provides a supportive
          environment to students of our institute to share their knowledge and
          passion for photography. The club runs under the guidance of Dr.
          Ramakrishna Bandi. <br /> We cover all the major events that happen in
          our institute. Also, we organize various photography workshops,
          exhibitions etc.
        </ClubDescription>
        <ClubEvents props={earliestTwoEvents} />
        <Crew props={shutterbug} />
        <Gallery club="Shutterbug"/>
      </ClubsLayout>
    </>
  );
};

export default ShutterBug;
