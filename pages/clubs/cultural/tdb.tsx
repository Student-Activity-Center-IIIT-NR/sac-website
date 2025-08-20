import { FunctionComponent } from "react";
import ClubsLayout from "../../../layouts/ClubsLayout";
import ClubHeader from "../../../features/club/cultural/ClubHeader";
import ClubBanner from "../../../features/club/cultural/ClubBanner";
import ClubDescription from "../../../features/club/cultural/ClubDescription";
import ClubEvents from "../../../features/club/cultural/ClubEvents";
import Gallery from "../../../features/club/common/Gallery";
import tbdBg from "../../../assets/cultural_clubs_bg/tbd.png";
import tbdLogo from "../../../assets/cultural_clubs_bg/tbd_logo.jpg";
import Crew from "../../../features/club/common/Crew";
import { tdb } from "../../../data/Crews/CulturalClubCrew";

interface TakeDaBaitProps {}

const TakeDaBait: FunctionComponent<TakeDaBaitProps> = () => {
  return (
    <>
      <ClubsLayout>
        <ClubHeader />
        <ClubBanner clubName="Take da Bait" bg={tbdBg} />
        <ClubDescription img={tbdLogo} insta="https://www.instagram.com/take_da_bait/">
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
        <ClubEvents club="TDB" />
        <Crew props={tdb} />
        <Gallery club="TDB" />
      </ClubsLayout>
    </>
  );
};

export default TakeDaBait;
