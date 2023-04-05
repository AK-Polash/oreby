import React, { useState, useEffect } from "react";
import { Events, scrollSpy } from "react-scroll";
import Header from "./Header";
import Navbar from "./Navbar";

const AttastHeader = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const isScrolled = scrollTop >= 120;
      setHasScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    Events.scrollEvent.register("scroll", handleScroll);
    scrollSpy.update();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      Events.scrollEvent.remove("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={
        hasScrolled
          ? "sticky top-0 left-0 z-50 w-full shadow-lg transition-all duration-150 ease-linear"
          : "sticky top-0 left-0 z-50 w-full shadow-none transition-all duration-150 ease-linear"
      }
    >
      <Navbar />
      <Header />
    </div>
  );
};

export default AttastHeader;
