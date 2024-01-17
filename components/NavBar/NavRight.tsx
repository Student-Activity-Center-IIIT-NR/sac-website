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
  height: "60px",
  alignItems: "center",
  paddingLeft: "124px",
});
type Props = {
  wideSpacing?: boolean;
};

function NavRight({ wideSpacing }: Props) {
  return (
    <NavRightContainer minWidth={wideSpacing ? "100%" : "45%"} direction="row">
      {navLinks.map((link, index) => {
        return (
          <NavItem key={index} href={link.url} mx="auto">
            {link.name}
          </NavItem>
        );
      })}
      {/* <NavItem>
        <DarkMode />
      </NavItem> */}
    </NavRightContainer>
  );
}

export default NavRight;
