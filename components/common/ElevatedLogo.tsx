import styled from "@emotion/styled";
import { Stack } from "@mui/system";
import Image, { StaticImageData } from "next/image";

const ElevatedLogoContainer = styled(Stack)({
  width: "64px",
  height: "64px",
  background: "#F6F6F6",
  boxShadow: `-5px 5px 10px rgba(221, 221, 221, 0.2), 
    5px -5px 10px rgba(221, 221, 221, 0.2), 
    -5px -5px 10px rgba(255, 255, 255, 0.9), 
    5px 5px 13px rgba(221, 221, 221, 0.9), 
    inset 1px 1px 2px rgba(255, 255, 255, 0.3), 
    inset -1px -1px 2px rgba(221, 221, 221, 0.5)`,
  alignItems: "center",
  borderRadius: "50%",
  overflow: "hidden",
});
type Props = {
  src: string | StaticImageData;
  alt?: string;
};

function ElevatedLogo({ src = "", alt }: Props) {
  return (
    <ElevatedLogoContainer>
      <Image src={src} width="64px" height="64px" priority={true} alt={alt} />
    </ElevatedLogoContainer>
  );
}

export default ElevatedLogo;
