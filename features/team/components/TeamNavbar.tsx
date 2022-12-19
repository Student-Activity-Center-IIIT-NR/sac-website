import React, { useState } from "react";
import TeamLinks from "./TeamLinks";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const TeamNavbar = () => {
  const [value, setValue] = useState("All");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        variant="standard"
        indicatorColor="primary"
        TabIndicatorProps={{
          sx: {
            height: "60px",
            background: "#ffffff",
            boxShadow:
              "-5px 5px 10px rgba(230, 230, 230, 0.2), 5px -5px 10px rgba(230, 230, 230, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.9), 5px 5px 13px rgba(230, 230, 230, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(230, 230, 230, 0.5)",
            borderRadius: "1000px",
          },
        }}
        sx={{
          maxWidth: "939px",
          bgcolor: "#f6f6f6",
          borderRadius: "1000px",
          m: "auto",
          py: "7px",
          px: "8px",
          my: "70px",
          ".MuiTabs-flexContainer": {
            justifyContent: "space-between",
            columnGap: "31px",
          },
        }}
      >
        {TeamLinks.map((item, index) => {
          return (
            <Tab
              disableRipple
              label={item.name}
              value={item.name}
              key={index}
              sx={{
                width: "160px",
                height: "60px",
                fontFamily: "Rubik",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "17px",
                textAlign: "center",
                letterSpacing: "0.08929em",
                textTransform: "uppercase",
                color: "#272727",
                zIndex: 1,
              }}
            />
          );
        })}
      </Tabs>
    </>
  );
};

export default TeamNavbar;
