import { StaticImageData } from "next/image";
import { allEvents } from "./ClubGalleryData";

// Major Events
import BD_1 from "../../assets/major_events_pics/BD_1.jpg";
import BD_2 from "../../assets/major_events_pics/BD_2.jpg";
import BD_3 from "../../assets/major_events_pics/BD_3.jpg";
import BD_4 from "../../assets/major_events_pics/BD_4.jpg";
import BD_5 from "../../assets/major_events_pics/BD_5.jpg";
import BD_6 from "../../assets/major_events_pics/BD_6.jpg";
import BD2_1 from "../../assets/major_events_pics/BD2_1.jpg";
import BD2_2 from "../../assets/major_events_pics/BD2_2.jpg";
import BD2_3 from "../../assets/major_events_pics/BD2_3.jpg";
import BD2_4 from "../../assets/major_events_pics/BD2_4.jpg";
import BD2_5 from "../../assets/major_events_pics/BD2_5.jpg";
import BD2_6 from "../../assets/major_events_pics/BD2_6.jpg";
import CY_1 from "../../assets/major_events_pics/CY_1.jpg";
import CY_2 from "../../assets/major_events_pics/CY_2.jpg";
import CY_3 from "../../assets/major_events_pics/CY_3.jpg";
import CY_4 from "../../assets/major_events_pics/CY_4.jpg";
import CY_5 from "../../assets/major_events_pics/CY_5.jpg";
import CY_6 from "../../assets/major_events_pics/CY_6.jpg";
import scientfic from "../../assets/major_events_pics/scientfic.jpeg";
import ScinTfic_1 from "../../assets/major_events_pics/ScinTfic_1.jpg";
import ScinTfic_2 from "../../assets/major_events_pics/ScinTfic_2.jpg";
import ScinTfic_3 from "../../assets/major_events_pics/ScinTfic_3.jpg";
import ScinTfic_4 from "../../assets/major_events_pics/ScinTfic_4.jpg";
import ScinTfic_5 from "../../assets/major_events_pics/ScinTfic_5.jpg";
import ScinTfic_6 from "../../assets/major_events_pics/ScinTfic_6.jpg";
import technovate from "../../assets/major_events_pics/technovate.jpeg";
import Aug_3 from "../../assets/major_events_pics/15_Aug_3.jpg";
import Aug_4 from "../../assets/major_events_pics/15_Aug4.jpg";
import Aug_31 from "../../assets/major_events_pics/Aug_3.jpg";
import Aug_41 from "../../assets/major_events_pics/Aug_4.jpg";
import Aug_1 from "../../assets/major_events_pics/Aug_1.jpg";
import Aug_2 from "../../assets/major_events_pics/Aug_2.jpg";
import Aug_5 from "../../assets/major_events_pics/Aug_5.jpg";
import Aug_6 from "../../assets/major_events_pics/Aug_6.jpg";
import Aug_7 from "../../assets/major_events_pics/Aug_7.jpg";
import Aug_8 from "../../assets/major_events_pics/Aug_8.jpg";
import Aug_9 from "../../assets/major_events_pics/Aug_9.jpg";
import Aug_10 from "../../assets/major_events_pics/Aug_10.jpg";
import Jan26 from "../../assets/major_events_pics/26_Jan.jpg";
import Jan262 from "../../assets/major_events_pics/26_Jan2.jpg";
import Devfest from "../../assets/major_events_pics/Devfest.jpg";
import Devfest2 from "../../assets/major_events_pics/devfest2.jpg";
import GDG_1 from "../../assets/major_events_pics/GDG_1.jpg";
import GDG_2 from "../../assets/major_events_pics/GDG_2.jpg";
import GDG_3 from "../../assets/major_events_pics/GDG_5.jpeg";
import GDG_4 from "../../assets/major_events_pics/GDG_4.jpeg";
import GDG_5 from "../../assets/major_events_pics/GDG_3.jpg";
import GC from "../../assets/major_events_pics/GC.jpeg";
import GC2 from "../../assets/major_events_pics/GC2.jpeg";
import GC_1 from "../../assets/major_events_pics/GC_1.jpg";
import GC_2 from "../../assets/major_events_pics/GC_2.jpg";
import GC_3 from "../../assets/major_events_pics/GC_3.jpg";
import GC_4 from "../../assets/major_events_pics/GC_4.jpg";
import GC_5 from "../../assets/major_events_pics/GC_5.jpg";
import GC_6 from "../../assets/major_events_pics/GC_6.jpg";
import GC_7 from "../../assets/major_events_pics/GC_7.jpg";
import GC_8 from "../../assets/major_events_pics/GC_8.jpg";
import GC_9 from "../../assets/major_events_pics/GC_9.jpg";
import GC_10 from "../../assets/major_events_pics/GC_10.jpg";
import GC_11 from "../../assets/major_events_pics/GC_11.jpg";
import scintfic from "../../assets/major_events_pics/scintfic.jpg";
import scintfic2 from "../../assets/major_events_pics/scintfic2.jpg";
import tech24_1 from "../../assets/major_events_pics/tech24_1.jpg";
import tech24_2 from "../../assets/major_events_pics/tech24_2.jpg";
import tech24_3 from "../../assets/major_events_pics/tech24_3.jpg";
import tech24_4 from "../../assets/major_events_pics/tech24_4.jpg";
import GN_1 from "../../assets/major_events_pics/GN_1.png";
import GN_2 from "../../assets/major_events_pics/GN_2.png";
import GN_3 from "../../assets/major_events_pics/GN_3.png";
import GN_4 from "../../assets/major_events_pics/GN_4.png";
import GYM_1 from "../../assets/major_events_pics/Gym_1.jpg";
import GYM_2 from "../../assets/major_events_pics/Gym_2.jpg";
import GYM_3 from "../../assets/major_events_pics/Gym_3.jpg";
import GYM_4 from "../../assets/major_events_pics/Gym_4.jpg";
import GYM_5 from "../../assets/major_events_pics/Gym_5.jpg";
import GYM_6 from "../../assets/major_events_pics/Gym_6.jpg";
import Memori_1 from "../../assets/major_events_pics/Memori_1.jpg";
import Memori_2 from "../../assets/major_events_pics/Memori_2.jpg";
import Memori_3 from "../../assets/major_events_pics/Memori_3.jpg";
import Memori_4 from "../../assets/major_events_pics/Memori_4.jpg";
import Memori_5 from "../../assets/major_events_pics/Memori_5.jpg";
import Memori_6 from "../../assets/major_events_pics/Memori_6.jpg";
import Orien_1 from "../../assets/major_events_pics/Orien_1.jpg";
import Orien_2 from "../../assets/major_events_pics/Orien_2.jpg";
import Orien_3 from "../../assets/major_events_pics/Orien_3.jpg";
import Orien_4 from "../../assets/major_events_pics/Orien_4.jpg";
import Orien_5 from "../../assets/major_events_pics/Orien_5.jpg";
import Orien_6 from "../../assets/major_events_pics/Orien_6.jpg";
import Sarawati_1 from "../../assets/major_events_pics/Saraswati_1.jpg";
import Sarawati_2 from "../../assets/major_events_pics/Saraswati_2.jpg";
import Sarawati_3 from "../../assets/major_events_pics/Saraswati_3.jpg";
import Sarawati_4 from "../../assets/major_events_pics/Saraswati_4.jpg";
import Sarawati_5 from "../../assets/major_events_pics/Saraswati_5.jpg";
import Sarawati_6 from "../../assets/major_events_pics/Saraswati_6.jpg";
import SIH_1 from "../../assets/major_events_pics/SIH_1.jpg";
import SIH_2 from "../../assets/major_events_pics/SIH_2.jpg";
import SIH_3 from "../../assets/major_events_pics/SIH_3.jpg";
import SIH_4 from "../../assets/major_events_pics/SIH_4.jpg";
import SIH_5 from "../../assets/major_events_pics/SIH_5.jpg";
import SIH_6 from "../../assets/major_events_pics/SIH_6.jpg";
import US_1 from "../../assets/major_events_pics/US_1.jpg";
import US_2 from "../../assets/major_events_pics/US_2.jpg";
import US_3 from "../../assets/major_events_pics/US_3.jpg";
import US_4 from "../../assets/major_events_pics/US_4.jpg";
import US_5 from "../../assets/major_events_pics/US_5.jpg";
import US_6 from "../../assets/major_events_pics/US_6.jpg";

