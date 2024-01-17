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
  //Aug
  {
    date: "10-08-2023",
    eventName: "Intro to Competitive ML",
    icon: rectangleIcon,
  },
  {
    date: "12-08-2023",
    eventName: "Aagaaz",
    icon: crossIcon,
  },
  {
    date: "13-08-2023",
    eventName: "Aagaaz",
    icon: crossIcon,
  },
  {
    date: "14-08-2023",
    eventName: "Aagaaz",
    icon: crossIcon,
  },
  {
    date: "15-08-2023",
    eventName: "Independence Day",
    icon: circleIcon,
  },
  {
    date: "17-08-2023",
    eventName: "Workshop",
    icon: rectangleIcon,
  },
  {
    date: "18-08-2023",
    eventName: "CodeConquer",
    icon: rectangleIcon,
  },
  {
    date: "19-08-2023",
    eventName: "Photography day",
    icon: triangleIcon,
  },
  {
    date: "19-08-2023",
    eventName: "Workshop",
    icon: rectangleIcon,
  },
  {
    date: "21-08-2023",
    eventName: "Workshop",
    icon: triangleIcon,
  },
  {
    date: "22-08-2023",
    eventName: "Workshop",
    icon: triangleIcon,
  },
  {
    date: "23-08-2023",
    eventName: "Chai Pe Charcha",
    icon: triangleIcon,
  },
  {
    date: "24-08-2023",
    eventName: "E-sports",
    icon: crossIcon,
  },
  {
    date: "25-08-2023",
    eventName: "E-sports",
    icon: crossIcon,
  },
  {
    date: "26-08-2023",
    eventName: "Data Crusade",
    icon: rectangleIcon,
  },
  {
    date: "27-08-2023",
    eventName: "Data Crusade",
    icon: rectangleIcon,
  },
  {
    date: "28-08-2023",
    eventName: "Debate Aaj Kal",
    icon: triangleIcon,
  },
  {
    date: "28-08-2023",
    eventName: "National Sports Day",
    icon: crossIcon,
  },
  {
    date: "29-08-2023",
    eventName: "Workshop",
    icon: triangleIcon,
  },
  {
    date: "30-08-2023",
    eventName: "Fresher Cooker",
    icon: rectangleIcon,
  },
  {
    date: "31-08-2023",
    eventName: "Screening Night",
    icon: triangleIcon,
  },

  //Sep

  {
    date: "01-09-2023",
    eventName: "Jamming Session",
    icon: triangleIcon,
  },
  {
    date: "02-09-2023",
    eventName: "Dance Workshop",
    icon: triangleIcon,
  },
  {
    date: "03-09-2023",
    eventName: "Intercollege And School",
    icon: triangleIcon,
  },
  {
    date: "04-09-2023",
    eventName: "JAM",
    icon: rectangleIcon,
  },
  {
    date: "05-09-2023",
    eventName: "Teacher's Day",
    icon: starIcon,
  },
  {
    date: "05-09-2023",
    eventName: "Gaming Night",
    icon: triangleIcon,
  },
  {
    date: "06-09-2023",
    eventName: "Gaming Night",
    icon: triangleIcon,
  },
  {
    date: "07-09-2023",
    eventName: "Football",
    icon: crossIcon,
  },
  {
    date: "08-09-2023",
    eventName: "Football",
    icon: crossIcon,
  },
  {
    date: "09-09-2023",
    eventName: "Football",
    icon: crossIcon,
  },
  {
    date: "10-09-2023",
    eventName: "Hacking Into Website",
    icon: rectangleIcon,
  },
  {
    date: "11-09-2023",
    eventName: "Workshop",
    icon: triangleIcon,
  },
  {
    date: "12-09-2023",
    eventName: "Aap Ki Adalat",
    icon: triangleIcon,
  },
  {
    date: "13-09-2023",
    eventName: "Bi-Monthly Quiz-1",
    icon: rectangleIcon,
  },
  {
    date: "14-09-2023",
    eventName: "Hindi Diwas",
    icon: rectangleIcon,
  },
  {
    date: "14-09-2023",
    eventName: "Workshop",
    icon: rectangleIcon,
  },
  {
    date: "15-09-2023",
    eventName: "Engineer'S Day",
    icon: rectangleIcon,
  },
  {
    date: "15-09-2023",
    eventName: "Media Cell Event",
    icon: triangleIcon,
  },
  {
    date: "16-09-2023",
    eventName: "Media Cell Event",
    icon: triangleIcon,
  },
  {
    date: "17-09-2023",
    eventName: "CTF",
    icon: rectangleIcon,
  },
  {
    date: "18-09-2023",
    eventName: "Table Top Triumph",
    icon: crossIcon,
  },
  {
    date: "19-09-2023",
    eventName: "Ganesh Chaturthi",
    icon: starIcon,
  },
  {
    date: "20-09-2023",
    eventName: "Ganesh Chaturthi",
    icon: starIcon,
  },
  {
    date: "21-09-2023",
    eventName: "Ganesh Chaturthi",
    icon: starIcon,
  },
  {
    date: "22-09-2023",
    eventName: "Ganesh Chaturthi",
    icon: starIcon,
  },
  {
    date: "23-09-2023",
    eventName: "Screening Event",
    icon: triangleIcon,
  },

  //oct
  {
    date: "2-10-2023",
    eventName: "Gandhi Jayanti and Shashtr",
    icon: circleIcon,
  },
  {
    date: "5-10-2023",
    eventName: "Bi-Monthly Quiz-2",
    icon: rectangleIcon,
  },
  {
    date: "6-10-2023",
    eventName: "Cover The Song",
    icon: triangleIcon,
  },
  {
    date: "7-10-2023",
    eventName: "Workshop 2",
    icon: rectangleIcon,
  },
  {
    date: "8-10-2023",
    eventName: "Workshop 1",
    icon: rectangleIcon,
  },
  {
    date: "9-10-2023",
    eventName: "Chess",
    icon: crossIcon,
  },
  {
    date: "10-10-2023",
    eventName: "Chess",
    icon: crossIcon,
  },
  {
    date: "14-10-2023",
    eventName: "Dance Workshop 2",
    icon: triangleIcon,
  },
  {
    date: "15-10-2023",
    eventName: "Cognitio (AIML)",
    icon: rectangleIcon,
  },
  {
    date: "15-10-2023",
    eventName: "Garba Night",
    icon: starIcon,
  },
  {
    date: "16-10-2023",
    eventName: "Gram Panchayat",
    icon: triangleIcon,
  },
  {
    date: "17-10-2023",
    eventName: "Tricky Circuits",
    icon: rectangleIcon,
  },
  {
    date: "18-10-2023",
    eventName: "PG Workshop",
    icon: triangleIcon,
  },
  {
    date: "19-10-2023",
    eventName: "Aarambh",
    icon: crossIcon,
  },
  {
    date: "20-10-2023",
    eventName: "Aarambh",
    icon: crossIcon,
  },
  {
    date: "21-10-2023",
    eventName: "Aarambh",
    icon: crossIcon,
  },
  {
    date: "28-10-2023",
    eventName: "CFT",
    icon: rectangleIcon,
  },
  {
    date: "29-10-2023",
    eventName: "Pixel Quest",
    icon: rectangleIcon,
  },
  {
    date: "30-10-2023",
    eventName: "Bi-Monthly Quiz-3",
    icon: rectangleIcon,
  },
  {
    date: "31-10-2023",
    eventName: "Unity Day",
    icon: circleIcon,
  },

  //Nov
  {
    date: "1-11-2023",
    eventName: "The Ad-venture Quest: Unleashing Creativity",
    icon: triangleIcon,
  },
  {
    date: "2-11-2023",
    eventName: "Blindfold Imagination Canvas",
    icon: triangleIcon,
  },
  {
    date: "3-11-2023",
    eventName: "CodeNubs",
    icon: rectangleIcon,
  },
  {
    date: "4-11-2023",
    eventName: "Hack-A-Sol 3.0",
    icon: rectangleIcon,
  },
  {
    date: "5-11-2023",
    eventName: "Hack-A-Sol 3.0",
    icon: rectangleIcon,
  },
  {
    date: "6-11-2023",
    eventName: "Badminton",
    icon: crossIcon,
  },
  {
    date: "7-11-2023",
    eventName: "Badminton",
    icon: crossIcon,
  },
  {
    date: "8-11-2023",
    eventName: "Badminton",
    icon: crossIcon,
  },
  {
    date: "9-11-2023",
    eventName: "Power Play: The Journalist- Politician Press Conference",
    icon: triangleIcon,
  },
  {
    date: "10-11-2023",
    eventName: "Linguistic Showdown",
    icon: rectangleIcon,
  },
  {
    date: "11-11-2023",
    eventName: "??",
    icon: triangleIcon,
  },
  {
    date: "13-11-2023",
    eventName: "PG Workshop",
    icon: triangleIcon,
  },
  {
    date: "15-11-2023",
    eventName: "Picturesque",
    icon: triangleIcon,
  },
  {
    date: "16-11-2023",
    eventName: "Workshop",
    icon: rectangleIcon,
  },
  {
    date: "17-11-2023",
    eventName: "Karaoke Night",
    icon: triangleIcon,
  },
  {
    date: "18-11-2023",
    eventName: "Inter College Dance",
    icon: triangleIcon,
  },
  {
    date: "19-11-2023",
    eventName: "Test Your Web Skills",
    icon: rectangleIcon,
  },
  {
    date: "21-11-2023",
    eventName: "Inquizitiive Main Event",
    icon: rectangleIcon,
  },
  {
    date: "24-11-2023",
    eventName: "Cricket Tournament",
    icon: crossIcon,
  },
  {
    date: "25-11-2023",
    eventName: "Cricket Tournament",
    icon: crossIcon,
  },
  {
    date: "26-11-2023",
    eventName: "Constitution Day",
    icon: rectangleIcon,
  },
  {
    date: "27-11-2023",
    eventName: "Blood Donation Camp",
    icon: triangleIcon,
  },
  {
    date: "28-11-2023",
    eventName: "Farzi Mushaera",
    icon: triangleIcon,
  },
  {
    date: "29-11-2023",
    eventName: "Guess The Picture",
    icon: triangleIcon,
  },
];
