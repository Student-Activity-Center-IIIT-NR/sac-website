import React from "react";
import ClubsLayout from "../../../layouts/ClubsLayout";
import TechnicalClub from "../../../features/club/technical/TechnicalClub";
import ClubDescription from "../../../features/club/technical/ClubDescription";
import Box from "@mui/material/Box";
import Crew from "../../../features/club/common/Crew";
import Gallery from "../../../features/club/common/Gallery";
import cipherBg from "../../../assets/technical_clubs_bg/ciphercell.png";
import cipherBgTop from "../../../assets/technical_clubs_bg/bg_cipher_top.svg";
import cipherBgBottom from "../../../assets/technical_clubs_bg/bg_cipher_bottom.svg";
import cipherLogo from "../../../assets/technical_clubs_bg/ciphercell_logo.png";
import { StaticImageData } from "next/image";
import { ciphercell } from "../../../data/TechnicalClubCrew";

// import events
import ctf1 from "../../../assets/club_event_pics/technical/ctf1.jpeg";
import ctf2 from "../../../assets/club_event_pics/technical/ctf2.jpeg";
import ctf3 from "../../../assets/club_event_pics/technical/ctf3.jpeg";
import ctf4 from "../../../assets/club_event_pics/technical/ctf4.jpeg";

const Ciphercell = () => {
  return (
    <>
      <ClubsLayout>
        <TechnicalClub
          name="Ciphercell"
          desc="The Information Security Club"
          bgTop={cipherBgTop}
          logo={cipherLogo}
          color="#F7768E"
          event1Name="Cryptic Hunt"
          event1Date="February 19, 2023"
          event1Desc="Introduction to Cryptography"
          event2Name="CTF Workshop"
          event2Date="April 2, 20233"
          event2Desc="Workshop on Capture The Flag"
        />
        <ClubDescription bg={cipherBg}>
          CipherCell is an official cybersecurity club at IIIT-NR. The goal of
          the club is to raise awareness about hacking and to dispel negative
          stereotypes associated with the field while educating those who are
          interested in cybersecurity. Many people overlook the importance of
          cybersecurity in maintaining the stability of our internet-dependent
          society, but without proper security protocols, institutions like
          banks and management systems can be compromised quickly.
          Unfortunately, there are still many misconceptions about
          cybersecurity, with some people feeling intimidated by the field and
          others having a negative perception of it. A cyber attack can be just
          as devastating as a physical one, with the potential to rewrite your
          identity or completely erase you from the system. It&apos;s important
          to stay informed and take steps to protect yourself.
        </ClubDescription>
        <Box
          sx={{
            height: "fit-content",
            background: `url(${cipherBgBottom.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            pb: 6,
          }}
        >
          <Crew props={ciphercell} />
          <Gallery props={gallery} />
        </Box>
      </ClubsLayout>
    </>
  );
};

export default Ciphercell;

interface GalleryProps {
  name: string;
  img: StaticImageData[];
  date: string;
}

const gallery: GalleryProps[] = [
  {
    name: "Intra College CTF",
    date: "28 March 2022",
    img: [ctf1, ctf2, ctf3, ctf4],
  },
];
