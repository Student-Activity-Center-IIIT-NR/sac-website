import React, { ReactNode } from "react";
import NextLink from "next/link";
import { Link as MuiLink, LinkProps, SxProps, Theme } from "@mui/material";
import { Button } from "@mui/material";

type Props = {
  children: ReactNode;
  href?: string;
  buttonPadding?: string;
  buttonHoverPadding?: string;
  onClick?: () => void;
  sx?: SxProps<Theme>;
};

function NavItem({ href, onClick, sx, ...props }: Props & LinkProps) {
  return (
    <>
      {href ? (
        <NextLink href={href} passHref legacyBehavior>
          <NavLink onClick={onClick} sx={sx} {...props} />
        </NextLink>
      ) : (
        <NavLink onClick={onClick} sx={sx} {...props} />
      )}
    </>
  );
}

function NavLink({ children, href, onClick, sx, ...restProps }: Props & LinkProps) {
  return (
    <MuiLink
      underline="none"
      fontWeight="500"
      fontSize="1rem"
      color=""
      onClick={onClick}
      sx={sx}
      {...restProps}
    >
      <Button
        sx={{
          height: "34px",
          paddingX: "24px",
          marginX: "10px",
          color: "black",
          transition: "all 200ms",
          width: "100%",
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
