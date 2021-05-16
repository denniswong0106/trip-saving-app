import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Button, TextField, Dialog, DialogContent, DialogTitle, Slider, withStyles } from "@material-ui/core/";
import DataContext from "../helperfunctions/DataContext";
import { calculateDaysRemaining, expectedDate, } from "../helperfunctions/calculateFunctions";
import "./Popup.scss";
import axios from "axios";

const Popup = (props) => {
  const [tripName, setTripName] = React.useState("");
  const { setState } = useContext(DataContext);
  const history = useHistory();

  //where the tick marks are on the slider
  const marks = [
    { value: 0, label: "0" },
    { value: 2.5 },
    { value: 5, label: "5" },
    { value: 7.5 },
    { value: 10, label: "10" },
  ];

  //database put call
  function bookTrip() {
    axios
      .put(`/api/trips`, {
        savings: 0,
        daily_drip: props.value,
        trip_name: tripName,
        cost: props.price,
        location: props.locationName,
        description: props.description,
        daily_prize: true,
        booking_date: "2021-11-20",
        stretch_goal: 0,
        user_id: 1,
        group_id: null,
        pic: props.pic,
        PDF: props.PDF
      })
      .then((result) => {
        const newTrip = result.data[0];
        setState((prev) => ({ ...prev, trips: [...prev.trips, newTrip] }));
        history.push(`/user/1`);
        props.handleClose();
      });
  }

  //slider style settings
  const IOSSlider = withStyles({
    root: {
      color: "#3880ff",
      height: 2,
      padding: "15px 0",
    },
    track: {
      height: 2,
    },
    rail: {
      height: 2,
      opacity: 0.5,
      backgroundColor: "#bfbfbf",
    },
    mark: {
      backgroundColor: "#bfbfbf",
      height: 10,
      width: 1,
      marginTop: -4,
    },
    markActive: {
      opacity: 1,
      backgroundColor: "currentColor",
    },
  })(Slider);

  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Book your trip</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="trip-name"
          label="Trip name"
          value={tripName}
          onChange={(event) => {
            setTripName(event.target.value);
          }}
          fullWidth
        />
        <h3>{props.locationName} ${props.price}</h3>
        <IOSSlider
          defaultValue={props.value}
          valueLabelDisplay="auto"
          step={0.25}
          marks={marks}
          min={0}
          max={10}
          onChangeCommitted={props.handleChange}
        />
        <div className="math">
          <div className="top-line">
            <h5>${props.value} per day</h5>
            <h5>{calculateDaysRemaining(props.value, props.price)} days</h5>
          </div>
          <h5>
            {expectedDate(
              new Date(),
              calculateDaysRemaining(props.value, props.price)
            )}
          </h5>
        </div>
      </DialogContent>
      <div className="dialog-actions">
        {/* <Button onClick={handleClose}>Cancel</Button> */}
        <Button id="start" onClick={bookTrip}>
          Start Saving!
        </Button>
      </div>
    </Dialog>
  );
};

export default Popup;
