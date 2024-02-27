import { StaticImageData } from "next/image";
import { allEvents } from "./ClubGalleryData";

// Major Events
import hackmanthan from "../../assets/major_events_pics/hackmanthan.jpeg";
import scientfic from "../../assets/major_events_pics/scientfic.jpeg";
import ganesh_chaturthi from "../../assets/major_events_pics/ganesh_chaturthi.jpeg";
import technovate from "../../assets/major_events_pics/technovate.jpeg";

// Sports
import lakshya1 from "../../assets/club_event_pics/sports/lakshya1.jpeg";
import lakshya2 from "../../assets/club_event_pics/sports/lakshya2.jpeg";
import lakshya3 from "../../assets/club_event_pics/sports/lakshya3.jpeg";
import lakshya4 from "../../assets/club_event_pics/sports/lakshya4.jpeg";
import lakshya5 from "../../assets/club_event_pics/sports/lakshya5.jpeg";
import lakshya6 from "../../assets/club_event_pics/sports/lakshya6.jpeg";

interface MajorEventsProps {
  label: string;
  img: StaticImageData;
  date: string;
}

interface RecentClubEventsProps {
  image: StaticImageData[];
  name: string;
  club: string;
  date?: string;
}

interface ClubEventsProps {
  cultural: { name: string; date?: string; image: StaticImageData[], club: string }[];
  technical: { name: string; date?: string; image: StaticImageData[], club: string }[];
  sports: { name: string; date?: string; image: StaticImageData[], club: string }[];
  media: { name: string; date?: string; image: StaticImageData[], club: string }[];
}

/*
    You need to delete the last entry and add the new entry first for every new entry. 
    Alternatively, you have to delete the newsData[last] and add the new entry on newsData[0]. 
    Also you have to make sure that on every new entry you have to delete the images from the assets > major_events_pics 
    folder and add the new images for major events. 
*/

export const majorEvents: MajorEventsProps[] = [
  {
    label: "SCIη′TFIC",
    img: scientfic,
    date: "14 January 2023",
  },
  {
    label: "Technovate",
    img: technovate,
    date: "5-7 Nov 2022",
  },
  {
    label: "Ganesh Chaturthi",
    img: ganesh_chaturthi,
    date: "Aug 31 - Sep 4",
  },
  {
    label: "HackManthan",
    img: hackmanthan,
    date: "15 June 2022",
  },
];

export const recentClubEvents: RecentClubEventsProps[] = allEvents.filter((event) =>
  event.name === "Chai Pe Charcha"
  || event.name === "Yet to be Decided"
  || event.name === "CanvaKar"
  || event.name === "Quizadry"
  || event.name === "Yet to be Decided"
  || event.name === "Bit-2-Byte")

export const ClubEvents: ClubEventsProps = {
  cultural: allEvents.filter((event) =>
    event.club === "TDB" || event.club === "CDT" ||
    event.club === "MUN" || event.club === "Igniters" ||
    event.club === "YTC" || event.club === "Indradhanush" ||
    event.club === "Capriccio" || event.club === "C2C"),
  technical: allEvents.filter((event) =>
    event.club === "TSoC" || event.club === "AIML" ||
    event.club === "Inquizitive" || event.club === "ComEt" ||
    event.club === "BIS" || event.club === "IIC" || event.club === "Ciphercell"),
  media: allEvents.filter((event) =>
    event.club === "Shutterbug"),
  sports: [
    {
      name: "Lakshya",
      date: "",
      image: [lakshya1, lakshya2, lakshya3, lakshya4, lakshya5, lakshya6],
      club: "Atharv"
    },
  ],
};
