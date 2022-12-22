import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Image from "next/image";
import sac_branding from "../../assets/sac_branding.svg";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import LinkedInIcon from "../../assets/icon_linkedin.svg";
import TwitterIcon from "../../assets/icon_twitter.svg";
import FacebookIcon from "../../assets/icon_facebook.svg";
import InstagramIcon from "../../assets/icon_instagram.svg";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          boxShadow:
            "5px 5px 10px rgba(221, 221, 221, 0.2), -5px -5px 10px rgba(221, 221, 221, 0.2), 5px -5px 10px rgba(255, 255, 255, 0.9), -5px 5px 13px rgba(221, 221, 221, 0.9)",
        }}
      >
        <Container maxWidth="lg" disableGutters>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              px: "44px",
              py: "19px",
            }}
          >
            <Image
              src={sac_branding}
              alt=""
              height="186px"
              width="357px"
              objectFit="contain"
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                gap: "0 143px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px 0",
                  fontSize: "16px",
                }}
              >
                <Typography
                  variant="body1"
                  fontFamily={"Playfair Display"}
                  fontWeight={400}
                  lineHeight={"36px"}
                >
                  About
                </Typography>
                <Link href={"#"}>About</Link>
                <Link href={"/team"}>Teams</Link>
                <Link href={"club"}>Clubs</Link>
                <Link href={"/gallery"}>Gallery</Link>
                <Link href={"events"}>Events</Link>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px 0",
                  fontSize: "16px",
                }}
              >
                <Typography
                  variant="body1"
                  fontFamily={"Playfair Display"}
                  fontWeight={400}
                  lineHeight={"36px"}
                >
                  Useful links
                </Typography>
                <Link href={"#"}>Dummy link</Link>
                <Link href={"#"}>Dummy link</Link>
                <Link href={"#"}>Dummy link</Link>
                <Link href={"#"}>Dummy link</Link>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              pb: "28px",
              pl: "29px",
              pr: "155px",
            }}
          >
            <Typography
              variant="body1"
              fontFamily={"Lato"}
              fontWeight={400}
              lineHeight={"36px"}
            >
              Student Activity Center
            </Typography>
            <Box>
              <Typography
                variant="body1"
                fontFamily={"Playfair Display"}
                fontWeight={400}
                lineHeight={"36px"}
                color={"#1E293B"}
              >
                Socials
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "0 20px",
                }}
              >
                <a
                  href={"https://twitter.com/IIITNayaRaipur"}
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <Image
                    src={TwitterIcon}
                    alt={"Twitter"}
                    height="22px"
                    width="28px"
                    objectFit="contain"
                  />
                </a>
                <a
                  href={"https://www.facebook.com/IIITNROfficial/"}
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <Image
                    src={FacebookIcon}
                    alt={"Facebook"}
                    height="22px"
                    width="28px"
                    objectFit="contain"
                  />
                </a>
                <a
                  href={"https://www.instagram.com/sac_iiitnr/"}
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <Image
                    src={InstagramIcon}
                    alt={"Instagram"}
                    height="22px"
                    width="28px"
                    objectFit="contain"
                  />
                </a>
                <a
                  href={"https://www.linkedin.com/school/iiitnrofficial/"}
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <Image
                    src={LinkedInIcon}
                    alt={"LinkedIn"}
                    height="22px"
                    width="28px"
                    objectFit="contain"
                  />
                </a>
              </Box>
            </Box>
          </Box>
        </Container>
        <Box
          py="10px"
          sx={{
            textAlign: "center",
            backgroundColor: "#F8FAFC",
          }}
        >
          <Typography
            variant="body1"
            fontFamily={"Rubik"}
            fontStyle="normal"
            fontWeight={400}
            fontSize="14px"
            color={"#000000"}
          >
            <strong>Design and Developed by</strong> Sudhanshu Tripathi, Soumya
            Ranjan Patnaik, and Sai Prabhat Gubbala
          </Typography>
          <Typography
            variant="body1"
            fontFamily={"Rubik"}
            fontStyle="normal"
            fontWeight={300}
            fontSize="14px"
            color={"#475569"}
          >
            Copyright &copy; Student Activity Center, International Institute of
            Information Technology Naya Raipur, 2023.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
