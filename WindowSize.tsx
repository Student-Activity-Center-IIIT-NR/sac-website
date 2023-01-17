import { useState, useEffect } from 'react';

interface IUser {
    width: number;
}
export function useWindowSize() {

  const [windowSize, setWindowSize] = useState<IUser>({width:0});

  useEffect(() => {

    function handleResize() {
      setWindowSize({width:window.innerWidth});
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}