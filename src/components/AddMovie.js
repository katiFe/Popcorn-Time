import React, { Component } from 'react';
import './AddMovie.css';

 class AddMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ""                      
        }
    }

    handleTitleChange = ((event)=>{
        // console.log("user is typing")
        // console.log(event)
        // console.log("user is typing ", event.target.value)
        this.setState({title : event.target.value})
    });

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
                    onChange={this.handleTitleChange}/>
                    </label>


                  <button>Submit</button>
              </form>  
            </div>
        )
    }
}


export default AddMovie;