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
              <Box sx={{mb:"44px"}}>
          <Typography
            variant="h1"
            fontFamily={"Playfair Display"}
            letterSpacing={"1em"}
            textTransform={"uppercase"}
            fontWeight={400}
            lineHeight={"115px"}
            textAlign={"center"}
          >
            <Typography component="span" variant="title1">&nbsp;</Typography>
            News
          </Typography>
        </Box>
   
    <Container sx={{alignItems:"center" , height:500}}>
      <Box sx={{ width:"100%" , display:"flex" , height:"100%" }}>
        <Box sx={{
          width:"5%",
          display:"flex",
          alignItems:"center",
          justifyContent:"center"
        }} 

        ><Button onClick={handlePrev}><ArrowBackIcon></ArrowBackIcon></Button>
        </Box>


        <Box sx={{width:"90%" , display:"flex" , padding:"5px" , alignItems:"center",
          justifyContent:"center"}}
        >
          <Box sx={{width:"50%" , padding:"10px" ,}}>
            <Box sx={{
                    width: "100%",     
                    height: 500,       
                    objectFit: "cover",
                    borderRadius: 2,   
                  }}
                  component="img" src=
          {newsData[curr].img?.src || ""}>
            </Box>
          </Box>
          <Box sx={{width:"50%" , padding:"10px"}}>
            <Box sx={{maxheight:"80%", fontSize:"1.3rem" , height: 500 , padding:2}}>{newsData[curr].text}</Box>
            <Box sx={{minHeight:"20%" , padding:2 , fontSize:"1.1rem" , display:"flex"}}>
              <Box sx={{minWidth:"70%"}}></Box>
              <Box sx={{display:"flex" , alignItems:"center" }}>
                  <Box component="img" src={newsData[curr].authImg?.src || ""} sx={{height:40 , width:40, borderRadius:10 , marginRight:1 }}></Box>
                  <Box>{newsData[curr].authName}</Box>
              </Box>
            </Box>
          </Box>
        </Box>


        <Box sx={{width:"5%" ,display:"flex" ,alignItems:"center", justifyContent:"center"}}>
          <Button onClick={handleNext}><ArrowForwardIcon></ArrowForwardIcon></Button>
        </Box>


      </Box>
      </Container>
       </Container>
    </>
  );
};

export default News;
