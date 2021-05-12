import apiAccessor from "../hooks/apiAccessor";
import useDebounce from "../hooks/useDebounce";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import React, { useContext, useState, useEffect } from "react";

const Searchbar = () => {
  const { setSearch } = apiAccessor();
  const [value, setValue] = useState("");

  const term = useDebounce(value, 700);

  useEffect(() => {
    setSearch(term);
  }, [term]);
  return (
    <form noValidate autoComplete="off">
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
    </form>
  );
};

export default Searchbar;
