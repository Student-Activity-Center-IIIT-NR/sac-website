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

const Pill = styled(Typography)({
  width: "167px",
  height: "80px",
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
});

const SportsOverview = () => {
  return (
    <>
      <Stack
        direction={"row"}
        alignItems={"flex-start"}
        mt={"82px"}
        justifyContent={"space-between"}
        mb={"120px"}
      >
        <Box maxWidth={1055} ml={10}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            gap={"20px"}
          >
            <Stack maxWidth={600} gap={"24px"}>
              <Typography
                fontFamily={"Rubik"}
                fontStyle={"normal"}
                fontWeight={600}
                fontSize={"64px"}
                lineHeight={"76px"}
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
                fontSize={"18px"}
                lineHeight={"27px"}
                color={"rgba(34, 34, 34, 0.8)"}
                maxWidth={500}
              >
                Sports clubs provide a way for students to connect with others
                who share their interests and build a sense of community within
                the college. Being part of a team can help students develop
                valuable skills such as leadership, communication, and teamwork.
              </Typography>
            </Stack>
            <Stack gap={"23px"} alignItems={"center"}>
              <Stack direction={"row"} gap={"18px"} alignItems={"flex-end"}>
                <Image
                  src={swim}
                  alt=""
                  width="231px"
                  height="184px"
                  objectFit="cover"
                  style={{
                    borderRadius: "24px",
                  }}
                />
                <Image
                  src={cycle}
                  alt=""
                  width="185px"
                  height="147px"
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
          <Stack direction={"row"} alignItems={"center"} gap={"15px"}>
            <Box
              sx={{
                width: "80px",
                height: "80px",
              }}
            >
              <Image
                src={AtharvLogo}
                alt="atharv logo"
                width={"80px"}
                height={"80px"}
              />
            </Box>
            <Divider
              orientation="vertical"
              sx={{ height: "48px", border: "1px solid #000" }}
            />
            <Typography
              fontFamily={"Rubik"}
              fontStyle={"normal"}
              fontWeight={500}
              fontSize={"24px"}
              lineHeight={"28px"}
              color={"#000"}
            >
              Atharv - IIITNR Sports Club
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Link href={"clubs/sports"}>
              <StyledButton>Explore</StyledButton>
            </Link>
            <Stack direction={"row"} gap={"35px"}>
              <Box sx={{ width: "251px", height: "182px" }}>
                <Image src={cricket} alt="" width={"251px"} height={"182px"} />
              </Box>
              <Box sx={{ width: "251px", height: "251px" }}>
                <Image src={basket} alt="" width={"251px"} height={"251px"} />
              </Box>
            </Stack>
          </Stack>
          <Stack gap={"40px"}>
            <Stack direction={"row"} gap={"24px"}>
              <Pill>Cricket</Pill>
              <Pill>Football</Pill>
            </Stack>
            <Stack direction={"row"} gap={"24px"}>
              <Pill>ESPORTS</Pill>
              <Pill>BASKETBALL</Pill>
              <Pill>TABLE TENNIS</Pill>
              <Pill>CHESS</Pill>
              <Pill>Badminton</Pill>
              <Pill>KABADDI</Pill>
            </Stack>
          </Stack>
        </Box>
        <Stack direction={"column"} alignItems={"center"} gap={"54px"} mt={20}>
          <Typography
            fontFamily={"Rubik"}
            fontStyle={"normal"}
            fontWeight={300}
            fontSize={"24px"}
            lineHeight={"28px"}
            color={"#000"}
            sx={{
              transform: "rotate(90deg)",
            }}
          >
            Social Links
          </Typography>
          <Divider
            orientation="vertical"
            variant="middle"
            sx={{
              height: "196px",
              mt: 5,
            }}
          />
          <Stack direction={"column"} gap={"48px"}>
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
