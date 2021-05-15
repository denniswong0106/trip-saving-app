import React, { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scorlled upto given distance
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
    <div className="scroll-to-top">
      {isVisible && 
        <div onClick={scrollToTop}>
          <img src='https://github.com/denniswong0106/trip-saving-app/blob/master/react-front-end/src/pics/piggyAssets/16transparent.png?raw=true' alt='Go to top'/>
          <h3>Go to top</h3>
        </div>}
    </div>
  );
}

export default ScrollToTopButton;