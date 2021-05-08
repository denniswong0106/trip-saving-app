import React from 'react';
import NavBar from './NavBar';
import './Trip.scss';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Popup from './Popup.jsx';


const Trip = () => {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(0)

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    function handleChange (event, value) {
        setValue(value);
    };

    function valuetext(value) {
        return `$${value}`;
      }

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
            <Popup valuetext={valuetext} value={value} open={open} handleClose={handleClose} handleChange={handleChange} />
        </div>
    );
};

export default Trip;