import { StaticImageData } from "next/image";
import starIcon from "../assets/calendar_icons/star.svg"; //Festival and Special Events
import circleIcon from "../assets/calendar_icons/circle.svg"; // National Events
import crossIcon from "../assets/calendar_icons/cross.svg"; // sports
import rectangleIcon from "../assets/calendar_icons/rectangle.svg"; // technical
import triangleIcon from "../assets/calendar_icons/triangle.svg"; // cultural

interface CalendarDataProps {
  date: string;
  eventName: string;
  icon: StaticImageData;
  club: string;
  desc: string;
}

export const calendarData: CalendarDataProps[] = [
  //Jan
  {
    date: "04-01-2024",
    eventName: "Esports",
    icon: crossIcon,
    club: "Atharv",
    desc: ""
  },
  {
    date: "07-01-2024",
    eventName: "Cover the song",
    icon: triangleIcon,
    club: "Capriccio",
    desc: ""
  },
  {
    date: "08-01-2024",
    eventName: "Gym Inauguration",
    icon: crossIcon,
    club: "Atharv",
    desc: ""
  },
  {
    date: "08-01-2024",
    eventName: "Debate Aaj kal",
    icon: triangleIcon,
    club: "TDB",
    desc: ""
  },
  {
    date: "09-01-2024",
    eventName: "PictoMania",
    icon: triangleIcon,
    club: "Indradhanush",
    desc: ""
  },
  {
    date: "12-01-2024",
    eventName: "National Youth Day",
    icon: rectangleIcon,
    club: "IIC",
    desc: ""
  },
  {
    date: "13-01-2024",
    eventName: "Scintfic 2k24",
    icon: starIcon,
    club: "SAC",
    desc: ""
  },
  {
    date: "15-01-2024",
    eventName: "Volleyball",
    icon: crossIcon,
    club: "Atharv",
    desc: ""
  },
  {
    date: "18-01-2024",
    eventName: "Political Drama",
    icon: triangleIcon,
    club: "MUN & CDT",
    desc: ""
  },
  {
    date: "20-01-2024",
    eventName: "Treasure Hunt",
    icon: rectangleIcon,
    club: "Inquizitive&ComEt",
    desc: ""
  },
  {
    date: "21-01-2024",
    eventName: "IDOR workshop",
    icon: rectangleIcon,
    club: "Ciphercell",
    desc: ""
  },
  {
    date: "21-01-2024",
    eventName: "Painting and Sketch",
    icon: triangleIcon,
    club: "Indradhanush",
    desc: ""
  },
  {
    date: "26-01-2024",
    eventName: "Republic Day",
    icon: circleIcon,
    club: "SAC",
    desc: ""
  },
  {
    date: "27-01-2024",
    eventName: "Cognitio",
    icon: rectangleIcon,
    club: "AIML",
    desc: ""
  },
  {
    date: "29-01-2024",
    eventName: "Drink&Code",
    icon: rectangleIcon,
    club: "TSoC",
    desc: ""
  },
  //Feb
  {
    date: "04-02-2024",
    eventName: "Design Thinking Workshop",
    icon: rectangleIcon,
    club: "IIC",
    desc: ""
  },
  {
    date: "07-02-2024",
    eventName: "National Science day",
    icon: rectangleIcon,
    club: "IIC",
    desc: ""
  },
  {
    date: "10-02-2024",
    eventName: "Field/Exposure Visit",
    icon: rectangleIcon,
    club: "IIC",
    desc: ""
  },
  {
    date: "14-02-2024",
    eventName: "Saraswati Puja",
    icon: starIcon,
    club: "SAC",
    desc: ""
  },
  {
    date: "14-02-2024",
    eventName: "National Startup day",
    icon: rectangleIcon,
    club: "IIC",
    desc: ""
  },
  {
    date: "16-02-2024",
    eventName: "Technovate",
    icon: starIcon,
    club: "SAC",
    desc: ""
  },
  {
    date: "20-02-2024",
    eventName: "Online chess",
    icon: crossIcon,
    club: "Atharv",
    desc: ""
  },
  {
    date: "22-02-2024",
    eventName: "XSS-Cross Site Scripting",
    icon: rectangleIcon,
    club: "Ciphercell",
    desc: ""
  },
  {
    date: "23-02-2024",
    eventName: "PixelQuest",
    icon: rectangleIcon,
    club: "AIML",
    desc: ""
  },
  {
    date: "24-02-2024",
    eventName: "Quiz 1",
    icon: rectangleIcon,
    club: "Inquizitive",
    desc: ""
  },
  //March
  {
    date: "09-03-2024",
    eventName: "Workshop",
    icon: rectangleIcon,
    club: "Ciphercell",
    desc: ""
  },
  {
    date: "09-03-2024",
    eventName: "Cricket",
    icon: crossIcon,
    club: "Atharv",
    desc: ""
  },
  {
    date: "11-03-2024",
    eventName: "Quiz 2",
    icon: rectangleIcon,
    club: "Inquizitive",
    desc: ""
  },
  {
    date: "12-03-2024",
    eventName: "Workshop",
    icon: rectangleIcon,
    club: "ComEt",
    desc: ""
  },
  {
    date: "13-03-2024",
    eventName: "B2B Auction",
    icon: rectangleIcon,
    club: "TSoC",
    desc: ""
  },
  {
    date: "14-03-2024",
    eventName: "FilmVenture Safari",
    icon: triangleIcon,
    club: "Indradhanush",
    desc: ""
  },
  {
    date: "15-03-2024",
    eventName: "Bit2Byte",
    icon: rectangleIcon,
    club: "TSoC",
    desc: ""
  },
  {
    date: "18-03-2024",
    eventName: "Election Campaign starts",
    icon: triangleIcon,
    club: "MUN",
    desc: ""
  },
  {
    date: "19-03-2024",
    eventName: "Campaigning",
    icon: triangleIcon,
    club: "MUN",
    desc: ""
  },
  {
    date: "20-03-2024",
    eventName: "Election voting & Results",
    icon: triangleIcon,
    club: "MUN",
    desc: ""
  },
  {
    date: "21-03-2024",
    eventName: "B League",
    icon: crossIcon,
    club: "Atharv",
    desc: ""
  },
  {
    date: "24-03-2024",
    eventName: "Holika Dahan",
    icon: starIcon,
    club: "SAC",
    desc: ""
  },
  //April
  {
    date: "01-04-2024",
    eventName: "Shuttle Showdown",
    icon: crossIcon,
    club: "Atharv",
    desc: ""
  },
  {
    date: "02-04-2024",
    eventName: "ad quest",
    icon: triangleIcon,
    club: "CDT",
    desc: ""
  },
  {
    date: "03-04-2024",
    eventName: "Quiz 3",
    icon: rectangleIcon,
    club: "Inquizitive",
    desc: ""
  },
  {
    date: "05-04-2024",
    eventName: "Jamming night",
    icon: triangleIcon,
    club: "Capriccio",
    desc: ""
  },
  {
    date: "06-04-2024",
    eventName: "Hack-a-Sol 3.0",
    icon: starIcon,
    club: "SAC",
    desc: ""
  },
  {
    date: "08-04-2024",
    eventName: "Quiz",
    icon: starIcon,
    club: "Shutterbug",
    desc: ""
  },
  {
    date: "09-04-2024",
    eventName: "JAM",
    icon: rectangleIcon,
    club: "ComEt",
    desc: ""
  },
  {
    date: "10-04-2024",
    eventName: "Workshop",
    icon: rectangleIcon,
    club: "TSoC",
    desc: ""
  },
  {
    date: "11-04-2024",
    eventName: "News Report Anchoring",
    icon: triangleIcon,
    club: "TDB",
    desc: ""
  },
  {
    date: "12-04-2024",
    eventName: "Origami Workshop",
    icon: triangleIcon,
    club: "Indradhanush",
    desc: ""
  },
  {
    date: "12-04-2024",
    eventName: "Aaghaaz",
    icon: crossIcon,
    club: "Atharv",
    desc: ""
  },
  {
    date: "13-04-2024",
    eventName: "Dance Workshop 2",
    icon: triangleIcon,
    club: "Igniters",
    desc: ""
  },
  {
    date: "14-04-2024",
    eventName: "Local File Inclusion",
    icon: rectangleIcon,
    club: "Ciphercell",
    desc: ""
  },
  {
    date: "14-04-2024",
    eventName: "Blood Donation Camp",
    icon: starIcon,
    club: "NSS",
    desc: ""
  },
  {
    date: "15-04-2024",
    eventName: "Quiz 4",
    icon: rectangleIcon,
    club: "Inquizitive",
    desc: ""
  },
  {
    date: "17-04-2024",
    eventName: "Linguistic Showdown",
    icon: rectangleIcon,
    club: "AIML",
    desc: ""
  },
  {
    date: "18-04-2024",
    eventName: "Competition",
    icon: starIcon,
    club: "Shutterbug",
    desc: ""
  },
  {
    date: "19-04-2024",
    eventName: "Funtakshari",
    icon: triangleIcon,
    club: "Capriccio",
    desc: ""
  },
  {
    date: "20-04-2024",
    eventName: "Inter-MUN",
    icon: triangleIcon,
    club: "MUN",
    desc: ""
  },
  {
    date: "23-04-2024",
    eventName: "Descode",
    icon: rectangleIcon,
    club: "TSoC",
    desc: ""
  },
  {
    date: "24-04-2024",
    eventName: "Anime Quiz",
    icon: triangleIcon,
    club: "C2C",
    desc: ""
  },
  {
    date: "25-04-2024",
    eventName: "Cultural night",
    icon: starIcon,
    club: "SAC",
    desc: ""
  },
  {
    date: "26-04-2024",
    eventName: "Bug-Hunting",
    icon: rectangleIcon,
    club: "Ciphercell",
    desc: ""
  },
  {
    date: "15-08-2024",
    eventName: "Independence Day",
    icon: circleIcon,
    club: "SAC",
    desc: ""
  }
];