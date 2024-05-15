import { Stack } from "@mui/system";
import { useInView } from "react-intersection-observer";
import { BrandInViewContext } from "../contexts/HeaderContext";
import NavBar from "../components/NavBar";
import { ReactNode } from "react";
import Footer from "../components/footer/Footer";

type Props = {
  children?: ReactNode;
};

function GatePassLayout({ children }: Props) {
  const { ref, inView } = useInView({ threshold: 0 });
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

export default GatePassLayout;
