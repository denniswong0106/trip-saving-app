import React, { useContext } from "react";
import DataContext from "../helperfunctions/DataContext";
import "./Home.scss";
import Searchbar from "./Searchbar";
import TripItemList from "./Home_tripItemList";

//Moved from App.js then props passed in
const Home = () => {
  // const { state, fetchData } = useContext(DataContext);
  
  // uses useContext to grab the appropriate functions to use it instead of prop drilling
  const { search, loading, empty, setSearch, data, setData } = useContext(DataContext);

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
        { empty ? <img alt="empty" src="https://i.pinimg.com/originals/d1/2a/65/d12a65ae002f97284e19a819a0a4f0b0.gif" /> : <TripItemList trips={data} />}
        { empty ? <h2>No Results Found.</h2> : <TripItemList trips={data} />}
        { loading ? <img alt="loading" src="https://cdn.dribbble.com/users/826577/screenshots/3146242/piggy-walking-with-umbrella-whitebg-3.gif" /> : <TripItemList trips={data} />}
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;
