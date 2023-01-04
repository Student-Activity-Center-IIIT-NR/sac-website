import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { FunctionComponent } from "react";
import Typography from "@mui/material/Typography";
import Image, { StaticImageData } from "next/image";
import iconTriangle from "../../assets/calendar_icons/triangle.svg";
import iconCross from "../../assets/calendar_icons/cross.svg";
import iconRectangle from "../../assets/calendar_icons/rectangle.svg";
import iconStar from "../../assets/calendar_icons/star.svg";
import iconCircle from "../../assets/calendar_icons/circle.svg";
import Divider from "@mui/material/Divider";
import Grid2 from "@mui/material/Unstable_Grid2";
import SingleDate from "../../components/EventCalendar/SingleDate";

interface MonthlyCalendarProps {}

interface ItemProps {
  name: string;
  icon: StaticImageData;
  color: string;
}

const MonthlyCalendar: FunctionComponent<MonthlyCalendarProps> = () => {
  const Item = ({ name, icon, color }: ItemProps) => {
    return (
      <>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          columnGap={"12px"}
          sx={{
            border: "3px solid",
            borderColor: color,
            borderRadius: "20px",
            width: "200px",
            py: "19px",
          }}
        >
          <Image src={icon} alt="" width={"15px"} height="15px" />
          <Typography
            fontFamily={"Rubik"}
            fontStyle={"normal"}
            fontWeight={400}
            fontSize={"12px"}
            lineHeight={"21px"}
            color={"#000"}
            textAlign={"center"}
          >
            {name}
          </Typography>
        </Stack>
      </>
    );
  };

  const Month = () => {
    return (
      <>
        <Stack mt={"80px"}>
          <Typography
            fontFamily={"Rubik"}
            fontStyle={"normal"}
            fontWeight={500}
            fontSize={"24px"}
            lineHeight={"28px"}
            color={"#000"}
          >
            AUGUST
          </Typography>
          <Divider
            sx={{
              mt: "9px",
              border: "1px solid #000000",
            }}
          />
          <Grid2 container rowGap={"80px"} mt={"80px"}>
            <Grid2 xs={2}>
              <SingleDate />
            </Grid2>
            <Grid2 xs={2}>
              <SingleDate />
            </Grid2>
            <Grid2 xs={2}>
              <SingleDate />
            </Grid2>
            <Grid2 xs={2}>
              <SingleDate />
            </Grid2>
            <Grid2 xs={2}>
              <SingleDate />
            </Grid2>
            <Grid2 xs={2}>
              <SingleDate />
            </Grid2>
            <Grid2 xs={2}>
              <SingleDate />
            </Grid2>
            <Grid2 xs={2}>
              <SingleDate />
            </Grid2>
            <Grid2 xs={2}>
              <SingleDate />
            </Grid2>
          </Grid2>
        </Stack>
      </>
    );
  };

  return (
    <>
      <Stack px={"80px"} mt={"120px"}>
        <Typography
          fontFamily={"Rubik"}
          fontStyle={"normal"}
          fontWeight={500}
          fontSize={"2rem"}
          lineHeight={"38px"}
          color={"#000"}
        >
          SAC Calendar
        </Typography>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          mt={"40px"}
        >
          {data.map((item, index) => {
            return (
              <>
                <Item
                  name={item.name}
                  icon={item.icon}
                  color={item.color}
                  key={index}
                />
              </>
            );
          })}
        </Stack>
        <Month />
      </Stack>
    </>
  );
};

export default MonthlyCalendar;

const data = [
  {
    name: "Cultural",
    icon: iconTriangle,
    color: "#E06666",
  },
  {
    name: "Technical",
    icon: iconRectangle,
    color: "#6D9EEB",
  },
  {
    name: "Sports",
    icon: iconCross,
    color: "#4CDC8B",
  },
  {
    name: "Festivals and special events",
    icon: iconStar,
    color: "#F1C232",
  },
  {
    name: "National Events",
    icon: iconCircle,
    color: "#FF6F31",
  },
];
