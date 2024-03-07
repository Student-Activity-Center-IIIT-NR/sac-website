import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { ReactNode } from "react";
import { StaticImageData } from "next/image";
import { atharv } from "../../../data/Crews/SportsClubCrew";

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
          {atharv.map((data, index) => {
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
