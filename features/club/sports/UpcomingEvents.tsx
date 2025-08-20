import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";
import Image from "next/image";

const StyledStack = styled(Stack)({
  justifyContent: "space-between",
});

interface Props {
  icon: any;
  date: string;
  name: string;
  content?: string;
}

const UpcomingEvents: React.FC<Props> = ({
  icon,
  date,
  name,
  content,
}: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        rowGap: "15px",
      }}
    >
      <StyledStack direction="row">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            columnGap: "16px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image src={icon} alt="" width={20} objectFit="contain" />
          <Typography
            fontFamily="Lato"
            fontStyle="normal"
            fontWeight="700"
            fontSize="24px"
            lineHeight="28px"
            color="#565A6E"
          >
            {name}
          </Typography>
        </Box>
        <Typography
          fontFamily="Lato"
          fontStyle="normal"
          fontWeight="700"
          fontSize="16px"
          lineHeight="28px"
          color="#565A6E"
        >
          {date}
        </Typography>
      </StyledStack>

      <Typography
        fontFamily="Lato"
        fontStyle="normal"
        fontWeight="400"
        fontSize="16px"
        lineHeight="28px"
        color="#6B7280"
        px={"30px"}
        mx={"auto"}
      >
        {content}
      </Typography>
    </Box>
  );
};

export default UpcomingEvents;
