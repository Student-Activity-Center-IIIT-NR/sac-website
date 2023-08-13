import React, { ReactNode, useContext, useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ScrollContainer from "./ScrollContainer";
import { TeamData } from "./TeamData";
import { SessionContext } from "../../contexts/TeamContext";
import { StaticImageData } from "next/image";

interface TabPanelProps {
  children?: ReactNode;
  index: string;
  value: string;
}

// need to update on every data add
type CurrYear = 1819 | 1920 | 2021 | 2122 | 2223 | 2324 ;

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...rest } = props;

  return (
    <Box hidden={value !== index} {...rest}>
      {value === index && <Box>{children}</Box>}
    </Box>
  );
};

const TeamNavbar = () => {
  const { year } = useContext(SessionContext);

  const [value, setValue] = useState("core");
  const [session, setSession] = useState(TeamData[2324]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  useEffect(() => {
    let value: any = year.toString().concat((year + 1).toString());
    let currYear: CurrYear = value;
    setSession(TeamData[currYear]);
    setValue("core");
  }, [year]);

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
        {Object.keys(session).map((item, index) => {
          return (
            <Tab
              disableRipple
              disabled={!item}
              label={item === "core" ? "All" : item}
              value={item}
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

      <TabPanel value={value} index={Object.keys(session)[0]}>
        {session.core && (
          <ScrollContainer
            teamName="Core Team"
            gradient="linear-gradient(90deg, #C84E89 0%, #F15F79 100%)"
            teamData={session.core}
          />
        )}

        {session.web && (
          year ===23 ? (
          <ScrollContainer
            teamName="Website Management Team (Media & IT Cell)"
            gradient="linear-gradient(90deg, #C84E89 0%, #F15F79 100%)"
            teamData={session.web}
          />):( <ScrollContainer
            teamName="Website Management Team"
            gradient="linear-gradient(90deg, #C84E89 0%, #F15F79 100%)"
            teamData={session.web}
          />)
        )}
      {session.design && (
        year ===23 ? (
      <ScrollContainer
      teamName="Design & Documentation Team (Media & IT Cell)"
      gradient="linear-gradient(90deg, #1D976C 0%, #93F9B9 100%)"
      teamData={session.design}
    />
  ) : (
    <ScrollContainer
      teamName="Design Team"
      gradient="linear-gradient(90deg, #1D976C 0%, #93F9B9 100%)"
      teamData={session.design}
    />
  )
)}
        {session.documentation && (
          year ===23 ? (null
          ):(<ScrollContainer
            teamName="Documentation Team"
            gradient="linear-gradient(90deg, #D31027 0%, #EA384D 100%)"
            teamData={session.documentation}
          />)
        )}
        {}
        {session.social && (
          year===23?(<ScrollContainer
            teamName="Social Media Management Team (Media & IT Cell)"
            gradient="linear-gradient(90deg, #E65C00 0%, #F9D423 100%)"
            teamData={session.social}
          />):
          <ScrollContainer
            teamName="Social Media Management Team"
            gradient="linear-gradient(90deg, #E65C00 0%, #F9D423 100%)"
            teamData={session.social}
          />
        )}
      </TabPanel>
      <TabPanel value={value} index={Object.keys(session)[1]}>
        {year ===23 ? (
        <ScrollContainer
          teamName="Website Management Team (Media & IT Cell)"
          gradient="linear-gradient(90deg, #C84E89 0%, #F15F79 100%)"
          teamData={session.web}
        />):(<ScrollContainer
          teamName="Website Management Team"
          gradient="linear-gradient(90deg, #C84E89 0%, #F15F79 100%)"
          teamData={session.web}
        />)}
      </TabPanel>
      <TabPanel value={value} index={Object.keys(session)[2]}>
        {year===23 ? (
        <ScrollContainer
          teamName="Design & Documentation Team (Media & IT Cell)"
          gradient="linear-gradient(90deg, #1D976C 0%, #93F9B9 100%)"
          teamData={session.design}
        />):( <ScrollContainer
          teamName="Design Team"
          gradient="linear-gradient(90deg, #1D976C 0%, #93F9B9 100%)"
          teamData={session.design}
        />)}
      </TabPanel>
      <TabPanel value={value} index={Object.keys(session)[3]}>
      {year === 23 ? ( // Check if it's the year 2023
    <ScrollContainer
      teamName="Social Media Management Team (Media & IT Cell) " // Show Social Media directly
      gradient="linear-gradient(90deg, #E65C00 0%, #F9D423 100%)"
      teamData={session.social}
    />
  ) : (
    <ScrollContainer
      teamName="Documentation Team"
      gradient="linear-gradient(90deg, #D31027 0%, #EA384D 100%)"
      teamData={session.documentation}
    />)}
      </TabPanel>
      <TabPanel value={value} index={Object.keys(session)[4]}>
        <ScrollContainer
          teamName="Social Media Management Team"
          gradient="linear-gradient(90deg, #E65C00 0%, #F9D423 100%)"
          teamData={session.social}
        />
      </TabPanel>
    </>
  );
};

export default TeamNavbar;
