import React from 'react';
import NavBar from './NavBar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './Home.scss';
import Canvas from './helper_components/Canvas';

//Moved from App.js then props passed in
const Home = (props) => {
    return (
        <div className="App">
            <NavBar/>
            <h2>Start saving for your next trip!</h2>
            <hr class="solid" />
            <form noValidate autoComplete="off">
                <TextField id="standard-basic" label="name" />&nbsp;&nbsp;&nbsp;
                <TextField id="standard-basic" label="email" />&nbsp;&nbsp;&nbsp;
                <TextField id="standard-basic" label="password" />
                <Button variant="contained" color="primary">
                    Sign up
                </Button>  
            </form>
            <br/><br/><br/>
            <div class="trip-container">
                <div class="text-and-heading">
                    <h4>Iceland</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit lorem eget aliquam placerat. Nulla eleifend quis felis vitae eleifend. Quisque nec tincidunt tortor, sit amet auctor ipsum. Etiam nec metus eu urna lacinia tempus. Aliquam sed sem urna. Integer sit amet nibh euismod lacus vulputate convallis ac vel purus. Nulla consectetur tristique sapien. Maecenas rhoncus nec lectus ac fringilla. Maecenas in luctus sem. Nunc laoreet accumsan ligula, et bibendum risus tempor venenatis. Nam erat nunc, sagittis vel imperdiet non, dapibus vel dui. Etiam euismod elementum placerat. Suspendisse venenatis ligula augue, cursus ultricies ex lobortis eget. Cras lectus ipsum, sollicitudin in tristique aliquam, rutrum a velit. Nunc nisi diam, ullamcorper eu sollicitudin in, suscipit a mi.</p>
                </div>
                <img src={require('../pics/waterfall.jpg')} alt="waterfall" />
            </div>
            <br/><br/><br/>
            <Canvas/>
            <br/><br/><br/>
            <h1>{ props.state.message }</h1>
            <Button variant="contained" color="primary" onClick={props.fetchData} >
                Fetch Data
            </Button>        
        </div>
    );
};

export default Home;