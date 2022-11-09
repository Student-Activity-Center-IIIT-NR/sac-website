import { Container, Stack } from "@mui/system";
import { useInView } from "react-intersection-observer";
import Header from "../components/Header";
import { BrandInViewContext } from "../contexts/HeaderContext";
import NavBar from "../components/NavBar";
import { ReactNode } from "react";
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
        <Container maxWidth="xl">{children}</Container>
      </BrandInViewContext.Provider>
    </Stack>
  );
}

export default BaseLayout;
