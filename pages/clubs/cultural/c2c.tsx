import { FunctionComponent } from "react";
import ClubsLayout from "../../../layouts/ClubsLayout";
import ClubHeader from "../../../features/club/cultural/ClubHeader";
import ClubBanner from "../../../features/club/cultural/ClubBanner";
import ClubDescription from "../../../features/club/cultural/ClubDescription";
import ClubEvents from "../../../features/club/cultural/ClubEvents";
import c2cBg from "../../../assets/cultural_clubs_bg/c2c.png";
import c2cLogo from "../../../assets/cultural_clubs_bg/c2c_logo.png";
import Gallery from "../../../features/club/common/Gallery";
import Crew from "../../../features/club/common/Crew";
import { StaticImageData } from "next/image";
import Ananya_Pateriya from "../../../assets/team_22-23/Ananya_Pateriya.jpeg";
import Sai_Prabhat from "../../../assets/team_22-23/saiprabhat.jpeg";
import  Shubham_Khilari from "../../../assets/team_22-23/Shubham_khilari.jpeg";
import Nidhi_Bhaskar from "../../../assets/team_22-23/nidhibhaskar.jpeg";
import Aryansh_Verma from "../../../assets/team_22-23/Male-member.jpeg";
import Aditya_Oza  from "../../../assets/team_22-23/Aditya_Oza.jpeg";
import Jay_Deep_Singh  from "../../../assets/team_22-23/Jay_Deep_Singh.jpeg";
import Gautam_Gupta  from "../../../assets/team_22-23/Gautam.jpeg";
import A_Bhumika_Rao from "../../../assets/team_22-23/A_Bhumika_Rao.jpeg";
import Ghanta_Sai_Krishna from "../../../assets/team_22-23/Ghanta_Sai_Krishna.jpeg";


interface CoverToCoverProps {}

const CoverToCover: FunctionComponent<CoverToCoverProps> = () => {
  return (
    <>
      <ClubsLayout>
        <ClubHeader />
        <ClubBanner clubName="Cover to Cover" bg={c2cBg} />
        <ClubDescription img={c2cLogo}>
          C2C is a literature club at IIIT Naya Raipur, that aims to promote the
          love and appreciation of literature among its members. The club
          creates a nurturing environment that encourages creativity and
          liberation by exploring different literary traditions and
          perspectives. The club&apos;s mission is to expose its members to a
          diverse array of literature and to inspire them to develop their own
          particularizing language for understanding and appreciating what they
          read. The club also encourages members to share their thoughts and
          ideas about literature and to engage in discussions about how
          literature relates to life. C2C club is a unique space for students to
          connect with literature and each other in a meaningful and
          transformative way.
        </ClubDescription>
        <ClubEvents />
        {/* <ClubCrew /> */}
          <Crew  props={crew}/>
          <Gallery props={gallery}/> 
      </ClubsLayout>
    </>
  );
};

export default CoverToCover;


interface CrewProps {
  img: StaticImageData;
  name: string;
  post: string;
}

interface GalleryProps {
  name: string;
  img: StaticImageData[];
  date: string;
}


const crew: CrewProps[] = [
  {
    img: Ananya_Pateriya,
    name: "Ananya Pateriya",
    post: "Club Secretary",
  },
  {
      img: Sai_Prabhat,
      name: "Sai Prabhat",
      post: "Vice Secretary",
    },
    {
      img:Shubham_Khilari,
      name: "Shubham Khilari",
      post: "Social Media Manager",
    },
    {
      img: Nidhi_Bhaskar,
      name: "Nidhi Bhaskar",
      post: "Core Member",
    },
    {
      img: Aryansh_Verma,
      name: "Aryansh Verma",
      post: "Core Member",
    },
    {
      img: Aditya_Oza,
      name: "Aditya Oza",
      post: "Core Member",
    },
    {
      img: Jay_Deep_Singh,
      name: "Jay Deep Singh",
      post: "Core Member",
    },
    {
      img: Gautam_Gupta,
      name: "Gautam Gupta",
      post: "Core Member",
    },
];

const gallery: GalleryProps[] = [
  {
    name: "SCIη′TFIC",
    date: "14 January 2023",
    img: [
      A_Bhumika_Rao,
      A_Bhumika_Rao,
      A_Bhumika_Rao,
      A_Bhumika_Rao,
      A_Bhumika_Rao,
      A_Bhumika_Rao,
    ],
  },
  {
    name: "Test",
    date: "14 January 2023",
    img: [
      Ghanta_Sai_Krishna,
      Ghanta_Sai_Krishna,
      Ghanta_Sai_Krishna,
      Ghanta_Sai_Krishna,
      Ghanta_Sai_Krishna,
      Ghanta_Sai_Krishna,
    ],
  },
];