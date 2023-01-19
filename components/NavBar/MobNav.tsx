import React from 'react'
import SacBranding from "../common/SacBranding";
import sacLogo from "../../assets/sac_logo.png";
import { Divider, Stack } from '@mui/material';
import styled from '@emotion/styled';
import Hamburger from 'hamburger-react'
import { useState } from 'react';
import NavItem from "./NavItem";
import navLinks from "./navLinks";


const NavRightContainer = styled(Stack)({
  background: "white",
  height: "80px",
  paddingLeft: "25px",
  paddingRight:"25px",
  paddingTop:"20px",
  flexDirection:"row",
  justifyContent:"space-between",
});



const MobNav = ({}: Props, ref) => {
  const [isOpen, setOpen] = useState(false)

  return(
    <>
    <NavRightContainer>
    <div>
    <SacBranding
    width="65px"
    height="65px"
    url={sacLogo}
    />
    </div>
    <div>
    <Hamburger 
    color='#1C1B1F' 
    toggled={isOpen} 
    toggle={setOpen} 
    />
    </div>
    </NavRightContainer>

    {
      isOpen?
      navLinks.map((link, index) => {
        return (
          <>
          <NavItem key={index} href={link.url} mx="auto">
            {link.name}
          </NavItem>
          <Divider/>
          </>
        );
      }):""
    }

    </> 
  )
}

export default MobNav