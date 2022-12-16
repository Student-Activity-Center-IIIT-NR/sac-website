import React, { useState } from "react";
import { AppBar, Tab, Tabs } from "@mui/material";

const Pill = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const style = {
    "& a": {
      fontFamily: "Rubik",
      fontWeight: 400,
      fontSize: "14px",
      color: "#272727",
      height: "60px",
      width: "160px",
      zIndex: 2,
      paddingTop: "25px",
    },
    "& .css-1xf5rt2-MuiButtonBase-root-MuiTab-root.Mui-selected": {
      color: "#355389",
    },
    "& .MuiTabs-indicator": {
      height: "60px",
      width: "160px",
      borderRadius: "1000px",
      backgroundColor: "#FFFFFF",
      boxShadow:
        "-5px 5px 10px rgba(230, 230, 230, 0.2), 5px -5px 10px rgba(230, 230, 230, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.9), 5px 5px 13px rgba(230, 230, 230, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(230, 230, 230, 0.5)",
      marginBottom: "9px",
    },
    "& .css-8je8zh-MuiTouchRipple-root": {
      position: "relative",
    },
    "& .css-heg063-MuiTabs-flexContainer": {
      gap: "1.8rem",
    },
    "& .css-o0i26b-MuiTabs-indicator": {
      transition: "all 700ms cubic-bezier(0.4, 0.9, 0.5, 1.2) 2ms",
    },
    "& .css-jpln7h-MuiTabs-scroller": {
      height: "76px",
      width: "1100px",
      paddingLeft: "92px",
    },
  };

  return (
    <AppBar
      position="static"
      sx={{
        width: "939px",
        height: "74px",
        borderRadius: "1000px",
        margin: "auto",
        background: "#F6F6F6",
        boxShadow: 0,
        alignItems: "center",
        justifyContent: "center",
        mt: "72px",
        mb: "117px",
      }}
    >
      <Tabs value={value} onChange={handleChange} sx={style}>
        <Tab label="ALL" href="#" />
        <Tab label="WEBSITE" href="#" />
        <Tab label="APP" href="#" />
        <Tab label="DESIGN" href="#" />
        <Tab label="CONTENT" href="#" />
      </Tabs>
    </AppBar>
  );
};

export default Pill;
