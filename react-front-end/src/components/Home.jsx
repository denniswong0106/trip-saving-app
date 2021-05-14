import React, { useContext } from "react";
import DataContext from "../helperfunctions/DataContext";
import "./Home.scss";
import Searchbar from "./Searchbar";
import TripItemList from "./Home_tripItemList";

//Moved from App.js then props passed in
const Home = () => {
  // const { state, fetchData } = useContext(DataContext);

  // uses useContext to grab the appropriate functions to use it instead of prop drilling
  const {
    search,
    loading,
    empty,
    setSearch,
    data,
    setData,
    loadRemainingData,
  } = useContext(DataContext);

  console.log("render data", data);

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
        {empty ? (
          <img
            className="trips-container--loading-img"
            alt="empty"
            src="https://github.com/denniswong0106/trip-saving-app/blob/master/react-front-end/src/pics/loadingGifs/cry-piggy.gif?raw=true"
          />
        ) : (
          <></>
        )}
        {empty ? <h2>No Results Found.</h2> : <></>}
        {loading ? (
          <img
            className="trips-container--loading-img"
            alt="loading"
            src="https://github.com/denniswong0106/trip-saving-app/blob/master/react-front-end/src/pics/loadingGifs/load-piggy.gif?raw=true"
          />
        ) : (
          <TripItemList trips={data} />
        )}
        {loading ? <h2>Loading Results . . .</h2> : <></>}
      </div>
      <br />
      <br />
      <br />
      <button onClick={loadRemainingData}>TEST LOAD MORE DATA</button>
    </div>
  );
};

export default Home;
