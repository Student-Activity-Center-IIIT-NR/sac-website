import Box from "@mui/material/Box";
import bg from "../../assets/overview_bg/bg_culturaloverview.svg";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import Link from "next/link";

const StyledTypography = styled(Typography)({
  fontFamily: "Baskervville",
  fontStyle: "italic",
  fontWeight: "400",
  fontSize: "32px",
  lineHeight: "47px",
  color: "#FFFFFF",
  cursor: "pointer",
  width: "fit-content",
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    width: "100%",
    transform: "scaleX(0.1)",
    height: "1px",
    bottom: "0",
    left: "0",
    backgroundColor: "#fff",
    transformOrigin: "bottom left",
    transition: "transform 0.3s ease-out",
  },
  "&:hover::after": {
    transform: "scaleX(1)",
    transformOrigin: "bottom left",
  },
});

const CulturalOverview = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${bg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Stack alignItems={"center"} my={"250px"}>
          <Typography
            fontFamily={"Cotta"}
            fontStyle={"normal"}
            fontWeight={400}
            fontSize={"96px"}
            color={"#fff"}
          >
            Cultural Clubs
          </Typography>
          <Typography
            fontFamily={"Cotta"}
            fontStyle={"normal"}
            fontWeight={400}
            fontSize={"20px"}
            lineHeight={"26px"}
            textAlign={"center"}
            color={"#fff"}
            maxWidth={800}
            my={2}
          >
            Cultural clubs under SAC IIIT Naya Raipur, provide a way for
            students to explore and engage in activities outside their academic
            studies. These clubs can foster a sense of community and belonging,
            which can be especially important for students in technical fields
            who may spend much time working independently. They also provide
            opportunities for students to develop leadership skills,
            organizational skills, and teamwork abilities, which can be
            beneficial for their future careers.
          </Typography>
          <Typography
            fontFamily={"Baskervville"}
            fontStyle={"normal"}
            fontWeight={400}
            fontSize={"32px"}
            color={"#fff"}
            mt={"26px"}
          >
            Music, Art, Dance, Photography, Debate, Discussions, Poetry and
            Drama
          </Typography>
          <Grid2 container sx={{ px: "80px", mt: "70px" }} rowGap={"76px"}>
            {clubs.map((club, index) => {
              return (
                <Link href={club.url} key={index}>
                  <Grid2 xs={3}>
                    <StyledTypography>{club.name}</StyledTypography>
                  </Grid2>
                </Link>
              );
            })}
          </Grid2>
        </Stack>
      </Box>
    </>
  );
};

export default CulturalOverview;

const clubs = [
  { name: "Indradhanush", url: "/clubs/cultural/indradhanush" },
  { name: "Capriccio", url: "/clubs/cultural/capriccio" },
  { name: "Club De Theatre", url: "/clubs/cultural/cdt" },
  { name: "Igniters", url: "/clubs/cultural/igniters" },
  { name: "Cover to Cover", url: "/clubs/cultural/c2c" },
  { name: "Take da bait", url: "/clubs/cultural/tdb" },
  { name: "Model United Nations", url: "/clubs/cultural/mun" },
  { name: "Yuva Tourism Club", url: "/clubs/cultural/ytc" },
];
