import React, { useContext, useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import DataContext from "../helperfunctions/DataContext";
import "./Home.scss";
import Canvas from "./helper_components/Canvas";
import Searchbar from "./Searchbar";
import apiAccessor from "../hooks/apiAccessor";
import TripItemList from "./Home_tripItemList";

//Moved from App.js then props passed in
const Home = () => {
  // uses useContext to grab the appropriate functions to use it instead of prop drilling
  // const { state, fetchData } = useContext(DataContext);

  const { search, setSearch, data, setData } = apiAccessor();

  console.log("render data", data);
  return (
    <div className="App">
      <h2>Start saving for your next trip!</h2>
      <hr className="solid" />
      <Searchbar
        onSearch={(search) => {
          setSearch(search);
        }}
      />
      <br />
      <br />
      <br />
      <TripItemList trips={data} />
      <br />
      <br />
      <br />
      <Canvas />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;

{
  /* <div className="trip-container"> */
}
{
  /* <div className="text-and-heading">
          <h4>Iceland</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            blandit lorem eget aliquam placerat. Nulla eleifend quis felis vitae
            eleifend. Quisque nec tincidunt tortor, sit amet auctor ipsum. Etiam
            nec metus eu urna lacinia tempus. Aliquam sed sem urna. Integer sit
            amet nibh euismod lacus vulputate convallis ac vel purus. Nulla
            consectetur tristique sapien. Maecenas rhoncus nec lectus ac
            fringilla. Maecenas in luctus sem. Nunc laoreet accumsan ligula, et
            bibendum risus tempor venenatis. Nam erat nunc, sagittis vel
            imperdiet non, dapibus vel dui. Etiam euismod elementum placerat.
            Suspendisse venenatis ligula augue, cursus ultricies ex lobortis
            eget. Cras lectus ipsum, sollicitudin in tristique aliquam, rutrum a
            velit. Nunc nisi diam, ullamcorper eu sollicitudin in, suscipit a
            mi.
          </p>
        </div>
        <img src={require("../pics/waterfall.jpg")} alt="waterfall" /> */
}
{
  /* </div> */
}
