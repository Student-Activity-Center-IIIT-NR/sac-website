import React, { ReactNode } from "react";
import NextLink from "next/link";
import { Button } from "@mui/material";

type Props = {
  children: ReactNode;
  href?: string;
  buttonPadding?: string;
  buttonHoverPadding?: string;
  mx?: number | string;
};

function NavItem({ href, children, mx, ...props }: Props) {
  const sxProps = {
    height: "34px",
    paddingX: "24px",
    marginX: mx !== undefined ? mx : "10px",
    color: "black",
    textDecoration: "none",
    fontWeight: 500,
    fontSize: "0.875rem",
    whiteSpace: "nowrap",
    transition: "all 200ms",
    "&:hover": {
      height: "44px",
      paddingX: "34px",
      marginX: "0",
      background: "#394B73",
      color: "white",
    },
  };

  if (href) {
    return (
      <Button
        component={NextLink}
        href={href}
        sx={sxProps}
        {...props}
      >
        {children}
      </Button>
    );
  }

  return (
    <Button
      sx={sxProps}
      {...props}
    >
      {children}
    </Button>
  );
}

export default NavItem;
