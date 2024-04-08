import { FunctionComponent } from "react";
import ClubsLayout from "../../../layouts/ClubsLayout";
import TechnicalClub from "../../../features/club/technical/TechnicalClub";
import ClubDescription from "../../../features/club/technical/ClubDescription";
import Box from "@mui/material/Box";
import Crew from "../../../features/club/common/Crew";
import Gallery from "../../../features/club/common/Gallery";
import IICBg from "../../../assets/technical_clubs_bg/IIC.jpg";
import IICBgTop from "../../../assets/technical_clubs_bg/bg_IIC_top.png";
import IICBgBottom from "../../../assets/technical_clubs_bg/bg_IIC_bottom.png";
import IICLogo from "../../../assets/technical_clubs_bg/IIC_logo.png";
import { StaticImageData } from "next/image";
import { iic } from "../../../data/Crews/TechnicalClubCrew";

interface IICProps {}

const IIC: FunctionComponent<IICProps> = () => {
  return (
    <>
      <ClubsLayout>
        <TechnicalClub
          name="IIC"
          desc="Institute Innovation Council"
          bgTop={IICBgTop}
          logo={IICLogo}
          color={"#BEA000"}
          instagram=""
        />
        <ClubDescription bg={IICBg}>
          Institution&apos;s Innovation Council (IIC) program is initiative of
          Ministry of Education (MoE) through MoE&apos;s Innovation Cell (MIC)
          in collaboration with AICTE for Higher Educational Institutions (HEIs)
          to systematically foster the culture of innovation and start-up
          ecosystem in education institutions.
        </ClubDescription>
        <Box
          sx={{
            height: "fit-content",
            background: `url(${IICBgBottom.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            pb: 6,
          }}
        >
          {/* <Crew props={iib} />
          <Gallery club="IIC" /> */}
        </Box>
      </ClubsLayout>
    </>
  );
};

export default IIC;
