import React from 'react'
import { AppBar,Tab,Tabs } from '@mui/material'
import { useState } from 'react'
export const MuiNavBar = () => {


    const [value,setValue]=useState(0);
    const handleChange=(event: React.ChangeEvent<{}>,newValue: number)=>{
        setValue(newValue);
    }
    const style={ 
        height:"60px",
        borderRadius:"1000px",
        "& a:hover": {
        background: "#FFFFFF",
        borderRadius:"1000px",
            color:"#355389",
            boxShadow:"-5px 5px 10px rgba(230, 230, 230, 0.2), 5px -5px 10px rgba(230, 230, 230, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.9), 5px 5px 13px rgba(230, 230, 230, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(230, 230, 230, 0.5)"
        },
        "& a:active":{
            backgroundColor:"#FFFFFF" ,borderRadius:"1000px", boxShadow:"-5px 5px 10px rgba(230, 230, 230, 0.2), 5px -5px 10px rgba(230, 230, 230, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.9), 5px 5px 13px rgba(230, 230, 230, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(230, 230, 230, 0.5)",
        },
        "& a": {
            fontFamily:"Rubik",
            fontWeight:400,
            fontSize:"14px",   
            color:"#272727", 
            height:"60px",
            width:"160px",
            marginY:"1px",
            marginX:"15px",
            justifyitems:"center",
        },
        "& a.Mui-selected":{backgroundColor:"#FFFFFF" ,borderRadius:"1000px", boxShadow:"-5px 5px 10px rgba(230, 230, 230, 0.2), 5px -5px 10px rgba(230, 230, 230, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.9), 5px 5px 13px rgba(230, 230, 230, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(230, 230, 230, 0.5)",}
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
                TabIndicatorProps={{
                    hidden:true,
                }}
                sx={style}
        >   
                    <Tab  label="ALL" href='#card'/>
                    <Tab  label="WEBSITE" href="#"/>
                    <Tab  label="APP" href="#"/>
                    <Tab  label="DESIGN" href="#"/>
                    <Tab  label="CONTENT" href="#"/>
        </Tabs>
</AppBar>
    )
}

