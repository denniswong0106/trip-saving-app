import { Container } from "@material-ui/core";
import React from "react";
import {
  calculatePercentage,
  calculateDaysRemaining,
} from "../helperfunctions/calculateFunctions";

const TripItem = (props) => {
  const num = calculatePercentage(100, 55);
  return (
    <article>
      <div>{num}</div>
      <div>trip_saving_1</div>
    </article>
  );
};

export default TripItem;
