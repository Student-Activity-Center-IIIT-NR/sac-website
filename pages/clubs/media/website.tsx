import { FunctionComponent } from "react";
import ClubsLayout from "../../../layouts/ClubsLayout";
import ClubHeader from "../../../features/club/media/ClubHeader";
import ClubBanner from "../../../features/club/cultural/ClubBanner";
import ClubDescription from "../../../features/club/cultural/ClubDescription";
import WebsiteBg from "../../../assets/media_cell_bg/website.jpg";
import WebsiteLogo from "../../../assets/cultural_clubs_bg/shutterbug_logo.jpeg";
import Crew from "../../../features/club/common/Crew";
import { StaticImageData } from "next/image";

// import crew

import Manu_Sai from "../../../assets/team_23-24/Manu_Sai.jpg";
import Ojas_Dubey1 from "../../../assets/team_23-24/Ojas_Dubey.jpg";
import Yashraj from "../../../assets/team_23-24/Yash_Raj.jpeg";
import Shreyansh_Kushwaha from "../../../assets/team_23-24/Shreyansh_Kushwaha.jpg";

interface WebsiteProps {}

const Website: FunctionComponent<WebsiteProps> = () => {
  return (
    <>
      <ClubsLayout>
        <ClubHeader />
        <ClubBanner clubName="Website" bg={WebsiteBg} />
        <ClubDescription img={WebsiteLogo}>
          Website Team is SAC-IIITNR&apos;s official team for maintainance of
          its Website.
          <br /> This team intends to help interested students of web
          development to learn about the fundamentals of this field and provides
          a supportive environment to students of our institute to test their
          knowledge in an actual deploy website.They try to update about all the
          events that happen in our institute on this website.
        </ClubDescription>
        <Crew props={crew} />
        <br />
      </ClubsLayout>
    </>
  );
};

export default Website;

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
    img: Ojas_Dubey1,
    name: "Ojas Dubey",
    post: "Head",
  },
  {
    img: Manu_Sai,
    name: "Manu Sai",
    post: "Core Member",
  },
  {
    img: Shreyansh_Kushwaha,
    name: "Shreyansh Kushwaha",
    post: "Core Member",
  },
  {
    img: Yashraj,
    name: "Yashraj",
    post: "Core Member",
  },
];
