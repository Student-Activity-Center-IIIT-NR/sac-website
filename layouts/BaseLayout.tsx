import { Container, Stack } from "@mui/system";
import { useInView } from "react-intersection-observer";
import Header from "../components/Header";
import { BrandInViewContext } from "../contexts/HeaderContext";
import NavBar from "../components/NavBar";
import { ReactNode } from "react";
import Footer from "../components/footer/Footer";
import MobNav from "../components/NavBar/MobNav";
import { useWindowSize } from "../WindowSize";
import MobHeader from "../components/Header/MobHeader";

type Props = {
  children?: ReactNode;
};



function BaseLayout({ children }: Props) {
  let Wsize:(Number|any)=useWindowSize().width;
  const { ref, inView } = useInView({ threshold: 0 });

  return (
    <Stack>
      <BrandInViewContext.Provider value={{ inView }}>
        {
        Wsize<=900?
       <>
        <MobNav/>
        <MobHeader/>
       </>
        :
        <>
          <Header ref={ref} />
          <NavBar />
        </>
        }
      
        <Container maxWidth="xl">
          <Stack gap="78px">{children}</Stack>
        </Container>
        <Footer />
      </BrandInViewContext.Provider>
    </Stack>
  );
}

export default BaseLayout;
