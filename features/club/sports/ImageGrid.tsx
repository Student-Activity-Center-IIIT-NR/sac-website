import React from 'react'
import {Stack,Box} from "@mui/material";
import Image from 'next/image';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { itemData } from './SportsGalleryData';


const style={borderRadius:"8px"}

const ImageGrid = () => {
  return (
 <Stack width="65%" sx={{ transform:'rotateY(180deg)'}}>
      <Box width="100%" zIndex={1} sx={{ boxShadow:"0px -5px 40px 50px rgba(255, 255, 255, 1)"}}></Box>
      <ImageList  variant="woven" cols={2} gap={20}  >
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <Image
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    objectFit={"cover"}
                    alt={item.title}
                    loading="lazy"
                    width={"390px"}
                    height={"300px"}
                    style={{
                      borderRadius: "10px",
                      transform:"rotateY(180deg)"
                    }}
                  />
                </ImageListItem>
              ))}
       </ImageList>
  <Box width="100%" zIndex={1} sx={{boxShadow:"0px -5px 40px 50px rgba(255, 255, 255, 1.6)"}}></Box>
 </Stack>
  )
}

export default ImageGrid