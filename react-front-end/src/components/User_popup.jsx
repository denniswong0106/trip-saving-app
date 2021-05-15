import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Canvas from "./helper_components/Canvas";
import explosion from "../helperfunctions/explosion";
import {
  calculateDaysRemaining,
  expectedDate,
} from "../helperfunctions/calculateFunctions";
import "./Popup.scss";

//slider
import { withStyles } from "@material-ui/core/styles";

const UserPopup = (props) => {
  const mimicAddSavings = () => {
    // setTimeout to mimic saving for 3 seconds:
    setTimeout(function () {
      props.setMode("TRANSITION");
    }, 500); // remember to change back to 3000
  };
  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="form-dialog-title"
    >
      {props.mode === "SAVING" && (
        <div>
          {mimicAddSavings()}
          <DialogTitle id="form-dialog-title">
            Adding to your savings...
          </DialogTitle>
          <DialogContent>
            <img
              className="loading-gif"
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
              src={require("../pics/piggyAssets/12.jpg")}
              alt="piggybank"
            />
          </DialogContent>
          <div className="dialog-actions">
            <Button id="start" onClick={() => props.setMode("LOOTPRIZE")}>
              Click Here to For Your Chance to Win!
            </Button>
          </div>
        </div>
      )}
      {props.mode === "LOOTPRIZE" && (
        <div>
          <DialogTitle id="form-dialog-title">Click the Chest!</DialogTitle>
          <DialogContent>
            <Canvas />
          </DialogContent>
          <div className="dialog-actions">
            <Button id="start" onClick={props.handleClose}>
              Close Window
            </Button>
          </div>
        </div>
      )}
    </Dialog>
  );
};

export default UserPopup;
