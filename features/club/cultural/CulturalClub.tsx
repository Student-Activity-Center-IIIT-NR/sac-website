import React, { useState } from "react";
import ClubHeader from "./ClubHeader";
import ClubBanner from "./ClubBanner";
import ClubDescription from "./ClubDescription";
import ClubEvents from "./ClubEvents";
import ClubCrew from "./ClubCrew";
import ClubGallery from "./ClubGallery";

function CulturalClub() {
  const [clubName, setClubName] = useState("Indradhanush");

  return (
    <>
      <ClubHeader setClubName={setClubName} />

      <ClubBanner clubName={clubName} />

      <ClubDescription clubName={clubName} />

      <ClubEvents clubName={clubName} />

      <ClubCrew />

      <ClubGallery clubName={clubName} />
    </>
  );
}

export default CulturalClub;
