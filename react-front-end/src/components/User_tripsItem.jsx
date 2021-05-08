import { Container } from "@material-ui/core";
import React from "react";
import {
  calculatePercentage,
  calculateDaysRemaining,
} from "../helperfunctions/calculateFunctions";
import LinearWithValueLabel from "./LinearProgressWithLabel";
import FriendsIcon from "./FriendsIcon";
import Button from "@material-ui/core/Button";

const TripItem = (props) => {
  const value = calculatePercentage(props.savings, props.cost);
  const daysRemaining = calculateDaysRemaining(50, 100, 1);

  const dailyPrizeRecieved = (prize) => {
    return prize ? (
      <Button
        variant="contained"
        color="primary"
        onClick={() => props.onclick(props.id)}
      >
        Add more Savings!
      </Button>
    ) : (
      <Button variant="contained" color="grey">
        Add more Savings!
      </Button>
    );
  };

  return (
    <article>
      <h2>{props.trip_name}!</h2>
      <div className="header-container">
        <div className="header-location">
          <h4>{props.location}</h4>
          <FriendsIcon group={props.group} />
          <h5>Daily Drip Amount: ${props.daily_drip}</h5>
        </div>
        <div>{dailyPrizeRecieved(props.daily_prize)}</div>
      </div>
      <div>
        <LinearWithValueLabel value={value} />
      </div>
      <div className="footer-container">
        <div>
          ${props.savings} of ${props.cost} goal!
        </div>
        <div>{daysRemaining} days until you reach your goal!</div>
      </div>
      <div className="trip-description">{props.description}</div>
    </article>
  );
};

export default TripItem;
