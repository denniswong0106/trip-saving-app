import React, { useContext, useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DataContext from "../helperfunctions/DataContext";
import apiAccessor from "../hooks/apiAccessor";
import useDebounce from "../hooks/useDebounce";
import "./Home.scss";
import Canvas from './helper_components/Canvas';
import axios from "axios";
import SearchItem from "./SearchItem";

//Moved from App.js then props passed in
const Home = () => {

  // uses useContext to grab the appropriate functions to use it instead of prop drilling
  const { state, fetchData } = useContext(DataContext);
  const { search, setSearch } = apiAccessor();
  const [ description, setDescription ] = useState("");
  const [ name, setName ] = useState("");
  const [ image, setImage ] = useState("");
  const term = useDebounce(search, 700);
  const idNumbers = [];
  const tripsArray = [];

  const [value, setValue] = useState("");
  console.log("search: ", search);
  

  useEffect(() => {
    //axios call with term
    axios.get(`https://rest.gadventures.com/tour_dossiers/?name=${term}`, {
      headers: {
        'X-Application-Key': process.env.REACT_APP_SECRET_KEY
      },
    })
    .then((result)=>{
      console.log("possible error? ",result.data.results);
      if (result.data.results[0]) {
        console.log("res.data1: ", result.data.results[0].id);
        for (let i = 0; i < 5; i++) {
          idNumbers.push(result.data.results[i].id);
        }
        tripSearch();
      }
    })
        // return axios.get(`https://rest.gadventures.com/tour_dossiers/${idNumber}`, {
        //   headers: {
        //     'X-Application-Key': process.env.REACT_APP_SECRET_KEY
        //   },
        // })
        // }}).then((result) => {
        //   if (result) {
        //     console.log("dossiers: ", result.data);
        //     setDescription(result.data.description);
        //     setName(result.data.name);
        //     setImage(result.data.images[2].image_href);
        //   }
        // });
  }, [term]);

  // const tripSearchItem;
  function tripSearch() {
    const tripSearchItems = idNumbers.map((id) => {
      axios.get(`https://rest.gadventures.com/tour_dossiers/${id}`, {
        headers: {
          'X-Application-Key': process.env.REACT_APP_SECRET_KEY
        },
      })
      .then((res)=>{
        console.log("array push!");
        tripsArray.push(res);
      })
    })
  }
  let tripSearchItem;
  useEffect(() => {
  tripSearchItem = tripsArray.map((trip) => {
    return(
      <SearchItem
        name={trip.data.name}
        description={trip.data.description}
        image={trip.data.images[2].image_href}
      />
    )
  })
  }, [tripsArray])

  const currentState = state;

  return (
    <div className="App">
      <h2>Start saving for your next trip!</h2>
      <hr className="solid" />
      <form noValidate autoComplete="off">
        <TextField id="standard-basic" label="search" value={search} onChange={(event) => {setSearch(event.target.value)}}/>
        &nbsp;&nbsp;&nbsp;
        <Button variant="contained" onSubmit={()=>{}} color="primary">
          Search
        </Button>
      </form>
      <br />
      <br />
      <br />
      <div className="trip-container">
        {tripSearchItem[0]}
        {/* <div className="text-and-heading">
          <h4>{name}</h4>
          <p>
            {description}
          </p>
        </div>
        <img src={image} alt="pic" /> */}
      </div>
      <br />
      <br />
      <br />
      <Canvas/>
      <br/><br/><br/>
      <h1>{currentState.message}</h1>
      <Button variant="contained" color="primary" onClick={fetchData}>
        Fetch Data
      </Button>
    </div>
  );
};

export default Home;
