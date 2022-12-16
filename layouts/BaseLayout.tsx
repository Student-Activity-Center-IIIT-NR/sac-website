import { Container, Stack } from "@mui/material";
import { useInView } from "react-intersection-observer";
import Header from "../components/Header";
import { BrandInViewContext } from "../contexts/HeaderContext";
import NavBar from "../components/NavBar";
import { ReactNode } from "react";
import Footer from "../components/footer/Footer";

type Props = {
  children?: ReactNode;
};

function BaseLayout({ children }: Props) {
  const { ref, inView } = useInView({ threshold: 0 });
  return (
    <Stack>
      <BrandInViewContext.Provider value={{ inView }}>
        <Header ref={ref} />
        <NavBar />
        <Container maxWidth="xl">
          <Stack gap="78px">{children}</Stack>
        </Container>
        <Footer />
      </BrandInViewContext.Provider>
    </Stack>
  );
}

export default BaseLayout;
