import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Year from "./YearCard";

function TeamHeader() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          columnGap: "80px",
        }}
      >
        <Typography
          variant={"h2"}
          fontWeight={"400"}
          fontSize={"64px"}
          fontFamily={"Playfair Display"}
          lineHeight={"85px"}
          fontStyle={"normal"}
          color={"#272727"}
          letterSpacing={"0.03571em"}
          width={"494px"}
        >
          Not just a team, but a big family.
        </Typography>
        <Year />
      </Box>
    </>
  );
}

export default TeamHeader;
