import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Image from "next/image";
import sac_branding from "../../assets/sac_branding.svg";
import sac_branding_mob from "../../assets/sac_brancing_mob.png"
import Typography from "@mui/material/Typography";
import Link from "next/link";
import LinkedInIcon from "../../assets/icon_linkedin.svg";
import TwitterIcon from "../../assets/icon_twitter.svg";
import FacebookIcon from "../../assets/icon_facebook.svg";
import InstagramIcon from "../../assets/icon_instagram.svg";
import { useWindowSize } from "../../WindowSize";
import { Divider } from "@mui/material";


const Footer = () => {
  
  let MinSize:(number|any)=useWindowSize().width;

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
              display: `${ MinSize<=900?"":"flex"}`,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              px: "44px",
              py: "19px",
              textAlign: `${ MinSize<=900?"center":""}`,
            }}
          >
            <Image
              src={MinSize<=900?sac_branding_mob:sac_branding}
              alt=""
              height={MinSize<=900?"200px":"186px"}
              width="357px"
              objectFit="contain"
              />
            {
           MinSize<=900? 
           <Typography
              variant="body1"
              fontFamily={"Lato"}
              fontWeight={400}
              lineHeight={"36px"}
              textAlign="center"
              fontSize="15px"
            >
              Student Activity Center
            </Typography>:""
            
            }
           {
           MinSize<=900? 
           <Box sx={{width:"90%",margin:"25px auto"}}>
           <Divider/>
          </Box>:null
          }
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                gap: `${ MinSize<=900?"":"0 143px"}`,

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
          {MinSize<=900? <Box sx={{width:"80%",margin:"20px auto"}}>
        <Divider/>
        </Box>:null}
          <Box
            sx={{
              display: "flex",
              justifyContent:`${ MinSize<=900? "space-around": "space-between"}`,
              alignItems: "center",
              pb: `${ MinSize<=900?"":"28px"}`,
              pl: `${ MinSize<=900?"":"29px"}`,
              pr: `${ MinSize<=900?"":"155px"}`,
            }}
            >
           {
             MinSize>=900? 
           <Typography
           variant="body1"
           fontFamily={"Lato"}
           fontWeight={400}
           lineHeight={"36px"}
            >
              Student Activity Center
            </Typography>:""
            }
            <Box>
              <Typography
                variant="body1"
                fontFamily={"Playfair Display"}
                fontWeight={400}
                lineHeight={"36px"}
                color={"#1E293B"}
                sx={{textAlign:`${ MinSize<=900?"center":""}`,mb:`${ MinSize<=900?"10px":""}`}}
              >
                Socials
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "0 20px",
                  mx:"auto"
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
       {MinSize<=900? <Box sx={{width:"80%",margin:"25px auto"}}>
        <Divider/>
        </Box>:null}
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
            sx={{
              pl:`${MinSize<=900?"25px":""}`,
              pr:`${MinSize<=900?"25px":""}`,
              lineHeight:`${MinSize<=900?"36px":""}`,
              mt:`${MinSize<=900?"15px":""}`
            }}
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
            sx={{
              pl:`${MinSize<=900?"25px":""}`,
              pr:`${MinSize<=900?"25px":""}`,
              lineHeight:`${MinSize<=900?"36px":""}`,
              mt:`${MinSize<=900?"15px":""}`
            }}
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
