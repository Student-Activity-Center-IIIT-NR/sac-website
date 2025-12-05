import Box from "@mui/material/Box";
import Stack from "@mui/system/Stack";
import Typography from "@mui/material/Typography";
import Image, { StaticImageData } from "next/image";
import iconArrow from "../../../assets/icon/icon_arrow_long.svg";
import iconArrowR from "../../../assets/icon/icon_arrow_long_reverse.svg";
import Styles from "../../../styles/Clubs.module.css";
import { useState } from "react";

interface CrewProps {
  name: string;
  img: StaticImageData;
  post: string;
}

interface Props {
  props: CrewProps[];
}

const Crew = ({ props }: Props) => {
  let isDown = false;
  let startX: number;
  let scrollLeft: number;

  const CrewCard = ({ name, img, post }: CrewProps) => {
    return (
      <>
        <Stack direction={"column"} rowGap={"12px"}>
          <Box
            sx={{
              width: { xs: "220px", sm: "240px", md: "262px" },
              height: { xs: "260px", sm: "280px", md: "309px" },
              overflow: "hidden",
              borderRadius: "12px",
              position: "relative",
            }}
          >
            <Image
              src={img}
              fill
              alt={name}
              style={{ objectFit: "cover" }}
              className="member-photo"
            />
          </Box>
          <Typography
            fontFamily="JetBrains Mono"
            fontStyle="normal"
            fontWeight="700"
            fontSize={{ xs: "16px", sm: "18px", md: "20px" }}
            lineHeight="137.5%"
            color="#565A6E"
            sx={{ maxWidth: { xs: "220px", sm: "240px", md: "262px" } }}
          >
            {name}
          </Typography>
          <Typography
            fontFamily="JetBrains Mono"
            fontStyle="normal"
            fontWeight="700"
            fontSize={{ xs: "16px", sm: "18px", md: "20px" }}
            lineHeight="137.5%"
            color="#565A6E"
            sx={{ maxWidth: { xs: "220px", sm: "240px", md: "262px" } }}
          >
            {post}
          </Typography>
        </Stack>
      </>
    );
  };
  
  const handleClick = (direction: "left" | "right") => {
    const container = document.querySelector(`.${Styles.items}`);
    if (container) {
      const scrollAmount = 500; // Adjust this value as needed
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth", // Optional: Add smooth scrolling effect
      });
    }
  };

  return (
    <>
      <Stack mt={{ xs: "60px", sm: "80px", md: "117px" }} px={{ xs: 2, sm: 3, md: 0 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 3, md: 0 },
          }}
        >
         <Box
  sx={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    rowGap: { xs: "12px", md: "16px" },
    ml: { xs: 0, md: "40px", lg: "110px" },
    mr: { xs: 0, md: "30px", lg: "90px" },
    minWidth: { xs: "100%", md: "auto" },
  }}
>
  <Typography
    fontFamily="Rubik"
    fontStyle="normal"
    fontWeight="400"
    fontSize={{ xs: "32px", sm: "40px", md: "48px" }}
    lineHeight={{ xs: "42px", sm: "50px", md: "57px" }}
    textAlign="center"
    color="#565A6E"
  >
    Meet the Crew
  </Typography>
  <Box
    sx={{
      display: { xs: "none", md: "flex" },
      flexDirection: "row",
      justifyContent: "center",
      columnGap: "16px",
    }}
  >
    <Box
      sx={{
        width: { md: "100px", lg: "129px" },
        height: { md: "60px", lg: "72px" },
        border: "1px solid #C0CAF5",
        borderRadius: "24px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={() => handleClick("left")}
    >
      <Image src={iconArrow} alt="Scroll left" />
    </Box>
    <Box
      sx={{
        width: { md: "100px", lg: "129px" },
        height: { md: "60px", lg: "72px" },
        border: "1px solid #C0CAF5",
        borderRadius: "24px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={() => handleClick("right")}
    >
      <Image src={iconArrowR} alt="Scroll right" />
    </Box>
  </Box>
</Box>

          <Box sx={{ width: "100%", overflow: "hidden" }}>
            <div className={Styles.grid_container}>
              <main className={`${Styles.grid_item} ${Styles.main}`}>
                <div
                  className={Styles.items}
                  onMouseDown={(e) => {
                    isDown = true;
                    e.currentTarget.classList.add("active");
                    startX = e.pageX - e.currentTarget.offsetLeft;
                    scrollLeft = e.currentTarget.scrollLeft;
                  }}
                  onMouseUp={(e) => {
                    isDown = false;
                    e.currentTarget.classList.remove("active");
                  }}
                  onMouseLeave={(e) => {
                    isDown = false;
                    e.currentTarget.classList.remove("active");
                  }}
                  onMouseMove={(e) => {
                    if (!isDown) return;
                    e.preventDefault();
                    const x = e.pageX - e.currentTarget.offsetLeft;
                    const walk = x - startX; // multiply with constant to scroll-fast (lets say 3)
                    e.currentTarget.scrollLeft = scrollLeft - walk;
                    // Removed console.log for production
                  }}
                >
                  {props.map((step, index) => {
                    return (
                      <div className={Styles.item} key={index}>
                        <CrewCard
                          name={step.name}
                          img={step.img}
                          post={step.post}
                        />
                      </div>
                    );
                  })}
                </div>
              </main>
            </div>
          </Box>
        </Box>
      </Stack>
    </>
  );
};

export default Crew;
