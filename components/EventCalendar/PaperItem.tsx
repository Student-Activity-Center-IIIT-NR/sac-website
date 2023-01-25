import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Image, { StaticImageData } from "next/image";

interface PaperItemProps {
  startDate: string;
  endDate: string;
  startName: string;
  endName: string;
  startIcon?: StaticImageData;
  endIcon?: StaticImageData;
}

const PaperItem = ({
  startDate,
  endDate,
  startName,
  endName,
  startIcon,
  endIcon,
}: PaperItemProps) => {
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
              {startDate}
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
              {endDate}
            </Typography>
          </Stack>
          <Stack spacing={2}>
            <Stack direction={"row"} spacing={"48px"} alignItems={"center"}>
              {startIcon && (
                <Image src={startIcon} alt="" height={"24px"} width={"24px"} />
              )}
              <Typography variant="body1" maxWidth={"138px"}>
                {startName}
              </Typography>
            </Stack>
            <Stack direction={"row"} spacing={"48px"} alignItems={"center"}>
              {endIcon && (
                <Image src={endIcon} alt="" height={"24px"} width={"24px"} />
              )}
              <Typography variant="body1" maxWidth={"138px"}>
                {endName}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Paper>
    </>
  );
};

export default PaperItem;
