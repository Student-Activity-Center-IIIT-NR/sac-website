import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
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
import { calendarData } from "../../components/EventCalendar/EventCalendarData";
import { NextPage } from "next";

interface MonthlyCalendarProps {
  date: string;
  eventName: string;
  icon: StaticImageData;
}

interface ItemProps {
  name: string;
  icon: StaticImageData;
  color: string;
}

const MonthlyCalendar: NextPage = () => {
  let date = new Date();
  const currentDate = date.toJSON().slice(0, 10);
  let dateToFilter: Date;

  const filteredData = calendarData.filter((item) => {
    dateToFilter = new Date(item.date.split("-").reverse().join("-"));
    return dateToFilter >= new Date(currentDate);
  });

  const [monthWiseData, setMonthWiseData] = useState<{
    [key: number]: MonthlyCalendarProps[];
  }>();

  const monthsName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const splitCalendarData = (filteredData: MonthlyCalendarProps[]) => {
    return filteredData.reduce(
      (
        months: { [key: number]: MonthlyCalendarProps[] },
        event: MonthlyCalendarProps
      ) => {
        const month = new Date(
          event.date.split("-").reverse().join("-")
        ).getMonth();

        if (!months[month]) {
          months[month] = [];
        }
        months[month].push(event);
        return months;
      },
      []
    );
  };

  useEffect(() => {
    return setMonthWiseData(splitCalendarData(filteredData));
  }, []);

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
          {monthWiseData &&
            monthWiseData[0].map((_item: any, index: number) => {
              return (
                <>
                  <Typography
                    fontFamily={"Rubik"}
                    fontStyle={"normal"}
                    fontWeight={500}
                    fontSize={"24px"}
                    lineHeight={"28px"}
                    color={"#000"}
                  >
                    {monthsName[index]}
                  </Typography>
                  <Divider
                    sx={{
                      mt: "9px",
                      border: "1px solid #000000",
                    }}
                  />
                  <Grid2 container rowGap={"80px"} my={"80px"}>
                    {monthWiseData[index].map((data, index) => {
                      return (
                        <>
                          <Grid2 xs={2} key={index}>
                            <SingleDate
                              date={data.date}
                              name={data.eventName}
                              icon={data.icon}
                              flag={true}
                            />
                          </Grid2>
                        </>
                      );
                    })}
                  </Grid2>
                </>
              );
            })}
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
