import { StaticImageData } from "next/image";

// Major Events
import hackmanthan from "../../assets/major_events_pics/hackmanthan.jpeg";
import scientfic from "../../assets/major_events_pics/scientfic.jpeg";
import ganesh_chaturthi from "../../assets/major_events_pics/ganesh_chaturthi.jpeg";
import technovate from "../../assets/major_events_pics/technovate.jpeg";

// Recent Major Events
import chaipecharcha from "../../assets/recent_club_events/chaipecharcha.jpeg";
import canvakar from "../../assets/recent_club_events/canvakar.jpeg";
import quizadry from "../../assets/recent_club_events/quizadry.jpeg";
import run from "../../assets/recent_club_events/run.jpeg";
import yet from "../../assets/recent_club_events/yet.jpeg";
import blood from "../../assets/recent_club_events/blood.png";
import constitution from "../../assets/recent_club_events/constitution.jpeg";

// Technical
import robo1 from "../../assets/club_event_pics/technical/robo1.jpeg";
import robo2 from "../../assets/club_event_pics/technical/robo2.jpeg";
import robo3 from "../../assets/club_event_pics/technical/robo3.jpeg";
import robo4 from "../../assets/club_event_pics/technical/robo4.jpeg";
import robo5 from "../../assets/club_event_pics/technical/robo5.jpeg";
import robo6 from "../../assets/club_event_pics/technical/robo6.jpeg";
import hack1 from "../../assets/club_event_pics/technical/hack1.jpeg";
import hack2 from "../../assets/club_event_pics/technical/hack2.jpeg";
import hack3 from "../../assets/club_event_pics/technical/hack3.jpeg";
import hack4 from "../../assets/club_event_pics/technical/hack4.jpeg";
import hack5 from "../../assets/club_event_pics/technical/hack5.jpeg";
import hack6 from "../../assets/club_event_pics/technical/hack6.jpeg";
import quiz1 from "../../assets/club_event_pics/technical/quiz1.jpeg";
import quiz2 from "../../assets/club_event_pics/technical/quiz2.jpeg";
import quiz3 from "../../assets/club_event_pics/technical/quiz3.jpeg";
import quiz4 from "../../assets/club_event_pics/technical/quiz4.jpeg";
import quiz5 from "../../assets/club_event_pics/technical/quiz5.jpeg";
import quiz6 from "../../assets/club_event_pics/technical/quiz6.jpeg";

// Cultural
import chai1 from "../../assets/club_event_pics/cultural/chai1.jpeg";
import chai2 from "../../assets/club_event_pics/cultural/chai2.jpeg";
import chai3 from "../../assets/club_event_pics/cultural/chai3.jpeg";
import chai4 from "../../assets/club_event_pics/cultural/chai4.jpeg";
import chai5 from "../../assets/club_event_pics/cultural/chai5.jpeg";
import chai6 from "../../assets/club_event_pics/cultural/chai6.jpeg";
import ramp1 from "../../assets/club_event_pics/cultural/ramp1.jpeg";
import ramp2 from "../../assets/club_event_pics/cultural/ramp2.jpeg";
import ramp3 from "../../assets/club_event_pics/cultural/ramp3.jpeg";
import ramp4 from "../../assets/club_event_pics/cultural/ramp4.jpeg";
import ramp5 from "../../assets/club_event_pics/cultural/ramp5.jpeg";
import ramp6 from "../../assets/club_event_pics/cultural/ramp6.jpeg";
import canva1 from "../../assets/club_event_pics/cultural/canva1.jpeg";
import canva2 from "../../assets/club_event_pics/cultural/canva2.jpeg";
import canva3 from "../../assets/club_event_pics/cultural/canva3.jpeg";
import canva4 from "../../assets/club_event_pics/cultural/canva4.jpeg";
import canva5 from "../../assets/club_event_pics/cultural/canva5.jpeg";
import canva6 from "../../assets/club_event_pics/cultural/canva6.jpeg";
import yet1 from "../../assets/club_event_pics/cultural/yet1.jpeg";
import yet2 from "../../assets/club_event_pics/cultural/yet2.jpeg";
import yet3 from "../../assets/club_event_pics/cultural/yet3.jpeg";
import yet4 from "../../assets/club_event_pics/cultural/yet4.jpeg";
import yet5 from "../../assets/club_event_pics/cultural/yet5.jpeg";
import yet6 from "../../assets/club_event_pics/cultural/yet6.jpeg";

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
  img: StaticImageData;
  name: string;
  clubName: string;
  date: string;
}

interface ClubEventsProps {
  cultural: { name: string; date?: string; img: StaticImageData[] }[];
  technical: { name: string; date?: string; img: StaticImageData[] }[];
  sports: { name: string; date?: string; img: StaticImageData[] }[];
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

export const recentClubEvents: RecentClubEventsProps[] = [
  {
    img: chaipecharcha,
    name: "Chai Pe Charcha",
    clubName: "by MUN club",
    date: "19 Jan 2023",
  },
  {
    img: yet,
    name: "Yet to be Decided",
    clubName: "by Take-Da-Bait club",
    date: "20 Jan 2023",
  },
  {
    img: constitution,
    name: "Constitution Day",
    clubName: "by NSS",
    date: "26 Nov 2022",
  },
  {
    img: blood,
    name: "Blood Donation Camp",
    clubName: "by NSS",
    date: "8 Nov 2022",
  },
  {
    img: canvakar,
    name: "CanvaKar",
    clubName: "by IndraDhanush club",
    date: "14 Oct to 16 Nov 2022",
  },
  {
    img: quizadry,
    name: "Quizadry",
    clubName: "by Inquizitive club",
    date: "15 Oct,2022",
  },
  {
    img: run,
    name: "RUN FOR UNITY",
    clubName: "by NSS",
    date: "31 Oct, 2022",
  },
];

export const ClubEvents: ClubEventsProps = {
  cultural: [
    {
      name: "Yet to be Decided",
      date: "20 Jan 2023",
      img: [yet1, yet2, yet3, yet4, yet5, yet6],
    },
    {
      name: "Chai Pe Charcha",
      date: "20 Jan 2023",
      img: [chai1, chai2, chai3, chai4, chai5, chai6],
    },
    {
      name: "CanvaKar",
      date: "",
      img: [canva1, canva2, canva3, canva4, canva5, canva6],
    },

    {
      name: "Ramphage",
      date: "",
      img: [ramp1, ramp2, ramp3, ramp4, ramp5, ramp6],
    },
  ],
  technical: [
    {
      name: "Quizadry",
      date: "",
      img: [quiz1, quiz2, quiz3, quiz4, quiz5, quiz6],
    },
    {
      name: "Robolution",
      date: "",
      img: [robo1, robo2, robo3, robo4, robo5, robo6],
    },
    {
      name: "Hacknovate",
      date: "",
      img: [hack1, hack2, hack3, hack4, hack5, hack6],
    },
  ],
  sports: [
    {
      name: "Lakshya",
      date: "",
      img: [lakshya1, lakshya2, lakshya3, lakshya4, lakshya5, lakshya6],
    },
  ],
};
