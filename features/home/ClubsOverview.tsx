import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ReactNode, useState } from "react";
import Zoom from "@mui/material/Zoom";
import Image, { StaticImageData } from "next/image";
import artSports from "../../assets/static/art_sports.png";
import artCultural from "../../assets/static/art_cultural.png";
import artTechnical from "../../assets/static/art_technical.png";
import NSS from "../../assets/static/NSS.png";
import media from "../../assets/static/media.jpg";

interface Props {
  title: string;
  children: ReactNode;
  img: StaticImageData;
}

const ClubsOverview = () => {
  const [isTechHovered, setIsTechHovered] = useState(false);
  const [isCultHovered, setIsCultHovered] = useState(false);
  const [isSportHovered, setIsSportHovered] = useState(false);
  const [isMediaHovered, setIsMediaHovered] = useState(false);
  const [isNssHovered, setIsNssHovered] = useState(false);

  const OverviewData = ({ title, children, img }: Props) => {
    return (
      <Zoom
        enter
        exit
        in={true}
        timeout={{ enter: 400, exit: 200 }}
        easing={"ease-in-out"}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: { xs: 3, md: 0 },
          }}
        >
          <Box sx={{ maxWidth: { xs: "100%", md: 650 } }}>
            <Typography
              variant="h3"
              fontFamily={"Lato"}
              fontWeight={600}
              fontSize={{ xs: "28px", sm: "34px", md: "41px" }}
              lineHeight={{ xs: "34px", sm: "40px", md: "49px" }}
              fontStyle={"normal"}
            >
              {title}
            </Typography>
            <Typography
              fontFamily={"Lato"}
              fontStyle={"normal"}
              fontWeight={400}
              fontSize={"1rem"}
              lineHeight={"20px"}
              mt={{ xs: 2, md: 4 }}
              maxWidth={{ xs: "100%", md: 500 }}
            >
              {children}
            </Typography>
          </Box>
          <Box
            sx={{
              width: { xs: "100%", md: "auto" },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              src={img}
              alt="Club category illustration"
              height={312}
              width={292}
              style={{ maxWidth: "100%", height: "auto" }}
              objectFit="contain"
            />
          </Box>
        </Box>
      </Zoom>
    );
  };

  return (
    <>
      <Box
        sx={{
          mt: 7,
        }}
      >
        <Box
          onMouseEnter={() => {
            setIsTechHovered(true);
          }}
          onMouseLeave={() => {
            setIsTechHovered(false);
          }}
        >
          <Divider textAlign={"left"}>
            <Typography
              variant={"h1"}
              fontWeight={isTechHovered ? 500 : 100}
              fontSize={{
                xs: isTechHovered
                  ? "40px"
                  : isCultHovered ||
                    isSportHovered ||
                    isMediaHovered ||
                    isNssHovered
                    ? "24px"
                    : "36px",
                sm: isTechHovered
                  ? "70px"
                  : isCultHovered ||
                    isSportHovered ||
                    isMediaHovered ||
                    isNssHovered
                    ? "32px"
                    : "60px",
                md: isTechHovered
                  ? "150px"
                  : isCultHovered ||
                    isSportHovered ||
                    isMediaHovered ||
                    isNssHovered
                    ? "55px"
                    : "133px",
              }}
              fontFamily={"Work Sans"}
              lineHeight={{
                xs: isCultHovered ||
                  isSportHovered ||
                  isMediaHovered ||
                  isNssHovered
                  ? "30px"
                  : "48px",
                md: isCultHovered ||
                  isSportHovered ||
                  isMediaHovered ||
                  isNssHovered
                  ? "65px"
                  : "156px",
              }}
              textAlign={"center"}
              textTransform={"uppercase"}
              fontStyle={"normal"}
              sx={{
                transition: "all ease-in-out 400ms",
              }}
            >
              Technical
            </Typography>
          </Divider>
          {/* Hidden Element; Display on Hover */}
          {isTechHovered && (
            <Box mx={{ xs: 2, sm: 4, md: 8 }}>
              <OverviewData
                title="Coding, Hacking, Problem Solving, Machine Learning, Circuits"
                img={artTechnical}
              >
                The technical clubs under SAC promote hands-on and cooperative
                learning and also engages students in problem-solving and
                higher-order thinking. They conduct various events and provide
                networking opportunities through hackathons, contests,
                workshops, seminars, conventions, and teaching sessions.
              </OverviewData>
            </Box>
          )}
        </Box>
        <Box
          sx={{
            mt:
              isSportHovered ||
                isTechHovered ||
                isCultHovered ||
                isMediaHovered ||
                isNssHovered
                ? 3
                : 11,
          }}
          onMouseEnter={() => {
            setIsCultHovered(true);
          }}
          onMouseLeave={() => {
            setIsCultHovered(false);
          }}
        >
          <Divider
            textAlign={
              isTechHovered ? "right" : isSportHovered ? "left" : "center"
            }
          >
            <Typography
              variant={"h1"}
              fontWeight={isCultHovered ? 500 : 100}
              fontSize={{
                xs: isCultHovered
                  ? "40px"
                  : isTechHovered ||
                    isSportHovered ||
                    isMediaHovered ||
                    isNssHovered
                    ? "24px"
                    : "36px",
                sm: isCultHovered
                  ? "70px"
                  : isTechHovered ||
                    isSportHovered ||
                    isMediaHovered ||
                    isNssHovered
                    ? "32px"
                    : "60px",
                md: isCultHovered
                  ? "150px"
                  : isTechHovered ||
                    isSportHovered ||
                    isMediaHovered ||
                    isNssHovered
                    ? "55px"
                    : "133px",
              }}
              fontFamily={"Work Sans"}
              lineHeight={{
                xs: isTechHovered ||
                  isSportHovered ||
                  isMediaHovered ||
                  isNssHovered
                  ? "30px"
                  : "48px",
                md: isTechHovered ||
                  isSportHovered ||
                  isMediaHovered ||
                  isNssHovered
                  ? "65px"
                  : "156px",
              }}
              textAlign={"center"}
              textTransform={"uppercase"}
              fontStyle={"normal"}
              sx={{
                transition: "all ease-in-out 400ms",
              }}
            >
              Cultural
            </Typography>
          </Divider>
          {/* Hidden Element; Display on Hover */}
          {isCultHovered && (
            <Box mx={{ xs: 2, sm: 4, md: 8 }}>
              <OverviewData
                title="Music, Art, Dance, Photography, Debate, Discussions, Poetry and Drama"
                img={artCultural}
              >
                Cultural clubs under SAC IIIT Naya Raipur, provide a way for
                students to explore and engage in activities outside their
                academic studies. These clubs can foster a sense of community
                and belonging, which can be especially important for students in
                technical fields who may spend much time working independently.
              </OverviewData>
            </Box>
          )}
        </Box>
        <Box
          sx={{
            mt:
              isCultHovered || isTechHovered || isMediaHovered || isNssHovered
                ? 3
                : 11,
          }}
          onMouseEnter={() => {
            setIsSportHovered(true);
          }}
          onMouseLeave={() => {
            setIsSportHovered(false);
          }}
        >
          <Divider textAlign="right">
            <Typography
              variant={"h1"}
              fontWeight={isSportHovered ? 500 : 100}
              fontSize={{
                xs: isSportHovered
                  ? "40px"
                  : isTechHovered ||
                    isCultHovered ||
                    isMediaHovered ||
                    isNssHovered
                    ? "24px"
                    : "36px",
                sm: isSportHovered
                  ? "70px"
                  : isTechHovered ||
                    isCultHovered ||
                    isMediaHovered ||
                    isNssHovered
                    ? "32px"
                    : "60px",
                md: isSportHovered
                  ? "150px"
                  : isTechHovered ||
                    isCultHovered ||
                    isMediaHovered ||
                    isNssHovered
                    ? "55px"
                    : "133px",
              }}
              fontFamily={"Work Sans"}
              lineHeight={{
                xs: isTechHovered || isCultHovered || isMediaHovered || isNssHovered
                  ? "30px"
                  : "48px",
                md: isTechHovered || isCultHovered || isMediaHovered || isNssHovered
                  ? "65px"
                  : "156px",
              }}
              textAlign={"center"}
              textTransform={"uppercase"}
              fontStyle={"normal"}
              sx={{
                transition: "all ease-in-out 400ms",
              }}
            >
              Sports
            </Typography>
          </Divider>
          {/* Hidden Element; Display on Hover */}
          {isSportHovered && (
            <Box mx={{ xs: 2, sm: 4, md: 8 }}>
              <OverviewData
                title="Passion, Commitment, Dedication, Enthusiasm, Team spirit"
                img={artSports}
              >
                Sports clubs provide a way for students to connect with others
                who share their interests and build a sense of community within
                the institute. Being part of a team can help students develop
                valuable leadership, communication, and teamwork skills.
              </OverviewData>
            </Box>
          )}
        </Box>
        <a href="https://nss.iiitnr.ac.in:1101/">
          <Box
            sx={{
              mt:
                isSportHovered ||
                  isTechHovered ||
                  isCultHovered ||
                  isMediaHovered
                  ? 3
                  : 11,
            }}
            onMouseEnter={() => {
              setIsMediaHovered(true);
            }}
            onMouseLeave={() => {
              setIsMediaHovered(false);
            }}
          >
            <Divider
              textAlign={
                isMediaHovered
                  ? "right"
                  : isTechHovered ||
                    isSportHovered ||
                    isCultHovered ||
                    isNssHovered
                    ? "left"
                    : "center"
              }
            >
              <Typography
                variant={"h1"}
                fontWeight={isMediaHovered ? 500 : 100}
                fontSize={{
                  xs: isMediaHovered
                    ? "40px"
                    : isTechHovered ||
                      isSportHovered ||
                      isCultHovered ||
                      isNssHovered
                      ? "24px"
                      : "36px",
                  sm: isMediaHovered
                    ? "70px"
                    : isTechHovered ||
                      isSportHovered ||
                      isCultHovered ||
                      isNssHovered
                      ? "32px"
                      : "60px",
                  md: isMediaHovered
                    ? "150px"
                    : isTechHovered ||
                      isSportHovered ||
                      isCultHovered ||
                      isNssHovered
                      ? "55px"
                      : "133px",
                }}
                fontFamily={"Work Sans"}
                lineHeight={{
                  xs: isTechHovered ||
                    isSportHovered ||
                    isCultHovered ||
                    isNssHovered
                    ? "30px"
                    : "48px",
                  md: isTechHovered ||
                    isSportHovered ||
                    isCultHovered ||
                    isNssHovered
                    ? "65px"
                    : "156px",
                }}
                textAlign={"center"}
                textTransform={"uppercase"}
                fontStyle={"normal"}
                sx={{
                  transition: "all ease-in-out 400ms",
                }}
              >
                NSS
              </Typography>
            </Divider>
            {/* Hidden Element; Display on Hover */}
            {isMediaHovered && (
              <Box mx={{ xs: 2, sm: 4, md: 8 }}>
                <OverviewData title="'Not Me But You'" img={NSS}>
                  The NSS wing of IIIT Naya Raipur was initiated in 2019 with a
                  vision of creating community awareness among the students and
                  developing a sense of social and civic responsibility among
                  themselves. It encourages its volunteers to utilize their
                  knowledge in generating practical solutions to individual and
                  community problems. The volunteers kept in mind the motto of
                  Not Me But You.
                </OverviewData>
              </Box>
            )}
          </Box>
        </a>
        <Box
          sx={{
            mt:
              isSportHovered || isTechHovered || isCultHovered || isMediaHovered
                ? 3
                : 11,
          }}
          onMouseEnter={() => {
            setIsNssHovered(true);
          }}
          onMouseLeave={() => {
            setIsNssHovered(false);
          }}
        >
          <Divider textAlign={"left"}>
            <Typography
              variant={"h1"}
              fontWeight={isNssHovered ? 500 : 100}
              fontSize={{
                xs: isNssHovered
                  ? "40px"
                  : isTechHovered ||
                    isSportHovered ||
                    isCultHovered ||
                    isMediaHovered
                    ? "24px"
                    : "36px",
                sm: isNssHovered
                  ? "70px"
                  : isTechHovered ||
                    isSportHovered ||
                    isCultHovered ||
                    isMediaHovered
                    ? "32px"
                    : "60px",
                md: isNssHovered
                  ? "150px"
                  : isTechHovered ||
                    isSportHovered ||
                    isCultHovered ||
                    isMediaHovered
                    ? "55px"
                    : "133px",
              }}
              fontFamily={"Work Sans"}
              lineHeight={{
                xs: isTechHovered ||
                  isSportHovered ||
                  isCultHovered ||
                  isMediaHovered
                  ? "30px"
                  : "48px",
                md: isTechHovered ||
                  isSportHovered ||
                  isCultHovered ||
                  isMediaHovered
                  ? "65px"
                  : "156px",
              }}
              textAlign={"center"}
              textTransform={"uppercase"}
              fontStyle={"normal"}
              sx={{
                transition: "all ease-in-out 400ms",
              }}
            >
              Media & IT Cell
            </Typography>
          </Divider>
          {/* Hidden Element; Display on Hover */}
          {isNssHovered && (
            <Box mx={{ xs: 2, sm: 4, md: 8 }}>
              <OverviewData
                title="Photography, Videography, Design, Socail Media, PR"
                img={media}
              >
                The Media & IT Cell under SAC promote skills of photography,
                videography and designing. They conduct various workshops to
                improve one's skills in the field of digital arts and content.
                This Cell is also responsible for handling all the social
                platforms and website of SAC
              </OverviewData>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default ClubsOverview;
