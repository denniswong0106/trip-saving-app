import React from "react";
import {
  calculatePercentage,
  calculateDaysRemaining,
  expectedDate,
} from "../helperfunctions/calculateFunctions";
import LinearWithValueLabel from "./helper_components/LinearProgressWithLabel";
import FriendsIcon from "./FriendsIcon";
import Button from "@material-ui/core/Button";

const TripItem = (props) => {
  const value = calculatePercentage(props.savings, props.cost);
  const daysRemaining = calculateDaysRemaining(
    props.daily_drip,
    props.cost,
    props.savings
  );

  const finishDate = expectedDate(new Date(), daysRemaining);
  const bookingDate = new Date(props.bookingDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  console.log(bookingDate);
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
        Already claimed
      </Button>
    );
  };

  return (
    <article>
      <h3>{props.trip_name}!</h3>
      {/* <h3>{bookingDate}</h3> */}
      <div className="header-container">
        <div className="header-location">
          <h4>{props.location}</h4>
          <FriendsIcon group={props.group} />
          {/* <h5>Daily Drip Amount: ${props.daily_drip}</h5> */}
        </div>
        {/* <div>{dailyPrizeRecieved(props.daily_prize)}</div> */}
      </div>
      <div>
        <LinearWithValueLabel value={value} />
      </div>
      <div className="footer-container">
          <b>${props.savings} of ${props.cost} goal!</b>
          {/* <div>{daysRemaining} days until you reach your goal!</div> */}
          {finishDate}
      </div>
      <div className="trip-description">{props.description}</div>
      <br/><br/>
    </article>
  );
};

export default TripItem;
