import { FunctionComponent } from "react";
import ClubsLayout from "../../../layouts/ClubsLayout";
import ClubHeader from "../../../features/club/cultural/ClubHeader";
import ClubBanner from "../../../features/club/cultural/ClubBanner";
import ClubDescription from "../../../features/club/cultural/ClubDescription";
import ClubEvents from "../../../features/club/cultural/ClubEvents";
import Gallery from "../../../features/club/common/Gallery";
import YTCBg from "../../../assets/cultural_clubs_bg/YTC.jpg";
import YTCLogo from "../../../assets/cultural_clubs_bg/YTC_logo.png";
import Crew from "../../../features/club/common/Crew";
import { ytc } from "../../../data/Crews/CulturalClubCrew";

interface YTCProps {}

const YTC: FunctionComponent<YTCProps> = () => {
  return (
    <>
      <ClubsLayout>
        <ClubHeader />
        <ClubBanner clubName="Yuva Tourism Club ( YTC )" bg={YTCBg} />
        <ClubDescription img={YTCLogo}>
          Following the directions of Hon&apos;aposble Prime Minister of India,
          Ministry of Tourism launched the campaign focusing on “YUVA Tourism
          Club” with the strategic objective of creating interest, awareness and
          a sense of responsibility towards our country&apos;s natural and
          cultural heritage / tourism amongst children and youth. The vision is
          to nurture and develop young ambassadors of Indian tourism who would
          become aware of tourism possibilities in India, appreciate our rich
          cultural heritage and develop an interest and passion for tourism.
        </ClubDescription>
        {/* <ClubEvents club="YTC"  /> */}
        {/* <Crew props={crew} /> */}
        {/* <Gallery club="YTC" /> */}
      </ClubsLayout>
    </>
  );
};

export default YTC;