// Sports
//2022
import lakshya1 from "../../assets/club_event_pics/2022/sports/lakshya1.jpeg";
import lakshya2 from "../../assets/club_event_pics/2022/sports/lakshya2.jpeg";
import lakshya3 from "../../assets/club_event_pics/2022/sports/lakshya3.jpeg";
import lakshya4 from "../../assets/club_event_pics/2022/sports/lakshya4.jpeg";
import lakshya5 from "../../assets/club_event_pics/2022/sports/lakshya5.jpeg";
import lakshya6 from "../../assets/club_event_pics/2022/sports/lakshya6.jpeg";
import IMG_0426 from "../../assets/atharv/IMG_0426.jpg";
import DSC_0799 from "../../assets/atharv/DSC_0799.jpg";
import IMG_0023 from "../../assets/atharv/IMG_0023.jpg";
import IMG20231015181640 from "../../assets/atharv/IMG20231015181640.jpg";
import IMG_0932 from "../../assets/atharv/IMG_0932.jpg";
import IMG_7420 from "../../assets/atharv/IMG_7420.jpg";
//2023
import ESports_1 from "../../assets/club_event_pics/2023/sports/ESports_1.png";
import ESports_2 from "../../assets/club_event_pics/2023/sports/ESports_2.png";
import ESports_3 from "../../assets/club_event_pics/2023/sports/ESports_3.png";
import LOL_1 from "../../assets/club_event_pics/2023/sports/LOL_1.jpg";
import LOL_2 from "../../assets/club_event_pics/2023/sports/LOL_2.jpg";
import LOL_3 from "../../assets/club_event_pics/2023/sports/LOL_3.jpg";
import LOL_4 from "../../assets/club_event_pics/2023/sports/LOL_4.jpg";
import LOL_5 from "../../assets/club_event_pics/2023/sports/LOL_5.jpg";
import LOL_6 from "../../assets/club_event_pics/2023/sports/LOL_6.jpg";
import Spikedown_1 from "../../assets/club_event_pics/2023/sports/Spikedown_1.jpg";
import Spikedown_2 from "../../assets/club_event_pics/2023/sports/Spikedown_2.jpg";
import Spikedown_3 from "../../assets/club_event_pics/2023/sports/Spikedown_3.jpg";
import Spikedown_4 from "../../assets/club_event_pics/2023/sports/Spikedown_4.jpg";
import Table_Top_1 from "../../assets/club_event_pics/2023/sports/Table_Top_1.png";
import Table_Top_2 from "../../assets/club_event_pics/2023/sports/Table_Top_2.png";
import Table_Top_3 from "../../assets/club_event_pics/2023/sports/Table_Top_3.png";

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
  major: {
    name: string;
    image: StaticImageData[];
    date: string;
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
  major: [
    {
      name: "Orientation Batch 2023",
      image: [Orien_1, Orien_2, Orien_3, Orien_4, Orien_5, Orien_6],
      date: "14th February, 2024",
      year: "2023",
    },
    {
      name: "Technovate 4.0",
      image: [technovate],
      date: "5-7 Nov 2022",
      year: "2022",
    },
    {
      name: "SCIη′TFIC",
      image: [
        scientfic,
        ScinTfic_1,
        ScinTfic_2,
        ScinTfic_3,
        ScinTfic_4,
        ScinTfic_5,
        ScinTfic_6,
      ],
      date: "14 January 2023",
      year: "2022",
    },
    {
      name: "Blood Donation Camp",
      image: [BD_1, BD_2, BD_3, BD_4, BD_5, BD_6],
      date: "14 April 2023",
      year: "2022",
    },
    {
      name: "Memoria Fiesta",
      image: [Memori_1, Memori_2, Memori_3, Memori_4, Memori_5, Memori_6],
      date: "23 April 2023",
      year: "2022",
    },
    {
      name: "Independence Day",
      image: [
        Aug_1,
        Aug_2,
        Aug_3,
        Aug_4,
        Aug_5,
        Aug_6,
        Aug_7,
        Aug_8,
        Aug_9,
        Aug_10,
        Aug_31,
        Aug_41,
      ],
      date: "15 August 2023",
      year: "2023",
    },
    {
      name: "Screening of Chandrayaan 3",
      image: [CY_1, CY_2, CY_3, CY_4, CY_5, CY_6],
      date: "23 August 2023",
      year: "2023",
    },
    {
      name: "Seminar On Academic Oppurtunities in USA",
      image: [US_1, US_2, US_3, US_4, US_5, US_6],
      date: "13 September 2023",
      year: "2023",
    },
    {
      name: "Ganesh Chaturthi",
      image: [
        GC,
        GC2,
        GC_1,
        GC_2,
        GC_3,
        GC_4,
        GC_5,
        GC_6,
        GC_7,
        GC_8,
        GC_9,
        GC_10,
        GC_11,
      ],
      date: "19th-21st September 2023",
      year: "2023",
    },
    {
      name: "Internal Hackathon for SIH",
      image: [SIH_1, SIH_2, SIH_3, SIH_4, SIH_5, SIH_6],
      date: "23rd Semtember 2023",
      year: "2023",
    },
    {
      name: "Garba Night",
      image: [GN_1, GN_2, GN_3, GN_4],
      date: "17-18 October 2023",
      year: "2023",
    },
    {
      name: "Blood Donation Camp",
      image: [BD2_1, BD2_2, BD2_3, BD2_4, BD2_5, BD2_6],
      date: "25th November 2023",
      year: "2023",
    },

    {
      name: "Devfest Raipur 2023",
      image: [Devfest, Devfest2, GDG_1, GDG_2, GDG_3, GDG_4, GDG_5],
      date: "16 December 2024",
      year: "2023",
    },
    {
      name: "Gym Inauguration",
      image: [GYM_1, GYM_2, GYM_3, GYM_4, GYM_5, GYM_6],
      date: "18th January 2024",
      year: "2023",
    },
    {
      name: "Saraswati Puja",
      image: [
        Sarawati_1,
        Sarawati_2,
        Sarawati_3,
        Sarawati_4,
        Sarawati_5,
        Sarawati_6,
      ],
      date: "14th February, 2024",
      year: "2023",
    },
  ],
  sports: [
    {
      name: "Lakshya",
      date: "",
      image: [lakshya1, lakshya2, lakshya3, lakshya4, lakshya5, lakshya6],
      club: "Atharv",
      year: "2022",
    },
    {
      name: "Aarambh 6.0",
      date: "",
      image: [
        IMG_0426,
        DSC_0799,
        IMG_0023,
        IMG20231015181640,
        IMG_0932,
        IMG_7420,
      ],
      club: "Atharv",
      year: "2023",
    },
    {
      name: "E-Sports Tournament",
      date: "",
      image: [ESports_1, ESports_2, ESports_3],
      club: "Atharv",
      year: "2023",
    },
    {
      name: "League Of Leagues",
      date: "",
      image: [LOL_1, LOL_2, LOL_3, LOL_4, LOL_5, LOL_6],
      club: "Atharv",
      year: "2023",
    },
    {
      name: "SpikeFest Showdown",
      date: "",
      image: [Spikedown_1, Spikedown_2, Spikedown_3, Spikedown_4],
      club: "Atharv",
      year: "2023",
    },
    {
      name: "Table Top Triump",
      date: "",
      image: [Table_Top_1, Table_Top_2, Table_Top_3],
      club: "Atharv",
      year: "2023",
    },
  ],
};
