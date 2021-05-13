import React, { useContext, useState, useEffect } from "react";
import DataContext from "../helperfunctions/DataContext";
import CircularProgress from '@material-ui/core/CircularProgress';
import "./Home.scss";
import Searchbar from "./Searchbar";
import TripItemList from "./Home_tripItemList";

//Moved from App.js then props passed in
const Home = () => {
  // const { state, fetchData } = useContext(DataContext);
  
  // uses useContext to grab the appropriate functions to use it instead of prop drilling
  const { search, loading, setSearch, data, setData } = useContext(DataContext);
  console.log("loading in Home.jsx", loading);

  console.log("render data", data);
  return (
    <div className="App">
      <h2>Start saving for your next trip!</h2>
      {/* <hr className="solid" /> */}
      <br/>
      <Searchbar
        onSearch={(search) => {
          setSearch(search);
        }}
      />
      <br />
      <br />
      <br />
      <div className="trips-container">
        
        {loading? <img alt="loading" src="https://cdn.dribbble.com/users/826577/screenshots/3146242/piggy-walking-with-umbrella-whitebg-3.gif" /> : <TripItemList trips={data} />}
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;
