import { styled } from "@mui/material";
import Stack from "@mui/material/Stack";
import React from "react";
import DarkMode from "../common/DarkMode";
import NavItem from "./NavItem";
import navLinks from "./navLinks";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

const NavRightContainer = styled(Stack)({
  transition: "ease-in",
  transitionProperty: "all",
  transitionDuration: "250ms",
  background: "white",
  alignItems: "center",
  paddingLeft: "8px",
});

type Props = {
  wideSpacing?: boolean;
  isMobile?: boolean;
  onLinkClick?: () => void;
};

function NavRight({ wideSpacing, isMobile, onLinkClick }: Props) {
  return (
    <NavRightContainer
      minWidth={isMobile ? "100%" : wideSpacing ? "100%" : "45%"}
      direction={isMobile ? "column" : "row"}
      sx={{
        height: isMobile ? "auto" : "60px",
        gap: isMobile ? 1 : 0,
        paddingLeft: isMobile ? 0 : "8px",
        alignItems: isMobile ? "stretch" : "center",
      }}
    >
      {navLinks.map((link, index) => {
        return (
          <NavItem
            key={index}
            href={link.url}
            mx={isMobile ? 0 : 2}
            onClick={onLinkClick}
            sx={{
              width: isMobile ? "100%" : "auto",
              justifyContent: isMobile ? "flex-start" : "center",
            }}
          >
            {link.name}
          </NavItem>
        );
      })}
    </NavRightContainer>
  );
}

export default NavRight;
