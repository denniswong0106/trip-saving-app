import React, { useContext, useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import DataContext from "../helperfunctions/DataContext";
import "./Home.scss";
import Canvas from "./helper_components/Canvas";
import Searchbar from "./Searchbar";
import TripItemList from "./Home_tripItemList";

//Moved from App.js then props passed in
const Home = () => {
  // const { state, fetchData } = useContext(DataContext);

  // uses useContext to grab the appropriate functions to use it instead of prop drilling
  const {
    search,
    setSearch,
    data,
    setData,
    loadRemainingData,
    setRemaining,
    setSearch2,
  } = useContext(DataContext);

  console.log("render data", data);
  console.log("render remaining", loadRemainingData);

  return (
    <div className="App">
      <h2>Start saving for your next trip!</h2>
      {/* <hr className="solid" /> */}
      <br />
      <Searchbar
        onSearch={(search) => {
          setSearch(search);
        }}
      />
      <br />
      <br />
      <br />
      <div className="trips-container">
        <TripItemList trips={data} />
      </div>
      <br />
      <br />
      <br />
      <button onClick={loadRemainingData}>TEST LOAD MORE DATA</button>
    </div>
  );
};

export default Home;
