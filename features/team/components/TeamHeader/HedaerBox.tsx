import React, { useState } from "react";
import { Button, Typography,Card } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import TimerIcon from "@mui/icons-material/Timer";

function HedaerBox() {
  const [year, setYear] = useState(new Date().getFullYear());

  const yearDecrement = () => {
    setYear(year - 1);
  };

  const yearIncrement = () => {
    setYear(year + 1);
  };

  return (
    <>
      <Card sx={{p:2}}>
      <div style={{width:'2rem',margin:"auto"}}>{year != new Date().getFullYear() ? <TimerIcon /> : null}</div>

      <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <h1 onClick={yearDecrement}>
            <KeyboardArrowLeftIcon />
          </h1>
          <Typography
            variant="h1"
            color="#334155"
            textAlign={"left"}
            fontSize={"96px"}
            fontWeight={500}
            lineHeight={"114px"}
            letterSpacing={"0.03571em"}
            pl={2}
          >
            {year}
          </Typography>

          {year < new Date().getFullYear() + 1 ? (
            <h1 onClick={yearIncrement}>
              {" "}
              <KeyboardArrowRightIcon />
            </h1>
          ) : null}
      </div>
      </Card>
    </>
  );
}

export default HedaerBox;
