import { Container, Stack } from "@mui/system";
import { useInView } from "react-intersection-observer";
import Header from "../components/Header";
import { BrandInViewContext } from "../contexts/HeaderContext";
import NavBar from "../components/NavBar";
import { ReactNode, useEffect, useState } from "react";
import Footer from "../components/footer/Footer";

type Props = {
  children?: ReactNode;
};

function BaseLayout({ children }: Props) {
  const { ref, inView } = useInView({ threshold: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use inView only after component is mounted to avoid hydration mismatch
  const safeInView = mounted ? inView : true;

  return (
    <Stack>
      <BrandInViewContext.Provider value={{ inView: safeInView }}>
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
