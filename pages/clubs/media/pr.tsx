import { FunctionComponent } from "react";
import ClubsLayout from "../../../layouts/ClubsLayout";
import ClubHeader from "../../../features/club/media/ClubHeader";
import ClubBanner from "../../../features/club/cultural/ClubBanner";
import ClubDescription from "../../../features/club/cultural/ClubDescription";
import PRBg from "../../../assets/media_cell_bg/pr.jpg";
import PRLogo from "../../../assets/media_cell_bg/Media.png";
import Crew from "../../../features/club/common/Crew";
import { StaticImageData } from "next/image";

// import crew

import Aryansh_Verma from "../../../assets/team_23-24/Aryansh_Verma.jpg";
import Raj_Bhattacharya from "../../../assets/team_23-24/Male-member.jpeg";
import Ishita_Tegar from "../../../assets/team_23-24/Ishita_Tegar.jpg";
import Aayush_Kulkarni from "../../../assets/team_23-24/Aayush_Kulkarni.jpg";
import Trisul from "../../../assets/team_23-24/Trisul.jpeg";

interface PRProps {}

const PR: FunctionComponent<PRProps> = () => {
  return (
    <>
      <ClubsLayout>
        <ClubHeader />
        <ClubBanner clubName="PR and Social Media Team" bg={PRBg} />
        <ClubDescription img={PRLogo}>
          PR Team is SAC-IIITNR&apos;s official team for handling all of its
          Social media Accounts. This team intends to help interested students
          to learn about digital contetn creation and provides a supportive
          environment to students of our institute to test their knowledge in
          handling our outreach and social accounts.They try to update about all
          the events that happen in our institute on our accounts.
        </ClubDescription>
        <Crew props={crew} />
        <br />
      </ClubsLayout>
    </>
  );
};

export default PR;

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
    img: Aryansh_Verma,
    name: "Aryansh Verma",
    post: "Head",
  },
  {
    img: Aayush_Kulkarni,
    name: "Aayush Kulkarni",
    post: "Core member",
  },
  {
    img: Raj_Bhattacharya,
    name: "Raj Bhattacharya",
    post: "Core member",
  },
  {
    img: Ishita_Tegar,
    name: "Ishita Tegar",
    post: "Core member",
  },
  {
    img: Trisul,
    name: "Trishul",
    post: "Core member",
  },
];
