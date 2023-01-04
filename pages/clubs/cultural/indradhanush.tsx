import { FunctionComponent } from "react";
import ClubsLayout from "../../../layouts/ClubsLayout";
import CulturalClub from "../../../features/club/cultural/CulturalClub";

interface IndradhanushProps {}

const Indradhanush: FunctionComponent<IndradhanushProps> = () => {
  return (
    <>
      <ClubsLayout>
        <CulturalClub />
      </ClubsLayout>
    </>
  );
};

export default Indradhanush;
