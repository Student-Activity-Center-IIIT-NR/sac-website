import { Button, styled } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import DarkMode from "../common/DarkMode";
import NavItem from "./NavItem";
import navLinks from "./navLinks";

const DarkModeButton = styled(Button)({
  aspectRatio: 1,
  ":hover": {
    background: "#394B73",
    fill: "yellow",
  },
  position: "relative",
  left: "25px",
});

const NavRightContainer = styled(Stack)({
  transition: "ease-in",
  transitionProperty: "all",
  transitionDuration: "250ms",
  background: "white",
});
type Props = {
  wideSpacing?: boolean;
};

function NavRight({ wideSpacing }: Props) {
  return (
    <NavRightContainer
      minWidth={wideSpacing ? "100%" : "45%"}
      direction="row"
      px="22px"
    >
      {navLinks.map((link, index) => {
        return (
          <NavItem key={index} href={link.url} mx="auto">
            {link.name}
          </NavItem>
        );
      })}
      <DarkModeButton>
        <DarkMode />
      </DarkModeButton>
    </NavRightContainer>
  );
}

export default NavRight;
