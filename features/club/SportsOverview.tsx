import Image from "next/image";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "next/link";
import Divider from "@mui/material/Divider";
import insta from "../../assets/icon/icon_col_instagram.svg";
import fb from "../../assets/icon/icon_col_fb.svg";
import twitter from "../../assets/icon/icon_col_twitter.svg";
import basket from "../../assets/sports_icons/basket.png";
import ski from "../../assets/sports_icons/ski.png";
import cycle from "../../assets/sports_icons/cycle.png";
import cricket from "../../assets/sports_icons/cricket.png";
import swim from "../../assets/sports_icons/swim.png";
import AtharvLogo from "../../assets/sports_icons/atharv_logo.png";
import Button from "@mui/material/Button";
import { styled } from "@mui/material";

const StyledButton = styled(Button)({
  fontFamily: "Rubik",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "15.2895px",
  lineHeight: "18px",
  textAlign: "center",
  letterSpacing: "0.08929em",
  textTransform: "uppercase",
  color: "#355389",
  height: "34px",
  padding: "0px 14px",
  margin: "0px 10px",

  transition: "all 200ms",
  "&:hover": {
    height: "44px",
    padding: "0px 24px",
    margin: "0px",
    background: "#394B73",
    color: "white",
  },
});

const Pill = styled(Typography)(({ theme }) => ({
  minWidth: "120px",
  maxWidth: "167px",
  height: "80px",
  padding: "0 16px",
  background: "#FFFFFF",
  boxShadow:
    "-24px 24px 48px rgba(242, 242, 242, 0.2), 24px -24px 48px rgba(242, 242, 242, 0.2), -24px -24px 48px rgba(255, 255, 255, 0.9), 24px 24px 60px rgba(242, 242, 242, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(242, 242, 242, 0.5)",
  borderRadius: "24px",
  fontFamily: "Rubik",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "16px",
  lineHeight: "19px",
  textAlign: "center",
  letterSpacing: "0.08929em",
  textTransform: "uppercase",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down('md')]: {
    minWidth: "100px",
    height: "60px",
    fontSize: "14px",
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: "90px",
    height: "50px",
    fontSize: "12px",
    padding: "0 12px",
  },
}));

