import { createContext } from "react";

type HeaderState = {
  inView: boolean;
  HeadBoundingRect?: DOMRectReadOnly;
  NavBoundingRect?: DOMRectReadOnly;
};

export const initialHeaderState: HeaderState = {
  inView: true,
};

export const HeaderBrandingContext = createContext(initialHeaderState);
