import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Button, Dialog, TextField, DialogContent, DialogTitle } from "@material-ui/core/";
import axios from "axios";
import DataContext from "../helperfunctions/DataContext";
import "./User.scss";
import "./Popup.scss";

const UserPopup = (props) => {
  const [groupName, setGroupName] = React.useState("");
  const history = useHistory();
  const { setState } = useContext(DataContext);

  // make axios call to create group, then make axios call to update trip
  const createGroup = (event) => {
    console.log("groupName", groupName);
    const groupId = [];

    const groupCreate = axios
      .put("/api/groups", {
        name: groupName,
      })
      .then((result) => {
        console.log("do i get groupid back?", result.data[0]);
        groupId.push(result.data[0]);
        setState((prev) => {
          return { ...prev, groups: [...prev.groups, result.data[0]] };
        });
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
        props.handleCloseGroup(event);

        history.push(`/user/${props.user_id}/group/${groupId[0].id}`);
      });
  };
  return (
      <Dialog
        open={props.openGroup}
        onClose={props.handleClose}
        aria-labelledby="form-dialog-title"
      >
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
        <Button id="set-group" onClick={(event) => createGroup(event)}>
          Set Group!
        </Button>
        <Button id="cancel" onClick={props.handleCloseGroup}>
          Cancel
        </Button>
      </Dialog>
  );
};

export default UserPopup;
