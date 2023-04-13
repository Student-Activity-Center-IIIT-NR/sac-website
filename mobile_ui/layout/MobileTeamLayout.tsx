import Stack from "@mui/material/Stack";
import { FunctionComponent, ReactNode } from "react";

interface MobileTeamLayoutProps {
  children: ReactNode;
}

const MobileTeamLayout: FunctionComponent<MobileTeamLayoutProps> = ({
  children,
}: MobileTeamLayoutProps) => {
  return (
    <>
      <Stack>{children}</Stack>  {/* change layout as per need */}
    </>
  );
};

export default MobileTeamLayout;
