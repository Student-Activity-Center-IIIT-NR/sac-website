import {
  Button,
  FormControl,
  Input,
  styled,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import { Box, BoxProps, Container, Stack } from "@mui/system";
import React from "react";
import InputField from "../../../../components/common/InputField";
import SocialsPanel from "./SocialsPanel";
import artContactus from "../../../../assets/art_contactus.svg";
import Image from "next/image";

type Props = {};

const VectorBoxTop = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  background: "rgba(38, 74, 153, 0.2)",
  width: "361px",
  height: "94px",
  zIndex: -1,
});

const VectorBoxBottom = styled(Box)({
  position: "absolute",
  top: "82px",
  left: "271px",
  background: "rgba(179, 202, 255, 0.2)",
  width: "361px",
  height: "94px",
});

const ContactUsHeading = styled(Typography)({
  fontFamily: "Playfair Display",
  fontSize: "80px",
  letterSpacing: "0.2em",
  lineHeight: "107px",
  marginLeft: "22px",
  marginTop: "28.6px",
});

const ContactUsQuote = styled(Typography)({
  variant: "caption",
  fontFamily: "Rubik",
  fontSize: "20px",
  fontWeight: "500",
  lineHeight: "40px",
  mr: "25px",
});

function ContactUs({}: Props) {
  return (
    <Container maxWidth="lg" sx={{ position: "relative", marginY: "100px" }}>
      <Stack>
        <Box position="relative">
          <VectorBoxTop />
          <ContactUsHeading variant="h1">Contact Us</ContactUsHeading>
          <VectorBoxBottom />
        </Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          ml="22px"
          mt="40px"
        >
          <ContactUsForm />
          <Image src={artContactus} />
        </Stack>
        <Stack />
      </Stack>
    </Container>
  );
}

function ContactUsForm() {
  return (
    <FormControl>
      <Stack gap="25px">
        <ContactUsQuote>
          Lets unlock together the next level
          <br /> of possibilities!
          <br />
          Reach out.
        </ContactUsQuote>
        <InputField label="Name" />
        <InputField label="Email" />
        <TextField
          label="Message"
          variant="filled"
          multiline
          minRows={8}
          sx={{
            "& .MuiFilledInput-root": {
              background: "rgba(219, 230, 255, 0.4)",
            },
          }}
        />
        <Stack direction="row" justifyContent="space-between">
          <Button type="submit">Submit</Button>
          <SocialsPanel />
        </Stack>
      </Stack>
    </FormControl>
  );
}

export default ContactUs;
