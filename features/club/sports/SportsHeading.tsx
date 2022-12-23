import React from 'react'
import { Stack,Typography,Box} from "@mui/material";
import Image from "next/image";
import AtharvLogo from "../../../assets/atharv_logo.png";
import UpcomingEvents from './UpcomingEvents';
import { EventData } from './EventData';


const SportsHeading = () => {
  return (
  <>
   <Stack direction={"row"} textAlign="right" maxWidth="lg" justifyContent="space-between" mx="auto" height="350px" mt="10px">
    <Stack direction={"row"} spacing={4} height="250px" marginTop="60px">
    <Image 
    src={AtharvLogo}
    height="248px"
    width="248px"
    alt="Atharv_IIITNR"
    />
     <Stack  maxWidth="240px" textAlign="left" paddingTop={3}>
      <Typography fontSize={"14px"} lineHeight="20px" fontWeight={800} width="180px" fontFamily="Lato">
      The Official Sports Club of IIIT Naya Raipur
      </Typography>
      <Typography fontSize={"14px"} lineHeight="28px" fontWeight={400} fontFamily="Lato" color="#6B7280">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Fusce accumsan metus pulvinar, fringilla sapien sed, faucibus
        neque Proin dignissim tincidunt sapien, vitae tristique 
        velit vehicula a
      </Typography>  
      </Stack>
     </Stack>
     <Stack rowGap="50px" width="42%">
      <Typography fontSize={"48px"} textAlign="right" fontFamily="Touchdown Font" fontStyle="regular" color="#000000"  fontWeight={1000}>
       UPCOMING EVENTS
      </Typography>
      <Box 
      sx={{
        display:"flex",
        flexDirection:"column",
        rowGap:"16px"
      }}
      >
        <UpcomingEvents IconName={require('../../../assets/atharv_event1_icon.svg')} Date={EventData[0].Date} EventNo={EventData[0].event} Content={EventData[0].Info}/>
        <UpcomingEvents IconName={require('../../../assets/atharv_event2_icon.svg')} Date={EventData[1].Date} EventNo={EventData[1].event} Content={EventData[1].Info}/>
       </Box>
     </Stack>
  </Stack>
  </>
  )
}

export default SportsHeading

