import { AppBar, Container } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import DarkMode from "../common/DarkMode";
import SacBranding from "../common/SacBranding";
import NavItem from "./NavItem";
import NavRight from "./NavRight";

type Props = {};

function NavBar({}: Props) {
  return (
    <Stack
      height="60px"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <SacBranding width="60px" visibility="hidden" />
      <NavRight />
      <NavItem sx={{ paddingX: 0, width: "44px" }}>
        <DarkMode />
      </NavItem>
    </Stack>
  );
}

export default NavBar;
