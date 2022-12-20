import React, { useState } from "react";
import Card from "./Card";
import TeamLinks from "./TeamLinks";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import BackgroundImage from "../../../assets/Vector.svg";

function TeamContent() {
  const [isComponentHovered, setIsComponentHovered] = useState(false);
  const [targetHovered, setTargetHovered] = useState({});

  const hoveredPart = (item: { teamName: string; name: string }) => {
    setTargetHovered(item);
  };

  return (
    <>
      <Grid2
        sx={{
          mt: 2,
          background: isComponentHovered ? `url(${BackgroundImage.src})` : "",
          backgroundColor: "linear-gradient(90deg, #757F9A 0%, #D7DDE8 100%);",
          backdropFilter: `blur("100%")`,
        }}
        container
        spacing={1.5}
        justifyContent="center"
        onMouseEnter={() => {
          setIsComponentHovered(true);
        }}
        onMouseLeave={() => {
          setIsComponentHovered(false);
        }}
      >
        {TeamLinks.map((item, index) => {
          return (
            <>
              <Grid2
                xs={2.99}
                sx={{
                  py: 3,
                  zIndex: 100,
                }}
                display="flex"
                flexDirection={"column"}
                gap={2}
                key={index}
                alignItems="center"
              >
                <Card />
              </Grid2>
            </>
          );
        })}
      </Grid2>

      {TeamLinks.filter((item) => item.name != "All").map((item, index) => {
        return (
          <>
            <Typography
              variant={"h1"}
              fontWeight={400}
              fontSize={"55px"}
              fontFamily={"Work Sans"}
              textAlign={"center"}
              fontStyle={"normal"}
              key={index}
            >
              {item.teamName}
            </Typography>

            <Grid2
              container
              spacing={1.5}
              justifyContent="center"
              onMouseEnter={() => {
                hoveredPart(item);
              }}
              onMouseLeave={() => {
                setTargetHovered({});
              }}
              sx={{
                background:
                  targetHovered == item ? `url(${BackgroundImage.src})` : "",
                backgroundColor:
                  "linear-gradient(90deg, #757F9A 0%, #D7DDE8 100%);",
                backdropFilter: `blur("8px")`,
              }}
            >
              {TeamLinks.filter((child) => child.name == item.name).map(
                (item, index) => {
                  return (
                    <>
                      <Grid2
                        xs={2.99}
                        sx={{
                          py: 3,
                        }}
                        display="flex"
                        flexDirection={"column"}
                        gap={2}
                        key={index}
                        alignItems="center"
                      >
                        <Card />
                      </Grid2>
                    </>
                  );
                }
              )}
            </Grid2>
          </>
        );
      })}
    </>
  );
}

export default TeamContent;
