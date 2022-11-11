import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import starIcon from "../../assets/calendar_icons/star.svg";

const SingleDate = () => {
  return (
    <>
      <Stack spacing={2}>
        <Typography
          variant="body1"
          fontFamily={"Rubik"}
          fontStyle={"normal"}
          fontWeight={500}
          fontSize={"24px"}
          lineHeight={"28px"}
        >
          04
        </Typography>
        <Stack direction={"row"} spacing={1}>
          <Image src={starIcon} alt="" height={"8px"} width={"8px"} />
          <Typography
            variant="body1"
            fontFamily={"Inter"}
            fontStyle={"normal"}
            fontWeight={400}
            fontSize={"11px"}
            lineHeight={"13px"}
            maxWidth={"103px"}
          >
            Double Elimination Chess Tournament (1-DAY)
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default SingleDate;
