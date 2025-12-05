import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Unstable_Grid2";
import Link from "next/link";
import bg from "../../assets/overview_bg/bg_mediaoverview.svg";

const StyledTypography = styled(Typography)({
  fontFamily: "JetBrains Mono",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "96px",
});

const StyledLinkTypography = styled(Typography)(({ theme }) => ({
  fontFamily: "JetBrains Mono",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "24px",
  color: "#565A6E",
  cursor: "pointer",
  backgroundColor: "#FFDADA",
  padding: "20px",
  borderRadius: "20px",
  width: "100%",
  maxWidth: "501px",
  boxShadow:
    "-24px 24px 48px rgba(242, 242, 242, 0.2), 24px -24px 48px rgba(242, 242, 242, 0.2), -24px -24px 48px rgba(255, 255, 255, 0.9), 24px 24px 60px rgba(242, 242, 242, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(242, 242, 242, 0.5)",
  [theme.breakpoints.down('md')]: {
    fontSize: "18px",
    padding: "16px",
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: "16px",
    padding: "12px",
  },
}));

const MediaOverview = () => {
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
            flexDirection: { xs: "column", md: "row" },
            columnGap: { md: "40px", lg: "95px" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
            mt: { xs: "40px", md: "100px" },
            px: { xs: 2, sm: 3, md: 0 },
          }}
        >
          <Stack ml={{ xs: 0, md: "40px", lg: "80px" }} rowGap={{ xs: "30px", md: "70px" }} width={{ xs: "100%", md: "60%", lg: "738px" }} maxWidth="100%">
            <Typography
              fontFamily={"JetBrains Mono"}
              fontStyle={"normal"}
              fontWeight={800}
              fontSize={{ xs: "2.5rem", sm: "3.5rem", md: "4rem", lg: "5rem" }}
              color={"#343B58"}
            >
              Media & IT Cell
            </Typography>
            <Typography
              fontFamily={"Rubik"}
              fontStyle={"normal"}
              fontWeight={400}
              fontSize={{ xs: "16px", sm: "18px", md: "20px" }}
              color={"#565A6E"}
            >
              The Media & IT Cell under SAC promote skills of photography,
              videography and designing. They conduct various workshops to
              improve one&apos;s skills in the field of digital arts and
              content. This Cell is also responsible for handling all the social
              platforms and website of SAC
            </Typography>
          </Stack>
        </Box>
        <Box m={{ xs: "40px 16px 60px", sm: "60px 24px 80px", md: "80px 40px 120px", lg: "100px 0px 180px 100px" }}>
          <Grid2 container rowGap={"40px"} columnSpacing={{ xs: 2, sm: 3 }}>
            {clubs.map((club, index) => {
              return (
                <Grid2 xs={12} sm={12} md={8} key={index}>
                  <Link href={club.url}>
                    <StyledLinkTypography color={"#565A6E"}>
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

export default MediaOverview;

const clubs = [
  { name: "-> Shutterbug Club", url: "/clubs/media/shutterbug" },
  { name: "-> Website Development Club", url: "/clubs/media/website" },
  {
    name: "-> Design and Documentation Team",
    url: "/clubs/media/design",
  },
  { name: "-> PR and Social Media Team", url: "/clubs/media/pr" },
];