const SportsOverview = () => {
  return (
    <>
      <Stack
        direction={{ xs: "column", lg: "row" }}
        alignItems={"flex-start"}
        mt={{ xs: "40px", sm: "60px", md: "82px" }}
        justifyContent={"space-between"}
        mb={{ xs: "60px", sm: "80px", md: "120px" }}
        px={{ xs: 2, sm: 3, md: 4 }}
      >
        <Box maxWidth={{ xs: "100%", lg: 1055 }} ml={{ xs: 0, lg: 10 }} width="100%">
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent={"space-between"}
            gap={{ xs: "30px", md: "20px" }}
          >
            <Stack maxWidth={{ xs: "100%", md: 600 }} gap={"24px"}>
              <Typography
                fontFamily={"Rubik"}
                fontStyle={"normal"}
                fontWeight={600}
                fontSize={{ xs: "32px", sm: "48px", md: "64px" }}
                lineHeight={{ xs: "38px", sm: "56px", md: "76px" }}
                color={"#000"}
              >
                Outstanding range of{" "}
                <span
                  style={{
                    color: "#394B73",
                  }}
                >
                  activities
                </span>{" "}
                to enjoy
              </Typography>
              <Typography
                fontFamily={"Rubik"}
                fontStyle={"normal"}
                fontWeight={400}
                fontSize={{ xs: "16px", md: "18px" }}
                lineHeight={{ xs: "24px", md: "27px" }}
                color={"rgba(34, 34, 34, 0.8)"}
                maxWidth={{ xs: "100%", md: 500 }}
              >
                Sports clubs provide a way for students to connect with others
                who share their interests and build a sense of community within
                the college. Being part of a team can help students develop
                valuable skills such as leadership, communication, and teamwork.
              </Typography>
            </Stack>
            <Stack gap={"23px"} alignItems={"center"} sx={{ display: { xs: "none", md: "flex" } }}>
              <Stack direction={"row"} gap={"18px"} alignItems={"flex-end"}>
                <Image
                  src={swim}
                  alt=""
                  width={231}
                  height={184}
                  objectFit="cover"
                  style={{
                    borderRadius: "24px",
                  }}
                />
                <Image
                  src={cycle}
                  alt=""
                  width={185}
                  height={147}
                  objectFit="cover"
                  style={{
                    borderRadius: "24px",
                  }}
                />
              </Stack>
              <Box
                sx={{
                  width: "339px",
                  height: "278px",
                }}
              >
                <Image
                  src={ski}
                  alt=""
                  objectFit="cover"
                  style={{
                    borderRadius: "24px",
                  }}
                />
              </Box>
            </Stack>
          </Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            gap={{ xs: "12px", md: "15px" }}
            mt={{ xs: "30px", md: "24px" }}
            flexWrap="wrap"
          >
            <Box
              sx={{
                width: { xs: "60px", md: "80px" },
                height: { xs: "60px", md: "80px" },
                flexShrink: 0,
              }}
            >
              <Image
                src={AtharvLogo}
                alt="atharv logo"
                width={80}
                height={80}
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
            <Divider
              orientation="vertical"
              sx={{
                height: { xs: "36px", md: "48px" },
                border: "1px solid #000",
                display: { xs: "none", sm: "block" }
              }}
            />
            <Typography
              fontFamily={"Rubik"}
              fontStyle={"normal"}
              fontWeight={500}
              fontSize={{ xs: "18px", sm: "20px", md: "24px" }}
              lineHeight={{ xs: "24px", sm: "26px", md: "28px" }}
              color={"#000"}
            >
              Atharv - IIITNR Sports Club
            </Typography>
          </Stack>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent={"space-between"}
            alignItems={{ xs: "flex-start", sm: "center" }}
            mt={{ xs: "24px", md: "32px" }}
            gap={{ xs: "24px", sm: 0 }}
          >
            <Link href={"clubs/sports"}>
              <StyledButton>Explore</StyledButton>
            </Link>
            <Stack
              direction={"row"}
              gap={{ xs: "16px", sm: "24px", md: "35px" }}
              sx={{ display: { xs: "none", sm: "flex" } }}
            >
              <Box sx={{ width: { sm: "180px", md: "251px" }, height: "auto" }}>
                <Image
                  src={cricket}
                  alt=""
                  width={251}
                  height={182}
                  style={{ width: "100%", height: "auto" }}
                />
              </Box>
              <Box sx={{ width: { sm: "180px", md: "251px" }, height: "auto" }}>
                <Image
                  src={basket}
                  alt=""
                  width={251}
                  height={251}
                  style={{ width: "100%", height: "auto" }}
                />
              </Box>
            </Stack>
          </Stack>
          <Stack gap={{ xs: "24px", md: "40px" }} mt={{ xs: "24px", md: "32px" }}>
            <Stack
              direction={"row"}
              gap={{ xs: "12px", sm: "16px", md: "24px" }}
              flexWrap="wrap"
            >
              <Pill>Cricket</Pill>
              <Pill>Football</Pill>
              <Pill>Gym</Pill>
            </Stack>
            <Stack
              direction={"row"}
              gap={{ xs: "12px", sm: "16px", md: "24px" }}
              flexWrap="wrap"
            >
              <Pill>ESPORTS</Pill>
              <Pill>BASKETBALL</Pill>
              <Pill>TABLE TENNIS</Pill>
              <Pill>CHESS</Pill>
              <Pill>Badminton</Pill>
              <Pill>KABADDI</Pill>
            </Stack>
          </Stack>
        </Box>
        <Stack
          direction={{ xs: "row", lg: "column" }}
          alignItems={"center"}
          gap={{ xs: "24px", lg: "54px" }}
          mt={{ xs: "40px", lg: 20 }}
          justifyContent={{ xs: "center", lg: "flex-start" }}
        >
          <Typography
            fontFamily={"Rubik"}
            fontStyle={"normal"}
            fontWeight={300}
            fontSize={{ xs: "18px", lg: "24px" }}
            lineHeight={{ xs: "24px", lg: "28px" }}
            color={"#000"}
            sx={{
              transform: { xs: "none", lg: "rotate(90deg)" },
            }}
          >
            Social Links
          </Typography>
          <Divider
            orientation={{ xs: "horizontal", lg: "vertical" }}
            variant="middle"
            sx={{
              width: { xs: "100px", lg: "auto" },
              height: { xs: "auto", lg: "196px" },
              mt: { xs: 0, lg: 5 },
            }}
          />
          <Stack
            direction={{ xs: "row", lg: "column" }}
            gap={{ xs: "24px", lg: "48px" }}
          >
            <a href="" target={"_blank"} rel="noreferrer">
              <Image src={fb} alt="" />
            </a>
            <a href="" target={"_blank"} rel="noreferrer">
              <Image src={twitter} alt="" />
            </a>
            <a
              href="https://www.instagram.com/atharv_iiitnr/"
              target={"_blank"}
              rel="noreferrer"
            >
              <Image src={insta} alt="icon_instagram" />
            </a>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default SportsOverview;
