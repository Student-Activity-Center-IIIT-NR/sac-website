import styled from "@emotion/styled";
import { Container, Box, IconButton, Drawer } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useContext, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { BrandInViewContext } from "../../contexts/HeaderContext";
import SacBranding from "../common/SacBranding";
import NavRight from "./NavRight";
import sacLogo from "../../assets/sac_iiit_logo/sac_logo.png";

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

function NavBar({ }: Props) {
  const { inView: headInView } = useContext(BrandInViewContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <StyledHeader justifyContent="center">
      <Container maxWidth="xl">
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ width: '100%', height: '60px' }}>
          {/* Logo - Always visible */}
          <SacBranding
            width={40}
            height={40}
            sx={{
              opacity: { xs: 1, md: headInView ? 0 : 1 },
              height: { xs: "40px", md: headInView ? "30px" : "40px" },
              transition: "ease-in-out",
              transitionProperty: "opacity height",
              transitionDuration: "200ms",
            }}
            url={sacLogo}
          />

          {/* Desktop Navigation - Hidden on mobile */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
            <NavRight wideSpacing={headInView} />
          </Box>

          {/* Mobile Hamburger Menu Button - Visible only on mobile */}
          <IconButton
            sx={{ display: { xs: 'flex', md: 'none' } }}
            onClick={toggleMobileMenu}
            aria-label="Open navigation menu"
          >
            <MenuIcon />
          </IconButton>

          {/* Mobile Drawer Menu */}
          <Drawer
            anchor="right"
            open={mobileMenuOpen}
            onClose={closeMobileMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
              '& .MuiDrawer-paper': {
                width: '250px',
                boxSizing: 'border-box',
              },
            }}
          >
            <Box sx={{ p: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                <IconButton onClick={closeMobileMenu} aria-label="Close navigation menu">
                  <CloseIcon />
                </IconButton>
              </Box>
              <NavRight wideSpacing={false} isMobile onLinkClick={closeMobileMenu} />
            </Box>
          </Drawer>
        </Stack>
      </Container>
    </StyledHeader>
  );
}

export default NavBar;
