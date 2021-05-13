import axios from "axios";
import { useState, useEffect } from "react";

export default function apiAccessor() {
  // This state handles what value is passed into the search function
  const [search, setSearch] = useState("");

  // initial State:
  const initialState = [
    {
      name: "Example initial data",
      description:
        "Herein lies the example initial data, a place where you can see if your code works. If this sounds like the vacation for you, sign up now for 1 million dollars!",
      images: [
        {},
        {},
        {
          image_href:
            "https://betamedia.gadventures.com/media-server/cache/99/68/99686a87bae332dd040293e30dc2039c.jpg",
        },
      ],
      id: "20101",
    },
  ];

  // This state keeps track of all data returned from api calls
  const [data, setData] = useState(initialState);
  const [remaining, setRemaining] = useState([]);

  console.log("call from api side", setRemaining);
  const loadRemainingData = () => {
    console.log("load remaining data being called...");
    setData((prev) => {
      console.log([...prev, ...remaining]);
      return [...prev, ...remaining];
    });
  };

  // ---------------------------------------
  // Axios Constants
  const firstUrl = `https://rest.gadventures.com/tour_dossiers/?name=${search}`;
  const secondUrl = `https://rest.gadventures.com/tour_dossiers/`;
  const header = {
    headers: {
      "X-Application-Key": process.env.REACT_APP_SECRET_KEY,
    },
  };

  // ----------------------------------------
  // USEEFFECT helper functions

  // filter function that removes repeat titles, creates an array
  // of unique ids
  const removeRepeats = (result) => {
    const searchResults = result.data.results;
    console.log("initial axios call data...", result.data.results);
    let idArray = []; //pulls out the ids of each uniquely named trip object

    searchResults.reduce((unique, item) => {
      if (unique.includes(item.name)) {
        return unique;
      } else {
        idArray = [...idArray, item.id];
        return [...unique, item.name];
      }
    }, []);

    return idArray;
  };

  // takes in an idArray, a start and end iterator variable, and
  // creates and array of promises of those ids
  const loopPromiseGenerator = (idArray, initial, end) => {
    const output = [];
    for (let i = initial; i < end; i++) {
      let promise = new Promise((resolve, reject) => {
        axios.get(secondUrl + idArray[i], header);
        resolve(axios.get(secondUrl + idArray[i], header));
      });
      output.push(promise);
    }
    return output;
  };

  // ---------------------------------------------------

  useEffect(() => {
    // the first call handles will get ids, and create array of ids:
    const firstCall = axios.get(firstUrl, header).then(removeRepeats);
    // .then(findSearchIds);

    // Make axios call for first 5 ids given:
    firstCall.then((result) => {
      // loop through the first 5 ids, and create array of axios promises
      const firstFiveTrips = loopPromiseGenerator(
        result,
        0,
        result.length >= 5 ? 5 : result.length
      );

      Promise.all(firstFiveTrips).then((all) => {
        const tripArr = all.map((trip) => trip.data);
        console.log("creation of first five", tripArr);
        setData((prev) => [...tripArr]);
      });
    });

    // Make another call that adds more data, which will get
    // used when load more data is clicked
    firstCall.then((result) => {
      if (result.length > 5) {
        const remainingTrips = loopPromiseGenerator(result, 5, result.length);
        Promise.all(remainingTrips).then((all) => {
          const remainingTrips = all.map((trip) => trip.data);

          console.log("creation of remaining trips", remainingTrips);
          setRemaining(remainingTrips);
        });
      }
    });
  }, [search]);

  //---------------------------------------------------

  return {
    data,
    search,
    setData,
    setSearch,
    setRemaining,
    loadRemainingData,
  };
}
