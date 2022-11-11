import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import PaperItem from "./PaperItem";
import SingleDate from "./SingleDate";

const Calendar = () => {
  return (
    <>
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
          10/22
        </Typography>

        <Grid2 container columnSpacing={"45px"} rowGap={"94px"} mt={"37px"}>
          <Grid2 xs={4}>
            <PaperItem />
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
              OCTOBER
            </Typography>
            <Grid2 container columnSpacing={"45px"}>
              <Grid2 xs={3} borderTop={"2px solid #272727"} pt={8}>
                <SingleDate />
              </Grid2>
              <Grid2 xs={3} borderTop={"2px solid #272727"} pt={8}>
                <SingleDate />
              </Grid2>
              <Grid2 xs={3} borderTop={"2px solid #272727"} pt={8}>
                <SingleDate />
              </Grid2>
              <Grid2 xs={3} borderTop={"2px solid #272727"} pt={8}>
                <SingleDate />
              </Grid2>
            </Grid2>
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
      </Container>
    </>
  );
};

export default Calendar;

{
  /* <Typography
  variant="body1"
  fontFamily={"Rubik"}
  fontStyle={"normal"}
  fontWeight={500}
  fontSize={"24px"}
  lineHeight={"28px"}
>
  OCTOBER
</Typography>; */
}
