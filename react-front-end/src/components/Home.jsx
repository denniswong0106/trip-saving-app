import React, { useContext, useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import DataContext from "../helperfunctions/DataContext";
import "./Home.scss";
<<<<<<< HEAD
import Canvas from './helper_components/Canvas';
import axios from "axios";
import SearchItem from "./SearchItem";
=======
import Canvas from "./helper_components/Canvas";
import Searchbar from "./Searchbar";
import apiAccessor from "../hooks/apiAccessor";
import TripItemList from "./Home_tripItemList";
>>>>>>> 5598c3068b065be290b909317e3e26e576fbfea8

//Moved from App.js then props passed in
const Home = () => {
  // uses useContext to grab the appropriate functions to use it instead of prop drilling
<<<<<<< HEAD
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
=======
  // const { state, fetchData } = useContext(DataContext);

  const { search, setSearch, data, setData } = apiAccessor();
>>>>>>> 5598c3068b065be290b909317e3e26e576fbfea8

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
<<<<<<< HEAD
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
=======
      <Canvas />
>>>>>>> 5598c3068b065be290b909317e3e26e576fbfea8
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;
