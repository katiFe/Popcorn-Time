import React from "react";
import Movie from "./Movie"
import AddMovie from "./AddMovie";



class Main extends React.Component {







    render() {
        return (
            <>
                <div className="controls">
                    <button onClick={this.props.renderClassics}>Display only classics</button>
                </div>


                <AddMovie addMovieHandler={this.props.addMovieHandler} />

                <div className="movie-list">
                    {this.props.listOfMovies.map((movie) => {
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