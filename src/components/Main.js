import React from "react";
import moviesArr from "../data/movies.json"
import Movie from "./Movie"



function Main() {

    return (  
        <>
    {moviesArr.map((movie)=>{
      return  <Movie  
        key={movie.id}                                 //also valid {...movie}
          title= {movie.title}
          year= {movie.year}
          rating={movie.rating}
      /> ;
    })}
            
        </>
    );
};

export default Main;