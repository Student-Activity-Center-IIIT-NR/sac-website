import { Stack, styled } from "@mui/system";
import Image from "next/image";
import React from "react";
import fbIcon from "../../../../assets/icon_col_fb.svg";
import twitterIcon from "../../../../assets/icon_col_twitter.svg";
import instaIcon from "../../../../assets/icon_col_instagram.svg";
import linkedinIcon from "../../../../assets/icon_col_linkedin.svg";

type Props = {};

const SocialsContainerStyled = styled(Stack)({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10.6px 22px",
  gap: "19.4px",
  boxShadow: `
        -5px 5px 10px rgba(230, 230, 230, 0.2),
        5px -5px 10px rgba(230, 230, 230, 0.2),
         -5px -5px 10px rgba(255, 255, 255, 0.9), 
         5px 5px 13px rgba(230, 230, 230, 0.9), 
         inset 1px 1px 2px rgba(255, 255, 255, 0.3), 
         inset -1px -1px 2px rgba(230, 230, 230, 0.5)`,
  borderRadius: "314.8px",
  width: "198px",
  height: "44px",
});

function SocialsPanel({}: Props) {
  return (
    <SocialsContainerStyled>
      <Image src={fbIcon} />
      <Image src={twitterIcon} />
      <Image src={instaIcon} />
      <Image src={linkedinIcon} />
    </SocialsContainerStyled>
  );
}

export default SocialsPanel;
