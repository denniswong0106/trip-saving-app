import axios from "axios";
import { useState, useEffect } from "react";

export default function apiAccessor() {
  // This state handles what value is passed into the search function
  const [search, setSearch] = useState("");

  // This state keeps track of all data returned from api calls
  const [data, setData] = useState({});

  // --------------------------------------
  // this header is always the same;
  const header = {
    headers: {
      "X-Application-Key": process.env.REACT_APP_SECRET_KEY,
    },
  };

  // ---------------------------------------

  useEffect(() => {
    const firstUrl = `https://rest.gadventures.com/tour_dossiers/?name=${search}`;
    const secondUrl = `https://rest.gadventures.com/tour_dossiers/`;

    // this callback takes in api call for ids, return an array of only ids
    const findSearchIds = (result) => {
      console.log(`search bar request to API: ${search}`, result.data.results);
      // map through array, return only an array of ID's
      const idArray = result.data.results.map((tripObj) => {
        return tripObj.id;
      });
      return idArray;
    };

    // the first call handles will get ids, and create array of ids:
    const firstCall = axios.get(firstUrl, header).then(findSearchIds);

    // the second call will create the first 5 trip states.
    const secondCall = firstCall.then((result) => {
      console.log(`second Call, ID Array for ${search}`, result);

      // loop through the first 5 ids, and create array of axios promises
      const firstFiveTrips = [];
      for (let i = 0; i < (result.length >= 5 ? 5 : result.length); i++) {
        let promise = new Promise((resolve, reject) => {
          axios.get(secondUrl + result[i], header);
          resolve(axios.get(secondUrl + result[i], header));
        });
        firstFiveTrips.push(promise);
      }

      Promise.all(firstFiveTrips).then((all) => {
        const tripArr = all.map((trip) => {
          return trip.data;
        });

        console.log("creation of trip objects", tripArr);
        setData((prev) => {
          return [...tripArr];
        });
      });
    });
  }, [search]);

  return {
    search,
    setSearch,
    data,
    setData,
  };
}
