import React, { useState } from "react";
import {
  calculatePercentage,
  calculateDaysRemaining,
  expectedDate,
} from "../helperfunctions/calculateFunctions";
import LinearWithValueLabel from "./helper_components/LinearProgressWithLabel";
import FriendsIcon from "./FriendsIcon";
import Button from "@material-ui/core/Button";
import UserPopup from "./User_popup.jsx";
import { Link } from "react-router-dom";

const TripItem = (props) => {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState("");

  const handleClickOpen = () => {
    setMode("SAVING");
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const progress = calculatePercentage(props.savings, props.cost);
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

  const dailyPrizeRecieved = (prize) => {
    return prize ? (
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Double my Drip!
      </Button>
    ) : (
      <Button variant="contained" color="grey">
        Already claimed
      </Button>
    );
  };

  return (
    <article>
      <Link to={`/user/1/trip/${props.id}/`}>
        <h2>{props.trip_name}!</h2>
      </Link>
      <h3>{bookingDate}</h3>
      <div className="header-container">
        <div className="header-location">
          <h4>{props.location}</h4>
          <FriendsIcon group={props.group} />
          <h5>Daily Drip Amount: ${props.daily_drip}</h5>
        </div>
        <div>{dailyPrizeRecieved(props.daily_prize)}</div>
      </div>
      <div>
        <LinearWithValueLabel value={progress} />
      </div>
      <div className="footer-container">
        <div>
          ${props.savings} of ${props.cost} goal!
        </div>
        <div>{daysRemaining} days until you reach your goal!</div>
        <div>{finishDate}</div>
      </div>
      <div className="trip-description">{props.description}</div>
      <UserPopup
        mode={mode}
        setMode={setMode}
        open={open}
        handleClose={handleClose}
      />
    </article>
  );
};

export default TripItem;
