import React from "react";
import Card from "./Card";
import TeamLinks from "./TeamLinks";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

function TeamContent() {
  return (
    <>
      <Grid2 sx={{ mt: 2 }} container spacing={1.5} justifyContent="center">
        {TeamLinks.map((item, index) => {
          return (
            <>
              <Grid2
                xs={2.99}
                display="flex"
                flexDirection={"column"}
                gap={2}
                key={index}
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

            <Grid2 container spacing={1.5} justifyContent="center">
              {TeamLinks.filter((child) => child.name == item.name).map(
                (item, index) => {
                  return (
                    <>
                      <Grid2
                        xs={2.99}
                        display="flex"
                        flexDirection={"column"}
                        gap={2}
                        key={index}
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
