import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { ReactNode } from "react";
import { StaticImageData } from "next/image";
import Akshit_Rana from "../../../assets/team_22-23/Akshit_Rana.jpeg";
import Deependar_singh_bhau from "../../../assets/team_22-23/Deependar.jpeg";
import Heera from "../../../assets/team_22-23/Heera.jpeg";
import Abhishek_Kerketta from "../../../assets/team_22-23/Abhishek_Kerketta.jpeg";
import Rahul_Meshram from "../../../assets/team_22-23/Rahul_Meshram.jpeg";
import Rachit_chaddha from "../../../assets/team_22-23/Male-member.jpeg";
import Kishan_Mishra from "../../../assets/team_22-23/Kishan_Mishra.jpeg";
import Eshita_Pradhan from "../../../assets/team_22-23/Eshita_Pradhan.jpeg";
import Bhavya_Alok from "../../../assets/team_22-23/Male-member.jpeg";
import Sagam_Reddy_Nanditha from "../../../assets/team_22-23/Sagam_Reddy_Nanditha.jpeg";
import Subhadeep_Barman from "../../../assets/team_22-23/Subhadeep_Barman.jpeg";
import Saumya_singh from "../../../assets/team_22-23/Male-member.jpeg";

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
            return(
              <Item img={data.img} title={data.name} key={index}>
              {data.post}
              </Item>
              )
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
    img: Akshit_Rana,
    name: "Akshit Rana",
    post: "In-Charge",
  },
  {
    img: Deependar_singh_bhau,
    name: "Deependra Singh Bhow",
    post: "Vice In-Charge",
  },
  {
    img: Heera,
    name: "Heera Singh",
    post: "Cricket In-Charge",
  },
  {
    img: Abhishek_Kerketta,
    name: "Abhishek Kerketta",
    post: "Football In-Charge",
  },
  {
    img: Rahul_Meshram,
    name: "Rahul Meshram",
    post: "Basketball In-Charge",
  },
  {
    img: Rachit_chaddha,
    name: "Rachit chaddha",
    post: "Table Tennis In-Charge",
  },
  {
    img: Saumya_singh,
    name: "Saumya Singh",
    post: "Table Tennis Vice In-Charge",
  },
  {
    img: Kishan_Mishra,
    name: "Kishan Mishra",
    post: "Badminton In-Charge",
  },
  {
    img: Eshita_Pradhan,
    name: "Eshita Pradhan",
    post: "Badminton Vice In-Charge",
  },
  {
    img: Akshit_Rana,
    name: "Akshit Rana",
    post: "Volleyball In-Charge",
  },
  {
    img: Bhavya_Alok,
    name: "Bhavya Alok",
    post: "Indoor In-Charge",
  },
  {
    img: Sagam_Reddy_Nanditha,
    name: "Sagam Reddy Nanditha",
    post: "Indoor Vice In-Charge",
  },
  {
    img: Subhadeep_Barman,
    name: "Subhadeep Barman",
    post: "E-Sports",
  },
];
