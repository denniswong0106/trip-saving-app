import React from 'react';
import NavBar from './NavBar';


//Moved from App.js then props passed in
const Home = (props) => {
    return (
        <div className="App">
            <NavBar/>
            <h1>{ props.state.message }</h1>
            <button onClick={props.fetchData} >
                Fetch Data
            </button>        
        </div>
    );
};

export default Home;