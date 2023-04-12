import { useInView } from "react-intersection-observer";
import { BrandInViewContext } from "../../contexts/HeaderContext";
import NavBar from "../components/Navbar/Navbar";
import { ReactNode, useContext } from "react";
import Footer from "../components/Footer/Footer";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import TeamContext from "../../contexts/TeamContext";

type Props = {
  children?: ReactNode;
};

function MobileTeamLayout({ children }: Props) {
  const { inView } = useInView({ threshold: 0 });

  return (
    <Stack>
      <BrandInViewContext.Provider value={{ inView }}>
        <NavBar />
        <Container maxWidth="xl">
          <TeamContext>
            <Stack>{children}</Stack>
          </TeamContext>
        </Container>
        <Footer />
      </BrandInViewContext.Provider>
    </Stack>
  );
}

export default MobileTeamLayout;
