import styled from "@emotion/styled";
import { Container } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useContext } from "react";
import { BrandInViewContext } from "../../contexts/HeaderContext";
import SacBranding from "../common/SacBranding";
import NavRight from "./NavRight";
import sacLogo from "../../assets/sac_logo.png";

type Props = {};

const StyledHeader = styled(Stack)({
  boxShadow: `
    -40px 40px 40px rgba(230, 230, 230, 0.1), 
    10px 10px 10px rgba(230, 230, 230, 0.4)`,
  height: "60px",
  position: "sticky",
  top: 0,
  background: "#FFFFFF",
  marginBottom: "50px",
  zIndex: 1000,
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
            width="45px"
            height="45px"
            sx={{
              opacity: headInView ? 0 : 1,
              height: headInView ? "30px" : "40px",
              transition: "ease-in-out",
              transitionProperty: "opacity height",
              transitionDuration: "200ms",
            }}
            url={sacLogo}
          />
          <NavRight wideSpacing={headInView} />
        </Stack>
      </Container>
    </StyledHeader>
  );
}

export default NavBar;
