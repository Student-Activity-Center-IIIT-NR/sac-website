import { FunctionComponent } from "react";
import ClubsLayout from "../../../layouts/ClubsLayout";
import ClubHeader from "../../../features/club/cultural/ClubHeader";
import ClubBanner from "../../../features/club/cultural/ClubBanner";
import ClubDescription from "../../../features/club/cultural/ClubDescription";
import ClubEvents from "../../../features/club/cultural/ClubEvents";
import ClubCrew from "../../../features/club/cultural/ClubCrew";
import Gallery from "../../../features/club/common/Gallery";
import indradhanushBg from "../../../assets/cultural_clubs_bg/indradhanush.png";
import indradhanushLogo from "../../../assets/cultural_clubs_bg/indradhanush_logo.png";

interface IndradhanushProps {}

const Indradhanush: FunctionComponent<IndradhanushProps> = () => {
  return (
    <>
      <ClubsLayout>
        <ClubHeader />
        <ClubBanner clubName="Indradhanush" bg={indradhanushBg} />
        <ClubDescription img={indradhanushLogo}>
          Indradhanush as the name suggests is a club made to add colors to the
          routine college life. So that creativity follows right behind logic,
          symmetry, and expression. Indradhanush is a cultural club of the
          institute and is behind the beautiful artistic work behind every
          event. This club works on the power of imagination and visualization
          which is a primary solid requirement even while working with codes.
          The club recognizes the need for humans to express ideas to upgrade
          living standards.
        </ClubDescription>
        <ClubEvents />
        <ClubCrew />
        {/* <Gallery /> */}
      </ClubsLayout>
    </>
  );
};

export default Indradhanush;
