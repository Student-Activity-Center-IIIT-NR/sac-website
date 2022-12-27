import React from 'react';
import Image from 'next/image';
import SacLogo from '../../assets/cultural_clubs_bg/cultural_overview_bg.jpg';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ClubStyle from "../../styles/Clubs.module.css";
import { styled } from "@mui/material";
import StarIcon from "../../assets/icon_star_white.svg"
 import Link from 'next/link';

const myStyle={
    backgroundImage: 
      `url(${SacLogo.src})`,
    height:'150vh',
    backgroundSize:"contain",
    backgroundRepeat: 'no-repeat',

};

const StyledTypography = styled(Typography)({
    fontFamily: "Baskervville",
    fontStyle: "italic",
    fontWeight: "400",
    fontSize: "36px",
    color: "#FFFFFF",
    cursor:"pointer"
  });

const CulturalOverview = () => {
  return (
    <>
        <Box style={myStyle}>
            <Stack>
                <Box>
                <Typography
                sx={{
                    fontSize:"98px",
                    textAlign:"center",
                    fontFamily:"cotta",
                    color:"#FFFFFF",
                    mt:"252px",
                    zIndex:"3"
                }}
                >
                  Cultural Clubs 
                </Typography>
                </Box>
                <Box zIndex={5} sx={{
                    marginTop:"-60px",
                    width:"469px",
                    mx:"auto",
                    textAlign:"right"
                }}>
                 <Image src={StarIcon}/>
                </Box>
                <Typography
                      sx={{
                          fontSize:"30px",
                          textAlign:"center",
                          fontFamily:"Baskervville",
                          color:"#FFFFFF",
                          width:"748px",
                          mt:"50px",
                          mx:"auto",
                        }}
                        >
                Art, Dance, Singing, Poetry, Photography, Debate, Literary
                </Typography>
            </Stack>
            <Grid2  mt="5%" container  width="98%" mx="auto" textAlign="center">    
                      <Grid2
                        md={3}
                        mt="70px"
                        >
                        <Link href="">
                        <StyledTypography
                          className={ClubStyle.culturalOverview}
                          >
                        Indradhanush
                        </StyledTypography>
                          </Link>       
                      </Grid2>
                      <Grid2
                        md={2.4}
                        mt="70px"
                      >
                        <Link href="">
                        <StyledTypography
                          className={ClubStyle.culturalOverview}
                          >
                            Capriccio
                        </StyledTypography>
                        </Link>
                      </Grid2>
                      <Grid2
                        md={2.4}
                        mt="70px"
                      >
                        <Link href="">
                        <StyledTypography
                          className={ClubStyle.culturalOverview1} 
                          // different class
                          >
                            ShutterBug
                        </StyledTypography>
                          </Link>
                      </Grid2>
                      <Grid2
                        md={4}
                        mt="70px"
                      >
                        <Link href="">
                        <StyledTypography
                          className={ClubStyle.culturalOverview}
                          >
                        Club De Theatre
                        </StyledTypography>
                          </Link>
                      </Grid2>

                      <Grid2
                        md={2}
                        mt="70px"
                      >
                      <Link href="">
                        <StyledTypography
                          className={ClubStyle.culturalOverview}
                        >
                        Igniters
                        </StyledTypography>
                        </Link>
                      </Grid2>
                      <Grid2
                        md={3}
                        mt="70px"
                      >
                        <Link href="">
                        <StyledTypography
                          className={ClubStyle.culturalOverview}
                        >
                        Cover to Cover
                        </StyledTypography>
                        </Link>
                      </Grid2>
                      <Grid2
                        md={2.9}
                        mt="70px"
                      >
                        <Link href="">
                        <StyledTypography
                          className={ClubStyle.culturalOverview}
                          >
                            Take da bait
                        </StyledTypography>
                        </Link>
                      </Grid2>
                      <Grid2
                        md={4.1}
                        mt="70px"
                      >
                        <Link href="">
                        <StyledTypography
                          className={ClubStyle.culturalOverview}
                          >
                        Model United Nations
                        </StyledTypography>
                         </Link>
                      </Grid2>
              </Grid2>
        </Box>
    </>
  )
}

export default CulturalOverview