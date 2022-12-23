import Box from "@mui/material/Box";
import Card from "./Card";
import TeamStyle from "../../../styles/Team.module.css";
import { useState } from "react";
import Typography from "@mui/material/Typography";

interface Props {
  teamName: string;
  gradient: string;
}

const ScrollContainer = ({
  teamName,
  gradient = "linear-gradient(90deg, #091E3A 0%, #2F80ED 50%, #2D9EE0 100%)",
}: Props) => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <Box mb={"108px"}>
        {teamName && (
          <Typography
            m={"auto"}
            textAlign="center"
            fontFamily="Rubik"
            fontStyle="normal"
            fontWeight={300}
            fontSize="36px"
            lineHeight="43px"
            color="#272727"
            mb={"32px"}
            sx={
              hovered
                ? {
                    background: gradient,
                    backgroundClip: "text",
                    textFillColor: "transparent",
                  }
                : null
            }
          >
            {teamName}
          </Typography>
        )}
        <Box
          className={hovered ? TeamStyle.name : ""}
          sx={{
            height: "530px",
            maxWidth: "1280px",
            mx: "auto",
            display: "flex",
            flexDirection: "row",
            overflowX: "scroll",
            alignItems: "center",
            columnGap: "72px",
            scrollBehavior: "smooth",
          }}
          onMouseEnter={() => {
            setHovered(true);
          }}
          onMouseLeave={() => {
            setHovered(false);
          }}
        >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Box>
      </Box>
    </>
  );
};

export default ScrollContainer;
