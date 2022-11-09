import { styled } from "@mui/system";
import { Container, Stack, Typography } from "@mui/material";
import React, { useContext, useEffect, useReducer } from "react";
import SacBranding from "../common/SacBranding";
import NavBar from "../NavBar";
import HeaderTop from "./HeaderTop";
import { useInView } from "react-intersection-observer";
import { BrandInViewContext } from "../../contexts/HeaderContext";

const StyledHeader = styled(Stack)({
  boxShadow: `
    -40px 40px 80px rgba(235, 235, 235, 0.2), 
    40px -40px 80px rgba(235, 235, 235, 0.2), 
    -40px -40px 80px rgba(255, 255, 255, 0.9), 
    40px 40px 100px rgba(235, 235, 235, 0.9)`,
});

type Props = {};

const Header = React.forwardRef(({}: Props, ref) => {
  return (
    <StyledHeader color="white" px="20px">
      <Container maxWidth="xl" disableGutters>
        <Stack height="264px">
          <HeaderTop />
          <Stack gap="19px" ref={ref}>
            <SacBranding height="125px" />
            <Typography alignSelf="center">Since 2018</Typography>
          </Stack>
        </Stack>
      </Container>
    </StyledHeader>
  );
});

Header.displayName = "Header";

export default Header;
