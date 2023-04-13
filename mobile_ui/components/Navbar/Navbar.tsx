import { FunctionComponent } from "react";
import React from "react";
import SacBranding from "../../../components/common/SacBranding";
import sacLogo from "../../../assets/sac_iiit_logo/sac_logo.png";
import Link from "next/link";
import navLinks from "../../../components/NavBar/navLinks";

interface NavbarProps {}

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
        </ul>
      </section>
    </>
  );
};

export default Navbar;
