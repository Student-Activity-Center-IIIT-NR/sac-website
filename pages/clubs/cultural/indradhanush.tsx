import { FunctionComponent } from "react";
import ClubsLayout from "../../../layouts/ClubsLayout";
import ClubHeader from "../../../features/club/cultural/ClubHeader";
import ClubBanner from "../../../features/club/cultural/ClubBanner";
import ClubDescription from "../../../features/club/cultural/ClubDescription";
import ClubEvents from "../../../features/club/cultural/ClubEvents";
import Gallery from "../../../features/club/common/Gallery";
import indradhanushBg from "../../../assets/cultural_clubs_bg/indradhanush.png";
import indradhanushLogo from "../../../assets/cultural_clubs_bg/indradhanush_logo.png";
import Crew from "../../../features/club/common/Crew";
import { indradhanush } from "../../../data/Crews/CulturalClubCrew";

interface IndradhanushProps {}

const Indradhanush: FunctionComponent<IndradhanushProps> = () => {
  return (
    <>
      <ClubsLayout>
        <ClubHeader />
        <ClubBanner clubName="Indradhanush" bg={indradhanushBg} />
        <ClubDescription img={indradhanushLogo} insta="https://www.instagram.com/indradhanush_iiitnr/">
          Indradhanush as the name suggests is a club made to add colors to the
          routine college life. So that creativity follows right behind logic,
          symmetry, and expression. Indradhanush is a cultural club of the
          institute and is behind the beautiful artistic work behind every
          event. This club works on the power of imagination and visualization
          which is a primary solid requirement even while working with codes.
          The club recognizes the need for humans to express ideas to upgrade
          living standards.
        </ClubDescription>
        <ClubEvents club="Indradhanush" />
        <Crew props={indradhanush} />
        <Gallery club="Indradhanush" />
      </ClubsLayout>
    </>
  );
};

export default Indradhanush;
