import React from 'react'
import {Stack,Box} from "@mui/material";
import Image from 'next/image';
import image1 from "../../../assets/AtharvGallery/1.jpg"
import image2 from "../../../assets/AtharvGallery/2.jpg"
import image3 from "../../../assets/AtharvGallery/3.jpg"
import image4 from "../../../assets/AtharvGallery/4.jpg"
import image5 from "../../../assets/AtharvGallery/5.jpg"
import image6 from "../../../assets/AtharvGallery/6.jpg"

const style={borderRadius:"8px"}


const ImageGrid = () => {
  return (
 <Stack width="70%">
      <Box width="100%" zIndex={4} sx={{ boxShadow:"0px -5px 40px 50px rgba(255, 255, 255, 1)"}}></Box>
    <Stack spacing={2} direction="row" width="100% " zIndex={0}>
    <Stack direction="column" gap={2} mt="20px">
        <Image src={image1} style={style}/>
        <Image src={image2} style={style}/>
        <Image src={image3}  height="300px" style={style} />
    </Stack>
    <Stack direction="column" gap={2}>
        <Image src={image4} height="300px" style={style}/>
        <Image src={image5} style={style}/>
        <Image src={image6} style={style}/>
    </Stack> 
  </Stack>
  <Box width="100%" zIndex={4} sx={{boxShadow:"0px -5px 40px 50px rgba(255, 255, 255, 1.6)"}}></Box>
 </Stack>
  )
}

export default ImageGrid