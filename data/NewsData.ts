import { StaticImageData } from "next/image";

// import from news_pics for images of news
import chai from "../assets/club_event_pics/cultural/chai6.jpeg";
import scientfic from "../assets/major_events_pics/scientfic.jpeg";
import blood from "../assets/news_pics/news_blood.jpeg";
import yet from "../assets/club_event_pics/cultural/yet2.jpeg";
import consti from "../assets/news_pics/news_const.jpeg";
import hackmanthan from "../assets/news_pics/news_hack.jpeg";
import chess from "../assets/club_event_pics/sports/lakshya1.jpeg";
import aditya from "../assets/team_24-25/aditya_1.jpg";
import yash from "../assets/team_24-25/yash_1.jpg";
import nano_img from "../assets/major_events_pics/nano_tech.jpg";
import vansh from "../assets/team_24-25/vansh_11.jpg";
import priyadarshi from "../assets/team_24-25/priyadarshi.jpg";
import technovate_24 from "../assets/major_events_pics/technovate.jpeg";
import saraswati_puja from "../assets/major_events_pics/Saraswati_3.jpg";
import youth from "../assets/major_events_pics/youthday.png";
import hindi from "../assets/major_events_pics/Hindi.png";
import sci from "../assets/major_events_pics/ScinTfic_3.jpg";
import republic_day from "../assets/major_events_pics/26_Jan2.jpg";
import aids_awareness from "../assets/major_events_pics/aids_awareness.png";


interface NewsDataProps {
  img?: StaticImageData;
  title: string;
  text: string;
  authImg?: StaticImageData;
  authName?: string;
}

/*
    You need to delete the last entry and add the new entry first for every new entry. 
    Alternatively, you have to delete the newsData[7] and add the new entry on newsData[0]. 
    Also you have to make sure that on every new entry you have to delete the images from the assets > news_pics folder  
    and add the new images for news and author. 
    Also the title is max 4-5 words and text should be max 30-35 words
*/

const newsData: NewsDataProps[] = [
  {
    img: nano_img,
    title: "Nano Fabrication Workshop",
    text: "In a significant leap towards fostering scientific innovation and research, the Dr. Shyama Prasad Mukherjee International Institute of Information Technology (DSPM IIIT), Naya Raipur, organized a one-day workshop on \'Nano-Fabrication Facilities and Techniques'\ under the supervision of Dr.Pradeep Kumar Sinha, Vice-Chancellor and Director of DSPM IIIT Naya Raipur on 20 th January 2024. The event, supported under the Scientific Social Responsibility (SSR) Policy of SERB of the DST-funded project, with the reference number EEQ/2021/000007. This workshop brought together experts, scholars, and researchers to explore the latest advancements in nano-fabrication.",
    authImg: yash,
    authName: "Yash",
  },

  {
    img: republic_day,
    title: "Republic Day",
    text: "The Republic Day celebration at IIIT Naya Raipur is a significant event that brings together students, faculty, and staff in a vibrant display of patriotism and unity. Marking the day the Constitution of India came into effect, the celebration begins with the hoisting of the national flag and the singing of the National Anthem, instilling a deep sense of national pride. ",
    authImg: aditya,
    authName: "Aditya",
  },

  {
    img: technovate_24,
    title: "Technovate 2k24",
    text: "Technovate 2024, the annual techno-cultural fest of IIIT Naya Raipur, is a dazzling showcase of innovation, creativity, and cultural exuberance, attracting students from across the nation. This grand event is a melting pot of technological brilliance and cultural vibrancy, marking it as one of the most anticipated events in the academic calendar.",
    authImg: vansh,
    authName: "Vansh",
  },
  {
    img: youth,
    title: "Youth Day",
    text: "Youth Day at IIIT Naya Raipur emerges as a vibrant celebration of energy, aspirations, and the transformative power of the younger generation. This day, dedicated to the youth, underlines the importance of empowering young minds and harnessing their potential for the greater good. The campus buzzes with a series of motivational talks, workshops, and interactive sessions led by eminent personalities and achievers from various fields. ",
    authImg: aditya,
    authName: "Aditya",
  },
  {
    img: saraswati_puja,
    title: "Saraswati Puja",
    text: "Saraswati Puja at IIIT Naya Raipur is a day marked by devotion, cultural richness, and academic reverence, celebrated with great enthusiasm among students, faculty, and the entire institute community. This auspicious occasion is dedicated to Goddess Saraswati, the deity of knowledge, music, art, wisdom , freedom, spirituality , and learning .",
    authImg: yash,
    authName: "Yash",
  },
  {
    img: aids_awareness,
    title: "Awareness Program on HIV and AIDS",
    text: "The Awareness Program on HIV and AIDS at IIIT Naya Raipur is a significant and impactful event, reflecting the institute's commitment to educating its community on critical public health issues. This program serves as a powerful platform to dispel myths, spread knowledge, and foster a supportive environment for discussion about HIV and AIDS - conditions that continue to affect millions worldwide.",
    authImg: priyadarshi,
    authName: "Priyadarshi",
  },
  {
    img: hindi,
    title: "World Hindi Day",
    text: "World Hindi Day at IIIT Naya Raipur is celebrated with great enthusiasm as an acknowledgment of the Hindi language's significance and its rich cultural heritage. This special day sees the IIIT community come together to honor and promote the beauty, depth, and versatility of Hindi through a variety of literary and cultural activities. Eloquent speeches, poetry recitations, storytelling sessions, and debates are organized, showcasing the eloquence and expressive power of Hindi. ",
    authImg: vansh,
    authName: "Vansh",
  },
  {
    img: sci,
    title: "SCInTFIC 2k24",
    text: "SCInTFIC 2k24 at IIIT Naya Raipur stands as a beacon of scientific inquiry, innovation, and discovery, drawing together students, academicians, and researchers from diverse disciplines. This premier event is dedicated to celebrating the wonders of science and technology, providing a dynamic platform for the exchange of ideas, showcasing cutting-edge research, and fostering collaborations that push the boundaries of what is known and what can be achieved.",
    authImg: priyadarshi,
    authName: "Priyadarshi",
  }


];

export default newsData;
