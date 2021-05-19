import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Canvas from "./helper_components/Canvas";
import Canvas2 from "./helper_components/Canvas2";
import explosion from "../helperfunctions/explosion";
import {
  calculateDaysRemaining,
  expectedDate,
} from "../helperfunctions/calculateFunctions";
import "./Popup.scss";
import "./Canvas2.scss";

//slider
import { withStyles } from "@material-ui/core/styles";

const UserPopup = (props) => {
  const mimicAddSavings = () => {
    // setTimeout to mimic saving for 3 seconds:
    setTimeout(function () {
      toggle();
    }, 2500);
  };

  function toggle() {
    document.getElementById("loading-gif") &&
      (document.getElementById("loading-gif").className = "hidden");
    document.getElementById("loaded-img") &&
      (document.getElementById("loaded-img").className = "show");
    document.getElementById("message-savings") &&
      (document.getElementById("message-savings").className = "hidden");
    document.getElementById("message-successful") &&
      (document.getElementById("message-successful").className = "show");
    document.getElementById("lootbox") &&
      (document.getElementById("lootbox").className += " show");
  }

  return (
    <Dialog
      width="300"
      height="300"
      open={props.open}
      onClose={props.handleClose}
      onClick={(event) => event.stopPropagation()}
      aria-labelledby="form-dialog-title"
    >
      {props.mode === "SAVING" && (
        <div>
          {mimicAddSavings()}
          <DialogTitle id="form-dialog-title">
            <h2 id="message-savings" className="show">
              Adding to your savings...
            </h2>
            <h2 id="message-successful" className="hidden">
              Successfully Added!
            </h2>
          </DialogTitle>

          <DialogContent className="loading">
            <img
              id="loading-gif"
              className="show"
              src={require("../pics/piggybank.gif")}
              alt="piggybank"
            />
            <img
              id="loaded-img"
              className="hidden"
              src={require("../pics/piggyAssets/12.jpg")}
              alt="piggybank"
            />
          </DialogContent>
          <div id="lootbox" className="dialog-actions">
            <Button
              id="start"
              className="open-loot-box"
              onClick={() => props.setMode("LOOTPRIZE")}
            >
              Click Here to For Your Chance to Win!
            </Button>
          </div>
        </div>
      )}
      {/* {props.mode === "TRANSITION" && (
        <div>
          <DialogTitle id="form-dialog-title">Succesfully Added!</DialogTitle>
          <DialogContent>
            <img
              id="loading-gif"
              className="loaded-img"
              src={require("../pics/piggyAssets/12.jpg")}
              alt="piggybank"
            />
          </DialogContent>
          <div className="dialog-actions">
            <Button id="start" onClick={() => {props.setMode("LOOTPRIZE");}}>
              Click Here to For Your Chance to Win!
            </Button>
          </div>
        </div>
      )} */}
      {props.mode === "LOOTPRIZE" && (
        <div>
          <DialogTitle id="form-dialog-title">Click the Chest!</DialogTitle>
          <DialogContent>
            <Canvas2 trip_id={props.trip_id} />
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
