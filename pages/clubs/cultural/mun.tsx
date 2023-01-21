import { FunctionComponent } from "react";
import ClubsLayout from "../../../layouts/ClubsLayout";
import ClubHeader from "../../../features/club/cultural/ClubHeader";
import ClubBanner from "../../../features/club/cultural/ClubBanner";
import ClubDescription from "../../../features/club/cultural/ClubDescription";
import ClubEvents from "../../../features/club/cultural/ClubEvents";
import ClubCrew from "../../../features/club/cultural/ClubCrew";
import Gallery from "../../../features/club/common/Gallery";
import munBg from "../../../assets/cultural_clubs_bg/mun.png";
import munLogo from "../../../assets/cultural_clubs_bg/mun_logo.png";

interface ModelUnitedNationProps {}

const ModelUnitedNation: FunctionComponent<ModelUnitedNationProps> = () => {
  return (
    <>
      <ClubsLayout>
        <ClubHeader />
        <ClubBanner clubName="Model United Nations" bg={munBg} />
        <ClubDescription img={munLogo}>
          The IIIT NR MUN is a Model United Nations conference that provides
          delegates with a platform to discuss current global issues and to
          develop a range of skills such as public speaking, debate, writing,
          critical thinking, collaboration, and leadership. The conference
          simulates the roles of UN ambassadors and delegates engaging in
          activities such as drafting resolutions, strategizing, and negotiating
          with other delegates. The conference provides an opportunity to think
          critically and creatively, and to develop solutions to global issues.
          From having heated debates to forming alliances, this club will
          provide a platform to step into the shoes of UN ambassadors.
        </ClubDescription>
        <ClubEvents />
        <ClubCrew />
        <Gallery />
      </ClubsLayout>
    </>
  );
};

export default ModelUnitedNation;
