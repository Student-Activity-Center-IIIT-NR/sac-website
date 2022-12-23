import React from 'react'
import { Stack,Typography} from "@mui/material";
import Image from "next/image";
import AtharvLogo from "../../../assets/atharvLogo.png";


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
      <Typography fontSize={"64px"}  fontFamily="Touchdown Font" fontStyle="regular" color="#000000"  fontWeight={1000}>
      Upcoming Events
      </Typography>
  </Stack>
  </>
  )
}

export default SportsHeading

