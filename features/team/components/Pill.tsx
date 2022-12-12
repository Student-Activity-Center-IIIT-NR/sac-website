import React from 'react'
import { AppBar,Tab,Tabs } from '@mui/material'
import { useState } from 'react'


export const Pill = () => {
        
    const [value,setValue]=useState(1);
    const handleChange=(event: React.ChangeEvent<{}>,newValue: number)=>{
        setValue(newValue);
    }
    const style={ 
        overflow:"visible",
        overflowX:"visible",
        "& a": {
            fontFamily:"Rubik",
            fontWeight:400,
            fontSize:"14px",   
            color:"#272727", 
            height:"60px",
            width:"160px",
            justifyitems:"center",
            zIndex:2,
        },
        '& .MuiTabs-indicator':{
            height:"60px",
            width:"160px",
            borderRadius:"1000px",
            backgroundColor:"#FFFFFF",
            boxShadow:"-5px 5px 10px rgba(230, 230, 230, 0.2), 5px -5px 10px rgba(230, 230, 230, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.9), 5px 5px 13px rgba(230, 230, 230, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(230, 230, 230, 0.5)",
        },
        '& .css-heg063-MuiTabs-flexContainer':{
            gap:"1.8rem",
        },
        '& .MuiTabs-scroller':{
            overflowX:"visible",
        },
        '& .css-o0i26b-MuiTabs-indicator':{
            transition:"all 700ms cubic-bezier(0.5, 1.2, 0.5, 1.2) 2ms",
        },  
    }   

  return (
 <AppBar position='static' sx={{
            width:"939px",
            height:"74px", 
            borderRadius:"1000px",
            margin:"auto",
            background:"#F6F6F6",
            boxShadow:0,
            alignItems:"center",  
            justifyContent:"center",
        }}
        > 
         <Tabs 
                value={value}
                onChange={handleChange}
                sx={style}
         >          
                    <Tab disabled/>
                    <Tab  label="ALL" href='#card'/>
                    <Tab  label="WEBSITE" href="#"/>
                    <Tab  label="APP" href="#"/>
                    <Tab  label="DESIGN" href="#"/>
                    <Tab  label="CONTENT" href="#"/>
                    <Tab disabled/>
        </Tabs>
</AppBar>
    )
}