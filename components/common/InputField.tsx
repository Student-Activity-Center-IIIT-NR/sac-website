import {
  IconButton,
  InputAdornment,
  TextField,
  TextFieldProps,
  useTheme,
} from "@mui/material";
import React from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

type Props = {};

function InputField(props: Props & TextFieldProps) {
  const theme = useTheme();
  return (
    <TextField
      variant="standard"
      InputProps={{
        sx: {
          paddingLeft: "10px",
        },
        endAdornment: (
          <InputAdornment position="end">
            <IconButton>
              <HighlightOffIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      InputLabelProps={{
        sx: {
          paddingLeft: "10px",
        },
      }}
      {...props}
    />
  );
}

export default InputField;
