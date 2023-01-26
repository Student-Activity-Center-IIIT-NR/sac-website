import { FunctionComponent } from "react";
import ClubsLayout from "../../../layouts/ClubsLayout";
import ClubHeader from "../../../features/club/cultural/ClubHeader";
import ClubBanner from "../../../features/club/cultural/ClubBanner";
import ClubDescription from "../../../features/club/cultural/ClubDescription";
import ClubEvents from "../../../features/club/cultural/ClubEvents";
import Gallery from "../../../features/club/common/Gallery";
import tbdBg from "../../../assets/cultural_clubs_bg/tbd.png";
import tbdLogo from "../../../assets/cultural_clubs_bg/tbd_logo.jpg";


import A_Bhumika_Rao from "../../../assets/team_22-23/A_Bhumika_Rao.jpeg";
import Ghanta_Sai_Krishna from "../../../assets/team_22-23/Ghanta_Sai_Krishna.jpeg";
import Crew from "../../../features/club/common/Crew";

import Vipulesh from "../../../assets/team_22-23/Vipules.jpeg"
import Yash_Vardhan_Gautam from "../../../assets/team_22-23/Male-member.jpeg"
import Sontu_Akshath_Rishi from "../../../assets/team_22-23/Sontu_Akshath_Rishi.jpeg"
import Deepesh_Agrawal from "../../../assets/team_22-23/Deepesh_Agrawal.jpeg"

import { StaticImageData } from "next/image";
// Deepesh_Agrawal

interface TakeDaBaitProps {}

const TakeDaBait: FunctionComponent<TakeDaBaitProps> = () => {
  return (
    <>
      <ClubsLayout>
        <ClubHeader />
        <ClubBanner clubName="Take da Bait" bg={tbdBg} />
        <ClubDescription img={tbdLogo}>
          Take da Bait is a debate club at IIIT-Naya Raipur that was officially
          sanctioned under the Student Activity Council on January 5th, 2020.
          The club&apos;s purpose is to provide a platform for students to
          discuss and debate current trends and issues in the world, and to help
          members form their own opinions on these topics. The club aims to
          expose members to a wide range of facts and ideas, and to provide
          opportunities for members to share their own perspectives and to
          listen to the perspectives of others. The club is intended to help
          students connect to the changing socio-political environment of the
          world and to understand the potential advantages and disadvantages of
          technology and its impact on the world. The club believes that by
          discussing and debating important issues, members will be better
          equipped to be informed citizens and future leaders.
        </ClubDescription>
        <ClubEvents />
        {/* <Gallery /> */}
        <Crew  props={crew}/>
          <Gallery props={gallery}/> 
      </ClubsLayout>
    </>
  );
};

export default TakeDaBait;


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
    img: Vipulesh,
    name: "Vipulesh",
    post: "Club Secretary",
  },
  {
      img: Yash_Vardhan_Gautam,
      name: "Yash Vardhan Gautam",
      post: "Vice Secretary",
    },
    {
      img: Sontu_Akshath_Rishi,
      name: "Sontu Akshath Rishi",
      post: "Core Member",
    },
    {
      img: Deepesh_Agrawal,
      name: "Deepesh Agrawal",
      post: "Core Member",
    }
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
]
