import Box from "@mui/material/Box";
import BasicMenu from "./BasicMenu";
import Stack from "@mui/material/Stack";
import Image, { StaticImageData } from "next/image";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { styled } from "@mui/material";

interface Props {
  name: string;
  desc: string;
  bgTop: StaticImageData;
  logo: StaticImageData;
  color: string;
}

const TechnicalClub = ({ name, desc, bgTop, logo, color }: Props) => {
  const StyledLink = styled(Typography)({
    fontFamily: "Rubik",
    fontStyle: "italic",
    fontWeight: "700",
    fontSize: "20px",
    lineHeight: "28px",
    color: color,
    cursor: "pointer",
  });

  const IconMail = () => {
    return (
      <svg
        width="27"
        height="22"
        viewBox="0 0 27 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.3 0H2.7C1.215 0 0.0135 1.2375 0.0135 2.75L0 19.25C0 20.7625 1.215 22 2.7 22H24.3C25.785 22 27 20.7625 27 19.25V2.75C27 1.2375 25.785 0 24.3 0ZM24.3 5.5L13.5 12.375L2.7 5.5V2.75L13.5 9.625L24.3 2.75V5.5Z"
          fill={color}
        />
      </svg>
    );
  };

  const IconCall = () => {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.6396 21.2374C17.2382 21.2374 14.9 20.7001 12.625 19.6254C10.35 18.5515 8.33681 17.1345 6.58542 15.3744C4.83403 13.6136 3.42136 11.6001 2.34742 9.33375C1.27275 7.06814 0.73542 4.73464 0.73542 2.33325C0.73542 1.86381 0.893587 1.47561 1.20992 1.16867C1.52553 0.861724 1.90903 0.708252 2.36042 0.708252H6.74792C7.23542 0.708252 7.63734 0.834641 7.95367 1.08742C8.26928 1.3402 8.48125 1.70131 8.58959 2.17075L9.26667 5.63742C9.35695 6.0527 9.35695 6.41814 9.26667 6.73375C9.17639 7.05009 8.99584 7.33464 8.725 7.58742L6.01667 10.1062C6.68473 11.2256 7.51095 12.2772 8.49534 13.2608C9.479 14.2452 10.5486 15.0895 11.7042 15.7937L14.3583 13.1937C14.6472 12.9228 14.9722 12.7376 15.3333 12.6379C15.6944 12.539 16.0736 12.5256 16.4708 12.5978L19.8021 13.3291C20.2715 13.4374 20.6326 13.6404 20.8854 13.9379C21.1382 14.2362 21.2646 14.6201 21.2646 15.0895V19.5853C21.2646 20.0548 21.1068 20.4473 20.7912 20.7629C20.4748 21.0793 20.091 21.2374 19.6396 21.2374Z"
          fill={color}
        />
      </svg>
    );
  };

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
      <Box
        sx={{
          height: "670px",
          mt: "-50px",
          background: `url(${bgTop.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
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
              # {name}
            </Typography>
            <Stack direction={"row"} justifyContent={"center"} columnGap="24px">
              <Box
                sx={{
                  width: "262px",
                  height: "258px",
                }}
              >
                <Image
                  src={logo}
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
                    {desc}
                  </Typography>
                </Box>
                <Stack direction={"row"} columnGap={"24px"}>
                  <Box
                    sx={{
                      width: "166px",
                      height: "128px",
                      border: `1px solid ${color}`,
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
                        border: `1px solid ${color}`,
                        borderRadius: "24px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                    >
                      <IconMail />
                    </Box>
                    <Box
                      sx={{
                        width: "72px",
                        height: "48px",
                        border: `1px solid ${color}`,
                        borderRadius: "24px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                    >
                      <IconCall />
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
