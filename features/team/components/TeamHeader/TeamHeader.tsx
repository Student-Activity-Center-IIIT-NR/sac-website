import React from "react";
import HedaerBox from "./HedaerBox";
import { Box, Typography } from "@mui/material";

function TeamHeader() {
  return (
    <>
      <Box style={{width:'56%',margin:'auto'}}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}> 
        <Typography
          variant={"h1"}
          fontWeight={"450"}
          fontSize={"4.5rem"}
          fontFamily={"Work Sans"}
          lineHeight={"4.2rem"}
          textAlign={"center"}
          fontStyle={"normal"}
          padding={"1rem"}
        >
          Not just a team
          <br />
          but a big family
        </Typography>
        <div style={{padding:'1rem'}}>
          <HedaerBox />
        </div>
        </div>
        
      </Box>
    </>
  );
}

export default TeamHeader;
