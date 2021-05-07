import React from 'react';
import NavBar from './NavBar';
import Button from '@material-ui/core/Button';

//Moved from App.js then props passed in
const Home = (props) => {
    return (
        <div className="App">
            <NavBar/>
            <h1>{ props.state.message }</h1>
            <Button variant="contained" color="primary" onClick={props.fetchData} >
                Fetch Data
            </Button>        
        </div>
    );
};

export default Home;