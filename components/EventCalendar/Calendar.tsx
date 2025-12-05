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
        <Container maxWidth={"lg"} sx={{ mt: { xs: "24px", md: "40px" }, px: { xs: 2, md: 3 } }}>
          <Typography
            variant="h1"
            color="#334155"
            textAlign={"left"}
            fontSize={{ xs: "48px", sm: "64px", md: "80px", lg: "96px" }}
            fontWeight={800}
            lineHeight={{ xs: "56px", sm: "72px", md: "96px", lg: "114px" }}
            letterSpacing={"0.03571em"}
            pl={{ xs: 0, md: 2 }}
          >
            {currDate.getMonth() <= 9
              ? "0" + (currDate.getMonth() + 1)
              : currDate.getMonth() + 1}
            {"/"}
            {currDate.getFullYear()}
          </Typography>
          <Grid2
            container
            columnSpacing={{ xs: 2, sm: 3, md: "45px" }}
            rowGap={{ xs: "40px", sm: "60px", md: "94px" }}
            mt={{ xs: "24px", md: "37px" }}
          >
            <Grid2 xs={12} sm={6} md={4}>
              <PaperItem
                startDate={filteredData[0].date.slice(0, 2)}
                endDate={filteredData[1].date.slice(0, 2)}
                startName={filteredData[0].eventName}
                endName={filteredData[1].eventName}
                startIcon={filteredData[0].icon}
                endIcon={filteredData[1].icon}
              />
            </Grid2>
            <Grid2 xs={12} sm={6} md={8}>
              <Typography
                variant="body1"
                fontFamily={"Rubik"}
                fontStyle={"normal"}
                fontWeight={500}
                fontSize={{ xs: "20px", sm: "22px", md: "24px" }}
                lineHeight={{ xs: "26px", sm: "28px" }}
              >
                {/* {currDate.toLocaleString("default", { month: "long" })} */}
                August
              </Typography>
              <Grid2 container columnSpacing={{ xs: 2, sm: 3, md: "45px" }} rowGap={{ xs: 3, md: 0 }}>
                {filteredData.slice(2, 6).map((event, index) => {
                  return (
                    <Grid2
                      xs={6}
                      sm={6}
                      md={3}
                      borderTop={"2px solid #272727"}
                      pt={{ xs: 3, md: 8 }}
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
                <Grid2 xs={6} sm={4} md={2} key={index}>
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
