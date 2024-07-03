import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import PaperItem from "./PaperItem";
import SingleDate from "./SingleDate";
import { calendarData } from "../../data/EventsAndGallery/EventCalendarData";

const Calendar = () => {
  const currDate = new Date();
  const currentDate = currDate.toJSON().slice(0, 10);

  let dateToFilter;

  const filteredData = calendarData?.filter((item) => {
    dateToFilter = new Date(item.date.split("-").reverse().join("-"));
    return dateToFilter >= new Date(currentDate);
  });

  return (
    <>
      {filteredData.length > 2 && (
        <Container maxWidth={"lg"} sx={{ mt: "40px" }}>
          <Typography
            variant="h1"
            color="#334155"
            textAlign={"left"}
            fontSize={"96px"}
            fontWeight={800}
            lineHeight={"114px"}
            letterSpacing={"0.03571em"}
            pl={2}
          >
            {currDate.getMonth() <= 9
              ? "0" + (currDate.getMonth() + 1)
              : currDate.getMonth() + 1}
            {"/"}
            {currDate.getFullYear()}
          </Typography>
          <Grid2 container columnSpacing={"45px"} rowGap={"94px"} mt={"37px"}>
            <Grid2 xs={4}>
              <PaperItem
                startDate={filteredData[0].date.slice(0, 2)}
                endDate={filteredData[1].date.slice(0, 2)}
                startName={filteredData[0].eventName}
                endName={filteredData[1].eventName}
                startIcon={filteredData[0].icon}
                endIcon={filteredData[1].icon}
              />
            </Grid2>
            <Grid2 xs={8}>
              <Typography
                variant="body1"
                fontFamily={"Rubik"}
                fontStyle={"normal"}
                fontWeight={500}
                fontSize={"24px"}
                lineHeight={"28px"}
              >
                {/* {currDate.toLocaleString("default", { month: "long" })} */}
                August
              </Typography>
              <Grid2 container columnSpacing={"45px"}>
                {filteredData.slice(2, 6).map((event, index) => {
                  return (
                    <Grid2
                      xs={3}
                      borderTop={"2px solid #272727"}
                      pt={8}
                      key={index}
                    >
                      <SingleDate
                        date={event.date}
                        icon={event.icon}
                        name={event.eventName}
                      />
                    </Grid2>
                  );
                })}
              </Grid2>
            </Grid2>
            {filteredData.slice(6, 18).map((event, index) => {
              return (
                <Grid2 xs={2} key={index}>
                  <SingleDate
                    date={event.date}
                    icon={event.icon}
                    name={event.eventName}
                  />
                </Grid2>
              );
            })}
          </Grid2>
        </Container>
      )}
    </>
  );
};

export default Calendar;
