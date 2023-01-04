import Stack from "@mui/material/Stack";
import { BrandInViewContext } from "../contexts/HeaderContext";
import NavBar from "../components/NavBar";
import Container from "@mui/material/Container";
import Footer from "../components/footer/Footer";
import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

type Props = {
  children?: ReactNode;
};

const GalleryLayout = ({ children }: Props) => {
  const { inView } = useInView({ threshold: 0 });

  return (
    <Stack>
      <BrandInViewContext.Provider value={{ inView }}>
        <NavBar />
        <Container maxWidth="xl">
          <Stack>{children}</Stack>
        </Container>
        <Footer />
      </BrandInViewContext.Provider>
    </Stack>
  );
};

export default GalleryLayout;
