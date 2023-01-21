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
          fontSize={"38px"}
          fontFamily={"Playfair Display"}
          fontStyle={"normal"}
          color={"#272727"}
          letterSpacing={"0.03571em"}
          maxWidth={"494px"}
        >
          Not just colleagues; we&apos; re a family that supports each other.
        </Typography>
        <Year />
      </Box>
    </>
  );
}

export default TeamHeader;
