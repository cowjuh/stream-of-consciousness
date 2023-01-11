import { useEffect, useState } from "react";

const MOBILE_WIDTH = 768;

const useViewport = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
      setIsMobile(window.innerWidth < MOBILE_WIDTH ? true : false);
    };

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  // Return the width so we can use it in our components
  return { width, isMobile };
};

export default useViewport;
