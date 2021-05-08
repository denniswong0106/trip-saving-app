import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import './Popup.scss';

//slider
import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core/styles';

const Popup = (props) => {
  //where the tick marks are on the slider
  const marks = [{value: 0, label: "0"},{value: 2.5}, {value: 5, label: "5"}, {value: 7.5}, {value: 10, label: "10"}];

  //slider style settings
  const IOSSlider = withStyles({
    root: {
      color: '#3880ff',
      height: 2,
      padding: '15px 0',
    },
    track: {
      height: 2,
    },
    rail: {
      height: 2,
      opacity: 0.5,
      backgroundColor: '#bfbfbf',
    },
    mark: {
      backgroundColor: '#bfbfbf',
      height: 10,
      width: 1,
      marginTop: -4,
    },
    markActive: {
      opacity: 1,
      backgroundColor: 'currentColor',
    },
  })(Slider);

  //for days estimate
  function days(drip, goal) {
    const daysTotal = goal / drip;
    return daysTotal.toFixed(1);
  };

   return (
    <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Book your trip</DialogTitle>
      <DialogContent>
          <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Trip name"
              fullWidth
          />
          <h3>
              Iceland $6522
          </h3>
          <IOSSlider
              defaultValue={props.value}
              valueLabelDisplay="auto"
              step={0.25}
              marks={marks}
              min={0}
              max={10}
              onChangeCommitted={props.handleChange}
          />
          <div class="math">
            <h5>${props.value} per day</h5>
            <h5>{days(props.value, 6522)} days</h5>
          </div>
      </DialogContent>
      <div class="dialog-actions">
          {/* <Button onClick={handleClose}>Cancel</Button> */}
          <Button id="start" onClick={props.handleClose}>Start Saving!</Button>
      </div>
    </Dialog>
  )
};

export default Popup;