import { styled } from "@mui/material";
import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import SacBranding from "../common/SacBranding";
import HeaderTop from "./HeaderTop";

const StyledHeader = styled(Stack)({
  boxShadow: `
    -40px 40px 80px rgba(235, 235, 235, 0.2),
    40px -40px 80px rgba(235, 235, 235, 0.2),
    -40px -40px 80px rgba(255, 255, 255, 0.9),
    40px 40px 100px rgba(235, 235, 235, 0.9)`,
});

type Props = {};

const MobHeader = React.forwardRef(({}: Props, ref) => {
  return (
    <StyledHeader color="white" px="20px" mt="40px">
      <Container maxWidth="xl" disableGutters>
        <Stack height="270px">
          <Stack gap="19px" ref={ref}>
            <Typography alignSelf="center" fontSize="16px">Welcome To</Typography>
            <SacBranding height="125px" />
            <Typography alignSelf="center">Since 2018</Typography>
            <Typography alignSelf="center" sx={{
                fontWeight:"600",
                fontSize:"16px"
            }}>Student Activity Center</Typography>
          </Stack>
        </Stack>
      </Container>
    </StyledHeader>
  );
});

MobHeader.displayName = "MobHeader";

export default MobHeader;
