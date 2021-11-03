import React from "react";
import moviesArr from "../data/movies.json"



function Main() {

    return (
        <>
            {moviesArr.map((movie, index) => {
                return (
                    <div className="movie" key={movie.id}>
                        <h2>Title: {movie.title}</h2>
                        <p>Year: {movie.year}</p>
                        <p>Rating: {movie.rating}</p>
                    </div>
                );
            })}
        </>
    );
};

export default Main;