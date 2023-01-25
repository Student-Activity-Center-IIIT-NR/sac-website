import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ReactNode, useState } from "react";
import Zoom from "@mui/material/Zoom";
import Image, { StaticImageData } from "next/image";
import artSports from "../../assets/static/art_sports.png";
import artCultural from "../../assets/static/art_cultural.png";
import artTechnical from "../../assets/static/art_technical.png";

interface Props {
  title: string;
  children: ReactNode;
  img: StaticImageData;
}

const ClubsOverview = () => {
  const [isTechHovered, setIsTechHovered] = useState(false);
  const [isCultHovered, setIsCultHovered] = useState(false);
  const [isSportHovered, setIsSportHovered] = useState(false);

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
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ maxWidth: 650 }}>
            <Typography
              variant="h3"
              fontFamily={"Lato"}
              fontWeight={600}
              fontSize={"41px"}
              lineHeight={"49px"}
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
              mt={4}
              maxWidth={500}
            >
              {children}
            </Typography>
          </Box>
          <Image
            src={img}
            alt="techSvg"
            height="312px"
            width="292px"
            objectFit="contain"
          />
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
              fontSize={
                isTechHovered
                  ? "150px"
                  : isCultHovered || isSportHovered
                  ? "55px"
                  : "133px"
              }
              fontFamily={"Work Sans"}
              lineHeight={isCultHovered || isSportHovered ? "65px" : "156px"}
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
            <Box mx={8}>
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
            mt: isSportHovered || isTechHovered || isCultHovered ? 3 : 11,
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
              fontSize={
                isCultHovered
                  ? "150px"
                  : isTechHovered || isSportHovered
                  ? "55px"
                  : "133px"
              }
              fontFamily={"Work Sans"}
              lineHeight={isTechHovered || isSportHovered ? "65px" : "156px"}
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
            <Box mx={8}>
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
            mt: isCultHovered || isTechHovered ? 3 : 11,
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
              fontSize={
                isSportHovered
                  ? "150px"
                  : isTechHovered || isCultHovered
                  ? "55px"
                  : "133px"
              }
              fontFamily={"Work Sans"}
              lineHeight={isTechHovered || isCultHovered ? "65px" : "156px"}
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
            <Box mx={8}>
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
      </Box>
    </>
  );
};

export default ClubsOverview;
