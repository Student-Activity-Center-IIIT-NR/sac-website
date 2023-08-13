import { useContext, useState } from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import iconReset from "../../../assets/icon/icon_reset.svg";
import iconArrow from "../../../assets/icon/icon_arrow.svg";
import Image from "next/image";
import Stack from "@mui/material/Stack";
import { SessionContext } from "../../../contexts/TeamContext";

const Year = () => {
  const [isHovered, setIsHovered] = useState(false);

  const { year, currentSession, yearDecrement, yearIncrement, resetYear } =
    useContext(SessionContext);

  return (
    <>
      <Card
        sx={{
          background: "#fff",
          borderRadius: "20px",
          width: "358px",
          height: "160px",
          boxShadow:
            "-5px 5px 10px rgba(230, 230, 230, 0.2), 5px -5px 10px rgba(230, 230, 230, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.9), 5px 5px 13px rgba(230, 230, 230, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(230, 230, 230, 0.5)",
        }}
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          if (year !== currentSession) {
            setIsHovered(true);
          }
        }}
      >
        <Stack direction={"column"}>
          <Box
            sx={{
              width: "24px",
              height: "24px",
              mx: "auto",
              pt: "10px",
              pb: "4px",
              objectFit: "contain",
              cursor: "pointer",
              visibility: year !== currentSession ? "block" : "none",
            }}
            onClick={resetYear}
          >
            {year !== currentSession ? (
              <Image src={iconReset} height={"24px"} width={"24px"} alt="" />
            ) : null}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "col",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {isHovered ? (
              <Box
                sx={{
                  width: "12px",
                  height: "20px",
                  cursor: "pointer",
                  mt: "10px",
                }}
                onClick={yearDecrement}
              >
                <Image src={iconArrow} height={""} width={""} alt="" />
              </Box>
            ) : null}
            {year && (
              <Typography
                fontFamily={"Rubik"}
                fontStyle={"normal"}
                fontWeight={"800"}
                fontSize={isHovered ? "60px" : "80px"}
                lineHeight={isHovered ? "95px" : "114px"}
                letterSpacing={"0.03571em"}
                color={isHovered ? "#272727" : "#394B73"}
                width={isHovered ? "229px" : "273px"}
                height={isHovered ? "95px" : "114px"}
                textAlign={"center"}
                mt={isHovered ? "10px" : "0px"}
                mx={isHovered ? "20px" : "0px"}
                sx={{
                  transition: "all",
                  transitionDuration: "300ms",
                }}
              >
                {year
                  .toString()
                  .concat("-")
                  .concat((year + 1).toString())}
              </Typography>
            )}
            {isHovered ? (
              <Box
                sx={{
                  transform: `rotate(180deg)`,
                  width: "12px",
                  height: "20px",
                  cursor: "pointer",
                  mt: "10px",
                }}
                onClick={yearIncrement}
              >
                <Image src={iconArrow} height={""} width={""} alt="" />
              </Box>
            ) : null}
          </Box>
        </Stack>
      </Card>
    </>
  );
};

export default Year;
  
