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
