import React, { useContext } from "react";
import "./Trip.scss";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Popup from "./Popup.jsx";
import DataContext from "../helperfunctions/DataContext";

const Trip = () => {
  const { search, setSearch, data, setData } = useContext(DataContext);

  const info = {
    locationName: "Iceland",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit lorem eget aliquam placerat. Nulla eleifend quis felis vitae eleifend. Quisque nec tincidunt tortor, sit amet auctor ipsum. Etiam nec metus eu urna lacinia tempus. Aliquam sed sem urna. Integer sit amet nibh euismod lacus vulputate convallis ac vel purus. Nulla consectetur tristique sapien. Maecenas rhoncus nec lectus ac fringilla. Maecenas in luctus sem. Nunc laoreet accumsan ligula, et bibendum risus tempor venenatis. Nam erat nunc, sagittis vel imperdiet non, dapibus vel dui. Etiam euismod elementum placerat. Suspendisse venenatis ligula augue, cursus ultricies ex lobortis eget. Cras lectus ipsum, sollicitudin in tristique aliquam, rutrum a velit. Nunc nisi diam, ullamcorper eu sollicitudin in, suscipit a mi.",
    tripId: 1,
    price: 6522,
    pics: "../pics/waterfall.jpg",
  };
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(1);
  const { locationName, description, tripId, price, pics } = info;

  //handles if popup is open/closed
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //updates state from slider
  function handleChange(event, value) {
    setValue(value);
  }

  return (
    <div>
      <div className="all">
        <img src={require("../pics/waterfall.jpg")} alt="pic" />
        <div className="text-and-price">
          <div className="text-and-heading">
            <h4>{locationName}</h4>
            <p>{description}</p>
          </div>
          <Card className="price-card">
            <h5>5 days</h5>
            <h2>${price}</h2>
            <Button size="medium" onClick={handleClickOpen}>
              Book now
            </Button>
          </Card>
        </div>
      </div>
      <Popup
        description={description}
        locationName={locationName}
        tripId={tripId}
        price={price}
        handleChange={handleChange}
        value={value}
        open={open}
        handleClose={handleClose}
      />
    </div>
  );
};

export default Trip;
