import axios from "axios";
import { useState, useEffect } from "react";

export default function apiAccessor() {
  // This state handles what value is passed into the search function
  const [search, setSearch] = useState([]);

  // this header is always the same;
  const header = {
    headers: {
      "X-Application-Key": process.env.REACT_APP_SECRET_KEY,
    },
  };
  useEffect(() => {
    const firstUrl = `https://rest.gadventures.com/tour_dossiers/?name=${search}`;

    // this callback takes in api call for ids, return an array of only ids
    const findSearchIds = (result) => {
      console.log(`search bar request to API: ${search}`, result.data.results);
      // map through array, return only an array of ID's
      const idArray = result.data.results.map((tripObj) => {
        return tripObj.id;
      });

      console.log("searchIds", idArray);
      return idArray;
    };

    // the first call handles will get ids, and create array of ids:
    const firstCall = axios.get(firstUrl, header).then(findSearchIds);

    const secondUrl = `https://rest.gadventures.com/tour_dossiers/`;
  }, [search]);

  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://rest.gadventures.com/departures?availability.status=AVAILABLE",
  //       {
  //         headers: {
  //           "X-Application-Key": process.env.REACT_APP_SECRET_KEY,
  //         },
  //       }
  //     )
  //     .then((result) => {
  //       console.log("res.data2: ", result.data.results);
  //     });
  // }, []);

  return {
    search,
    setSearch,
  };
}
