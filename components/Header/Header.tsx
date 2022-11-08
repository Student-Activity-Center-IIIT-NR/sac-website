import { styled } from "@mui/system";
import { Container, Stack, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import SacBranding from "../common/SacBranding";
import NavBar from "../NavBar";
import HeaderTop from "./HeaderTop";
import { useInView } from "react-intersection-observer";
import { HeaderBrandingContext } from "../../contexts/HeaderContext";

const StyledHeader = styled(Stack)({
  background: "#FFFFFF",
  boxShadow: `
    -40px 40px 80px rgba(235, 235, 235, 0.2), 
    40px -40px 80px rgba(235, 235, 235, 0.2), 
    -40px -40px 80px rgba(255, 255, 255, 0.9), 
    40px 40px 100px rgba(235, 235, 235, 0.9)`,
  marginBottom: "50px",
});

type Props = {};

function Header({}: Props) {
  const { ref, inView, entry } = useInView();
  return (
    <HeaderBrandingContext.Provider
      value={{ inView, HeadBoundingRect: entry?.boundingClientRect }}
    >
      <StyledHeader height="324px" color="white" px="20px">
        <Container maxWidth="xl">
          <HeaderTop />
          <Stack gap="19px" position="sticky">
            <SacBranding ref={ref} />
            <Typography alignSelf="center">Since 2018</Typography>
          </Stack>
          <NavBar />
        </Container>
      </StyledHeader>
    </HeaderBrandingContext.Provider>
  );
}

export default Header;
