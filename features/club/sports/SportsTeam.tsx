import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { ReactNode } from "react";

interface Props {
  img: string;
  title: string;
  children: ReactNode;
}

const SportsTeam = () => {
  const Item = ({ img, title, children }: Props) => {
    return (
      <Stack
        spacing={1}
        sx={{
          justifyContent: "center",
        }}
      >
        {img && (
          <Image
            src={img}
            alt=""
            height="394px"
            width="286px"
            objectFit="cover"
          />
        )}
        <Typography
          fontFamily={"Lato"}
          lineHeight={"27.5px"}
          fontWeight={700}
          color="#565A6E"
          fontSize="20px"
        >
          {title}
        </Typography>
        <Typography
          fontFamily={"Lato"}
          fontWeight={700}
          lineHeight={"22px"}
          color="#565A6E"
          fontSize="16px"
        >
          {children}
        </Typography>
      </Stack>
    );
  };

  return (
    <>
      <Box
        sx={{
          mt: "140px",
          mb: "50px",
          px: "30px",
        }}
      >
        <Typography
          fontFamily="Touchdown Font"
          fontStyle={"normal"}
          fontWeight={400}
          fontSize={"64px"}
          color="#000000"
          textAlign="center"
        >
          TEAM
        </Typography>
        <Box
          sx={{
            mt: "80px",
            display: "flex",
            flexDirection: "row",
            gap: "120px 26px",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Item
            img="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
            title={"Dr Vivek Tiwari"}
          >
            faculty mentor
          </Item>
          <Item
            img="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
            title={"Dr Vivek Tiwari"}
          >
            faculty mentor
          </Item>
          <Item
            img="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
            title={"Dr Vivek Tiwari"}
          >
            faculty mentor
          </Item>
          <Item
            img="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
            title={"Dr Vivek Tiwari"}
          >
            faculty mentor
          </Item>
          <Item
            img="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
            title={"Dr Vivek Tiwari"}
          >
            faculty mentor
          </Item>
          <Item
            img="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
            title={"Dr Vivek Tiwari"}
          >
            faculty mentor
          </Item>
          <Item
            img="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
            title={"Dr Vivek Tiwari"}
          >
            faculty mentor
          </Item>
          <Item
            img="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
            title={"Dr Vivek Tiwari"}
          >
            faculty mentor
          </Item>
          <Item
            img="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
            title={"Dr Vivek Tiwari"}
          >
            faculty mentor
          </Item>
          <Item
            img="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
            title={"Dr Vivek Tiwari"}
          >
            faculty mentor
          </Item>
          <Item
            img="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
            title={"Dr Vivek Tiwari"}
          >
            faculty mentor
          </Item>
        </Box>
      </Box>
    </>
  );
};

export default SportsTeam;
