import Box from "@mui/material/Box";
import Stack from "@mui/system/Stack";
import Typography from "@mui/material/Typography";
import Image, { StaticImageData } from "next/image";
import iconArrow from "../../../assets/icon/icon_arrow_long.svg";
import Styles from "../../../styles/Clubs.module.css";

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
              width: "286px",
              height: "394px",
            }}
          >
            <Image
              src={img}
              width={"286px"}
              height={"394px"}
              alt=""
              objectFit="cover"
            />
          </Box>
          <Typography
            fontFamily="JetBrains Mono"
            fontStyle="normal"
            fontWeight="700"
            fontSize="20px"
            lineHeight="137.5%"
            color="#565A6E"
          >
            {name}
          </Typography>
          <Typography
            fontFamily="JetBrains Mono"
            fontStyle="normal"
            fontWeight="700"
            fontSize="20px"
            lineHeight="137.5%"
            color="#565A6E"
          >
            {post}
          </Typography>
        </Stack>
      </>
    );
  };

  return (
    <>
      <Stack mt={"117px"}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              rowGap: "16px",
              ml: "110px",
              mr: "90px",
            }}
          >
            <Typography
              fontFamily="Rubik"
              fontStyle="normal"
              fontWeight="400"
              fontSize="48px"
              lineHeight="57px"
              textAlign="center"
              color="#565A6E"
            >
              Meet the Crew
            </Typography>
            <Box
              sx={{
                width: "129px",
                height: "72px",
                border: "1px solid #C0CAF5",
                borderRadius: "24px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image src={iconArrow} alt="" />
            </Box>
          </Box>
          <Box>
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
                    console.log(walk);
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

        {/* <Typography
          fontFamily="Rubik"
          fontStyle="italic"
          fontWeight="700"
          fontSize="16px"
          lineHeight="28px"
          textAlign="center"
          color="#565A6E"
          maxWidth={"744px"}
          mx={"auto"}
          mt={"196px"}
        >
          “ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nibh
          mi, pellentesque sit amet ullamcorper id, varius nec nisi. Donec
          posuere euismod diam, eget scelerisque est finibus ac. ” - Name
        </Typography> */}
      </Stack>
    </>
  );
};

export default Crew;
