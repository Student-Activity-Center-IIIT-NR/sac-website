import React from "react";
import SportsGallery from "./SportsGallery";
import SportsTeam from "./SportsTeam";
import SportsHeading from "./SportsHeading";

const SportsLayout = () => {
  return (
    <>
      <SportsHeading />
      <SportsGallery />
      <SportsTeam />
    </>
  );
};

export default SportsLayout;
