import Image from "next/image";
import AtharvLogo from "../../assets/sports_icons/atharv_logo.png";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { itemData } from "../club/sports/SportsGalleryData";
import swipe from "../../assets/icon/icon_arrow_longBlack.svg";
import Link from "next/link";

const SportsOverview = () => {
  let flag = 1;
  const handler = () => {
    flag = 0;
  };

  return (
    <>
      <Stack
        direction={"row"}
        justifyContent="space-between"
        mx="auto"
        alignItems={"center"}
        height="450px"
        px="50px"
        mt="30px"
      >
        <Box height="450px">
          <Image
            src={AtharvLogo}
            height="280px"
            width="280px"
            alt="Atharv_IIITNR"
            objectFit="contain"
          />
        </Box>
        <Stack width="70%" alignItems="flex-end" height="390px" mt="20px">
          <Typography
            fontFamily="Rubik"
            fontStyle="normal"
            fontWeight={400}
            fontSize={"80px"}
            textAlign="right"
            color="#000000"
          >
            SPORTS CLUB
          </Typography>
          <Typography
            fontFamily="Lato"
            fontStyle={"normal"}
            fontWeight={700}
            fontSize={"24px"}
            lineHeight="29px"
            textAlign="right"
            color="#000000"
            width="87%"
            mb="20px"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et
            sagittis massa.neque ante, iaculis ac massa in, maximus
          </Typography>
          <Typography
            fontFamily="Lato"
            fontStyle="normal"
            fontWeight={400}
            fontSize={"20px"}
            lineHeight="28px"
            textAlign="right"
            color="#6B7280"
            width="70%"
          >
            Atharv is the sports club of IIIT-NR. It conducts all the sports and
            eSports related events and competitions, such as Basketball League,
            CS:GO tournaments in the college. The annual Intra-Sports Fest,
            titled <q>Aarambh</q> is conducted by our club.
          </Typography>
        </Stack>
      </Stack>
      <Stack direction="row" maxWidth="100%" height="450px">
        <ImageList
          variant="woven"
          sx={{
            gridAutoFlow: "column",
            gridTemplateColumns: "repeat(auto-fill,minmax(30%,1fr))",
            gridAutoColumns: "minmax(34%, 1fr)",
          }}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              {flag ? (
                <>
                  <Box width="100%" height="100%" py="50%">
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "300px",
                        columnGap: "12px",
                      }}
                    >
                      <Image src={swipe} alt="" />
                      <Typography
                        fontFamily="Lato"
                        fontStyle="normal"
                        fontWeight="700"
                        fontSize="20px"
                        lineHeight="28px"
                        textAlign="center"
                        color="#000000"
                      >
                        swipe
                      </Typography>
                    </Box>
                  </Box>
                  {handler()}
                </>
              ) : (
                <Image
                  src={`${item.img}`}
                  alt={item.title}
                  loading="lazy"
                  objectFit={"cover"}
                  width={"400px"}
                  height={"320px"}
                />
              )}
            </ImageListItem>
          ))}
        </ImageList>
      </Stack>
      <Link href="/clubs/sports">
        <Typography
          textAlign="center"
          sx={{
            textDecoration: "underline",
            fontFamily: "Lato",
            fontStyle: "italic",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "28px",
            mt: "60px",
            mb: "90px",
            cursor: "pointer",
            textUnderlineOffset: "3px",
          }}
        >
          Know more
        </Typography>
      </Link>
    </>
  );
};

export default SportsOverview;
