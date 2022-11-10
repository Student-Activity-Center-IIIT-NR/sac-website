import React from 'react'
import { Box, Grid, Stack ,Link } from '@mui/material'
import {Typography} from '@mui/material'


const Footer = () => {
  return (
    
      <Box overflow='hidden'  sx={{
        boxShadow:'5px 5px 10px rgba(221, 221, 221, 0.2), -5px -5px 10px rgba(221, 221, 221, 0.2), 5px -5px 10px rgba(255, 255, 255, 0.9), -5px 5px 13px rgba(221, 221, 221, 0.9)',
    }}>
     <Grid container  marginX='auto' maxWidth='1300px' maxHeight='375px' >
     <Grid xs={9} width={'300px'} >
      <Box width={'300px'} height={'170px'} left={72.56}>
      <Box bgcolor='#D7DEE8' height={'58px'} width={'130px'}  position='absolute' marginLeft={25} marginTop={12} sx={{ zIndex: 1 }} ></Box>
      <Box bgcolor='rgba(239, 204, 77, 0.2)' height={'60px'} width={'140px'}  position='absolute' marginLeft={13} marginTop={15} sx={{ zIndex: 2 }} ></Box>
      <Box bgcolor='#D7DEE8' height={'60px'} width={'140px'}  position='absolute' marginLeft={1} marginTop={20} sx={{ zIndex: 1 }}  ></Box>
        <Typography
            variant="h1"
            fontSize={150}
            fontFamily={"Playfair Display"}
            fontStyle="normal"
            height={300}
            position='relative'
            fontWeight={500}
            lineHeight={"300.34px"}
            textAlign={"center"}
            color='#092159'
            sx={{  zIndex:5 }}
            marginLeft={4}
            >
           SAC
          </Typography>
        <Typography fontFamily='Lato' lineHeight={'12.8px'} fontWeight={400} color="#000000" >Student Activity Center</Typography>
       </Box>
       </Grid>
       <Grid xs={2}>
       <Stack spacing={1.5} marginY={4}>
        <Typography fontFamily='Playfair Display'>About</Typography>
        <Link underline="none" href='' fontFamily='Rubik' fontWeight={400} color='#000000'><Typography>About</Typography></Link>
        <Link underline="none" href='' fontFamily='Rubik' fontWeight={400} color='#000000' ><Typography>Teams</Typography></Link>
        <Link underline="none" href='' fontFamily='Rubik' fontWeight={400} color='#000000' ><Typography>Teams</Typography></Link>
        <Link underline="none" href='' fontFamily='Rubik' fontWeight={400} color='#000000'><Typography>Clubs</Typography></Link>
        <Link underline="none" href='' fontFamily='Rubik' fontWeight={400} color='#000000'><Typography>Gallery</Typography></Link>
        <Link underline="none" href='' fontFamily='Rubik' fontWeight={400} color='#000000'><Typography>Events</Typography></Link>
        <span></span>
        <span></span>
        <Typography  width={44} fontFamily='Playfair Display' lineHeight={'12.8px'} fontWeight={400} color="#1E293B">Socials</Typography>
        <Stack direction='row' height={15} spacing={1} marginY={2} width={150}>
          <Link href=''><svg width="30" height="23" viewBox="0 0 28 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M27.3425 2.63117C26.337 3.07672 25.2568 3.37777 24.1212 3.51384C25.2797 2.82023 26.1684 1.71959 26.5874 0.409427C25.5037 1.05247 24.3031 1.5197 23.0254 1.77017C22.0019 0.681575 20.5448 0 18.9312 0C15.834 0 13.322 2.51195 13.322 5.61155C13.322 6.04988 13.3726 6.47617 13.4665 6.888C8.80267 6.65318 4.67107 4.4194 1.90383 1.02598C1.42215 1.85687 1.14519 2.82023 1.14519 3.8462C1.14519 5.79218 2.13624 7.51057 3.64028 8.51607C2.72028 8.48597 1.85566 8.23429 1.09943 7.81403V7.88628C1.09943 10.6041 3.03216 12.8716 5.59951 13.387C5.12746 13.5147 4.63254 13.5821 4.12196 13.5821C3.7607 13.5821 3.40787 13.5484 3.06588 13.4834C3.77997 15.7111 5.85119 17.3344 8.30654 17.3777C6.38585 18.883 3.96662 19.7801 1.33906 19.7801C0.886286 19.7801 0.439529 19.7536 0 19.7018C2.48305 21.295 5.43092 22.2222 8.59796 22.2222C18.9179 22.2222 24.5596 13.6748 24.5596 6.26182C24.5596 6.02098 24.5535 5.77773 24.5427 5.53689C25.6385 4.74453 26.5898 3.7583 27.3401 2.63478L27.3425 2.63117Z" fill="black"/>
        </svg></Link>
        <Link href=''><svg width="30" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.3458 3.67253C22.3458 1.74288 20.6027 0 18.6735 0H3.9847C2.05407 0 0.31189 1.74288 0.31189 3.67253V18.3613C0.31189 20.291 2.05407 22.0339 3.9847 22.0339L11.3288 22.0338V13.916H8.42958L8.42963 10.4369H11.3288V8.6069C11.3288 6.13939 13.1821 3.9171 15.4614 3.9171H18.4287V7.58945H15.4614C15.1358 7.58945 14.8079 7.96154 14.8079 8.55257V10.4369L18.5768 10.4369L18.2868 13.916H14.8078V22.0338L18.6735 22.0339C20.6027 22.0339 22.3458 20.291 22.3458 18.3613V3.67253Z" fill="black"/>
        </svg></Link>
        <Link href=''><svg width="30" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.1362 0.0666666C8.32139 0.0123434 8.69917 0 11.7171 0C14.7356 0 15.1127 0.0129596 16.2973 0.0666666C17.4806 0.120374 18.2887 0.308646 18.9955 0.583333C19.7368 0.862434 20.4083 1.29974 20.9633 1.86482C21.5285 2.4198 21.9659 3.09137 22.2448 3.83272C22.5195 4.53951 22.7072 5.34754 22.7615 6.53024C22.8159 7.71543 22.8282 8.09321 22.8282 11.1111C22.8282 14.129 22.8152 14.5068 22.7615 15.692C22.7078 16.8746 22.5195 17.6827 22.2448 18.3895C21.9609 19.1198 21.5806 19.7401 20.9633 20.3574C20.4084 20.9225 19.7368 21.3599 18.9955 21.6389C18.2887 21.9135 17.4806 22.1012 16.298 22.1556C15.1127 22.2099 14.7349 22.2222 11.7171 22.2222C8.69917 22.2222 8.32139 22.2093 7.1362 22.1556C5.95349 22.1018 5.14546 21.9135 4.43867 21.6389C3.70842 21.3549 3.08806 20.9746 2.47078 20.3574C1.90559 19.8024 1.46826 19.1308 1.18929 18.3895C0.914603 17.6827 0.726947 16.8746 0.672624 15.692C0.6183 14.5068 0.605957 14.1296 0.605957 11.1111C0.605957 8.0926 0.618917 7.71543 0.672624 6.53087C0.726331 5.34754 0.914603 4.53951 1.18929 3.83272C1.46839 3.09142 1.90569 2.41988 2.47078 1.86482C3.02574 1.29964 3.69732 0.862303 4.43867 0.583333C5.14546 0.308646 5.95349 0.12099 7.1362 0.0666666ZM16.2072 2.06667C15.0356 2.01358 14.6837 2.00185 11.7171 2.00185C8.7504 2.00185 8.39855 2.01358 7.22695 2.06667C6.14361 2.11605 5.55534 2.29691 5.16398 2.44938C4.64546 2.65062 4.27509 2.89135 3.8862 3.28024C3.49794 3.66913 3.25657 4.03951 3.05534 4.55802C2.90287 4.94938 2.72201 5.53766 2.67262 6.62099C2.61953 7.7926 2.60781 8.14444 2.60781 11.1111C2.60781 14.0778 2.61953 14.4296 2.67262 15.6012C2.72201 16.6845 2.90287 17.2728 3.05534 17.6642C3.23334 18.1469 3.51726 18.5834 3.8862 18.942C4.24468 19.3109 4.68132 19.5948 5.16398 19.7728C5.55534 19.9254 6.14361 20.1062 7.22695 20.1556C8.39855 20.2087 8.74979 20.2204 11.7171 20.2204C14.6843 20.2204 15.0356 20.2087 16.2072 20.1556C17.2905 20.1062 17.8788 19.9254 18.2702 19.7728C18.7887 19.5716 19.1591 19.3309 19.548 18.942C19.9169 18.5835 20.2008 18.1469 20.3788 17.6642C20.5313 17.2728 20.7121 16.6845 20.7615 15.6012C20.8146 14.4296 20.8264 14.0778 20.8264 11.1111C20.8264 8.14444 20.8146 7.7926 20.7615 6.62099C20.7121 5.53766 20.5313 4.94938 20.3788 4.55802C20.1776 4.03951 19.9369 3.66913 19.548 3.28024C19.1591 2.89198 18.7887 2.65062 18.2702 2.44938C17.8788 2.29691 17.2905 2.11605 16.2072 2.06667ZM10.2984 14.5363C10.7482 14.7226 11.2302 14.8185 11.7171 14.8185C12.7004 14.8185 13.6433 14.4279 14.3386 13.7326C15.0339 13.0374 15.4245 12.0943 15.4245 11.1111C15.4245 10.1279 15.0339 9.18485 14.3386 8.48958C13.6433 7.7943 12.7004 7.4037 11.7171 7.4037C11.2302 7.4037 10.7482 7.4996 10.2984 7.68591C9.84848 7.87222 9.43983 8.1453 9.09556 8.48958C8.7513 8.83384 8.47821 9.24253 8.2919 9.69232C8.10558 10.1421 8.00969 10.6242 8.00969 11.1111C8.00969 11.598 8.10558 12.0801 8.2919 12.5299C8.47821 12.9797 8.7513 13.3884 9.09556 13.7326C9.43983 14.0769 9.84848 14.35 10.2984 14.5363ZM7.67873 7.07274C8.74977 6.0017 10.2024 5.39999 11.7171 5.39999C13.2318 5.39999 14.6844 6.0017 15.7555 7.07274C16.8265 8.14378 17.4282 9.59646 17.4282 11.1111C17.4282 12.6258 16.8265 14.0784 15.7555 15.1495C14.6844 16.2205 13.2318 16.8222 11.7171 16.8222C10.2024 16.8222 8.74977 16.2205 7.67873 15.1495C6.60769 14.0784 6.00599 12.6258 6.00599 11.1111C6.00599 9.59646 6.60769 8.14378 7.67873 7.07274ZM18.6945 6.25089C18.9477 5.99771 19.0899 5.65433 19.0899 5.29629C19.0899 4.93824 18.9477 4.59487 18.6945 4.3417C18.4413 4.08852 18.098 3.94629 17.7399 3.94629C17.3819 3.94629 17.0385 4.08852 16.7853 4.3417C16.5321 4.59487 16.3899 4.93824 16.3899 5.29629C16.3899 5.65433 16.5321 5.99771 16.7853 6.25089C17.0385 6.50406 17.3819 6.64629 17.7399 6.64629C18.098 6.64629 18.4413 6.50406 18.6945 6.25089Z" fill="black"/>
        </svg></Link>
        <Link href=''><svg width="30" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.4759 0H2.54009C1.63453 0 0.899658 0.717593 0.899658 1.60123V20.6188C0.899658 21.5037 1.63453 22.2222 2.54009 22.2222H21.4759C22.3821 22.2222 23.1219 21.5037 23.1219 20.6188V1.60123C23.1219 0.717593 22.3821 0 21.4759 0ZM7.4904 18.9364H4.19287V8.33179H7.4904V18.9364ZM5.84163 6.88179C4.78515 6.88179 3.93114 6.02562 3.93114 4.97006C3.93114 3.91605 4.78515 3.05988 5.84163 3.05988C6.89565 3.05988 7.75182 3.91605 7.75182 4.97006C7.75182 6.02562 6.89565 6.88179 5.84163 6.88179ZM19.8348 18.9364H16.5426V13.7796C16.5426 12.5494 16.5185 10.9676 14.8293 10.9676C13.1139 10.9676 12.8524 12.3074 12.8524 13.6904V18.9367H9.55768V8.33179H12.7197V9.77994H12.7648C13.2049 8.9466 14.2802 8.06728 15.8839 8.06728C19.2191 8.06728 19.8352 10.263 19.8352 13.1194V18.9364H19.8348Z" fill="black"/>
        </svg></Link>
        </Stack>
       </Stack>
       </Grid>
       <Grid xs={1}>
       <Stack spacing={1.5} marginY={4}>
         <Typography fontFamily='Playfair Display'>Useful links</Typography>
        <Link underline="none" href='' fontFamily='Rubik' fontWeight={400} color='#000000'><Typography>Dummy link</Typography></Link>
        <Link underline="none" href='' fontFamily='Rubik' fontWeight={400} color='#000000'><Typography>Dummy link</Typography></Link>
        <Link underline="none" href='' fontFamily='Rubik' fontWeight={400} color='#000000'><Typography>Dummy link</Typography></Link>
        <Link underline="none" href='' fontFamily='Rubik' fontWeight={400} color='#000000'><Typography>Dummy link</Typography></Link>
       </Stack>
       </Grid>
       </Grid>
       <Box width={'100%'} textAlign='center'   bgcolor='#F8FAFC'>
       <Typography  height={'30px'} top={'4780px'} lineHeight={'36.56px'} textAlign='center' color='#000000' alignSelf='center'> 
             <b>Designed and developed by</b> Olive Yew, Aida Bugg, Maureen Biologist, Teri Dactyl, Peg Legge, Allie Grater, Liz Erd, A. Mused.
        </Typography>
        <Typography   height={'30px'} top={'4780px'} lineHeight={'25.56px'} textAlign='center' color='#475569'> 
        Copyright © Student Activity Center, International Institute of Information Technology Naya Raipur, 2023. </Typography>
       </Box>
       </Box>

  )
}

export default Footer