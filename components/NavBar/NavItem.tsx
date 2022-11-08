import React from "react";
import NextLink from "next/link";
import {
  BoxProps,
  ButtonProps,
  Link as MuiLink,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import { Button } from "@mui/material";

type Props = {
  children: JSX.Element | string;
  href?: string;
};

function NavItem({ children, href, ...restProps }: Props & ButtonProps) {
  const theme = useTheme();
  return (
    <Button
      {...restProps}
      sx={{
        height: "44px",
        marginX: "10px",
        paddingX: "34px",
        ":hover": {
          background: "#394B73",
          color: "white",
        },
        ...restProps.sx,
      }}
    >
      {href ? (
        <NextLink href={href} passHref>
          <MuiLink underline="none" fontWeight="500" fontSize="14px" color="">
            {children}
          </MuiLink>
        </NextLink>
      ) : (
        children
      )}
    </Button>
  );
}

export default NavItem;
