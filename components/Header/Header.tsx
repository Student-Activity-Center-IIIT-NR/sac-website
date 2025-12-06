import { styled } from "@mui/material";
import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import SacBranding from "../common/SacBranding";
import HeaderTop from "./HeaderTop";
import sacLogo from "../../assets/sac_iiit_logo/sac_logo.png";

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
        <Stack height={{ xs: "auto", sm: "auto", md: "auto" }} pb={{ xs: 2, md: 3 }}>
          <HeaderTop />
          <Stack gap={{ xs: "8px", sm: "12px", md: "16px" }} alignItems="center" ref={ref}>
            {/* SAC Logo above the branding */}
            <Stack sx={{ mt: { xs: 1, md: 2 } }}>
              <Image
                src={sacLogo}
                width={60}
                height={60}
                alt="SAC Logo"
                style={{ width: "60px", height: "60px" }}
                priority
              />
            </Stack>
            {/* SAC IIITNR Branding */}
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
