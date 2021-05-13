import React, { useContext, useEffect } from "react";
import "./Trip.scss";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Popup from "./Popup.jsx";
import DataContext from "../helperfunctions/DataContext";
import { useParams, useHistory } from "react-router-dom";

const Trip = () => {
  const { search, setSearch, data, setData } = useContext(DataContext);
  const params = useParams();
  const history = useHistory();
  // console.log("trip calls the data state", data);

  // filter the overall state with the param id
  // to give the correct trip object;
  const trip = Array.from(data).filter(
    (tripObj) => tripObj.id === params.id
  )[0];

  console.log("The trip Object", trip);

  let redirect;
  let info = {};
  if (!trip) {
    console.log("No trip object found:");
    info = {
      pics:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/No_image_3x4.svg/1200px-No_image_3x4.svg.png",
    };
  } else {
    clearTimeout(redirect);
    info = {
      locationName: trip.name,
      description: trip.description,
      tripId: params.id,
      price: trip.advertised_departures[1]
        ? `$${trip.advertised_departures[1].amount}`
        : "Price currently unavailable",
      pics: trip.images[2].image_href,
    };
  }

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
        <img src={pics} alt="pic" />
        <div className="text-and-price">
          <div className="text-and-heading">
            <h4>{locationName}</h4>
            <p>{description}</p>
          </div>
          <Card className="price-card">
            <h5>5 days</h5>
            <h2>{price}</h2>
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
