import { FunctionComponent } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Image from "next/image";
import sac_branding from "../../../assets/sac_iiit_logo/sac_logo_alt.png";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import Link from "next/link";
import LinkedInIcon from "../../../assets/icon/icon_linkedin.svg";
import TwitterIcon from "../../../assets/icon/icon_twitter.svg";
import FacebookIcon from "../../../assets/icon/icon_facebook.svg";
import InstagramIcon from "../../../assets/icon/icon_instagram.svg";
import logo1 from "../../../assets/footer/logo1.png";
import logo2 from "../../../assets/footer/logo2.png";

interface FooterProps {}
const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <>
      <Box
        sx={{
          boxShadow:
            "5px 5px 10px rgba(221, 221, 221, 0.2), -5px -5px 10px rgba(221, 221, 221, 0.2), 5px -5px 10px rgba(255, 255, 255, 0.9), -5px 5px 13px rgba(221, 221, 221, 0.9)",
          px: "24px",
          bottom: "0",
          right: "0",
          left: "0",
        }}
      >
        <Container>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Image
              src={sac_branding}
              alt="sac_logo"
              height="210px"
              width="210px"
              objectFit="contain"
            />
            <Typography
              variant="body1"
              fontFamily={"Playfair Display"}
              fontWeight={400}
              lineHeight={"36px"}
            >
              Student Activity Center
            </Typography>
            <Divider
              sx={{
                width: "80%",
                my: "24px",
                color: "black",
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                gap: "0 50px ",
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
                  Quick Links
                </Typography>
                <Link href={"/"}>Home</Link>
                <Link href={"/team"}>Team</Link>
                <Link href={"clubs"}>Clubs</Link>
                <Link href={"/gallery"}>Gallery</Link>
                <Link href={"events"}>Events</Link>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px 0",
                  fontSize: "16px",
                  flex: "1",
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
                <a href={logo2.src} download target={"_blank"} rel="noreferrer">
                  The SAC Logo
                </a>
                <a
                  href={"https://bit.ly/IIITNR_GP"}
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Grievance Form
                </a>
                <a
                  href={
                    "https://docs.google.com/document/d/15rKCq-n7H4Ok589xPMYibAY82XnjydwcPZM16ZBDWSE/edit?usp=share_link"
                  }
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Resource Issue Form
                </a>
                <a
                  href={
                    "https://docs.google.com/document/d/1COgFRoRAHwcpUZrhA7T5Z00ZrI-VZt1d/edit?usp=share_link&ouid=116076346421774934176&rtpof=true&sd=true"
                  }
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Leave Application Form
                </a>
                <a
                  href={
                    "https://docs.google.com/document/d/1hkHSPtazp0gqNbDiZkT13WnBBh1YCDJW/edit?usp=share_link&ouid=116076346421774934176&rtpof=true&sd=true"
                  }
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Event Proposal Form
                </a>
              </Box>
            </Box>
          </Box>
          <Divider
            sx={{
              mx: "auto",
              my: "24px",
              width: "80%",
              color: "black",
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                variant="body1"
                fontFamily={"Playfair Display"}
                fontWeight={400}
                mb={"8px"}
                textAlign={"center"}
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
        <Divider
          sx={{
            width: "80%",
            mx: "auto",
            my: "24px",
            color: "black",
          }}
        />
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
            lineHeight={"36px"}
          >
            <strong>Design and Developed by</strong>
            <a
              href={"https://linkedin.com/in/sudhanshu1309"}
              target={"_blank"}
              rel={"noreferrer"}
            >
              {" "}
              Sudhanshu Tripathi
            </a>
            , Soumya Ranjan Patnaik, and Sai Prabhat Gubbala
          </Typography>
          <Typography
            variant="body1"
            fontFamily={"Rubik"}
            fontStyle="normal"
            fontWeight={300}
            marginTop={"8px"}
            fontSize="14px"
            lineHeight={"36px"}
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
