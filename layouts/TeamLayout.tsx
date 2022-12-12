import { useState } from "react";
import { Container, Stack } from "@mui/system";
import { useInView } from "react-intersection-observer";
import { BrandInViewContext } from "../contexts/HeaderContext";
import NavBar from "../components/NavBar";
import TeamHeader from "../features/team/components/TeamHeader/TeamHeader";
import { ReactNode } from "react";
import Footer from "../components/footer/Footer";
import TeamNavbar from "../features/team/components/TeamNavbar";

type Props = {
  children?: ReactNode;
};

function TeamLayout({ children }: Props) {
  const { ref, inView } = useInView({ threshold: 0 });

  const [value, setValue] = useState("All");

  const handleTabs = (tabvalue:any ) => {
    setValue(tabvalue);
    console.log(value)
  }

  return (
    <Stack>
      <BrandInViewContext.Provider value={{ inView }}>
        <NavBar />
        <TeamHeader />
        <TeamNavbar handleTabs={handleTabs} value={value} setValue = {setValue} />
        <Container maxWidth="xl">
          <Stack gap="78px">{children}</Stack>
        </Container>
        <Footer />
      </BrandInViewContext.Provider>
    </Stack>
  );
}

export default TeamLayout;
