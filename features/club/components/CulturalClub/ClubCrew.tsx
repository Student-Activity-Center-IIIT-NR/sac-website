import React from 'react'
import Box from "@mui/material/Box";
import club_background from "../../../../assets/club_background.png";
import Typography from "@mui/material/Typography";
import Image from 'next/image';
import crew1 from "../../../../assets/Mentor_1.png"

function ClubCrew() {
  return (
    <>
        <Box
        height={"296px"}
        sx={{
          marginTop: "261px",
          background: `url(${club_background.src}) no-repeat`,
          backgroundSize: "cover",
          maxHeight:"296px",
          alignItems:'center',
          display:'flex',
          justifyContent:'center',
          columnGap: "94px",

        }}
        
      >
            <Typography
              variant="body1"
              fontFamily={"Cotta"}
              fontStyle={"Regular"}
              fontWeight={400}
              fontSize={"48px"}
              lineHeight={"70px"}
              color={"#FFFFFF"}
              sx={{textAlign:'center',display:'flex',alignItems:'center',justifyContent:'center'}}
            >
              Meet the <br/>crew
            </Typography>

            <Image alt="" src={crew1} height={"380px"}/>

            <Image alt="" src={crew1} height={"380px"}/>

      </Box>
    </>
  )
}

export default ClubCrew
