import React ,{useState}from 'react'
import {Stack, Box, Typography} from "@mui/material";
import ImageGrid from './ImageGrid';
import Image from 'next/image';
import iconArrow from "../../../assets/icon_arrow.svg"
import { Data } from './SportsGalleryData';





const SportsGallery = () => {

  const ArambhEsc = 2018;
  const [year, setYear] = useState(new Date().getFullYear());
  // const [hover, isHover] = useState(false);
  
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
  Data.forEach(e => {
        if(e.Year===year)
        {
          element=e;
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
    <Stack direction={"row"}  maxWidth="lg" mx="auto" mt="150px" height="800px" justifyContent="space-between" >
     <Stack  maxWidth="32%"  gap="25px" mt="100px">
      <Typography fontSize={"55px"}  fontWeight={1000} fontFamily="Touchdown Font" color="#000000" fontStyle="Regular" textAlign="left">
       GALLERY
      </Typography>
      <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width:"90%",
              alignItems:"center" 
            }}
            mt="20px"
          >
            <Box flexGrow={2}>
                <Image src={iconArrow} width="9px" onClick={yearDecrement} style={{
                  cursor:"pointer",
                }}/>
            </Box>
      <Typography fontSize={"26px"} fontStyle="Regular"   fontFamily="Lato" flexGrow="6">
        ARAMBH &nbsp;{year}
      </Typography>
      <Box flexGrow={2}  textAlign="right">
                <Image src={iconArrow} width="9px" onClick={yearIncrement} style={{
                  cursor:"pointer",
                  transform:"rotate(180deg)",
                }}/>
        </Box>
        </Box>
       <Typography sx={style}>
        {element.Introduction}
        </Typography>
       <Typography sx={style} fontWeight={800} mt={2}>
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