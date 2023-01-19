import { useInView } from "react-intersection-observer";
import { BrandInViewContext } from "../contexts/HeaderContext";
import NavBar from "../components/NavBar";
import { ReactNode } from "react";
import Footer from "../components/footer/Footer";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import MobNav from "../components/NavBar/MobNav";
import { useWindowSize } from "../WindowSize";

type Props = {
  children?: ReactNode;
};

function TeamLayout({ children }: Props) {
  const { inView } = useInView({ threshold: 0 });

  return (
    <Stack>
      <BrandInViewContext.Provider value={{ inView }}>
        {
        useWindowSize().width<=900?
        <MobNav/>
        :
          <NavBar />
        }
        <Container maxWidth="xl">
          <Stack>{children}</Stack>
        </Container>
        <Footer />
      </BrandInViewContext.Provider>
    </Stack>
  );
}

export default TeamLayout;
