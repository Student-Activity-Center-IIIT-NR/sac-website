import { StaticImageData } from "next/image";
import SristhiSahooUG from "../../assets/team_22-23/SristhiSahooUG.jpeg";
import HimanshuYadav_UG_2022 from "../../assets/team_22-23/HimanshuYadav_UG_2022.jpeg";
import Nishok from "../../assets/team_22-23/Nishok.jpeg";
import Supriya from "../../assets/team_22-23/Supriya.jpeg";
import Aaditya_Kumar from "../../assets/team_22-23/Aaditya_Kumar.jpeg";
import SonaliB from "../../assets/team_22-23/SonaliB.jpeg";
import Kishan_Mishra from "../../assets/team_22-23/Kishan_Mishra.jpeg";
import Nidhi_Vaishnav from "../../assets/team_22-23/Nidhi_Vaishnav.jpeg";
import Soumya_min from "../../assets/team_22-23/Soumya-min.jpeg";
import Sudhanshu_Tripathi from "../../assets/team_22-23/Sudhanshu_Tripathi.jpeg";
import Deepesh_Agrawal from "../../assets/team_22-23/Deepesh_Agrawal.jpeg";
import Ojas_Dubey from "../../assets/team_22-23/Ojas_Dubey.jpeg";
import Aman_Singh from "../../assets/team_22-23/Aman_Singh.jpeg";
import Vinayak_Shrivastava from "../../assets/team_22-23/Vinayak_Shrivastava.jpeg";
import saiprabhat from "../../assets/team_22-23/saiprabhat.jpeg";
import Ganesh_Prajapati from "../../assets/team_22-23/Ganesh_Prajapati.jpeg";
import Shubham_khilari from "../../assets/team_22-23/Shubham_khilari.jpeg";
import nidhibhaskar from "../../assets/team_22-23/nidhibhaskar.jpeg";
import navneet_chaubey from "../../assets/team_22-23/navneet_chaubey.jpeg";
import Jay_Deep_Singh from "../../assets/team_22-23/Jay_Deep_Singh.jpeg";
import manoj_SacP from "../../assets/team_22-23/manoj.jpg";
import Karan_Agrawal from "../../assets/team_22-23/Karan_Agrawal.jpeg";

interface CrewProps {
  img: StaticImageData;
  name: string;
  post: string;
}

export const CoreTeam: CrewProps[] = [
  {
    img: manoj_SacP,
    name: "MANOJ KUMAR MAJUMDER ",
    post: "SAC President",
  },
  {
    img: HimanshuYadav_UG_2022,
    name: "Himanshu Yadav",
    post: "UG Representative (Boys)",
  },
  {
    img: SristhiSahooUG,
    name: "Sristhi Sahoo",
    post: "UG Representative (Girls)",
  },
  {
    img: Nishok,
    name: "Nishoak Kosaraju",
    post: "Science and Technology Secretary (Boys)",
  },
  {
    img: Supriya,
    name: "Kundrapu Supriya",
    post: "Science and Technology Secretary (Girls)",
  },
  {
    img: Aaditya_Kumar,
    name: "Aaditya Kumar",
    post: "Arts, Cultural and Literary Secretary (Boys)",
  },
  {
    img: SonaliB,
    name: "Sonali Banjare",
    post: "Arts, Cultural and Literary Secretary (Girls)",
  },
  {
    img: Kishan_Mishra,
    name: "Kishan Gopal Mishra",
    post: "Sports Secretary (Boys)",
  },
  {
    img: Nidhi_Vaishnav,
    name: "Nidhi Vaishnav",
    post: "Sports Secretary (Girls)",
  },
];

export const WebsiteManagementTeam: CrewProps[] = [
  {
    img: Soumya_min,
    name: "Soumya Ranjan Patnaik",
    post: "Head",
  },
  {
    img: Sudhanshu_Tripathi,
    name: "Sudhanshu Tripathi",
    post: "Vice-Head",
  },
  {
    img: Deepesh_Agrawal,
    name: "Deepesh Agrawal",
    post: "Core Member",
  },
  {
    img: Ojas_Dubey,
    name: "Ojas Dubey",
    post: "Core Member",
  },
];

export const SocialMedia: CrewProps[] = [
  {
    img: Karan_Agrawal,
    name: "Karan Agrawal",
    post: "Head",
  },
];

export const Design: CrewProps[] = [
  {
    img: Aman_Singh,
    name: "Aman Singh",
    post: "Head",
  },
  {
    img: Vinayak_Shrivastava,
    name: "Vinayak Shrivastava",
    post: "Vice-Head",
  },
  {
    img: saiprabhat,
    name: "Sai Prabhat",
    post: "Member",
  },
  {
    img: Ganesh_Prajapati,
    name: "Ganesh Prajapati",
    post: "Member",
  },
  {
    img: Shubham_khilari,
    name: "Shubham Khilari",
    post: "Member",
  },
  {
    img: nidhibhaskar,
    name: "Nidhi Bhaskar",
    post: "Member",
  },
];

export const ContentWriterTeam: CrewProps[] = [
  {
    img: navneet_chaubey,
    name: "Navneet Chaubey",
    post: "Member",
  },
  {
    img: Jay_Deep_Singh,
    name: "Jay Deep",
    post: "Member",
  },
];
