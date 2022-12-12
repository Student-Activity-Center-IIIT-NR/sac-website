import React from "react";
import TeamLinks from "./TeamLinks";
import { Box, Tab } from "@mui/material";

function TeamNavbar({ handleTabs,value,setValue } : {handleTabs:any,value:any,setValue:any}) {

  return (
    <>
      <Box
        sx={{
          width: "56.5%",
          bgcolor: "#F6F6F6",
          borderRadius: "30px",
          py: 1,
          my: 5,
        }}
        m="auto"
      >
        <div
          className="tab_animation"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          {TeamLinks.map((item, index) => {
            return (
              <>
                <Tab key={index}
                  label={item.name}
                  sx={{
                    background: value == item.name ? "white" : null,
                    borderRadius: value == item.name ? "30px" : null,
                    transition:
                      value == item.name ? "transform .5s ease" : null,
                  }}
                  onClick={() => handleTabs(item.name)}
                />
              </>
            );
          })}
        </div>
      </Box>
    </>
  );
}

export default TeamNavbar;
