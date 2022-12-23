import Box from "@mui/material/Box";
import clubStyles from "../../../styles/Clubs.module.css";
import BasicMenu from "./BasicMenu";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import AimlLogo from "../../../assets/aiml_logo.svg";
import Typography from "@mui/material/Typography";
import iconCall from "../../../assets/icon_call.svg";
import iconMail from "../../../assets/icon_mail.svg";
import Link from "next/link";
import { styled } from "@mui/material";

const StyledLink = styled(Typography)({
  fontFamily: "Rubik",
  fontStyle: "italic",
  fontWeight: "700",
  fontSize: "20px",
  lineHeight: "28px",
  color: "#73DACA",
  cursor: "pointer",
});

const TechnicalClub = () => {
  const EventList = () => {
    return (
      <>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            rowGap: "12px",
          }}
        >
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            columnGap={"8px"}
          >
            <li
              style={{
                fontFamily: "Rubik",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "24px",
                lineHeight: "28px",
                color: "#565A6E",
              }}
            >
              Event 1
            </li>
            <Typography
              fontFamily="Rubik"
              fontStyle="normal"
              fontWeight={700}
              fontSize="20px"
              color="#565A6E"
            >
              DD/MM/YYYY
            </Typography>
          </Stack>
          <Typography
            fontFamily="Rubik"
            fontStyle="italic"
            fontWeight={700}
            fontSize="16px"
            lineHeight="28px"
            color="#565A6E"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Box>
      </>
    );
  };

  return (
    <>
      <Box className={clubStyles.bgtop} sx={{ height: "670px", mt: "-50px" }}>
        <Box
          sx={{
            float: "right",
            mt: "30px",
            mr: "50px",
          }}
        >
          <BasicMenu />
        </Box>
        <Stack
          mt={20}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          pl={"150px"}
          pr={"120px"}
          columnGap={"25px"}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              rowGap: "30px",
            }}
          >
            <Typography
              fontFamily="Rubik"
              fontStyle="normal"
              fontWeight={700}
              fontSize="80px"
              alignItems="center"
              color="#343B58"
            >
              # AIML
            </Typography>
            <Stack direction={"row"} justifyContent={"center"} columnGap="24px">
              <Box
                sx={{
                  width: "262px",
                  height: "258px",
                }}
              >
                <Image
                  src={AimlLogo}
                  width="262px"
                  height="258px"
                  alt=""
                  style={{
                    border: "2px solid #C0CAF5",
                    borderRadius: "24px",
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "24px",
                }}
              >
                <Box
                  sx={{
                    width: "261px",
                    height: "106px",
                    border: "1px solid #C0CAF5",
                    borderRadius: "24px",
                    p: "10px 14px 12px 20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    fontFamily="Rubik"
                    fontStyle="italic"
                    fontWeight={700}
                    fontSize="20px"
                    lineHeight="28px"
                    color="#565A6E"
                  >
                    Artificial Intelligence and Machine Learning{" "}
                  </Typography>
                </Box>
                <Stack direction={"row"} columnGap={"24px"}>
                  <Box
                    sx={{
                      width: "166px",
                      height: "128px",
                      border: "1px solid #73DACA",
                      borderRadius: "24px",
                      p: "8px 18px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      rowGap: "8px",
                    }}
                  >
                    <Link href={"#"}>
                      <StyledLink>{"> Youtube"}</StyledLink>
                    </Link>
                    <Link href={"#"}>
                      <StyledLink>{"> Facebook"}</StyledLink>
                    </Link>
                    <Link href={"#"}>
                      <StyledLink>{"> Instagram"}</StyledLink>
                    </Link>
                  </Box>
                  <Stack direction={"column"} rowGap={"32px"}>
                    <Box
                      sx={{
                        width: "72px",
                        height: "48px",
                        border: "1px solid #73DACA",
                        borderRadius: "24px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                    >
                      <Image
                        src={iconMail}
                        width={"27px"}
                        height={"22px"}
                        alt=""
                      />
                    </Box>
                    <Box
                      sx={{
                        width: "72px",
                        height: "48px",
                        border: "1px solid #73DACA",
                        borderRadius: "24px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                    >
                      <Image
                        src={iconCall}
                        width={"27px"}
                        height={"22px"}
                        alt=""
                      />
                    </Box>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Box>
          <Box
            sx={{
              width: "548px",
              height: "380px",
              border: "1px solid #C0CAF5",
              borderRadius: "24px",
              py: "26px",
              pl: "28px",
              pr: "44px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              rowGap: "34px",
            }}
          >
            <Typography
              fontFamily="Rubik"
              fontStyle="normal"
              fontWeight={700}
              fontSize="32px"
              color="#565A6E"
              width={400}
            >
              Upcoming Events
            </Typography>
            <EventList />
            <EventList />
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default TechnicalClub;
