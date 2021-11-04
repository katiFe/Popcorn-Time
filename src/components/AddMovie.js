import React, { Component } from 'react';
import './AddMovie.css';

 class AddMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            year: "",
            rating: ""                      
        }
    }

    // handleTitleChange = ((event)=>{
    //     // console.log("user is typing")
    //     // console.log(event)
    //     // console.log("user is typing ", event.target.value)
    //     this.setState({title : event.target.value})
    // });

    // handleYearChange = ((event)=>{
    //     this.setState({year: event.target.value})
    // })

    // handleRatingChange = ((event)=>{
    //     this.setState({rating : event.target.value})
    // })

    handleInputChange = ((event)=>{
        const nameOfTheInput = event.target.name;
        this.setState({[nameOfTheInput] : event.target.value})
    })

    render() {
        return (
            <div className="AddMovie">
            <h2>Add a new Movie</h2>
              <form>
                    <label>
                    Title:
                  <input 
                    type="text"    
                    name="title" 
                    value={this.state.title} 
                    onChange={this.handleInputChange}/>
                    </label>

                    <label>
                    Year:
                  <input 
                    type="number"    
                    name="year" 
                    min="1930"
                    max="2025"
                    value={this.state.year} 
                    onChange={this.handleInputChange}/>
                    </label>

                    <label>
                    Rating:
                  <input 
                    type="number"    
                    name="rating" 
                    min="1"
                    max="10"
                    value={this.state.rating} 
                    onChange={this.handleInputChange}/>
                    </label>


                  <button>Submit</button>
              </form>  
            </div>
        )
    }
}


export default AddMovie;