import React, { useEffect, useState } from "react";
import "./ScrollToTopButton.scss";

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
    <div className="scroll-to-top-button">
      {isVisible && 
        <div onClick={scrollToTop}>
          <img className="scroll-to-top-button--arrow-img" src='https://media2.giphy.com/media/LmHEzN3V3gFpQu8Vm0/giphy.gif?cid=790b76110fdeda5290d920700020e1c4677f5fe87ebce58b&rid=giphy.gif&ct=s' alt='up-arrow'/>
          <img className="scroll-to-top-button--scroll-img" src='https://github.com/denniswong0106/trip-saving-app/blob/master/react-front-end/src/pics/piggyAssets/16transparent.png?raw=true' alt='Go-to-top'/>
          <h3>Go to top</h3>
        </div>}
    </div>
  );
}

export default ScrollToTopButton;