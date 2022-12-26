import React from 'react'
import Image from "next/image";
import AtharvLogo from "../../assets/atharv_logo.png";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { itemData } from "../club/sports/SportsGalleryData";
import Swipe from "../../assets/icon_arrow_longBlack.svg";



const SportsOverview = () => {

  let flag=1;
  const handler=()=>{flag=0;}

  return (
<Box>
     <Stack
       direction={"row"}
       justifyContent="space-between"
       mx="auto"
       alignItems={"center"}
       maxWidth="100%"
       height="450px"
       px="50px"
       mt="30px"
     >
       <Box
       height="450px"
       >
      <Image
        src={AtharvLogo}
        height="280px"
        width="280px"
        alt="Atharv_IIITNR"
        objectFit="contain"
      />
       </Box>
      <Stack width="70%"  alignItems="flex-end" height="390px" mt="20px">
        <Typography
          fontFamily="Rubik"
          fontStyle="normal"
          fontWeight={400}
          fontSize={"80px"}
          textAlign="right"
          color="#000000"
          height="110px"
        >
          SPORTS CLUB
        </Typography>
        <Typography
          fontFamily="Lato"
          fontWeight={600}
          fontSize={"24px"}
          lineHeight="29px"
          textAlign="right"
          color="#000000"
          width="87%"
          mb="20px"
          >
         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Nullam et sagittis massa.neque ante, 
         iaculis ac massa in, maximus 
        </Typography>
        <Typography
           fontFamily="Lato"
           fontStyle="Bold"
           fontSize={"20px"}
           lineHeight="28px"
           textAlign="right"
           color="#6B7280"
           width="70%"
        >
         Atharv is the sports club of IIIT-NR. It conducts all the sports 
         and eSports related events and competitions, such as Basketball League,
         CS:GO tournaments in the college. The annual Intra-Sports Fest,
         titled "Aarambh" is conducted by our club.
        </Typography>
      </Stack>
    </Stack>
     <Stack direction="row" maxWidth="100%" height="450px">
    <ImageList
       variant='woven'
      sx={{
        gridAutoFlow: "column",
        gridTemplateColumns: "repeat(auto-fill,minmax(30%,1fr))",
        gridAutoColumns: "minmax(34%, 1fr)"
    }}
    >   
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
              {flag ?
              <>
       <Box width="100%" height="100%" py="50%" >
            <Typography 
                sx={{
                    fontSize:"35px",
                    fontFamily:"Lato",
                    textAlign:"center",
                    width:"300px",
                }}
            >
            <Image src={Swipe}/>
            &nbsp;
                swipe
            </Typography>
       </Box>   
            {handler()}
              </>
              :
            <Image
            src={`${item.img}?w=161&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
              objectFit={"cover"}
              width={"400px"}
              height={"320px"}
              />
            }
              </ImageListItem>
        ))}
      </ImageList>
    </Stack>   
    <Typography 
    textAlign="center"
    sx={{
        textDecoration:"underline",
        fontFamily:"Lato",
        fontStyle:"italic",
        fontSize:"16px",
        lineHeight:"28px",
        mt:"60px",
        mb:"90px"

    }}
    >
        know more
    </Typography>
</Box>
  )
}

export default SportsOverview
