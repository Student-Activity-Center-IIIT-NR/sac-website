import { useInView } from "react-intersection-observer";
import { BrandInViewContext } from "../contexts/HeaderContext";
import NavBar from "../components/NavBar";
import { ReactNode } from "react";
import Footer from "../components/footer/Footer";
import Stack from "@mui/material/Stack";

type Props = {
  children?: ReactNode;
};

function ClubsLayout({ children }: Props) {
  const { inView } = useInView({ threshold: 0 });

  return (
    <Stack>
      <BrandInViewContext.Provider value={{ inView }}>
        <NavBar />
        <Stack>{children}</Stack>
        <Footer />
      </BrandInViewContext.Provider>
    </Stack>
  );
}

export default ClubsLayout;
