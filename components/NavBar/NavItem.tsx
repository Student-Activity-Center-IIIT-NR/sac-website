import React from "react";
import NextLink from "next/link";
import {
  ButtonProps,
  Link as MuiLink,
  LinkProps,
  useTheme,
} from "@mui/material";
import { Button } from "@mui/material";

type Props = {
  children: JSX.Element | string;
  href: string;
};

function NavItem({ children, href, ...restProps }: Props & LinkProps) {
  const theme = useTheme();
  return (
    <NextLink href={href} passHref>
      <MuiLink
        underline="none"
        fontWeight="500"
        fontSize="14px"
        color=""
        {...restProps}
      >
        <Button
          sx={{
            height: "44px",
            paddingX: "34px",
            color: "black",
            "&:hover": {
              background: "#394B73",
              color: "white",
            },
          }}
        >
          {children}
        </Button>
      </MuiLink>
    </NextLink>
  );
}

export default NavItem;
