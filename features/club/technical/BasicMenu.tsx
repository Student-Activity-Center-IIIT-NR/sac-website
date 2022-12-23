import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";
import BoxIcon from "../../../assets/icon_box.svg";

const StyledTypography = styled(Typography)({
  fontFamily: "JetBrains Mono",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "24px",
  lineHeight: "28px",
  color: "#565A6E",
});

const StyledTypographyLink = styled(Typography)({
  fontFamily: "JetBrains Mono",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "24px",
  lineHeight: "28px",
  color: "#565A6E",
  "&:hover": {
    color: "#73DACA",
  },
});

const BasicMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        width: "352px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: open ? "rgba(255, 255, 255, 0.9)" : "transparent",
        borderTopLeftRadius: open ? "24px" : "0px",
        borderTopRightRadius: open ? "24px" : "0px",
        p: "17px 25px 0px 22px",
        transition: "all 200ms ease-in-out",
      }}
    >
      <Button
        disableRipple
        disableElevation
        onClick={handleClick}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          columnGap: "30px",
          ":hover": {
            bgcolor: "transparent",
          },
        }}
      >
        <StyledTypography sx={{ textDecorationLine: "underline" }}>
          Technical Clubs
        </StyledTypography>
        <Image src={BoxIcon} width={"42px"} height={"42px"} alt="" />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        sx={{
          translate: "1px 0px",
          gap: "10px 10px",
          ".MuiPopover-paper": {
            width: "352px",
            pl: 4,
            pb: "52px",
            borderBottomLeftRadius: "24px",
            borderBottomRightRadius: "24px",
            borderTopLeftRadius: "0px",
            borderTopRightRadius: "0px",
            boxShadow: "none",
          },

          ".MuiMenu-list": {
            display: "flex",
            flexDirection: "column",
            rowGap: "15px",
          },
        }}
      >
        <MenuItem
          onClick={handleClose}
          disableRipple
          //   onMouseEnter={(e) => (e.target.style.backgroundColor = "transparent")}
        >
          <StyledTypographyLink>{"// TSOC"}</StyledTypographyLink>
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          disableRipple
          //   onMouseEnter={(e) => (e.target.style.backgroundColor = "transparent")}
        >
          <StyledTypographyLink>{"// AIML"}</StyledTypographyLink>
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          disableRipple
          //   onMouseEnter={(e) => (e.target.style.backgroundColor = "transparent")}
        >
          <StyledTypographyLink>{"// CipherCell"}</StyledTypographyLink>
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          disableRipple
          //   onMouseEnter={(e) => (e.target.style.backgroundColor = "transparent")}
        >
          <StyledTypographyLink>{"// Inquizitive"}</StyledTypographyLink>
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          disableRipple
          //   onMouseEnter={(e) => (e.target.style.backgroundColor = "transparent")}
        >
          <StyledTypographyLink>{"// Comet"}</StyledTypographyLink>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default BasicMenu;
