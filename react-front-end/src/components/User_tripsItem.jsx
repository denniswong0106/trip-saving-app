import { Container } from "@material-ui/core";
import React from "react";
import {
  calculatePercentage,
  calculateDaysRemaining,
} from "../helperfunctions/calculateFunctions";
import LinearWithValueLabel from "./LinearProgressWithLabel";
import FriendsIcon from "./FriendsIcon";

const TripItem = (props) => {
  const value = calculatePercentage(props.savings, props.cost);

  const daysRemaining = calculateDaysRemaining(50, 100, 1);
  return (
    <article>
      <div>
        <h2>{props.trip_name}!</h2>
        <div>
          <FriendsIcon group={props.group} />
        </div>
      </div>
      <div>
        <LinearWithValueLabel value={value} />
      </div>
      <div>
        ${props.savings} of ${props.cost} goal!
      </div>
    </article>
  );
};

export default TripItem;
