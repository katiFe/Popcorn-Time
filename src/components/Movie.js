import React from "react";


function Movie(props){

    const isPopular = props.rating;

    function Popular(){
        if( isPopular > 8 ){
            return "POPULAR"
        }
    }

    
    return (
       
        <div className="movie">
            <h2>Title: {props.title}</h2>
            <p>Year: {props.year}</p>
            <p>Rating: {props.rating}</p>
            <p><strong>{Popular(props)}</strong></p>

            {/*another alternative: logical operator {condition tue && then result} */}
            {/* {props.rating > 8 && <p className=""><stron>POPULAR</stron></p>} */}

            {/*another alternative: operator*/}
            {/* {props.rating > 8 ? <p className=""><stron>POPULAR</stron></p> : ""} */}
        </div>
    );
};




export default Movie;