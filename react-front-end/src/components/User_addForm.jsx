import React from "react";
import "./User.scss";
import { useParams, useHistory, Link } from "react-router-dom";

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

const UserPopup = (props) => {
  const [groupName, setGroupName] = React.useState("");
  return (
    <>
      <div>
        <h2>{props.tripname}!</h2>
      </div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <div>
          <DialogTitle id="form-dialog-title">Create a group!</DialogTitle>
          <DialogContent>
            <img
              className="loading-gif"
              src={require("../pics/piggybank.gif")}
              alt="piggybank"
            />
          </DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="trip-name"
            label="Trip name"
            value={groupName}
            onChange={(event) => {
              setGroupName(event.target.value);
            }}
            fullWidth
          />
        </div>
      </Dialog>
    </>
  );
};

export default UserPopup;
