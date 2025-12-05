import { styled } from "@mui/material";
import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import SacBranding from "../common/SacBranding";
import HeaderTop from "./HeaderTop";

const StyledHeader = styled(Stack)({
  boxShadow: `
    -40px 40px 80px rgba(235, 235, 235, 0.2),
    40px -40px 80px rgba(235, 235, 235, 0.2),
    -40px -40px 80px rgba(255, 255, 255, 0.9),
    40px 40px 100px rgba(235, 235, 235, 0.9)`,
});

type Props = {};

const Header = React.forwardRef<HTMLDivElement, Props>(({ }: Props, ref) => {
  return (
    <StyledHeader color="white" px={{ xs: 1, sm: 2, md: "20px" }}>
      <Container maxWidth="xl" disableGutters>
        <Stack height={{ xs: "180px", sm: "220px", md: "264px" }}>
          <HeaderTop />
          <Stack gap={{ xs: "12px", md: "19px" }} alignItems="center" ref={ref}>
            <SacBranding height={{ xs: 80, sm: 100, md: 125 }} />
            <Typography alignSelf="center" sx={{ fontSize: { xs: "14px", md: "16px" } }}>Since 2018</Typography>
          </Stack>
        </Stack>
      </Container>
    </StyledHeader>
  );
});

Header.displayName = "Header";

export default Header;
