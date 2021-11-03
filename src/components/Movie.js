import React from "react";


function Movie(props){
    return (
       
        <div className="movie">
            <h2>Title: {props.title}</h2>
            <p>Year: {props.year}</p>
            <p>Rating: {props.rating}</p>
        </div>
    );
};




export default Movie;