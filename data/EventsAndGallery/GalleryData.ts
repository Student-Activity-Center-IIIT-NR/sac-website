import { StaticImageData } from "next/image";
import { allEvents } from "./ClubGalleryData";

// Major Events
import hackmanthan from "../../assets/major_events_pics/hackmanthan.jpeg";
import scientfic from "../../assets/major_events_pics/scientfic.jpeg";
import ganesh_chaturthi from "../../assets/major_events_pics/ganesh_chaturthi.jpeg";
import technovate from "../../assets/major_events_pics/technovate.jpeg";
import Aug_3 from "../../assets/major_events_pics/15_Aug_3.jpg";
import Aug_4 from "../../assets/major_events_pics/15_Aug4.jpg";
import Jan26 from "../../assets/major_events_pics/26_Jan.jpg";
import Jan262 from "../../assets/major_events_pics/26_Jan2.jpg";
import aarambh from "../../assets/major_events_pics/aarambh.jpg";
import aarambh2 from "../../assets/major_events_pics/aarambh2.jpg";
import Devfest from "../../assets/major_events_pics/Devfest.jpg";
import Devfest2 from "../../assets/major_events_pics/devfest2.jpg";
import GC from "../../assets/major_events_pics/GC.jpeg";
import GC2 from "../../assets/major_events_pics/GC2.jpeg";
import MUNC from "../../assets/major_events_pics/MUNC.jpg";
import MUNC2 from "../../assets/major_events_pics/MUNC2.jpg";
import scintfic from "../../assets/major_events_pics/scintfic.jpg";
import scintfic2 from "../../assets/major_events_pics/scintfic2.jpg";
import tech24_1 from "../../assets/major_events_pics/tech24_1.jpg"
import tech24_2 from "../../assets/major_events_pics/tech24_2.jpg"
import tech24_3 from "../../assets/major_events_pics/tech24_3.jpg"
import tech24_4 from "../../assets/major_events_pics/tech24_4.jpg"

// Sports
import lakshya1 from "../../assets/club_event_pics/2022/sports/lakshya1.jpeg";
import lakshya2 from "../../assets/club_event_pics/2022/sports/lakshya2.jpeg";
import lakshya3 from "../../assets/club_event_pics/2022/sports/lakshya3.jpeg";
import lakshya4 from "../../assets/club_event_pics/2022/sports/lakshya4.jpeg";
import lakshya5 from "../../assets/club_event_pics/2022/sports/lakshya5.jpeg";
import lakshya6 from "../../assets/club_event_pics/2022/sports/lakshya6.jpeg";

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
  cultural: {
    name: string;
    date?: string;
    image: StaticImageData[];
    club: string;
    year: string;
  }[];
  technical: {
    name: string;
    date?: string;
    image: StaticImageData[];
    club: string;
    year: string;
  }[];
  sports: {
    name: string;
    date?: string;
    image: StaticImageData[];
    club: string;
    year: string;
  }[];
  media: {
    name: string;
    date?: string;
    image: StaticImageData[];
    club: string;
    year: string;
  }[];
}

/*
    You need to delete the last entry and add the new entry first for every new entry. 
    Alternatively, you have to delete the newsData[last] and add the new entry on newsData[0]. 
    Also you have to make sure that on every new entry you have to delete the images from the assets > major_events_pics 
    folder and add the new images for major events. 
*/

export const majorEvents: MajorEventsProps[] = [
  {
    label: "Technovate 2024",
    img: tech24_1,
    date: "16-18 Feb 2024",
  },

  {
    label: "Technovate 2024",
    img: tech24_2,
    date: "16-18 Feb 2024",
  },

  {
    label: "Technovate 2024",
    img: tech24_3,
    date: "16-18 Feb 2024",
  },

  {
    label: "Technovate 2024",
    img: tech24_4,
    date: "16-18 Feb 2024",
  },
  {
    label: "Republic Day",
    img: Jan26,
    date: "26 January 2024",
  },
  {
    label: "Republic Day",
    img: Jan262,
    date: "26 January 2024",
  },
  {
    label: "SCIη′TFIC",
    img: scintfic,
    date: "14 January 2023",
  },
  {
    label: "SCIη′TFIC",
    img: scintfic2,
    date: "14 January 2023",
  },
  {
    label: "Devfest Raipur 2023",
    img: Devfest,
    date: "16 December 2024",
  },
  {
    label: "Devfest Raipur 2023",
    img: Devfest2,
    date: "16 December 2024",
  },
  {
    label: "Aarambh 2023",
    img: aarambh,
    date: "14-16 October 2023",
  },
  {
    label: "Aarambh 2023",
    img: aarambh2,
    date: "14-16 October 2023",
  },
  {
    label: "Ganesh Chaturthi",
    img: GC,
    date: "19-21 September 2023",
  },
  {
    label: "Ganesh Chaturthi",
    img: GC2,
    date: "19-21 September 2023",
  },
  {
    label: "MUN Conference 2023",
    img: MUNC2,
    date: "15 April 2023",
  },
  {
    label: "MUN Conference 2023",
    img: MUNC,
    date: "15 April 2023",
  },
  {
    label: "Independence Day",
    img: Aug_3,
    date: "15 August 2023",
  },
  {
    label: "Independence Day",
    img: Aug_4,
    date: "15 August 2023",
  },
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

export const recentClubEvents: RecentClubEventsProps[] = allEvents.filter(
  (event) =>
    event.name === "Chai Pe Charcha" ||
    event.name === "Yet to be Decided" ||
    event.name === "CanvaKar" ||
    event.name === "Quizadry" ||
    event.name === "Yet to be Decided" ||
    event.name === "Bit-2-Byte"
);

export const ClubEvents: ClubEventsProps = {
  cultural: allEvents.filter(
    (event) =>
      event.club === "TDB" ||
      event.club === "CDT" ||
      event.club === "MUN" ||
      event.club === "Igniters" ||
      event.club === "YTC" ||
      event.club === "Indradhanush" ||
      event.club === "Capriccio" ||
      event.club === "C2C"
  ),
  technical: allEvents.filter(
    (event) =>
      event.club === "TSoC" ||
      event.club === "AIML" ||
      event.club === "Inquizitive" ||
      event.club === "ComEt" ||
      event.club === "BIS" ||
      event.club === "IIC" ||
      event.club === "Ciphercell"
  ),
  media: allEvents.filter((event) => event.club === "Shutterbug"),
  sports: [
    {
      name: "Lakshya",
      date: "",
      image: [lakshya1, lakshya2, lakshya3, lakshya4, lakshya5, lakshya6],
      club: "Atharv",
      year: "2023",
    },
  ],
};
