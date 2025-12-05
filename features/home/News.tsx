import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import  Button  from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Image, { StaticImageData } from "next/image";
import { ReactNode , useState} from "react";
import { NextPage } from "next";
import newsData from "../../data/NewsData";
import { Grid } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// import { CardSim } from "lucide-react";

interface NewsProps {
  img?: StaticImageData;
  title: string;
  children: ReactNode;
  authorImg?: StaticImageData;
  author?: string;
}

const News: NextPage = () => {
  const Item = ({ img, title, children, authorImg, author }: NewsProps) => {
    return (
      <Stack
        spacing={1.2}
        sx={{
          justifyContent: "center",
          maxHeight: 600,
        }}
      >
        {img && (
          <Box
            sx={{
              height: "208px",
              width: "100%",
            }}
          >
            <Image
              src={img}
              alt=""
              height={208}
              width={262}
              objectFit="cover"

            />
          </Box>
        )}
        <Typography
          variant="title1"
          fontWeight={700}
          fontFamily={"Rubik"}
          lineHeight={"28px"}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          fontFamily={"Playfair Display"}
          fontWeight={400}
          lineHeight={"33px"}
          overflow={"hidden"}
        >
          {children}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          {authorImg && (
            <Image
              src={authorImg}
              alt="author image"
              height={40}
              width={40}
              objectFit="cover"
              style={{ borderRadius: "5px" }}
            />
          )}
          {author && (
            <Typography
              variant="body1"
              px={1}
              fontFamily={"Playfair Display"}
              fontWeight={400}
              lineHeight={"33px"}
            >
              {author}
            </Typography>
          )}
        </Box>
      </Stack>
    );
  };

  const [curr , setCurr] = useState(0);
  const len_of_news = newsData.length;


  const handlePrev = () =>{
    setCurr((curr)=> (curr-1+len_of_news)%len_of_news)
  }

  const handleNext = () =>{
    setCurr((curr)=> (curr+1+len_of_news)%len_of_news)
  }

  return (
    <>
    <Container>
              <Box sx={{ mb: { xs: "24px", md: "44px" }, overflow: "hidden" }}>
          <Typography
            variant="h1"
            fontFamily={"Playfair Display"}
            letterSpacing={{ xs: "0.2em", sm: "0.5em", md: "1em" }}
            textTransform={"uppercase"}
            fontWeight={400}
            fontSize={{ xs: "48px", sm: "64px", md: "80px" }}
            lineHeight={{ xs: "56px", sm: "72px", md: "115px" }}
            textAlign={"center"}
            sx={{ wordBreak: "keep-all" }}
          >
            <Typography variant="title1">&nbsp;</Typography>
            News
          </Typography>
        </Box>
   
    <Container sx={{ alignItems: "center", py: { xs: 3, md: 0 } }}>
      <Box sx={{
        width: "100%",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        gap: { xs: 2, md: 0 }
      }}>
        {/* Previous Button */}
        <Box sx={{
          width: { xs: "auto", md: "5%" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          order: { xs: 2, md: 1 }
        }}>
          <Button onClick={handlePrev} aria-label="Previous news">
            <ArrowBackIcon />
          </Button>
        </Box>

        {/* News Content */}
        <Box sx={{
          width: { xs: "100%", md: "90%" },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          padding: { xs: "5px", md: "5px" },
          alignItems: "center",
          justifyContent: "center",
          order: { xs: 1, md: 2 }
        }}>
          {/* Image Section */}
          <Box sx={{
            width: { xs: "100%", md: "50%" },
            padding: { xs: "10px", md: "10px" }
          }}>
            <Box sx={{
              width: "100%",
              height: { xs: 300, sm: 400, md: 500 },
              objectFit: "cover",
              borderRadius: 2,
            }}
            component="img"
            src={newsData[curr].img?.src || ""}
            alt={newsData[curr].text?.toString().substring(0, 50) || "News image"}
            />
          </Box>

          {/* Text Section */}
          <Box sx={{
            width: { xs: "100%", md: "50%" },
            padding: { xs: "10px", md: "10px" }
          }}>
            <Box sx={{
              fontSize: { xs: "1rem", sm: "1.2rem", md: "1.3rem" },
              height: { xs: "auto", md: 500 },
              padding: 2,
              overflow: "auto"
            }}>
              {newsData[curr].text}
            </Box>
            <Box sx={{
              padding: 2,
              fontSize: { xs: "1rem", md: "1.1rem" },
              display: "flex",
              justifyContent: { xs: "flex-start", md: "flex-end" },
              alignItems: "center",
              gap: 1
            }}>
              {newsData[curr].authImg && (
                <Box
                  component="img"
                  src={newsData[curr].authImg?.src || ""}
                  sx={{
                    height: 40,
                    width: 40,
                    borderRadius: "50%",
                    objectFit: "cover"
                  }}
                  alt={newsData[curr].authName || "Author"}
                />
              )}
              <Box>{newsData[curr].authName}</Box>
            </Box>
          </Box>
        </Box>

        {/* Next Button */}
        <Box sx={{
          width: { xs: "auto", md: "5%" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          order: 3
        }}>
          <Button onClick={handleNext} aria-label="Next news">
            <ArrowForwardIcon />
          </Button>
        </Box>
      </Box>
    </Container>
       </Container>
    </>
  );
};

export default News;
