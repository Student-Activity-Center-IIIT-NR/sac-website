import { FunctionComponent } from "react";
import ClubsLayout from "../../../layouts/ClubsLayout";
import ClubHeader from "../../../features/club/media/ClubHeader";
import ClubDescription from "../../../features/club/cultural/ClubDescription";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DesignBg from "../../../assets/media_cell_bg/design.jpg";
import DesignLogo from "../../../assets/media_cell_bg/Media.png";
import Crew from "../../../features/club/common/Crew";
import { StaticImageData } from "next/image";
import { design } from "../../../data/MediaClubCrew";

interface DesignProps {}

const Design: FunctionComponent<DesignProps> = () => {
  return (
    <>
      <ClubsLayout>
        <ClubHeader />
        <Box
          sx={{
            height: "320px",
            marginTop: "80px",
            maxWidth: "100vw",
            background: `url(${DesignBg.src}) no-repeat`,
            backgroundSize: "cover",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            fontFamily={"Rubik"}
            fontStyle={"normal"}
            fontWeight={"400"}
            fontSize={"96px"}
            color={"#333333"}
            sx={{ mt: "-120px" }}
          >
            Design and Doc Team
          </Typography>
        </Box>
        <ClubDescription img={DesignLogo}>
          Design and Documentation Team is repsonsible for Designing all the
          Digital Content that SAC requires, may it be Posters, Flexes or
          website. Apart for this, the team also functions as the documentation
          team, documenting every posts, blogs or captions, thus suopporting the
          entire SAC.
        </ClubDescription>
        <Crew props={design} />
        <br />
      </ClubsLayout>
    </>
  );
};

export default Design;

interface GalleryProps {
  name: string;
  img: StaticImageData[];
  date: string;
}
