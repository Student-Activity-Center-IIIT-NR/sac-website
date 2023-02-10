import { ReactNode, createContext, useState } from "react";
import { TeamData } from "../features/team/TeamData";

type SessionProps = {
  year: number;
  currentSession: number;
  yearDecrement(): void;
  yearIncrement(): void;
  resetYear(): void;
};

const defaultValue: SessionProps = {
  year: 1,
  currentSession: 1,
  yearDecrement: function (): void {},
  yearIncrement: function (): void {},
  resetYear: function (): void {},
};

export const SessionContext = createContext<SessionProps>(defaultValue);

interface TeamContextProps {
  children: ReactNode;
}

const TeamContext = ({ children }: TeamContextProps) => {
  const len = Object.keys(TeamData).length;

  const currentSession = Number(
    Object.keys(TeamData)[len - 1].toString().slice(0, 2)
  );

  const [year, setYear] = useState(currentSession);

  const yearDecrement = () => {
    if (year <= 18) {
      return;
    }
    setYear((prevYear) => prevYear - 1);
  };

  const yearIncrement = () => {
    if (year >= currentSession) {
      return;
    }
    setYear((prevYear) => prevYear + 1);
  };

  const resetYear = () => {
    setYear(currentSession);
  };
  return (
    <SessionContext.Provider
      value={{ year, currentSession, yearDecrement, yearIncrement, resetYear }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export default TeamContext;
