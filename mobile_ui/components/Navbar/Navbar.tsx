import { FunctionComponent } from "react";
import React from "react";
import SacBranding from "../../../components/common/SacBranding";
import sacLogo from "../../../assets/sac_iiit_logo/sac_logo.png";
import Link from "next/link";
import navLinks from "../../../components/NavBar/navLinks";
import { Typography } from "@mui/material";
import NavUpdates from "./NavUpdates";

interface NavbarProps {}

const message = [
  {
    id: 1,
    uri: null,
    title: "Inauguration of the SAC Office!",
    msg: "The SAC office was inaugurated on the auspicious occasion of Saraswati Puja on 26th January 2023 by hon'ble director Dr. P.K. Sinha.",
  },
  {
    id: 2,
    uri: null,
    title: "SAC Website launched!",
    msg: "SAC is a student body established in the year 2018 that aims to support, develop and promote student activities at IIIT Naya Raipur",
  },
];

const Navbar: FunctionComponent<NavbarProps> = () => {
  return (
    <>
      <section className="top-nav">
        <div>
          <SacBranding width="65px" height="65px" url={sacLogo} />
        </div>
        <input id="menu-toggle" type="checkbox" />
        <label className="menu-button-container" htmlFor="menu-toggle">
          <div className="menu-button"></div>
        </label>
        <ul className="menu">
          {navLinks.map((link, index) => {
            return (
              <>
                <li key={index}>
                  <Link href={link.url}>{link.name}</Link>
                </li>
              </>
            );
          })}
          <li>
            <Typography
              sx={{
                color: "#355389",
                fontSize: "20px",
                mt: "30px",
                fontWeight: 600,
                fontFamily: "Rubik",
                lineHeight: "19px",
              }}
            >
              Latest Updates
            </Typography>
            <NavUpdates />
            <NavUpdates />
          </li>
        </ul>
      </section>
    </>
  );
};

export default Navbar;
