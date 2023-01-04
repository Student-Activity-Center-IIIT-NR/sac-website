import { FunctionComponent } from "react";
import ClubsLayout from "../../../layouts/ClubsLayout";
import TechnicalClub from "../../../features/club/technical/TechnicalClub";
import ClubDescription from "../../../features/club/technical/ClubDescription";
import Box from "@mui/material/Box";
import Crew from "../../../features/club/technical/Crew";
import Gallery from "../../../features/club/technical/Gallery";
import bgTechBottom from "../../../assets/bg_tech_bottom.svg";
import AIMLDescImage from "../../../assets/aiml_desc_img.png";

interface TSOCProps {}

const TSOC: FunctionComponent<TSOCProps> = () => {
  return (
    <>
      <ClubsLayout>
        <TechnicalClub />
        <ClubDescription url={AIMLDescImage}>
          We were born in the age of internet and are now evolving to the age of
          Artificial Intelligence, and here is where we develop it. Here in the
          AI/ML club, we learn how to go from an admirer of this new technology
          to a capable and complete developer in this new technology. We will
          build projects from scratch with open source tools like TensorFlow and
          Keras with application development in Python environments, all while
          attending competitions, hackathons and maybe even contributing to the
          open source technology that we work with!
        </ClubDescription>
        <Box
          sx={{
            height: "1900px",
            background: `url(${bgTechBottom.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Crew />
          <Gallery />
        </Box>
      </ClubsLayout>
    </>
  );
};

export default TSOC;
