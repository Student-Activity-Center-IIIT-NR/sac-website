import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { styled } from "@mui/material";
import Link from "next/link";

const StyledTypography = styled(Typography)({
  fontFamily: "Baskervville",
  fontStyle: "italic",
  fontWeight: "400",
  fontSize: "18px",
  color: "#000000",
  cursor: "pointer",
  width: "fit-content",
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    width: "100%",
    transform: "scaleX(0.1)",
    height: "1px",
    bottom: "0",
    left: "0",
    backgroundColor: "#000",
    transformOrigin: "bottom left",
    transition: "transform 0.3s ease-out",
  },
  "&:hover::after": {
    transform: "scaleX(1)",
    transformOrigin: "bottom left",
  },
});

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
              width: show ? "800px" : "210px",
              height: show ? "174px" : "48px",
              borderRadius: show ? "24px" : "13px",
              py: "14px",
              px: "30px",
              background: show
                ? "rgba(255, 255, 255, 0.9)"
                : "rgba(255,255,255,0.8)",
              boxShadow: show
                ? "0px 4px 54px rgba(0, 0, 0, 0.2)"
                : "0px 0px 0px 0px",
              transitionDuration: "0ms",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                columnGap: "13px",
                cursor: "pointer",
              }}
              onClick={handleShow}
            >
              <Typography
                fontFamily={"Baskervville"}
                fontStyle={"normal"}
                fontWeight={"400"}
                fontSize={"18px"}
                color={"#000000"}
                sx={{ textDecoration: "underline", textUnderlineOffset: "2px" }}
              >
                Cultural Clubs
              </Typography>
              <Box
                sx={{
                  width: "17px",
                  height: "17px",
                  transition: "all .5s",
                }}
              >
                <StarIcon fill={show ? "none" : "black"} />
              </Box>
            </Box>
            {show ? (
              <Grid2 container mt={"25px"} rowGap={"30px"}>
                {clubs.map((item, index) => {
                  return (
                    <>
                      <Grid2
                        xs={3}
                        onClick={() => handleClubName(item.name)}
                        key={index}
                      >
                        <Link href={item.url}>
                          <StyledTypography onClick={handleShow}>
                            {item.name}
                          </StyledTypography>
                        </Link>
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

const StarIcon = ({ fill }: { fill: string }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 60 60"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25.3765 14.464L25.3776 14.4644L29.2731 16L25.3781 17.5354C21.7871 18.9488 18.9549 21.7888 17.536 25.3765L17.5356 25.3776L16 29.2731L14.4644 25.3776L14.4644 25.3775C13.0512 21.7939 10.2119 18.9551 6.62345 17.536L6.62241 17.5356L2.72687 16L6.62241 14.4644L6.62253 14.4644C10.2061 13.0512 13.0449 10.2119 14.464 6.62345L14.4644 6.62241L16 2.72687L17.5356 6.62241L17.5356 6.62253C18.9488 10.2061 21.7881 13.0449 25.3765 14.464Z"
        stroke="black"
        stroke-width="2"
      />
    </svg>
  );
};

const clubs = [
  { name: "Indradhanush", url: "/clubs/cultural/indradhanush" },
  { name: "Capriccio", url: "/clubs/cultural/capriccio" },
  { name: "ShutterBug", url: "/clubs/cultural/shutterbug" },
  { name: "Club De Theatre", url: "/clubs/cultural/cdt" },
  { name: "Igniters", url: "/clubs/cultural/igniters" },
  { name: "Cover to Cover", url: "/clubs/cultural/c2c" },
  { name: "Take da bait", url: "/clubs/cultural/tdb" },
  { name: "Model United Nations", url: "/clubs/cultural/mun" },
];
