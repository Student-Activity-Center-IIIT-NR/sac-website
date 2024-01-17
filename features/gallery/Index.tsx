import Divider from "@mui/material/Divider";
import MajorEvents from "./MajorEvents";
import RecentClubEvents from "./RecentClubEvents";
import Gallery from "./Gallery";

const Index = () => {
  return (
    <>
      <MajorEvents />
      <Divider sx={{ mx: "80px" }} color={"#E5E5E5"} />
      <RecentClubEvents />
      <Divider sx={{ mx: "80px" }} color={"#E5E5E5"} />
      <Gallery />
    </>
  );
};

export default Index;
