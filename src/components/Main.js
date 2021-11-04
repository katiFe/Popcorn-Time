import React from "react";
import moviesArr from "../data/movies.json"
import Movie from "./Movie"
import AddMovie from "./AddMovie";



class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            moviesToDisplay: moviesArr
        }
    };

createMovie = (newMovieDetails)=>{
    console.log(newMovieDetails)
    this.setState((prevState, props)=>{
        const newListOfMovies = [newMovieDetails,...prevState.moviesToDisplay ];
        return {moviesToDisplay: newListOfMovies}
    });
}


renderClassicsOnly = ()=>{
    this.setState((prevState, props)=>{
        const newList = prevState.moviesToDisplay.filter((movie)=>{
            return movie.year < 2000 
        });

        return {moviesToDisplay: newList}
    });
}

render(){
   return (
        <>
            <div className="controls">
                <button onClick={this.renderClassicsOnly}>Display only classics</button>
            </div>

        
            <AddMovie addMovieHandler={this.createMovie}/>

            <div className="movie-list">
                {this.state.moviesToDisplay.map((movie) => {
                    return <Movie
                        key={movie.id}                                 //JSX spread attribute also valid {...movie} sending all the properties of the object
                        title={movie.title}
                        year={movie.year}
                        rating={movie.rating}
                    />;
                })}

            </div>
        </>
    ); 
}
    
};

export default Main;