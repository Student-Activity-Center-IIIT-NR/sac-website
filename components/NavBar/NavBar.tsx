import styled from "@emotion/styled";
import { Container } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useContext } from "react";
import { BrandInViewContext } from "../../contexts/HeaderContext";
import SacBranding from "../common/SacBranding";
import NavRight from "./NavRight";

type Props = {};

const StyledHeader = styled(Stack)({
  boxShadow: `
    -40px 40px 80px rgba(230, 230, 230, 0.2), 
    40px -40px 80px rgba(230, 230, 230, 0.2), 
    -40px -40px 80px rgba(255, 255, 255, 0.9), 
    40px 40px 100px rgba(230, 230, 230, 0.9), 
    inset 2px 2px 3px rgba(255, 255, 255, 0.3), 
    inset -2px -2px 3px rgba(230, 230, 230, 0.5)40px 40px 100px rgba(235, 235, 235, 0.9)`,
  height: "60px",
  position: "sticky",
  top: 0,
  background: "#FFFFFF",
  marginBottom: "50px",
});

function NavBar({}: Props) {
  const { inView: headInView } = useContext(BrandInViewContext);
  return (
    <StyledHeader justifyContent="center">
      <Container maxWidth="xl">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <SacBranding
            width="95px"
            height="40px"
            sx={{
              opacity: headInView ? 0 : 1,
              height: headInView ? "30px" : "40px",
              transition: "ease-in-out",
              transitionProperty: "opacity height",
              transitionDuration: "200ms",
            }}
          />
          <NavRight wideSpacing={headInView} />
        </Stack>
      </Container>
    </StyledHeader>
  );
}

export default NavBar;
