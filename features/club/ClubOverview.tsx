import SportsOverview from "./SportsOverview";
import TechnicalOverview from "./TechnicalOverview";
import CulturalOverview from "./CulturalOverview";

const ClubOverview = () => {
  return (
    <>
      <TechnicalOverview />
      <CulturalOverview/>
      <SportsOverview />
    </>
  );
};

export default ClubOverview;
