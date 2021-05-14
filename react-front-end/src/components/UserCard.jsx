import React, { useContext } from "react";
import DataContext from "../helperfunctions/DataContext";
import "./UserCard.scss";

//Thanks to Luke Bergmann for most of this https://github.com/lukebergmann/pcchallenge
const UserCard = () => {
    const { getUserTrips, getUserById } = useContext(DataContext);

    const user = { ...getUserById(1) };

    return (
        <div class="main-box">
            <div className="bg-pattern-top" />
            <img className="image" src={user.avatar} alt=""/>
            <div className="bg-pattern-bottom"/>
            <h3 className="name">
                {user.name} <span class="age">26</span>
            </h3>
            <p className="location">London</p>
        </div>
    );
};

export default UserCard;