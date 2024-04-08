import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import icon_linkedin from "../../assets/icon/icon_linkedin.svg";
import icon_call from "../../assets/icon/icon_call.svg";
import icon_mail from "../../assets/icon/icon_mail.svg";
import { StaticImageData } from "next/image";

interface Props {
  Name: string;
  Post: string;
  img: StaticImageData;
  linkedin?: string;
  call?: number;
  mail?: string;
}

const Card = ({ Name, Post, img, linkedin, call, mail }: Props) => {
  return (
    <>
      <Stack direction={"column"}>
        <Box
          sx={{
            width: "262px",
            height: "309px",
          }}
        >
          <Image
            src={img}
            width="262px"
            height={"309px"}
            alt={Name}
            objectFit="cover"
            objectPosition={"center"}
            style={{
              borderRadius: "12px",
            }}
          />
        </Box>
        <Typography
          variant="body2"
          mt={"15px"}
          sx={{
            fontFamily: "Rubik",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "19px",
            color: "#000000",
          }}
        >
          {Name}
        </Typography>
        <Typography
          variant="body2"
          mt={"6px"}
          sx={{
            width: "200px",
            fontFamily: "Playfair Display",
            fontStyle: "normal",
            fontWeight: 800,
            fontSize: "16px",
            lineHeight: "21px",

            color: "#000000",
          }}
        >
          {Post}
        </Typography>
        {/* <Typography
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
        </Typography> */}
        <Stack direction={"row"} gap={2} mt={"10px"}>
          <Box
            sx={{
              width: "22px",
              height: "22px",
            }}
          >
            <a href={linkedin} rel="noreferrer" target={"_blank"}>
              <Image
                src={icon_linkedin}
                width="22px"
                height="22px"
                alt={"linkedin"}
                objectFit="cover"
              />
            </a>
          </Box>
          {/* <Box
            sx={{
              width: "22px",
              height: "22px",
            }}
          >
            <a href={`tel:+91${call}`} rel="noreferrer" target={"_blank"}>
              <Image
                src={icon_call}
                width="22px"
                height="22px"
                alt={""}
                objectFit="cover"
              />
            </a>
          </Box> */}
          <Box
            sx={{
              height: "22px",
              width: "22px",
            }}
          >
            <a href={`mailto:${mail}`} rel="noreferrer" target={"_blank"}>
              <Image src={icon_mail} height="22px" alt={""} objectFit="cover" />
            </a>
          </Box>
        </Stack>
      </Stack>
    </>
  );
};

export default Card;
