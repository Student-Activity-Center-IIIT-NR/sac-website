import {
  Alert,
  Button,
  FormControl,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container, Stack } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import InputField from "../../../components/common/InputField";
import SocialsPanel from "./SocialsPanel";
import artContactus from "../../../assets/static/art_contactus.svg";
import Image from "next/image";
import Snackbar from "@mui/material/Snackbar";

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
          <Image src={artContactus} alt="" />
        </Stack>
        <Stack />
      </Stack>
    </Container>
  );
}

function ContactUsForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = values;

  const [open, setOpen] = useState(false);
  const [error, setError] = useState({
    icon: "success",
    msg: "",
  });

  const handleClick = () => {
    if (name === "") {
      setError({
        icon: "error",
        msg: "Name Not Found!",
      });
    } else if (email === "") {
      setError({
        icon: "error",
        msg: "Email Not Found!",
      });
    } else if (
      !email.match(
        "^([A-Z|a-z|0-9](.|_){0,1})+[A-Z|a-z|0-9]@([A-Z|a-z|0-9])+((.){0,1}[A-Z|a-z|0-9]){2}.[a-z]{2,3}$"
      )
    ) {
      setError({
        icon: "error",
        msg: "Invalid Email!",
      });
    } else if (message === "") {
      setError({
        icon: "error",
        msg: "Message Not Found!",
      });
    } else {
      setError({
        icon: "success",
        msg: "Message Saved!",
      });
      setValues({
        name: "",
        email: "",
        message: "",
      });
    }
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleChange =
    (name: string) => (event: ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();
      setValues({
        ...values,
        [name]: event.target.value,
      });
    };

  const setClear =
    (name: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      setValues({
        ...values,
        [name]: "",
      });
    };

  return (
    <FormControl>
      <Stack gap="25px">
        <ContactUsQuote>
          Lets unlock together the next level
          <br /> of possibilities!
          <br />
          Reach out.
        </ContactUsQuote>
        <InputField
          label="Name"
          type={"text"}
          value={name}
          onChange={handleChange("name")}
          clear={setClear("name")}
        />
        <InputField
          type={"email"}
          label="Email"
          value={email}
          onChange={handleChange("email")}
          clear={setClear("email")}
        />
        <TextField
          label="Message"
          variant="filled"
          value={message}
          onChange={handleChange("message")}
          multiline
          minRows={8}
          sx={{
            "& .MuiFilledInput-root": {
              background: "rgba(219, 230, 255, 0.4)",
            },
          }}
        />
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems={"center"}
        >
          <Button
            sx={{
              height: "34px",
              paddingX: "24px",
              marginX: "10px",
              color: "black",
              transition: "all 200ms",
              "&:hover": {
                height: "44px",
                paddingX: "34px",
                marginX: "0",
                background: "#394B73",
                color: "white",
              },
            }}
            onClick={handleClick}
          >
            Submit
          </Button>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert severity={error.icon}>{error.msg}</Alert>
          </Snackbar>
          <SocialsPanel />
        </Stack>
      </Stack>
    </FormControl>
  );
}

export default ContactUs;
