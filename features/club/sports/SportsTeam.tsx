import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { ReactNode } from "react";
import { StaticImageData } from "next/image";
import Suyash_Gupta from "../../../assets/team_23-24/Suyash_Gupta.jpg";
import Yash_Raj from "../../../assets/team_23-24/Yash_Raj.jpeg";
import Neha_Dhruw from "../../../assets/team_23-24/Neha_Dhruw.jpg";
import Sanjana_Sori from "../../../assets/team_23-24/Sanjana_Sori.jpg";
import Ravikant_Shrivas from "../../../assets/team_23-24/Male-member.jpeg";
import Aditya_Raj_Banjare from "../../../assets/team_23-24/Male-member.jpeg";
import Ravi_Vinayak from "../../../assets/team_23-24/Ravi_Vinayak.jpeg";
import Venella_Telli from "../../../assets/team_23-24/Female-member.jpeg";
import Ojash_E_Sports from "../../../assets/team_23-24/Male-member.jpeg";
import Shaurya_Malhan from "../../../assets/team_23-24/Shaurya_Malhan.jpeg";
import Deependra_Singh_Bhow from "../../../assets/team_23-24/Deependar.jpeg";
import Lumani_Verma from "../../../assets/team_23-24/Female-member.jpeg";
import Aman_Kumar_Singh from "../../../assets/team_23-24/Aman_Singh.jpg";
import Mayank_Chandra from "../../../assets/team_23-24/Male-member.jpeg";
import Neha_Dhruw_Volleyball from "../../../assets/team_23-24/Neha_Dhruw.jpg";
import Raj_Bhattacharya from "../../../assets/team_23-24/Male-member.jpeg";

interface Props {
  img: StaticImageData;
  title: string;
  children: ReactNode;
}

const SportsTeam = () => {
  const Item = ({ img, title, children }: Props) => {
    return (
      <Stack
        spacing={1}
        sx={{
          justifyContent: "center",
        }}
      >
        {img && (
          <Image
            src={img}
            alt=""
            height="394px"
            width="286px"
            objectFit="cover"
          />
        )}
        <Typography
          fontFamily={"Lato"}
          lineHeight={"27.5px"}
          fontWeight={700}
          color="#565A6E"
          fontSize="20px"
        >
          {title}
        </Typography>
        <Typography
          fontFamily={"Lato"}
          fontWeight={700}
          lineHeight={"22px"}
          color="#565A6E"
          fontSize="16px"
        >
          {children}
        </Typography>
      </Stack>
    );
  };

  return (
    <>
      <Box
        sx={{
          mt: "140px",
          mb: "50px",
          px: "30px",
        }}
      >
        <Typography
          fontFamily="Touchdown Font"
          fontStyle={"normal"}
          fontWeight={400}
          fontSize={"64px"}
          color="#000000"
          textAlign="center"
        >
          TEAM
        </Typography>
        <Box
          sx={{
            mt: "80px",
            display: "flex",
            flexDirection: "row",
            gap: "120px 26px",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {crew.map((data, index) => {
            return (
              <Item img={data.img} title={data.name} key={index}>
                {data.post}
              </Item>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default SportsTeam;

interface CrewProps {
  img: StaticImageData;
  name: string;
  post: string;
}

const crew: CrewProps[] = [
  {
    img: Suyash_Gupta,
    name: "Suyash Gupta",
    post: "Atharv In-Charge",
  },
  {
    img: Yash_Raj,
    name: "Yash Raj",
    post: "Atharv Vice-Incharge",
  },
  {
    img: Neha_Dhruw,
    name: "Neha Dhruw",
    post: "Atharv Vice-Incharge",
  },
  {
    img: Suyash_Gupta,
    name: "Suyash Gupta",
    post: "Atharv Cricket InCharge",
  },
  {
    img: Sanjana_Sori,
    name: "Sanjana Sori",
    post: "Atharv Cricket InCharge (Girls)",
  },
  {
    img: Ravikant_Shrivas,
    name: "Ravikant Shrivas",
    post: "Atharv Basketball InCharge",
  },
  {
    img: Aditya_Raj_Banjare,
    name: "Aditya Raj Banjare",
    post: "Atharv Kabaddi InCharge",
  },
  {
    img: Ravi_Vinayak,
    name: "Ravi Vinayak",
    post: "Atharv Badminton InCharge",
  },
  {
    img: Venella_Telli,
    name: "Venella Telli",
    post: "Atharv Badminton InCharge (Girls)",
  },
  {
    img: Ojash_E_Sports,
    name: "Ojash",
    post: "Atharv E-Sports InCharge",
  },
  {
    img: Shaurya_Malhan,
    name: "Shaurya Malhan",
    post: "Atharv Chess InCharge",
  },
  {
    img: Deependra_Singh_Bhow,
    name: "Deependra Singh Bhow",
    post: "Atharv Table Tennis InCharge",
  },
  {
    img: Lumani_Verma,
    name: "Lumani Verma",
    post: "Atharv Table Tennis InCharge (Girls)",
  },
  {
    img: Aman_Kumar_Singh,
    name: "Aman Kumar Singh",
    post: "Atharv Football InCharge",
  },
  {
    img: Mayank_Chandra,
    name: "Mayank Chandra",
    post: "Atharv Volleyball InCharge",
  },
  {
    img: Neha_Dhruw_Volleyball,
    name: "Neha Dhruw",
    post: "Atharv Volleyball InCharge (Girls)",
  },
  {
    img: Raj_Bhattacharya,
    name: "Raj Bhattacharya",
    post: "Atharv Mini Golf InCharge",
  },
];
