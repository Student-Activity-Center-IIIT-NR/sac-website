import React, { ReactNode, useMemo } from "react";
import NextLink from "next/link";
import {
  ButtonProps,
  Link as MuiLink,
  LinkProps,
  styled,
  useTheme,
} from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/system";

type Props = {
  children: ReactNode;
  href?: string;
  buttonPadding?: string;
  buttonHoverPadding?: string;
};

function NavItem({ href, ...props }: Props & LinkProps) {
  return (
    <>
      {href ? (
        <NextLink href={href} passHref>
          <NavLink {...props} />
        </NextLink>
      ) : (
        <NavLink {...props} />
      )}
    </>
  );
}

function NavLink({ children, href, ...restProps }: Props & LinkProps) {
  return (
    <MuiLink
      underline="none"
      fontWeight="500"
      fontSize="0.6px"
      color=""
      {...restProps}
    >
      <Button
        sx={{
          height: "34px",
          paddingX: "24px",
          marginX: "10px",
          color: "black",
          transition: "all 200ms",
          "&:hover": {
            height: "44px",
            paddingX: "34px",
            marginX: "0",
            background: "#394B73",
            color: "white",
          },
        }}
      >
        {children}
      </Button>
    </MuiLink>
  );
}

export default NavItem;
