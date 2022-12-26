import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import clubs from "./ClubsInfo";
import Link from "next/link";

function ClubDescription({ clubName }: { clubName: string }) {
  return (
    <>
      {clubs
        .filter((item) => item.name == clubName)
        .map((data, index) => {
          return (
            <>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  columnGap: "71px",
                  mt: "10px",
                }}
                key={index}
              >
                <Image
                  src={data.image}
                  alt=""
                  width={"400px"}
                  objectFit={"contain"}
                />

                <Box width={"643px"}>
                  <Typography
                    fontFamily={"Baskervville"}
                    fontStyle={"normal"}
                    fontWeight={"400"}
                    fontSize={"16px"}
                    textAlign={"justify"}
                  >
                    {data.description}
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
        })}
    </>
  );
}

export default ClubDescription;
