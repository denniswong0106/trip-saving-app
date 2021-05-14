import React, { useContext } from "react";
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
import axios from "axios";
import DataContext from "../helperfunctions/DataContext";

const UserPopup = (props) => {
  const [groupName, setGroupName] = React.useState("");
  const history = useHistory();
  const { setState } = useContext(DataContext);

  // make axios call to create group, then make axios call to update trip
  const createGroup = () => {
    console.log("groupName", groupName);

    const groupCreate = axios
      .put("/api/groups", {
        name: groupName,
      })
      .then((result) => {
        console.log("do i get groupid back?", result.data[0]);
        // setState((prev) => {
        //   return { ...prev, groups: [...prev.groups, result.data[0]] };
        // });
        return result;
      });

    groupCreate
      .then((result) => {
        return axios.post("/api/trips/groupid", {
          id: props.id,
          group_id: result.data[0].id,
        });
      })
      .then((result) => {
        console.log("do i get tripObj back?", result.data[0]);
        setState((prev) => {
          const filterTrip = prev.trips.filter((trip) => {
            return trip.id !== props.id;
          });
          console.log("filterTrip", filterTrip);
          return { ...prev, trips: [...filterTrip, result.data[0]] };
        });
        // props.handleCloseGroup();
      });
    // history.push(`/user/${props.user_id}/trip/${props.id}`);
  };
  return (
    <>
      <Dialog
        open={props.openGroup}
        onClose={props.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <div>
          <DialogTitle id="form-dialog-title">Create a group!</DialogTitle>
          <DialogContent>
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
          </DialogContent>
          <Button id="set-group" onClick={createGroup}>
            Set Group!
          </Button>
          <Button id="cancel" onClick={props.handleCloseGroup}>
            Cancel
          </Button>
        </div>
      </Dialog>
    </>
  );
};

export default UserPopup;
