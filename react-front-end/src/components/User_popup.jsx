import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import {
  calculateDaysRemaining,
  expectedDate,
} from "../helperfunctions/calculateFunctions";
import "./Popup.scss";

//slider
import { withStyles } from "@material-ui/core/styles";

const UserPopup = (props) => {
  //where the tick marks are on the slider

  //for days estimate
  function days(drip, goal) {
    const daysTotal = goal / drip;
    return daysTotal.toFixed(1);
  }

  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">
        Adding to your savings...
      </DialogTitle>
      <DialogContent>
        <img
          class="loading-gif"
          src={require("../pics/piggybank.gif")}
          alt="piggybank"
        />
      </DialogContent>
      <div class="dialog-actions">
        {/* <Button onClick={handleClose}>Cancel</Button> */}
        <Button id="start" onClick={props.handleClose}>
          Start Saving!
        </Button>
      </div>
    </Dialog>
  );
};

export default UserPopup;
