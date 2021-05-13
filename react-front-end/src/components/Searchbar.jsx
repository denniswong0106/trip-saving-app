import useDebounce from "../hooks/useDebounce";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import React, { useState, useEffect, useContext } from "react";
import CircularProgress from '@material-ui/core/CircularProgress';

const Searchbar = (props) => {

  // This state watches out for OnChange typing
  const [ typing, setTyping ] = useState(false)

  const [value, setValue] = useState("");

  const term = useDebounce(value, 700);

  useEffect(() => {
    props.onSearch(term);
  }, [term]);

  // This use effect times sets the typing state to false after 1/2 a second
  useEffect(() => {
    const timer = setTimeout(() => {
      setTyping(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [value]);
  
  return (
    <form noValidate autoComplete="off" onSubmit={event => event.preventDefault()}>
      <TextField
        id="standard-basic"
        label="search"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          setTyping(true);
        }}
      />
      &nbsp;&nbsp;&nbsp;
      { typing? 
        (
          < CircularProgress />
        ) : (
          <Button
            variant="contained"
            onSubmit={(event) => {
              setValue(event.target.value);
            }}
            color="primary"
          >
            Search
          </Button>
        )
      }
    </form>
  );
};

export default Searchbar;
