import React from "react";
import './Header.css';


function Header(props){
    return <div className="Header">
    <h1>Welcome to Popcorn Time</h1>

    <div id="summary">
        Number of movies: {props.listOfMovies.length}
    </div>
    </div>
};


export default Header;