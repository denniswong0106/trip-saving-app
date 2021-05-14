import React, { useContext } from "react";
import DataContext from "../helperfunctions/DataContext";
import "./UserCard.scss";

//Thanks to Luke Bergmann for most of this https://github.com/lukebergmann/pcchallenge
const UserCard = () => {
    const { getUserTrips, getUserById } = useContext(DataContext);

    const user = { ...getUserById(1) };

    return (
        <div class="main-box">
            <div class="bg-pattern-top">
                <img src="./images/bg-pattern-top.svg" alt=""/>
            </div>
            <div class="bg-pattern-bottom">
                <img src="./images/bg-pattern-bottom.svg" alt=""/>
            </div>
            <div>
                {/* <img class="bg-pattern-card" src="https://media.istockphoto.com/vectors/aircraft-destinations-with-planes-icons-on-blue-background-abstract-vector-id1174854848?k=6&m=1174854848&s=612x612&w=0&h=g6jss7xxMSgBz9z2YCPvi_oxV6C3It24REb9wSnrBmM=" alt=""/> */}
            </div>
            <div>
                <img class="image" src={user.avatar} alt=""/>
            </div>
            <div>
                <h3>
                    {user.name} <span class="age">26</span>
                </h3>
            </div>

            <p>London</p>
        </div>
    );
};

export default UserCard;