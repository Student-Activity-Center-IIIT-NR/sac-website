import Box from "@mui/material/Box";
import Card from "./Card";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import { StaticImageData } from "next/image";

interface Props {
  teamName: string;
  gradient: string;
  teamData: any;
}

interface CrewProps {
  img: StaticImageData;
  name: string;
  post: string;
  linkedin?: string;
  call?: number;
  mail?: string;
}

const ScrollContainer = ({
  teamName,
  gradient = "linear-gradient(90deg, #091E3A 0%, #2F80ED 50%, #2D9EE0 100%)",
  teamData,
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
          sx={{
            maxWidth: "fit-content",
            mx: "auto",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "72px",
            scrollBehavior: "smooth",
          }}
          onMouseEnter={() => {
            setHovered(true);
          }}
          onMouseLeave={() => {
            setHovered(false);
          }}
        >
          {teamData.map((data: any, index: any) => {
            return (
              <Card
                Name={data.name}
                Post={data.post}
                img={data.img}
                linkedin={data.linkedin}
                call={data.call}
                mail={data.mail}
                key={index}
              />
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default ScrollContainer;
