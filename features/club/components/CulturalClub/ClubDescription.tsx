import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import clubs from "./ClubsInfo";

function ClubDescription({ clubName }: { clubName: any }) {
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
                  marginTop:"87px"
                }}
              >
                <div>
                  <Image src={data.image} alt="" />
                </div>

                <Box width={"643px"} height={"272px"}>
                  <Typography
                    variant={"h1"}
                    fontWeight={"400"}
                    fontSize={"16px"}
                    fontFamily={"Baskervville"}
                    lineHeight={"21px"}
                    fontStyle={"normal"}
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
                      marginTop: "12px",
                    }}
                  >
                    {["Instagram", "Linkedin", "Youtube"].map((item, index) => {
                      return (
                        <>
                          <Typography
                            variant={"h1"}
                            fontWeight={"400"}
                            fontSize={"16px"}
                            fontFamily={"Baskervville"}
                            lineHeight={"21px"}
                            fontStyle={"italic"}
                          >
                            {item}
                          </Typography>
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
