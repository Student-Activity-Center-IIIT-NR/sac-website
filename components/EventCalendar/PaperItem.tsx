import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import starIcon from "../../assets/calendar_icons/star.svg";

const PaperItem = () => {
  return (
    <>
      <Paper
        sx={{
          backgroundColor: "#ffffff",
          borderRadius: "20px",
          boxShadow:
            "-5px 5px 10px rgba(230, 230, 230, 0.2), 5px -5px 10px rgba(230, 230, 230, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.9), 5px 5px 13px rgba(230, 230, 230, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(230, 230, 230, 0.5)",
        }}
      >
        <Typography
          variant="body1"
          textAlign={"center"}
          fontSize={"24px"}
          fontWeight={500}
          lineHeight={"28px"}
          pt="17px"
          pb="48px"
        >
          Upcoming Events
        </Typography>
        <Stack direction={"row"} pb={"40px"} spacing={5} alignItems={"center"}>
          <Stack pl={"27px"} alignItems={"center"}>
            <Typography
              variant="body1"
              fontWeight={500}
              fontSize={"36px"}
              lineHeight={"43px"}
            >
              07
            </Typography>
            <Typography
              variant="body1"
              fontWeight={500}
              fontSize={"36px"}
              lineHeight={"43px"}
            >
              -
            </Typography>
            <Typography
              variant="body1"
              fontWeight={500}
              fontSize={"36px"}
              lineHeight={"43px"}
            >
              09
            </Typography>
          </Stack>
          <Stack spacing={2}>
            <Stack direction={"row"} spacing={"48px"} alignItems={"center"}>
              <Image src={starIcon} alt="" height={"24px"} width={"24px"} />
              <Typography variant="body1" maxWidth={"138px"}>
                Ethnic Day (Ganesh Chaturthi)
              </Typography>
            </Stack>
            <Stack direction={"row"} spacing={"48px"} alignItems={"center"}>
              <Image src={starIcon} alt="" height={"24px"} width={"24px"} />
              <Typography variant="body1" maxWidth={"138px"}>
                Ethnic Day (Ganesh Chaturthi)
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Paper>
    </>
  );
};

export default PaperItem;
