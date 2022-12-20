import { useInView } from "react-intersection-observer";
import { BrandInViewContext } from "../contexts/HeaderContext";
import NavBar from "../components/NavBar";
import TeamHeader from "../features/team/components/TeamHeader/TeamHeader";
import { ReactNode } from "react";
import Footer from "../components/footer/Footer";
import TeamNavbar from "../features/team/components/TeamNavbar";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";

type Props = {
  children?: ReactNode;
};

function TeamLayout({ children }: Props) {
  const { ref, inView } = useInView({ threshold: 0 });

  return (
    <Stack>
      <BrandInViewContext.Provider value={{ inView }}>
        <NavBar />
        <TeamHeader />
        <TeamNavbar />
        <Container maxWidth="xl">
          <Stack>{children}</Stack>
        </Container>
        <Footer />
      </BrandInViewContext.Provider>
    </Stack>
  );
}

export default TeamLayout;
