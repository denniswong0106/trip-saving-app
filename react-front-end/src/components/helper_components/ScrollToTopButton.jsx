import { requirePropFactory } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./ScrollToTopButton.scss";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to a given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top-button">
      {isVisible && 
        <div className="scroll-to-top-button--container" onClick={scrollToTop}>
          <img className="scroll-to-top-button--arrow-img" src={require('../../pics/gifAssets/dark-up-arrow.gif')} alt='up-arrow'/>
          <img className="scroll-to-top-button--scroll-img" src={require('../../pics/piggyAssets/16transparent.png')} alt='Go-to-top'/>
          <h3>Go to top</h3>
        </div>}
    </div>
  );
}

export default ScrollToTopButton;