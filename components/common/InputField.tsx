import {
  IconButton,
  InputAdornment,
  TextField,
  TextFieldProps,
  useTheme,
} from "@mui/material";
import React from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

type Props = {
  clear?: any;
};

function InputField(props: Props & TextFieldProps) {
  const { clear, ...rest } = props;
  const theme = useTheme();
  return (
    <TextField
      variant="standard"
      InputProps={{
        sx: {
          paddingLeft: "10px",
        },
        endAdornment: (
          <InputAdornment
            position="end"
            sx={{
              pb: 1,
            }}
          >
            <IconButton onClick={clear}>
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
      {...rest}
    />
  );
}

export default InputField;
