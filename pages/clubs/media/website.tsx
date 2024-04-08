import { FunctionComponent } from "react";
import ClubsLayout from "../../../layouts/ClubsLayout";
import ClubHeader from "../../../features/club/media/ClubHeader";
import ClubBanner from "../../../features/club/cultural/ClubBanner";
import ClubDescription from "../../../features/club/cultural/ClubDescription";
import WebsiteBg from "../../../assets/media_cell_bg/website.jpg";
import WebsiteLogo from "../../../assets/media_cell_bg/Media.png";
import Crew from "../../../features/club/common/Crew";
import { website } from "../../../data/Crews/MediaClubCrew";

interface WebsiteProps {}

const Website: FunctionComponent<WebsiteProps> = () => {
  return (
    <>
      <ClubsLayout>
        <ClubHeader />
        <ClubBanner clubName="Website" bg={WebsiteBg} />
        <ClubDescription img={WebsiteLogo} insta="">
          Website Team is SAC-IIITNR&apos;s official team for maintainance of
          its Website.
          <br /> This team intends to help interested students of web
          development to learn about the fundamentals of this field and provides
          a supportive environment to students of our institute to test their
          knowledge in an actual deploy website.They try to update about all the
          events that happen in our institute on this website.
        </ClubDescription>
        <Crew props={website} />
        <br />
      </ClubsLayout>
    </>
  );
};

export default Website;