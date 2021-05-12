import React, { useState, useContext } from "react";

const TripItem = (props) => {
  // uses useContext to grab the appropriate functions to use it instead of prop drilling
  // const { state, fetchData } = useContext(DataContext);

  return (
    <>
      <div className="text-and-heading">
        {/* <h4>{props.name}</h4> */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit
          lorem eget aliquam placerat. Nulla eleifend quis felis vitae eleifend.
          Quisque nec tincidunt tortor, sit amet auctor ipsum. Etiam nec metus
          eu urna lacinia tempus. Aliquam sed sem urna. Integer sit amet nibh
          euismod lacus vulputate convallis ac vel purus. Nulla consectetur
          tristique sapien. Maecenas rhoncus nec lectus ac fringilla. Maecenas
          in luctus sem. Nunc laoreet accumsan ligula, et bibendum risus tempor
          venenatis. Nam erat nunc, sagittis vel imperdiet non, dapibus vel dui.
          Etiam euismod elementum placerat. Suspendisse venenatis ligula augue,
          cursus ultricies ex lobortis eget. Cras lectus ipsum, sollicitudin in
          tristique aliquam, rutrum a velit. Nunc nisi diam, ullamcorper eu
          sollicitudin in, suscipit a mi.
        </p>
      </div>
      <img src={require("../pics/waterfall.jpg")} alt="waterfall" />
    </>
  );
};

export default TripItem;
