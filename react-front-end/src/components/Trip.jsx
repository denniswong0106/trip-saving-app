import React from 'react';
import NavBar from './NavBar';
import './Trip.scss';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

//popup
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

//slider
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const Trip = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const useStyles = makeStyles({
        root: {
          width: 300,
        },
      });

      function valuetext(value) {
        return `${value}°C`;
      }

      const marks = [
        {
          value: 1,
        },
        {
          value: 5,
        },
        {
          value: 10,
        },
      ];

    return (
        <div>
            <NavBar/>
            <div class="all">
                <img src={require('../pics/waterfall.jpg')} alt="waterfall" />
                <div class="text-and-price">
                    <div class="text-and-heading">
                        <h4>Iceland</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit lorem eget aliquam placerat. Nulla eleifend quis felis vitae eleifend. Quisque nec tincidunt tortor, sit amet auctor ipsum. Etiam nec metus eu urna lacinia tempus. Aliquam sed sem urna. Integer sit amet nibh euismod lacus vulputate convallis ac vel purus. Nulla consectetur tristique sapien. Maecenas rhoncus nec lectus ac fringilla. Maecenas in luctus sem. Nunc laoreet accumsan ligula, et bibendum risus tempor venenatis. Nam erat nunc, sagittis vel imperdiet non, dapibus vel dui. Etiam euismod elementum placerat. Suspendisse venenatis ligula augue, cursus ultricies ex lobortis eget. Cras lectus ipsum, sollicitudin in tristique aliquam, rutrum a velit. Nunc nisi diam, ullamcorper eu sollicitudin in, suscipit a mi.</p>
                    </div>
                    <Card class="price-card">
                        <h5>5 days</h5>
                        <h2>$6522</h2>
                        <Button size="medium" onClick={handleClickOpen}>Book now</Button>
                    </Card>
                </div>
            </div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
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
                    <Typography id="discrete-slider" gutterBottom>
                        Temperature
                    </Typography>
                    <Slider
                        defaultValue={1}
                        getAriaValueText={valuetext}
                        marks={marks}
                        aria-label="ios slider"
                        // aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        step={0.25}
                        marks
                        min={1}
                        max={10}
                    />
                </DialogContent>
                <div class="dialog-actions">
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button id="start" onClick={handleClose} color="primary">
                        Start Saving
                    </Button>
                </div>
            </Dialog>
        </div>
    );
};

export default Trip;