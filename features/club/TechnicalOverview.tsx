import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Unstable_Grid2";
import Link from "next/link";
import bg from "../../assets/overview_bg/bg_techoverview.svg";

const StyledTypography = styled(Typography)({
  fontFamily: "JetBrains Mono",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "96px",
});

const StyledLinkTypography = styled(Typography)({
  fontFamily: "JetBrains Mono",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "24px",
  color: "#565A6E",
  width: "fit-content",
  cursor: "pointer",
});

const TechnicalOverview = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${bg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          mt: "-50px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            columnGap: "95px",
            justifyContent: "space-between",
            alignItems: "center",
            mt: "100px",
          }}
        >
          <Stack ml={"80px"} rowGap={"8px"} width={"738px"}>
            <Typography
              fontFamily={"JetBrains Mono"}
              fontStyle={"normal"}
              fontWeight={800}
              fontSize={"5rem"}
              color={"#343B58"}
            >
              Technical Clubs
            </Typography>
            <Typography
              fontFamily={"JetBrains Mono"}
              fontStyle={"normal"}
              fontWeight={700}
              fontSize={"36px"}
            >
              <span style={{ color: "#7AA2F7" }}>Coding,&nbsp;</span>
              <span style={{ color: "#F7768E" }}>Hacking,&nbsp;</span>
              <span style={{ color: "#73DACA" }}>Machine learning,&nbsp;</span>
              <span style={{ color: "#FF9E64" }}>Robotics</span>
            </Typography>
            <Typography
              fontFamily={"Rubik"}
              fontStyle={"normal"}
              fontWeight={400}
              fontSize={"20px"}
              color={"#565A6E"}
            >
              The technical clubs under SAC promote hands-on and cooperative
              learning and also engages students in problem-solving and
              higher-order thinking. They conduct various events and provide
              networking opportunities through hackathons, contests, workshops,
              seminars, conventions, and teaching sessions.
            </Typography>
          </Stack>
          <Box
            sx={{
              mr: "32px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              width: "400px",
            }}
          >
            <StyledTypography
              color={"#BB9AF7"}
              sx={{
                textShadow: "4px 4px 50px #BB9AF7",
                mr: "33px",
              }}
            >
              {"{"}
            </StyledTypography>
            <StyledTypography
              color={"#7AA2F7"}
              sx={{
                textShadow: "4px 4px 50px #7AA2F7",
                mr: "43px",
                transform: `translate(0px, -15px)`,
              }}
            >
              {"/"}
            </StyledTypography>
            <StyledTypography
              color={"#F7768E"}
              sx={{
                textShadow: "4px 4px 50px #F7768E",
                fontStyle: "italic",
                transform: `translate(0px, -40px)`,
              }}
            >
              {'"'}
            </StyledTypography>
            <StyledTypography
              color={"#ECC5FB"}
              sx={{
                textShadow: "4px 4px 50px #ECC5FB",
                mr: "4px",
                ml: "280px",
                transform: `translate(0px, -70px)`,
              }}
            >
              {"<"}
            </StyledTypography>
            <StyledTypography
              color={"#73DACA"}
              sx={{
                textShadow: "4px 4px 50px #73DACA",
                transform: `translate(0px, -70px)`,
              }}
            >
              {"]"}
            </StyledTypography>
            <StyledTypography
              color={"#2AC3DE"}
              sx={{
                textShadow: "4px 4px 50px #2AC3DE",
                ml: "90px",
                mr: "14px",
                transform: `translate(0px, -100px)`,
              }}
            >
              {"#"}
            </StyledTypography>
            <StyledTypography
              color={"#FF9E64"}
              sx={{
                transform: `translate(0px, -40px)`,
                textShadow: "4px 4px 50px #FF9E64",
              }}
            >
              {"()"}
            </StyledTypography>
          </Box>
        </Box>
        <Box m={"110px 0px 180px 100px"}>
          <Grid2 container rowGap={"92px"}>
            {clubs.map((club, index) => {
              return (
                <Grid2 xs={3} key={index}>
                  <Link href={club.url}>
                    <StyledLinkTypography
                      color={"#565A6E"}
                      sx={{
                        transition: "all 200ms ease",
                        "&:hover": {
                          color: club.color,
                        },
                      }}
                    >
                      {club.name}
                    </StyledLinkTypography>
                  </Link>
                </Grid2>
              );
            })}
          </Grid2>
        </Box>
      </Box>
    </>
  );
};

export default TechnicalOverview;

const clubs = [
  { name: "// TSOC", url: "/clubs/technical/tsoc", color: "#7AA2F7" },
  { name: "// AIML", url: "/clubs/technical/aiml", color: "#73DACA" },
  {
    name: "// CipherCell",
    url: "/clubs/technical/ciphercell",
    color: "#F7768E",
  },
  {
    name: "// Inquizitive",
    url: "/clubs/technical/inquizitive",
    color: "#BB9AF7",
  },
  { name: "// Comet", url: "/clubs/technical/comet", color: "#FF9E64" },
  { name: "// BIS", url: "/clubs/technical/bis", color: "#CA50F5" },
  { name: "// IIC", url: "/clubs/technical/iic", color: "#FFDE31" },
];
