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
}

export const calendarData: CalendarDataProps[] = [
  //Jan
  {
    date: "04-01-2024",
    eventName: "Esports",
    icon: crossIcon,
    club: "Atharv"
  },
  {
    date: "07-01-2024",
    eventName: "Cover the song",
    icon: triangleIcon,
    club: "Capriccio"
  },
  {
    date: "08-01-2024",
    eventName: "Gym Inauguration",
    icon: crossIcon,
    club: "Atharv"
  },
  {
    date: "08-01-2024",
    eventName: "Debate Aaj kal",
    icon: triangleIcon,
    club: "TDB"
  },
  {
    date: "09-01-2024",
    eventName: "PictoMania",
    icon: triangleIcon,
    club: "Indradhanush"
  },
  {
    date: "12-01-2024",
    eventName: "National Youth Day",
    icon: rectangleIcon,
    club: "IIC"
  },
  {
    date: "13-01-2024",
    eventName: "Scintfic 2k24",
    icon: "",
    club: "SAC"
  },
  {
    date: "15-01-2024",
    eventName: "Volleyball",
    icon: crossIcon,
    club: "Atharv"
  },
  {
    date: "18-01-2024",
    eventName: "Political Drama",
    icon: triangleIcon,
    club: "MUN & CDT"
  },
  {
    date: "20-01-2024",
    eventName: "Treasure Hunt",
    icon: rectangleIcon,
    club: "Inquizitive&ComEt"
  },
  {
    date: "21-01-2024",
    eventName: "IDOR workshop",
    icon: rectangleIcon,
    club: "Ciphercell"
  },
  {
    date: "21-01-2024",
    eventName: "Painting and Sketch",
    icon: triangleIcon,
    club: "Indradhanush"
  },
  {
    date: "26-01-2024",
    eventName: "Republic Day",
    icon: circleIcon,
    club: "SAC"
  },
  {
    date: "27-01-2024",
    eventName: "Cognitio",
    icon: rectangleIcon,
    club: "AIML"
  },
  {
    date: "29-01-2024",
    eventName: "Drink&Code",
    icon: rectangleIcon,
    club: "TSoC"
  },
  //Feb
  {
    date: "04-02-2024",
    eventName: "Design Thinking Workshop",
    icon: rectangleIcon,
    club: "IIC"
  },
  {
    date: "07-02-2024",
    eventName: "National Science day",
    icon: rectangleIcon,
    club: "IIC"
  },
  {
    date: "10-02-2024",
    eventName: "Field/Exposure Visit",
    icon: rectangleIcon,
    club: "IIC"
  },
  {
    date: "14-02-2024",
    eventName: "Saraswati Puja",
    icon: starIcon,
    club: "SAC"
  },
  {
    date: "14-02-2024",
    eventName: "National Startup day",
    icon: rectangleIcon,
    club: "IIC"
  },
  {
    date: "16-02-2024",
    eventName: "Technovate",
    icon: starIcon,
    club: "SAC"
  },
  {
    date: "20-02-2024",
    eventName: "Online chess",
    icon: crossIcon,
    club: "Atharv"
  },
  {
    date: "22-02-2024",
    eventName: "XSS-Cross Site Scripting",
    icon: rectangleIcon,
    club: "Ciphercell"
  },
  {
    date: "23-02-2024",
    eventName: "PixelQuest",
    icon: rectangleIcon,
    club: "AIML"
  },
  {
    date: "24-02-2024",
    eventName: "Quiz 1",
    icon: rectangleIcon,
    club: "Inquizitive"
  },
  //March
  {
    date: "09-03-2024",
    eventName: "Workshop",
    icon: rectangleIcon,
    club: "Ciphercell"
  },
  {
    date: "09-03-2024",
    eventName: "Cricket",
    icon: crossIcon,
    club: "Atharv"
  },
  {
    date: "11-03-2024",
    eventName: "Quiz 2",
    icon: rectangleIcon,
    club: "Inquizitive"
  },
  {
    date: "12-03-2024",
    eventName: "Workshop",
    icon: rectangleIcon,
    club: "ComEt"
  },
  {
    date: "13-03-2024",
    eventName: "B2B Auction",
    icon: rectangleIcon,
    club: "TSoC"
  },
  {
    date: "14-03-2024",
    eventName: "FilmVenture Safari",
    icon: triangleIcon,
    club: "Indradhanush"
  },
  {
    date: "15-03-2024",
    eventName: "Bit2Byte",
    icon: rectangleIcon,
    club: "TSoC"
  },
  {
    date: "18-03-2024",
    eventName: "Election Campaign starts",
    icon: triangleIcon,
    club: "MUN"
  },
  {
    date: "19-03-2024",
    eventName: "Campaigning",
    icon: triangleIcon,
    club: "MUN"
  },
  {
    date: "20-03-2024",
    eventName: "Election voting & Results",
    icon: triangleIcon,
    club: "MUN"
  },
  {
    date: "21-03-2024",
    eventName: "B League",
    icon: crossIcon,
    club: "Atharv"
  },
  {
    date: "24-03-2024",
    eventName: "Holika Dahan",
    icon: starIcon,
    club: "SAC"
  },
  //April
  {
    date: "01-04-2024",
    eventName: "Shuttle Showdown",
    icon: crossIcon,
    club: "Atharv"
  },
  {
    date: "02-04-2024",
    eventName: "ad quest",
    icon: triangleIcon,
    club: "CDT"
  },
  {
    date: "03-04-2024",
    eventName: "Quiz 3",
    icon: rectangleIcon,
    club: "Inquizitive"
  },
  {
    date: "05-04-2024",
    eventName: "Jamming night",
    icon: triangleIcon,
    club: "Capriccio"
  },
  {
    date: "06-04-2024",
    eventName: "Hack-a-Sol 3.0",
    icon: starIcon,
    club: "SAC"
  },
  {
    date: "08-04-2024",
    eventName: "Quiz",
    icon: starIcon,
    club: "shutterbug"
  },
  {
    date: "09-04-2024",
    eventName: "JAM",
    icon: rectangleIcon,
    club: "ComEt"
  },
  {
    date: "10-04-2024",
    eventName: "Workshop",
    icon: rectangleIcon,
    club: "TSoC"
  },
  {
    date: "11-04-2024",
    eventName: "News Report Anchoring",
    icon: triangleIcon,
    club: "TDB"
  },
  {
    date: "12-04-2024",
    eventName: "Origami Workshop",
    icon: triangleIcon,
    club: "Indradhanush"
  },
  {
    date: "12-04-2024",
    eventName: "Aaghaaz",
    icon: crossIcon,
    club: "Atharv"
  },
  {
    date: "13-04-2024",
    eventName: "Dance Workshop 2",
    icon: triangleIcon,
    club: "Igniters"
  },
  {
    date: "14-04-2024",
    eventName: "Local File Inclusion",
    icon: rectangleIcon,
    club: "Ciphercell"
  },
  {
    date: "14-04-2024",
    eventName: "Blood Donation Camp",
    icon: starIcon,
    club: "NSS"
  },
  {
    date: "15-04-2024",
    eventName: "Quiz 4",
    icon: rectangleIcon,
    club: "Inquizitive"
  },
  {
    date: "17-04-2024",
    eventName: "Linguistic Showdown",
    icon: rectangleIcon,
    club: "AIML"
  },
  {
    date: "18-04-2024",
    eventName: "Competition",
    icon: starIcon,
    club: "shutterbug"
  },
  {
    date: "19-04-2024",
    eventName: "Funtakshari",
    icon: triangleIcon,
    club: "Capriccio"
  },
  {
    date: "20-04-2024",
    eventName: "Inter-MUN",
    icon: triangleIcon,
    club: "MUN"
  },
  {
    date: "23-04-2024",
    eventName: "Descode",
    icon: rectangleIcon,
    club: "TSoC"
  },
  {
    date: "24-04-2024",
    eventName: "Anime Quiz",
    icon: triangleIcon,
    club: "C2C"
  },
  {
    date: "25-04-2024",
    eventName: "Cultural night",
    icon: starIcon,
    club: "SAC"
  },
  {
    date: "26-04-2024",
    eventName: "Bug-Hunting",
    icon: rectangleIcon,
    club: "Ciphercell"
  },
  {
    date: "15-08-2024",
    eventName: "Independence Day",
    icon: circleIcon,
    club: "Ciphercell"
  }
];
