import axios from "axios";
import { useState, useEffect } from "react";

export default function apiAccessor() {
  const [search, setSearch] = useState([]);

  useEffect(() => {
    const url = `https://rest.gadventures.com/tour_dossiers/?name=${search}`;
    const header = {
      headers: {
        "X-Application-Key": process.env.REACT_APP_SECRET_KEY,
      },
    };
    axios.get(url, header).then((result) => {
      console.log("res.data1: ", result.data);
    });
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
