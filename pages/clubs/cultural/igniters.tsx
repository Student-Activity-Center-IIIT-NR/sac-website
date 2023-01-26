import { FunctionComponent } from "react";
import ClubsLayout from "../../../layouts/ClubsLayout";
import ClubHeader from "../../../features/club/cultural/ClubHeader";
import ClubBanner from "../../../features/club/cultural/ClubBanner";
import ClubDescription from "../../../features/club/cultural/ClubDescription";
import ClubEvents from "../../../features/club/cultural/ClubEvents";
import Gallery from "../../../features/club/common/Gallery";
import ignitersBg from "../../../assets/cultural_clubs_bg/igniters.png";
import ignitersLogo from "../../../assets/cultural_clubs_bg/igniters_logo.jpg";
import { StaticImageData } from "next/image";

import A_Bhumika_Rao from "../../../assets/team_22-23/A_Bhumika_Rao.jpeg";
import Ghanta_Sai_Krishna from "../../../assets/team_22-23/Ghanta_Sai_Krishna.jpeg";

import Akriti_Dhurandhar from "../../../assets/team_22-23/Akriti_Igniters.jpeg"
import Sontu_Akshath_Rishi from "../../../assets/team_22-23/Sontu_Akshath_Rishi.jpeg"
import Sonali_Tudu from "../../../assets/team_22-23/Sonali_Tudu.jpeg"
import Eshita_Pradhan from "../../../assets/team_22-23/Eshita_Pradhan.jpeg"
import Crew from "../../../features/club/common/Crew";

interface IgnitersProps {}

const Igniters: FunctionComponent<IgnitersProps> = () => {
  return (
    <>
      <ClubsLayout>
        <ClubHeader />
        <ClubBanner clubName="Igniters" bg={ignitersBg} />
        <ClubDescription img={ignitersLogo}>
          Igniters is a dance club at a technical college that aims to create
          excitement and energy through the art of dance. The club was founded
          two years ago and has already had success on and off campus. The goal
          of the club is to provide a space for students to explore and express
          themselves through dance, and to celebrate this art form together as a
          community. By joining Igniters, students will have the opportunity to
          develop their dancing skills, share their passion for dance with
          others, and perform on and off campus. The club welcomes dancers of
          all skill levels and encourages everyone to join in the journey and
          let the art of dance bring them joy and expression.
        </ClubDescription>
        <ClubEvents />
        {/* <Gallery /> */}
        <Crew  props={crew}/>
          <Gallery props={gallery}/> 
      </ClubsLayout>
    </>
  );
};

export default Igniters;

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
    img: Akriti_Dhurandhar,
    name: "Akriti Dhurandhar",
    post: "Club Secretary",
  },
  {
      img: Sontu_Akshath_Rishi,
      name: "Sontu Akshath Rishi",
      post: "Vice Secretary",
    },
    {
      img: Sonali_Tudu,
      name: "Sonali Tudu",
      post: "Choreographer",
    },
    {
      img: Eshita_Pradhan,
      name: "Eshita Pradhan",
      post: "Social Media Manager",
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