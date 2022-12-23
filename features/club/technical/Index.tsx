import Box from "@mui/material/Box";
import ClubDescription from "./ClubDescription";
import Crew from "./Crew";
import Gallery from "./Gallery";
import TechnicalClub from "./TechnicalClub";
import stylesClub from "../../../styles/Clubs.module.css";

const Index = () => {
  return (
    <>
      <TechnicalClub />
      <ClubDescription />
      <Box className={stylesClub.bgbottom} sx={{ height: "1900px" }}>
        <Crew />
        <Gallery />
      </Box>
    </>
  );
};

export default Index;
