import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import testImg from "../../assets/test/test.jpeg"; //remove
import icon_linkedin from "../../assets/icon/icon_linkedin.svg";

const Card = () => {
  return (
    <>
      <Stack direction={"column"} id="card">
        <Box
          sx={{
            width: "262px",
            height: "309px",
          }}
        >
          <Image
            src={testImg}
            width="262px"
            height={"309px"}
            alt={""}
            objectFit="cover"
          />
        </Box>
        <Typography
          variant="body2"
          mt={"15px"}
          sx={{
            width: "124px",
            fontFamily: "Rubik",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "19px",
            color: "#000000",
          }}
        >
          Himanshu Yadav
        </Typography>
        <Typography
          variant="body2"
          mt={"6px"}
          sx={{
            width: "187px",
            fontFamily: "Playfair Display",
            fontStyle: "normal",
            fontWeight: 800,
            fontSize: "16px",
            lineHeight: "21px",

            color: "#000000",
          }}
        >
          UG Representative (Boys)
        </Typography>
        <Typography
          variant="body2"
          mt={"5px"}
          sx={{
            width: "262px",
            fontFamily: "Rubik",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "12px",
            lineHeight: "14px",
            color: "#000000",
          }}
        >
          SAC is a student body established in the year 2018 which aims to
          support, develop and promote student activities at IIIT Naya Raipur
        </Typography>
        <Box
          sx={{
            width: "22px",
            height: "22px",
            mt: "10px",
          }}
        >
          <a
            href="https://www.linkedin.com/in/sudhanshu1309/"
            rel="noreferrer"
            target={"_blank"}
          >
            <Image
              src={icon_linkedin}
              width="22px"
              height="22px"
              alt={"linkedin"}
              objectFit="cover"
            />
          </a>
        </Box>
      </Stack>
    </>
  );
};

export default Card;
