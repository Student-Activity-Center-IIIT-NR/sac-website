import { FunctionComponent } from "react";
import ClubsLayout from "../../../layouts/ClubsLayout";
import ClubHeader from "../../../features/club/media/ClubHeader";
import ClubBanner from "../../../features/club/cultural/ClubBanner";
import ClubDescription from "../../../features/club/cultural/ClubDescription";
import ClubEvents from "../../../features/club/cultural/ClubEvents";
import Gallery from "../../../features/club/common/Gallery";
import shutterbugBg from "../../../assets/cultural_clubs_bg/shutterbug.png";
import shutterbugLogo from "../../../assets/cultural_clubs_bg/shutterbug_logo.jpeg";
import Crew from "../../../features/club/common/Crew";
import { shutterbug } from "../../../data/Crews/MediaClubCrew";

interface ShutterBugProps {}

const ShutterBug: FunctionComponent<ShutterBugProps> = () => {
  return (
    <>
      <ClubsLayout>
        <ClubHeader />
        <ClubBanner clubName="Shutterbug" bg={shutterbugBg} />
        <ClubDescription img={shutterbugLogo} insta="https://www.instagram.com/shutterbug_iiitnr/">
          Shutterbug is IIIT Naya Raipur&apos;s official photography club.
          <br /> This club intends to help interested students of photography to
          learn about the fundamentals of this field. It provides a supportive
          environment to students of our institute to share their knowledge and
          passion for photography. The club runs under the guidance of Dr.
          Ramakrishna Bandi. <br /> We cover all the major events that happen in
          our institute. Also, we organize various photography workshops,
          exhibitions etc.
        </ClubDescription>
        <ClubEvents club="Shutterbug" />
        <Crew props={shutterbug} />
        <Gallery club="Shutterbug" />
      </ClubsLayout>
    </>
  );
};

export default ShutterBug;
