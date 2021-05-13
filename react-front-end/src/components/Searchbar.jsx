import useDebounce from "../hooks/useDebounce";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import React, { useState, useEffect } from "react";

const Searchbar = (props) => {
  const [value, setValue] = useState("");

  const term = useDebounce(value, 700);

  useEffect(() => {
    props.onSearch(term);
  }, [term]);
  
  return (
    <form noValidate autoComplete="off" onSubmit={event => event.preventDefault()}>
      <TextField
        id="standard-basic"
        label="search"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      &nbsp;&nbsp;&nbsp;
      <Button
        variant="contained"
        onSubmit={(event) => {
          setValue(event.target.value);
        }}
        color="primary"
      >
        Search
      </Button>
    </form>
  );
};

export default Searchbar;
