import React from "react";
import { useHistory } from "react-router-dom";

const TripItem = (props) => {
  const history = useHistory();

  return (
      <div onClick={()=>{history.push(`/trip/${props.id}`)}} >
        <div className="trip-block">
          <div className="text-and-heading">
            <h3>{props.name}</h3>
            <p>{props.description}</p>
          </div>
          <img src={props.image} alt="waterfall" />
        </div>
      </div>
  );
};

export default TripItem;
