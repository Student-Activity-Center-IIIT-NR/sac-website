import { FunctionComponent } from "react";
import ClubsLayout from "../../../layouts/ClubsLayout";
import ClubHeader from "../../../features/club/cultural/ClubHeader";
import ClubBanner from "../../../features/club/cultural/ClubBanner";
import ClubDescription from "../../../features/club/cultural/ClubDescription";
import ClubEvents from "../../../features/club/cultural/ClubEvents";
import Gallery from "../../../features/club/common/Gallery";
import YTCBg from "../../../assets/cultural_clubs_bg/YTC.jpg";
import YTCLogo from "../../../assets/cultural_clubs_bg/YTC_logo.png";
import Crew from "../../../features/club/common/Crew";
import { StaticImageData } from "next/image";
import {ytc} from "../../../data/CulturalClubCrew";
// import event
import bharat1 from "../../../assets/club_event_pics/cultural/bharat1.jpeg";
import bharat3 from "../../../assets/club_event_pics/cultural/bharat3.jpeg";
import bharat4 from "../../../assets/club_event_pics/cultural/bharat4.jpeg";
import bharat5 from "../../../assets/club_event_pics/cultural/bharat5.jpeg";
import bharat6 from "../../../assets/club_event_pics/cultural/bharat6.jpeg";
import ganraya1 from "../../../assets/club_event_pics/cultural/ganraya1.jpeg";
import ganraya2 from "../../../assets/club_event_pics/cultural/ganraya2.jpeg";
import ganraya3 from "../../../assets/club_event_pics/cultural/ganraya3.jpeg";
import ganraya4 from "../../../assets/club_event_pics/cultural/ganraya4.jpeg";

interface YTCProps {}

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

const YTC: FunctionComponent<YTCProps> = () => {
  return (
    <>
      <ClubsLayout>
        <ClubHeader />
        <ClubBanner clubName="Yuva Tourism Club ( YTC )" bg={YTCBg} />
        <ClubDescription img={YTCLogo}>
          Following the directions of Hon&apos;aposble Prime Minister of India,
          Ministry of Tourism launched the campaign focusing on “YUVA Tourism
          Club” with the strategic objective of creating interest, awareness and
          a sense of responsibility towards our country&apos;s natural and
          cultural heritage / tourism amongst children and youth. The vision is
          to nurture and develop young ambassadors of Indian tourism who would
          become aware of tourism possibilities in India, appreciate our rich
          cultural heritage and develop an interest and passion for tourism.
        </ClubDescription>
        {/* <ClubEvents props={earliestTwoEvents} /> */}
        {/* <Crew props={crew} /> */}
        {/* <Gallery props={gallery} /> */}
      </ClubsLayout>
    </>
  );
};

export default YTC;

interface GalleryProps {
  name: string;
  img: StaticImageData[];
  date: string;
}


const gallery: GalleryProps[] = [
  {
    name: "Bharat ke Rang",
    date: "13 Jan 2023",
    img: [bharat1, bharat3, bharat4, bharat5, bharat6],
  },
  {
    name: "Jai Ganraya",
    date: "31 Aug 2022",
    img: [ganraya1, ganraya2, ganraya3, ganraya4],
  },
];