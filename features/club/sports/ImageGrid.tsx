import React from "react";
import Image, { StaticImageData } from "next/image";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { itemData } from "./SportsGalleryData";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

const ImageGrid = () => {
  interface CrewProps {
    img: StaticImageData;
  }

  return (
    <Stack width="860px" sx={{ transform: "rotateY(180deg)" }}>
      <Box
        width="100%"
        zIndex={1}
        sx={{ boxShadow: "0px -5px 40px 50px rgba(255, 255, 255, 1)" }}
      />
      <ImageList variant="woven" cols={2} gap={25}>
        {itemData.map((item, index) => (
          <ImageListItem key={index}>
            <Image
              src={item.img}
              alt={""}
              loading="lazy"
              objectFit={"cover"}
              width={"357px"}
              height={"288px"}
              style={{
                borderRadius: "8px",
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Box
        width="100%"
        zIndex={1}
        sx={{ boxShadow: "0px -5px 40px 50px rgba(255, 255, 255, 1.6)" }}
      />
    </Stack>
  );
};

export default ImageGrid;
