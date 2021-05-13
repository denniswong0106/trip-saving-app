import React from "react";

const SearchItem = (props) => {
  return(
    <>
    <div className="text-and-heading">
      <h4>{props.name}</h4>
      <p>
        {props.description}
      </p>
    </div>
    <img src={props.image} alt="pic" />
    </>
  )
}

export default SearchItem;