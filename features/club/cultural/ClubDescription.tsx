import React, { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";

interface Props {
  children: ReactNode;
  img: StaticImageData;
}

function ClubDescription({ children, img }: Props) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          columnGap: "71px",
          mt: "87px",
        }}
      >
        <Box
          sx={{
            width: "360px",
            height: "360px",
          }}
        >
          <Image
            style={{
              borderRadius: "24px",
            }}
            src={img}
            alt=""
            objectFit={"contain"}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            maxWidth: 600,
          }}
        >
          <Typography
            fontFamily={"Baskerville"}
            fontStyle={"normal"}
            fontWeight={"400"}
            fontSize={"16px"}
            textAlign={"justify"}
          >
            {children}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              columnGap: "24px",
              marginTop: "20px",
            }}
          >
            {["Instagram", "Linkedin", "Youtube"].map((item, index) => {
              return (
                <>
                  <Link href={""} key={index}>
                    <Typography
                      fontFamily={"Baskervville"}
                      fontStyle={"italic"}
                      fontWeight={"400"}
                      fontSize={"16px"}
                      textAlign="center"
                      color={"#000000"}
                      sx={{
                        cursor: "pointer",
                      }}
                    >
                      {item}
                    </Typography>
                  </Link>
                </>
              );
            })}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default ClubDescription;
