import { FunctionComponent } from "react";
import ClubsLayout from "../../../layouts/ClubsLayout";
import ClubHeader from "../../../features/club/media/ClubHeader";
import ClubBanner from "../../../features/club/cultural/ClubBanner";
import ClubDescription from "../../../features/club/cultural/ClubDescription";
import PRBg from "../../../assets/media_cell_bg/pr.jpg";
import PRLogo from "../../../assets/media_cell_bg/Media.png";
import Crew from "../../../features/club/common/Crew";
import { StaticImageData } from "next/image";
import { pr } from  "../../../data/MediaClubCrew";

interface PRProps {}

const PR: FunctionComponent<PRProps> = () => {
  return (
    <>
      <ClubsLayout>
        <ClubHeader />
        <ClubBanner clubName="PR and Social Media Team" bg={PRBg} />
        <ClubDescription img={PRLogo}>
          PR Team is SAC-IIITNR&apos;s official team for handling all of its
          Social media Accounts. This team intends to help interested students
          to learn about digital contetn creation and provides a supportive
          environment to students of our institute to test their knowledge in
          handling our outreach and social accounts.They try to update about all
          the events that happen in our institute on our accounts.
        </ClubDescription>
        <Crew props={pr} />
        <br />
      </ClubsLayout>
    </>
  );
};

export default PR;

interface GalleryProps {
  name: string;
  img: StaticImageData[];
  date: string;
}
