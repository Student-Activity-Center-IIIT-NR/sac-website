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

// import crew

import A_Satya_Kartik from "../../../assets/team_23-24/Male-member.jpeg";
import S_Chandu from "../../../assets/team_23-24/Male-member.jpeg";
import Ojash_Verma from "../../../assets/team_23-24/Male-member.jpeg";
import Tanishka from "../../../assets/team_23-24/Female-member.jpeg";
import Trisul from "../../../assets/team_23-24/Trisul.jpeg";
import Shreyansh_Kushwaha from "../../../assets/team_23-24/Shreyansh_Kushwaha.jpg";

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
        <Crew props={crew} />
        <br />
      </ClubsLayout>
    </>
  );
};

export default Design;

interface CrewProps {
  img: StaticImageData;
  name: string;
  post: string;
}

interface GalleryProps {
  name: string;
  img: StaticImageData[];
  date: string;
}

const crew: CrewProps[] = [
  {
    img: A_Satya_Kartik,
    name: "A Satya Karthik",
    post: "Head",
  },
  {
    img: S_Chandu,
    name: "S.Chandu",
    post: "Core Member",
  },
  {
    img: Ojash_Verma,
    name: "Ojash Verma",
    post: "Core Member",
  },
  {
    img: Tanishka,
    name: "Tanishka Chauhan",
    post: "Core Member",
  },
  {
    img: Shreyansh_Kushwaha,
    name: "Shreyansh Kushwaha",
    post: "Core Member",
  },
  {
    img: Trisul,
    name: "Trishul",
    post: "Core Member",
  },
];
