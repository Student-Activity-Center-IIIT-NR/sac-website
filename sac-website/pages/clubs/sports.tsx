import { FunctionComponent } from "react";
import SportsLayout from "../../features/club/sports/SportsLayout";
import ClubsLayout from "../../layouts/ClubsLayout";

interface SportsProps {}

const Sports: FunctionComponent<SportsProps> = () => {
  return (
    <>
      <ClubsLayout>
        <SportsLayout />
      </ClubsLayout>
    </>
  );
};

export default Sports;
