import { useInView } from "react-intersection-observer";
import NavBar from "../components/NavBar";
import Footer from "../components/footer/Footer";
import { BrandInViewContext } from "../contexts/HeaderContext";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const EventsLayout = ({ children }: Props) => {
  const { inView } = useInView({ threshold: 0 });

  return (
    <>
      <Stack>
        <BrandInViewContext.Provider value={{ inView }}>
          <NavBar />
          <Container maxWidth="xl">
            <Stack>{children}</Stack>
          </Container>
          <Footer />
        </BrandInViewContext.Provider>
      </Stack>
    </>
  );
};

export default EventsLayout;
