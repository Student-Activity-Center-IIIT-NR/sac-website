import { StaticImageData } from "next/image";

// import from news_pics for images of news
import chai from "../assets/club_event_pics/cultural/chai6.jpeg";
import scientfic from "../assets/major_events_pics/scientfic.jpeg";
import blood from "../assets/news_pics/news_blood.jpeg";
import technovate from "../assets/news_pics/news_technovate.jpeg";
import yet from "../assets/club_event_pics/cultural/yet2.jpeg";
import consti from "../assets/news_pics/news_const.jpeg";
import hackmanthan from "../assets/news_pics/news_hack.jpeg";
import chess from "../assets/club_event_pics/sports/lakshya1.jpeg";
import navneet from "../assets/team_22-23/navneet_chaubey.jpeg";
import trisul from "../assets/team_23-24/Trisul.jpeg"
import nano_img from "../assets/major_events_pics/nano_tech.jpg";
import jay from "../assets/team_22-23/Jay_Deep_Singh.jpeg";
import sudhanshu from "../assets/team_22-23/Sudhanshu_Tripathi.jpeg";

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
    authImg: trisul,
    authName: "Trisul",
  },
];

export default newsData;
