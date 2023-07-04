import { ScaleFade } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const backToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollFunction);
    return () => {
      window.removeEventListener('scroll', scrollFunction);
    };
  }, []);

  return (
    <>
      <button id="back-to-top" style={{
        display: isVisible ? 'block' : 'none'
      }} onClick={backToTop}><i className="fa-solid fa-arrow-up"></i></button>
    </>
  );
};
