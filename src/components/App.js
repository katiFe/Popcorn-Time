import React from "react";
import moviesArr from "../data/movies.json"
import './App.css';
import Main from './Main';
import Footer from './Footer';
import Header from './Header';


class App extends React.Component {

  state = {
    moviesToDisplay: moviesArr
  };

  createMovie = (newMovieDetails)=>{
    // console.log(newMovieDetails)
//adding key
    newMovieDetails.id = this.state.moviesToDisplay.length + 1;
//add this info in order to be equal with the info from all other movies
    newMovieDetails.genre = [];
    newMovieDetails.imageURL = "";

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
    <div className="App">
     <Header listOfMovies={this.state.moviesToDisplay}/>
     <Main listOfMovies={this.state.moviesToDisplay} renderClassics={this.renderClassicsOnly} addMovieHandler={this.createMovie}/>
     <Footer/>
    </div>
  );
  }
  
};

export default App;
