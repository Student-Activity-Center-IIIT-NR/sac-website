import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image, { StaticImageData } from "next/image";

interface SingleDateProps {
  date: string;
  icon?: StaticImageData;
  name: string;
  flag?: boolean;
}

const SingleDate = ({ date, icon, name, flag }: SingleDateProps) => {
  const currDate = new Date();

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
          color={
            flag
              ? ""
              : Number(date.slice(3, 5)) == currDate.getMonth() + 1
              ? "#000000"
              : "#A3A3A3"
          }
        >
          {date.slice(0, 2)}
        </Typography>
        <Stack direction={"row"} spacing={1}>
          {icon && (
            <Image
              src={icon}
              alt=""
              height={"8px"}
              width={"8px"}
              style={{
                opacity: flag
                  ? ""
                  : Number(date.slice(3, 5)) == currDate.getMonth() + 1
                  ? "1"
                  : ".5",
              }}
            />
          )}
          <Typography
            variant="body1"
            fontFamily={"Inter"}
            fontStyle={"normal"}
            fontWeight={400}
            fontSize={"11px"}
            lineHeight={"13px"}
            maxWidth={"103px"}
            color={
              flag
                ? ""
                : Number(date.slice(3, 5)) == currDate.getMonth() + 1
                ? "#000000"
                : "#A3A3A3"
            }
          >
            {name}
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default SingleDate;
