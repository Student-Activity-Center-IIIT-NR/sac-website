import { ReactNode } from "react";
import { Container, Stack } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { BrandInViewContext } from "../contexts/HeaderContext";
import NavBar from "../components/NavBar";
import TeamHeader from "../features/team/components/TeamHeader/TeamHeader";
import Footer from "../components/footer/Footer";
import Pill from "../features/team/components/Pill";

type Props = {
  children?: ReactNode;
};

function TeamLayout({ children }: Props) {
  const { ref, inView } = useInView({ threshold: 0 });

  return (
    <Stack>
      <BrandInViewContext.Provider value={{ inView }}>
        <NavBar />
        <Container maxWidth="xl">
          <TeamHeader />
          <Pill />
          <Stack gap="78px">{children}</Stack>
        </Container>
        <Footer />
      </BrandInViewContext.Provider>
    </Stack>
  );
}

export default TeamLayout;
