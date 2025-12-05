import Box from "@mui/material/Box";
import bg from "../../assets/overview_bg/bg_culturaloverview.svg";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import Link from "next/link";

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontFamily: "Baskervville",
  fontStyle: "italic",
  fontWeight: "400",
  fontSize: "32px",
  lineHeight: "47px",
  color: "#FFFFFF",
  cursor: "pointer",
  width: "auto",
  position: "relative",
  whiteSpace: "normal",
  overflow: "visible",
  textOverflow: "clip",
  textAlign: "center",
  [theme.breakpoints.down('md')]: {
    fontSize: "24px",
    lineHeight: "32px",
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: "20px",
    lineHeight: "28px",
  },
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
}));

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
        <Stack alignItems={"center"} my={{ xs: "80px", sm: "120px", md: "180px", lg: "250px" }} px={{ xs: 2, sm: 3, md: 4 }}>
          <Typography
            fontFamily={"Cotta"}
            fontStyle={"normal"}
            fontWeight={400}
            fontSize={{ xs: "48px", sm: "64px", md: "80px", lg: "96px" }}
            color={"#fff"}
            textAlign={"center"}
          >
            Cultural Clubs
          </Typography>
          <Typography
            fontFamily={"Cotta"}
            fontStyle={"normal"}
            fontWeight={400}
            fontSize={{ xs: "16px", sm: "18px", md: "20px" }}
            lineHeight={{ xs: "22px", sm: "24px", md: "26px" }}
            textAlign={"center"}
            color={"#fff"}
            maxWidth={{ xs: "100%", sm: "90%", md: 800 }}
            my={2}
            px={{ xs: 2, md: 0 }}
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
            fontSize={{ xs: "20px", sm: "24px", md: "28px", lg: "32px" }}
            color={"#fff"}
            mt={"26px"}
            textAlign={"center"}
            px={{ xs: 2, md: 0 }}
          >
            Music, Art, Dance, Photography, Debate, Discussions, Poetry and
            Drama
          </Typography>
          <Grid2 container sx={{ px: { xs: 2, sm: 3, md: "40px", lg: "80px" }, mt: { xs: "40px", md: "70px" }, maxWidth: "100%" }} rowGap={"40px"}>
            {clubs.map((club, index) => {
              return (
                <Grid2 xs={12} sm={6} md={3} key={index} sx={{ display: "flex", justifyContent: "center", px: 1 }}>
                  <Link href={club.url}>
                    <StyledTypography>{club.name}</StyledTypography>
                  </Link>
                </Grid2>
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
  // { name: "Yuva Tourism Club", url: "/clubs/cultural/ytc" },
];
