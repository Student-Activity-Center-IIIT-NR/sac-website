import React, { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";

interface Props {
  children: ReactNode;
  img: StaticImageData;
  insta: string;
}

function ClubDescription({ children, img, insta }: Props) {
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
            src={img}
            alt="Club Logo"
            width={360}
            height={360}
            style={{ borderRadius: "50%" }}
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
            {["Instagram"].map((item, index) => {
              return (
                <>
                  <a href={insta} key={index} target="_blank">
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
                  </a>
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
