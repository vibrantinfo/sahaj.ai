import { useState, useEffect } from "react";

const useWindowSize = () => {
  const initialWidth = typeof window !== "undefined" ? window.innerWidth : 0;
  const initialHeight = typeof window !== "undefined" ? window.innerHeight : 0;
  const [width, setWidth] = useState(initialWidth);
  const [height, setHeight] = useState(initialHeight);

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return { width, height };
};

export default useWindowSize;
