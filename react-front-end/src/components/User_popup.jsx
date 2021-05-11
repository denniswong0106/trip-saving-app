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
  // setTimeout to mimic saving for 2 seconds:
  setTimeout(function () {
    props.setMode("TRANSITION");
  }, 3000);

  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="form-dialog-title"
    >
      {props.mode === "SAVING" && (
        <div>
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
        </div>
      )}
      {props.mode === "TRANSITION" && (
        <div>
          <DialogTitle id="form-dialog-title">Succesfully Added!</DialogTitle>
          <DialogContent>
            <img
              id="loading-gif"
              src={require("../pics/piggybank.gif")}
              alt="piggybank"
            />
          </DialogContent>
          <div class="dialog-actions">
            <Button id="start" onClick={props.handleClose}>
              Click Here to For Your Chance to Win!
            </Button>
          </div>
        </div>
      )}
    </Dialog>
  );
};

export default UserPopup;
