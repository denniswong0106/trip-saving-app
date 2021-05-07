import React from 'react';
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <Link to="/">Home </Link>
            <Link to="/user">User </Link>
            <Link to="/trip">Trip</Link>
        </div>
    );
};

export default NavBar;