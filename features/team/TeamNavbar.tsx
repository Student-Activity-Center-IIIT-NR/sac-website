import React, { ReactNode, useState } from "react";
import TeamLinks from "./TeamLinks";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ScrollContainer from "./ScrollContainer";

interface TabPanelProps {
  children?: ReactNode;
  index: string;
  value: string;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...rest } = props;

  return (
    <Box hidden={value !== index} {...rest}>
      {value === index && <Box>{children}</Box>}
    </Box>
  );
};

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

      <TabPanel value={value} index={TeamLinks[0].name}>
        <ScrollContainer
          teamName=""
          gradient="linear-gradient(90deg, #757F9A 0%, #D7DDE8 100%)"
        />
        <ScrollContainer
          teamName="Website Management Team"
          gradient="linear-gradient(90deg, #C84E89 0%, #F15F79 100%)"
        />
        <ScrollContainer
          teamName="App Management Team"
          gradient="linear-gradient(90deg, #E65C00 0%, #F9D423 100%)"
        />
        <ScrollContainer
          teamName="Design Team"
          gradient="linear-gradient(90deg, #1D976C 0%, #93F9B9 100%)"
        />
        <ScrollContainer
          teamName="Content Writer Team"
          gradient="linear-gradient(90deg, #D31027 0%, #EA384D 100%)"
        />
      </TabPanel>
      <TabPanel value={value} index={TeamLinks[1].name}>
        <ScrollContainer
          teamName="Website Management Team"
          gradient="linear-gradient(90deg, #C84E89 0%, #F15F79 100%)"
        />
      </TabPanel>
      <TabPanel value={value} index={TeamLinks[2].name}>
        <ScrollContainer
          teamName="App Management Team"
          gradient="linear-gradient(90deg, #E65C00 0%, #F9D423 100%)"
        />
      </TabPanel>
      <TabPanel value={value} index={TeamLinks[3].name}>
        <ScrollContainer
          teamName="Design Team"
          gradient="linear-gradient(90deg, #1D976C 0%, #93F9B9 100%)"
        />
      </TabPanel>
      <TabPanel value={value} index={TeamLinks[4].name}>
        <ScrollContainer
          teamName="Content Writer Team"
          gradient="linear-gradient(90deg, #D31027 0%, #EA384D 100%)"
        />
      </TabPanel>
    </>
  );
};

export default TeamNavbar;
