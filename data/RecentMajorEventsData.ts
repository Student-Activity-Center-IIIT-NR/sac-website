import { StaticImageData } from "next/image";
import scientfic from "../assets/major_events_poster/scientifc.png";
import hackmanthan from "../assets/major_events_poster/hackmanthan.jpeg";
import technovate from "../assets/major_events_poster/technovate.jpeg";
import ganesh from "../assets/major_events_poster/ganesh.jpeg";

interface RecentMajorEventsDataProps {
  poster: StaticImageData;
  desc: string;
}

export const recentMajorEventsData: RecentMajorEventsDataProps[] = [
  {
    poster: scientfic,
    desc: "Scientific, IIIT-Naya Raipur’s flagship science and technology showcase designed for school students, concluded on January 14. The event boasted 57 projects showcased from schools across the country. Dr. Pradeep K Sinha, Director and Vice Chancellor IIIT-NR; Prof Ram Kumar Kakani, Director of IIM Raipur, Dr Rajarshi Mahapatra, Dean Academics IIIT-NR and Dr. Lakhindar Murmu, Coordinator of SCInTFIC 2k23 inaugurated the event.",
  },
  {
    poster: technovate,
    desc: "Technovate, an annual techno-cultural feast of IIIT Naya Raipur, began on 4th Nov 2022, it is a three-day feast full of enthusiasm and fun with competitions and pronates. Day one marked its beginning with the inaugural session addressed by Dr. Pradeep K Sinha, Vice Chancellor and Director IIIT Naya Raipur. The second day of Technovate was full of cultural activities like Nukkad Natak, a musical event, and a robotics event. The last day was full of enthusiasm and relish events like a fashion show, dance events, and many more.",
  },
  {
    poster: ganesh,
    desc: "The Ganesh Chaturthi celebrations were held at IIITNR from Aug 31 to Sept 4 with great enthusiasm and devotion. The event was organized by the Student Activity Centre and was attended by a large number of students, faculty members, and staff. The celebrations began with a traditional aarti and puja, followed by the unveiling of a beautifully decorated idol of Lord Ganesha. The idol was placed in a specially designed mandap in the institute auditorium, which was adorned with colorful flowers and lights.",
  },
  {
    poster: hackmanthan,
    desc: "To find solutions to the technical problems of the police, Chhattisgarh Police, in collaboration with IIIT-Naya Raipur, organized Hackmanthan. This event was the inaugural part of HackManthan, a joint initiative of the state police and IIIT Naya Raipur to get the best young minds in the IT field working on real-life problems threatening cyber security and resolving to make the internet a safer place. The DIRECTOR General of Police (DGP) Ashok Juneja, Director of IlIT-NR Pradeep Singh, and Additional Director-General of Police (technical services) Pradeep Gupta were present on occasion.",
  },
];
