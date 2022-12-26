import { useInView } from "react-intersection-observer";
import { BrandInViewContext } from "../contexts/HeaderContext";
import NavBar from "../components/NavBar";
import { ReactNode } from "react";
import Footer from "../components/footer/Footer";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Index from "../features/club/technical/Index";
import CulturalClub from "../features/club/cultural/CulturalClub";


type Props = {
  children?: ReactNode;
};

function ClubsLayout({ children }: Props) {
  const { ref, inView } = useInView({ threshold: 0 });

  return (
    <Stack>
      <BrandInViewContext.Provider value={{ inView }}>
        <NavBar />
        {/* <Index /> */}
        <CulturalClub/>
        <Container maxWidth="xl">
          <Stack>{children}</Stack>
        </Container>
        <Footer />
      </BrandInViewContext.Provider>
    </Stack>
  );
}

export default ClubsLayout;
