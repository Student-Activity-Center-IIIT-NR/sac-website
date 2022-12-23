import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import starIcon from "../../../assets/icon_star.png";
import Card from "@mui/material/Card";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import clubs from "./ClubsInfo";
import ClubStyle from "../../../styles/Clubs.module.css";

function ClubHeader({ setClubName }: { setClubName: any }) {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  const handleClubName = (name: string) => {
    setClubName(name);
  };

  return (
    <>
      <div
        style={{
          position: "relative",
          top: "14.75px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            zIndex: "1",
          }}
        >
          <Card
            sx={{
              width: "799.47px",
              height: show ? "247px" : "70px",
              borderRadius: "13.115px",
              pr: 3,
              background: "rgba(255,255,255,0.8)",
              boxShadow: show
                ? "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12);"
                : "0px 0px 0px 0px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                columnGap: "13.11px",
                cursor: "pointer",
              }}
              onClick={handleShow}
              py={3}
            >
              <Typography
                variant={"h1"}
                fontWeight={"400"}
                fontSize={"17.4867px"}
                fontFamily={"Baskervville"}
                lineHeight={"15px"}
                fontStyle={"normal"}
                color={"#000000"}
                maxWidth={"494px"}
                sx={{ textDecoration: "underline" }}
              >
                Cultural Clubs
              </Typography>
              <Image src={starIcon} alt="" height={"17.5px"} width={"17.5px"} />
            </Box>
            {show ? (
              <Grid2
                container
                columnSpacing={"13.11px"}
                rowGap={"55px"}
                mt={"25px"}
              >
                {clubs.map((item, index) => {
                  return (
                    <>
                      <Grid2
                        xs={3}
                        display={"flex"}
                        justifyContent={"space-evenly"}
                        onClick={() => handleClubName(item.name)}
                      >
                        <Typography
                          className={ClubStyle.name}
                          variant={"h2"}
                          fontWeight={"400"}
                          fontSize={"16.35px"}
                          fontFamily={"Baskervville"}
                          lineHeight={"17px"}
                          fontStyle={"italic"}
                          color={"#272727"}
                        >
                          {item.name}
                        </Typography>
                      </Grid2>
                    </>
                  );
                })}
              </Grid2>
            ) : null}
          </Card>
        </div>
      </div>
    </>
  );
}

export default ClubHeader;
