import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ReactNode, useState } from "react";
import Zoom from "@mui/material/Zoom";
import Image, { StaticImageData } from "next/image";
import techSvg from "../../../assets/test/Frame.png";

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
                transition: "all ease-in-out",
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
                img={techSvg}
              >
                SAC is a student body established in the year 2018 which aims to
                support, develop and promote student activities at IIIT Naya
                Raipur
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
            >
              Cultural
            </Typography>
          </Divider>
          {/* Hidden Element; Display on Hover */}
          {isCultHovered && (
            <Box mx={8}>
              <OverviewData
                title="Coding, Hacking, Problem Solving, Machine Learning, Circuits"
                img={techSvg}
              >
                SAC is a student body established in the year 2018 which aims to
                support, develop and promote student activities at IIIT Naya
                Raipur
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
            >
              Sports
            </Typography>
          </Divider>
          {/* Hidden Element; Display on Hover */}
          {isSportHovered && (
            <Box mx={8}>
              <OverviewData
                title="Coding, Hacking, Problem Solving, Machine Learning, Circuits"
                img={techSvg}
              >
                SAC is a student body established in the year 2018 which aims to
                support, develop and promote student activities at IIIT Naya
                Raipur
              </OverviewData>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default ClubsOverview;
