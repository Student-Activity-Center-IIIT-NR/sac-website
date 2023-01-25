import { FunctionComponent } from "react";
import ClubsLayout from "../../../layouts/ClubsLayout";
import ClubHeader from "../../../features/club/cultural/ClubHeader";
import ClubBanner from "../../../features/club/cultural/ClubBanner";
import ClubDescription from "../../../features/club/cultural/ClubDescription";
import ClubEvents from "../../../features/club/cultural/ClubEvents";
import ClubCrew from "../../../features/club/cultural/ClubCrew";
import Gallery from "../../../features/club/common/Gallery";
import cdtBg from "../../../assets/cultural_clubs_bg/cdt.png";
import cdtLogo from "../../../assets/cultural_clubs_bg/cdt_logo.png";

interface ClubDeTheatreProps {}

const ClubDeTheatre: FunctionComponent<ClubDeTheatreProps> = () => {
  return (
    <>
      <ClubsLayout>
        <ClubHeader />
        <ClubBanner clubName="Club De Théâtre" bg={cdtBg} />
        <ClubDescription img={cdtLogo}>
          Club De Théâtre is the drama club at IIIT-Naya Raipur that encourages
          students to participate in dramatic presentations such as skits, mime,
          plays, and street theatre. The club promotes the culture of drama,
          comedy, and other related forms of performance within the college. The
          club&apos;s goal is to provide opportunities for students to explore,
          participate, and learn as much as possible about the art of drama. The
          club serves as a platform for students to showcase their talents,
          develop their skills, and experience the joy of performance. It also
          helps in developing the students&apos; self-confidence, ability to
          express themselves, and working in a team.
        </ClubDescription>
        <ClubEvents />
        <ClubCrew />
        {/* <Gallery /> */}
      </ClubsLayout>
    </>
  );
};

export default ClubDeTheatre;
