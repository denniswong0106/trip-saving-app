import React, { useState } from "react";
import { calculatePercentage, calculateDaysRemaining, expectedDate } from "../helperfunctions/calculateFunctions";
import LinearWithValueLabel from "./helper_components/LinearProgressWithLabel";
import FriendsIcon from "./FriendsIcon";
import Button from "@material-ui/core/Button";
import UserPopup from "./User_popup.jsx";
import { Link } from "react-router-dom";
import AddForm from "./User_addForm";
import { useHistory } from "react-router-dom";

const TripItem = (props) => {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState("");
  const [openGroup, setOpenGroup] = useState(false);
  const history = useHistory();

  // ------------------------------------------
  // Click functions that handle the opening and closing of popups

  const handleClickOpen = () => {
    setMode("SAVING");
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenGroup = () => {
    setOpenGroup(true);
  };
  const handleCloseGroup = () => {
    setOpenGroup(false);
  };

  // --------------------------------------------
  // Math helper Functions

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

  // ------------------------------------------------------------
  // component Helper Functions

  const dailyPrizeRecieved = (prize) => {
    return prize ? (
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Double my Drip!
      </Button>
    ) : (
      <></>
    );
  };

  const doesTripHaveGroupId = () => {
    if (props.groupId) {
      return ( 
        <></>
        // <Link to={`/user/${props.user_id}/group/${props.groupId}/`}>
        //   <Button>View Group</Button>
        // </Link>
      );
    }
    return (
      <>
        <Button onClick={handleClickOpenGroup}>Create group</Button>
        <AddForm
          trip_name={props.trip_name}
          openGroup={openGroup}
          handleCloseGroup={handleCloseGroup}
          id={props.id}
          user_id={props.user_id}
        />
      </>
    );
  };

  function divClick() {
    if (props.groupId) {
      history.push(`/user/${props.user_id}/group/${props.groupId}/`);
    }
    console.log("you clicked the card");
  }

  return (
      <article className="single-trip" onClick={() => divClick()} >
        <div className="single-trip-title">
          <h2>{props.trip_name}</h2>
          {doesTripHaveGroupId()}
        </div>
        <h3>{bookingDate}</h3>
        <div className="header-container">
          <div className="header-location">
            <h4>{props.location}</h4>
            {handleClickOpenGroup}
            <FriendsIcon group={props.group} />
            {/* <h5>Daily Drip Amount: ${props.daily_drip}</h5> */}
          </div>
          {dailyPrizeRecieved(props.daily_prize)}
        </div>
          <LinearWithValueLabel value={progress} />
        <div className="footer-container">
          <b>
            ${props.savings} of ${props.cost} goal!
          </b>
          {/* <div>{daysRemaining} days until you reach your goal!</div> */}
          {finishDate}
        </div>
        <div className="trip-description">{props.description}</div>
        <UserPopup
          mode={mode}
          setMode={setMode}
          open={open}
          handleClose={handleClose}
          trip_id={props.id}
        />
      </article>
  );
};

export default TripItem;
