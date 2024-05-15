import { StaticImageData } from "next/image";
import scientfic from "../../assets/major_events_poster/scientifc.png";
import hackmanthan from "../../assets/major_events_poster/hackmanthan.jpeg";
import technovate from "../../assets/major_events_poster/technovate.jpeg";
import ganesh from "../../assets/major_events_poster/ganesh.jpeg";
import Saraswati from "../../assets/major_events_poster/Saraswati Puja.png";
import Technovate5 from "../../assets/major_events_poster/Technovate5.0.jpg";
import scintfic24 from "../../assets/major_events_poster/scintfic24.jpg";
import republicday from "../../assets/major_events_poster/republicday.jpg";


interface RecentMajorEventsDataProps {
  poster: StaticImageData;
  desc: string;
}

export const recentMajorEventsData: RecentMajorEventsDataProps[] = [
  {
    poster: Technovate5,
    desc: "Technovate 5 at IIIT Naya Raipur was a whirlwind of innovation, competition, and pure exhilaration! From the electrifying hackathons and coding contests to the mesmerizing cultural showcases and adrenaline-fueled sports tournaments, every moment was packed with excitement. Participants showcased their talents, battled it out on various fronts, and left spectators on the edge of their seats. As the sun set on each day, the atmosphere only intensified, with pulsating music, dazzling lights, and unforgettable performances keeping the energy levels soaring. Technovate 5.0 wasn't just an event; it was a rollercoaster ride of thrills and excitement that left everyone craving for more!",
  },
  {
    poster: scintfic24,
    desc: "SCIηTFIC 2k24 brought together students at IIIT-NR for a celebration of innovation and teamwork. Kicked off by Dr. Alok Sahu, the event was packed with activities like IDEATHON 6.0, where students from various grades showcased their creative projects across three categories. Judges from different academic backgrounds evaluated the entries, sparking enthusiasm. A snack break offered a moment of relaxation before the event continued with tech talks and a captivating TECH EXPO. This event was not just a competition but a gathering that encouraged scientific curiosity, collaboration, and the sharing of new ideas among young minds, fostering a vibrant learning community.",
  },
  {
    poster: Saraswati,
    desc: "Saraswati Puja at IIIT Naya Raipur reverberates with a deep reverence for knowledge and academic pursuits. Students gather to invoke the blessings of Goddess Saraswati, seeking guidance and wisdom for their educational endeavors. The atmosphere is charged with intellectual fervor as students engage in prayers and rituals, focusing their aspirations on academic excellence. It's a day where the pursuit of knowledge takes center stage, uniting students in their shared commitment to learning and growth. Saraswati Puja at IIIT Naya Raipur is not just a religious observance but a solemn occasion that underscores the importance of education in shaping the future.",
  },
  {
    poster: republicday,
    desc: "The College Republic Day celebration on January 26th, 2024, was a vibrant and patriotic event. The day commenced with the dignified flag hosting ceremony, symbolizing our commitment to the nation. The college director's impassioned speech followed, urging everyone to uphold the values of the Constitution.The cultural program that ensued showcased the diverse talents of the college community, featuring patriotic performances that resonated with the spirit of the day. The event culminated in a brief yet impactful prize distribution ceremony, acknowledging outstanding contributions and achievements. Overall, the Republic Day celebration was a joyous and unifying experience, fostering a deep sense of pride and camaraderie among the students and faculty.",
  },
];
