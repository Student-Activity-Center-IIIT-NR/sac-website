import React from 'react'
import { Stack,Typography,styled,Box} from "@mui/material";
import Image, { StaticImageData } from 'next/image';


const CustomStyling = styled(Stack)({
    justifyContent:"space-between",
    maxWidth: "95%",
});

interface Iprops{
    IconName:StaticImageData
    Date?:string
    EventNo?:number
    Content?:string
}
  
const UpcomingEvents:React.FC<Iprops> = ({IconName,Date,EventNo,Content}) => {

return (
     <Box  sx={{
               display:"flex",
               flexDirection:"column",
               rowGap:"15px" 
            }}
     >
    <CustomStyling direction="row">
        <Box sx={{
            display:"flex",
            gap:"16px",
        }}> 
        <Image src={IconName}/>
        <Typography
        sx={{
            fontFamily:"Lato",
            lineHeight:"28px",
            color:"#565A6E",
            fontSize:"24px",
            fontWeight:"700"
        }} 
        >
            Event&nbsp;{EventNo}
        </Typography>
        </Box>     
    <Typography
    sx={{
        fontFamily:"Lato",
        lineHeight:"28px",
        color:"#565A6E",
        fontSize:"16px",
        textAlign:"right",
        fontWeight:"700"
        }}
        >
       {Date}
    </Typography>
    </CustomStyling>
    <Box sx={{
        width:"380px",
        textAlign:"left",
        marginX:"auto"
    }}>
    <Typography
    sx={{
        fontSize:"16px",
        color:"#6B7280",
        lineHeight:"28px",
        fontFamily:"Lato"
    }}
    >
    {Content}
    </Typography>
    </Box>    
 </Box> 
)
}

export default UpcomingEvents