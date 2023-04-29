import { StaticImageData } from "next/image";
import starIcon from "../../assets/calendar_icons/star.svg"; //Festival and Special Events
import circleIcon from "../../assets/calendar_icons/circle.svg"; // National Events
import crossIcon from "../../assets/calendar_icons/cross.svg"; // sports
import rectangleIcon from "../../assets/calendar_icons/rectangle.svg"; // technical
import triangleIcon from "../../assets/calendar_icons/triangle.svg"; // cultural

interface CalendarDataProps {
  date: string;
  eventName: string;
  icon: StaticImageData;
}

export const calendarData: CalendarDataProps[] = [
  // jan
  {
    date: "04-01-2023",
    eventName: "Cover the Song",
    icon: triangleIcon,
  },
  {
    date: "07-01-2023",
    eventName: "Dance Workshop Start",
    icon: triangleIcon,
  },
  {
    date: "08-01-2023",
    eventName: "Code Nubs",
    icon: rectangleIcon,
  },
  {
    date: "09-01-2023",
    eventName: "Dance Workshop End",
    icon: triangleIcon,
  },
  {
    date: "10-01-2023",
    eventName: "CDT Workshop",
    icon: triangleIcon,
  },
  {
    date: "13-01-2023",
    eventName: "Animix",
    icon: triangleIcon,
  },
  {
    date: "14-01-2023",
    eventName: "Scintfic",
    icon: starIcon,
  },
  {
    date: "15-01-2023",
    eventName: "Linux Workshop",
    icon: rectangleIcon,
  },
  {
    date: "16-01-2023",
    eventName: "Monthly Chess Cup Start",
    icon: crossIcon,
  },
  {
    date: "17-01-2023",
    eventName: "Chai Pe Charcha",
    icon: triangleIcon,
  },
  {
    date: "17-01-2023",
    eventName: "Monthly Chess Cup End",
    icon: crossIcon,
  },
  {
    date: "20-01s-2023",
    eventName: "Audience Poll Debate",
    icon: triangleIcon,
  },
  {
    date: "21-01-2023",
    eventName: "Hackathon",
    icon: rectangleIcon,
  },
  {
    date: "22-01-2023",
    eventName: "Intra CTF",
    icon: rectangleIcon,
  },
  {
    date: "23-01-2023",
    eventName: "Clueless Gamer",
    icon: triangleIcon,
  },
  {
    date: "24-01-2023",
    eventName: "Arduino Workshop",
    icon: rectangleIcon,
  },
  {
    date: "26-01-2023",
    eventName: "Republic Day Celebration",
    icon: circleIcon,
  },
  {
    date: "26-01-2023",
    eventName: "Photography Contest",
    icon: triangleIcon,
  },
  {
    date: "27-01-2023",
    eventName: "Aarambh 5.0",
    icon: starIcon,
  },
  {
    date: "28-01-2023",
    eventName: "Aarambh 5.0",
    icon: starIcon,
  },
  {
    date: "29-01-2023",
    eventName: "Aarambh 5.0",
    icon: starIcon,
  },
  //feb
  {
    date: "02-02-2023",
    eventName: "Political Drama",
    icon: triangleIcon,
  },
  {
    date: "03-02-2023",
    eventName: "Des Code",
    icon: rectangleIcon,
  },
  {
    date: "06-02-2023",
    eventName: "Picture Perception & Discussion",
    icon: triangleIcon,
  },
  {
    date: "11-02-2023",
    eventName: "Intra-College Dance Contest",
    icon: triangleIcon,
  },
  {
    date: "12-02-2023",
    eventName: "Fun Quiz",
    icon: rectangleIcon,
  },
  {
    date: "16-02-2023",
    eventName: "Monthly Chess Cup Start",
    icon: crossIcon,
  },
  {
    date: "17-02-2023",
    eventName: "Monthly Chess Cup End",
    icon: crossIcon,
  },
  {
    date: "17-02-2023",
    eventName: "Swaying with Sniggers Debate",
    icon: triangleIcon,
  },
  {
    date: "18-02-2023",
    eventName: "Kaggle Competition",
    icon: rectangleIcon,
  },
  {
    date: "19-02-2023",
    eventName: "Cryptic Hunt",
    icon: rectangleIcon,
  },
  {
    date: "22-02-2023",
    eventName: "Picturesque",
    icon: triangleIcon,
  },
  //march
  {
    date: "16-03-2023",
    eventName: "Monthly Chess Cup Start",
    icon: crossIcon,
  },
  {
    date: "17-03-2023",
    eventName: "Cultural Night",
    icon: triangleIcon,
  },
  {
    date: "17-03-2023",
    eventName: "Monthly Chess Cup End",
    icon: crossIcon,
  },
  {
    date: "18-03-2023",
    eventName: "Bit-to-Byte",
    icon: rectangleIcon,
  },
  {
    date: "19-03-2023",
    eventName: "Bit-to-Byte",
    icon: rectangleIcon,
  },
  {
    date: "24-03-2023",
    eventName: "Funtakshari",
    icon: triangleIcon,
  },
  {
    date: "25-03-2023",
    eventName: "Hackathon/Quiz",
    icon: rectangleIcon,
  },
  {
    date: "25-03-2023",
    eventName: "Interbranch Tennis Cricket & Badminton Tournament",
    icon: crossIcon,
  },
  {
    date: "26-03-2023",
    eventName: "Interbranch Tennis Cricket & Badminton Tournament",
    icon: crossIcon,
  },
  {
    date: "26-03-2023",
    eventName: "Treasure Hunt",
    icon: rectangleIcon,
  },
  {
    date: "31-03-2023",
    eventName: "Zhark Tank",
    icon: triangleIcon,
  },
  //april
  {
    date: "02-04-2023",
    eventName: "CTF Workshop",
    icon: rectangleIcon,
  },
  {
    date: "07-04-2023",
    eventName: "Kaggle Competition",
    icon: rectangleIcon,
  },
  {
    date: "08-04-2023",
    eventName: "Inter college Sports Tournament Start",
    icon: crossIcon,
  },
  {
    date: "09-04-2023",
    eventName: "Scribbles FUN",
    icon: triangleIcon,
  },
  {
    date: "10-04-2023",
    eventName: "Inter college Sports Tournament End",
    icon: crossIcon,
  },
  {
    date: "10-04-2023",
    eventName: "Raspberry Pi Workshop",
    icon: rectangleIcon,
  },
  {
    date: "15-04-2023",
    eventName: "Session on CP and Development",
    icon: rectangleIcon,
  },
  {
    date: "16-04-2023",
    eventName: "Quest",
    icon: rectangleIcon,
  },
  {
    date: "16-04-2023",
    eventName: "Monthly Chess Cup Start",
    icon: crossIcon,
  },
  {
    date: "17-04-2023",
    eventName: "Monthly Chess Cup End",
    icon: crossIcon,
  },
  {
    date: "21-04-2023",
    eventName: "Bolly-o-quiz",
    icon: rectangleIcon,
  },
  {
    date: "22-04-2023",
    eventName: "Inter-College MUN",
    icon: triangleIcon,
  },
  {
    date: "22-04-2023",
    eventName: "B-league, Volley Ball Tournament",
    icon: crossIcon,
  },
  {
    date: "23-04-2023",
    eventName: "B-league,Volley Ball Tournament",
    icon: crossIcon,
  },
  {
    date: "28-04-2023",
    eventName: "Jamming Session",
    icon: triangleIcon,
  },
  //may
  {
    date: "01-05-2023",
    eventName: "Ideawars",
    icon: rectangleIcon,
  },
  //August
  {
    date: "15-08-2023",
    eventName: "Independence Day",
    icon: circleIcon,
  },
];
