import React, { useContext, useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DataContext from "../helperfunctions/DataContext";
import apiAccessor from "../hooks/apiAccessor";
import useDebounce from "../hooks/useDebounce";
import "./Home.scss";
import Canvas from "./helper_components/Canvas";
import Searchbar from "./Searchbar";

//Moved from App.js then props passed in
const Home = () => {
  // uses useContext to grab the appropriate functions to use it instead of prop drilling
  const { state, fetchData } = useContext(DataContext);

  // const { setSearch } = apiAccessor();
  // const [value, setValue] = useState("");

  // const term = useDebounce(value, 700);

  // useEffect(() => {
  //   setSearch(term);
  // }, [term]);

  const currentState = state;

  return (
    <div className="App">
      <h2>Start saving for your next trip!</h2>
      <hr className="solid" />
      <Searchbar />
      {/* <form noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          label="search"
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
        />
        &nbsp;&nbsp;&nbsp;
        <Button variant="contained" onSubmit={() => {}} color="primary">
          Search
        </Button>
      </form> */}
      <br />
      <br />
      <br />
      <div className="trip-container">
        <div className="text-and-heading">
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
        <img src={require("../pics/waterfall.jpg")} alt="waterfall" />
      </div>
      <br />
      <br />
      <br />
      <Canvas />
      <br />
      <br />
      <br />
      <h1>{currentState.message}</h1>
      <Button variant="contained" color="primary" onClick={fetchData}>
        Fetch Data
      </Button>
    </div>
  );
};

export default Home;
