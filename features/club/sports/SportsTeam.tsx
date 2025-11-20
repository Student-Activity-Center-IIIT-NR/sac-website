import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { ReactNode } from "react";
import { atharv } from "../../../data/Crews/SportsClubCrew";

interface Props {
  img: any;
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
          <Box sx={{ width: "262px", height: "309px", overflow: "hidden", borderRadius: "12px" }}>
            <Image src={img} alt={title} width={262} height={309} className="member-photo" />
          </Box>
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
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 262px)",
            },
            gap: "24px",
            justifyContent: "center",
          }}
        >
          {atharv.map((data, index) => {
            return (
              <Box key={index} sx={{ display: "flex", justifyContent: "center" }}>
                <Item img={data.img} title={data.name}>
                  {data.post}
                </Item>
              </Box>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default SportsTeam;
