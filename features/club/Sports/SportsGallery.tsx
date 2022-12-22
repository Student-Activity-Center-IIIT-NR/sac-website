import React ,{useState,useEffect}from 'react'
import {Stack, Box, Typography} from "@mui/material";
import ImageGrid from './ImageGrid';
import Image from 'next/image';
import iconArrow1 from "../../../assets/icon_arrow1.svg"
import iconArrow2 from "../../../assets/icon_arrow2.svg"
import Data from './SportsGalleryData';



const SportsGallery = () => {

  const ArambhEsc = 2018;
  const [year, setYear] = useState(new Date().getFullYear());
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const handleOpen=()=>{setIsHovered1(true);}
  const handleClose=()=>{setIsHovered1(false);}
  const handleOpen1=()=>{setIsHovered(true);}
  const handleClose1=()=>{setIsHovered(false);}
  
  const yearDecrement = () => {
    year > ArambhEsc ? setYear(year - 1) : null;
  };
  const yearIncrement = () => {
    year < new Date().getFullYear() ? setYear(year + 1) : null;
  };

  let element={
      Year:2022,
      Introduction:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et sagittis massa. Cras neque ante, iaculis ac massa in, maximus egestas erat. Nullam pellentesque quam sit amet suscipit varius. Sed at cursus eros, eu ornare enim. Suspendisse potenti. Ut quis velit sed lorem convallis lacinia. ",
      Winners:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et sagittis massa. Cras neque ante, iaculis ac massa in, maximus egestas erat. Nullam pellentesque quam sit amet suscipit varius. Sed at cursus eros, eu ornare enim. Suspendisse potenti. Ut quis velit sed lorem convallis lacinia. ",  
  }

  if(year!==element.Year)
  {
  Data.forEach(elemen => {
        if(elemen.Year===year)
        {
          element=elemen;
          console.log(element)
          return;
        }
  });
  }

  const style={
    fontSize:"16px",
    lineHeight:"28px",
    fontStyle:"Regular",
    textAlign:"left",
    fontFamily:"Lato",
    color:"#6B7280"
  }
  return (
    <Stack direction={"row"}  maxWidth="lg" mx="auto" mt="100px" justifyContent="space-between">
     <Stack  maxWidth="300px"  gap="25px" mt="40px">
      <Typography fontSize={"55px"}  fontWeight={1000} fontFamily="Touchdown Font" color="#000000" fontStyle="Regular" textAlign="left">
       GALLERY
      </Typography>
      <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
            mt="20px"
          >
              <Box
                sx={{
                  cursor: "pointer",
                  my:"auto",
                  marginRight:"6%",
                  height:"20px",
                  width:"20px",
                }}
                onClick={yearDecrement}
                onMouseEnter={handleOpen1}
                onMouseLeave={handleClose1}
              >
                <Image src={iconArrow1} height={isHovered?"20px":"14px"} width={isHovered?"20px":"14px"}/>
              </Box>
      <Typography fontSize={"27px"} fontStyle="Regular" textAlign="left"  fontFamily="Lato" >
        Arambh {year}
      </Typography>
              <Box
                sx={{
                    cursor: "pointer",
                    my:"auto",
                    marginLeft:"20%",
                    height:"20px",
                    width:"20px"
                }}
                onClick={yearIncrement}
                onMouseEnter={handleOpen}
                onMouseLeave={handleClose}
              >
                <Image src={iconArrow2} height={isHovered1?"20px":"14px"} width={isHovered1?"20px":"14px"}/>
              </Box>
        </Box>
       <Typography sx={style}>
        {element.Introduction}
        </Typography>
       <Typography sx={style} fontWeight={800} mt={4}>
        WINNERS
       </Typography>
       <Typography sx={style}>
       {element.Winners}
       </Typography>
      </Stack>
    <ImageGrid/>
  </Stack>
  )
}

export default SportsGallery