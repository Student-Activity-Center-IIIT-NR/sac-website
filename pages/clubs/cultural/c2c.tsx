import { FunctionComponent } from "react";
import ClubsLayout from "../../../layouts/ClubsLayout";
import ClubHeader from "../../../features/club/cultural/ClubHeader";
import ClubBanner from "../../../features/club/cultural/ClubBanner";
import ClubDescription from "../../../features/club/cultural/ClubDescription";
import ClubEvents from "../../../features/club/cultural/ClubEvents";
import ClubCrew from "../../../features/club/cultural/ClubCrew";
import c2cBg from "../../../assets/cultural_clubs_bg/c2c.png";
import c2cLogo from "../../../assets/cultural_clubs_bg/c2c_logo.png";
import Gallery from "../../../features/club/common/Gallery";

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
        <ClubCrew />
        {/* <Gallery /> */}
      </ClubsLayout>
    </>
  );
};

export default CoverToCover;
