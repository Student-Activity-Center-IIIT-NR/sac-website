import { Stack } from "@mui/system";
import React from "react";
import NavItem from "./NavItem";
import navLinks from "./navLinks";

type Props = {};

function NavRight({}: Props) {
  return (
    <Stack direction="row" mx="auto">
      {navLinks.map((link, index) => {
        return <NavItem key={index} href={link.url} >
          {link.name}
        </NavItem>;
      })}
    </Stack>
  );
}

export default NavRight;
