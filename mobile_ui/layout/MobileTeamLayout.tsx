import Stack from "@mui/material/Stack";
import { FunctionComponent, ReactNode } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

interface MobileTeamLayoutProps {
  children: ReactNode;
}

const MobileTeamLayout: FunctionComponent<MobileTeamLayoutProps> = ({
  children,
}: MobileTeamLayoutProps) => {
  return (
    <>
      <Navbar />
      <Stack height={"1000px"}>{children}</Stack>{" "}
      {/* change layout as per need */}
      <Footer />
    </>
  );
};

export default MobileTeamLayout;
