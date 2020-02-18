import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Home from './components/routes/Home'
import HotelList from './components/routes/HotelList'
import Hotel from './components/routes/Hotel'
import Confirmation from './components/routes/Confirmation'

class App extends Component {

  // Set up App as a class component to set state - initially with dummy data for search terms.
  constructor(props) {
    super(props)
    this.state = {
      tripSearch: {
        departCity: 'Miami',
        destCity: 'Los Angeles',
        departDate: '06/02/2020',
        returnDate: '06/09/2020',
        travelers: 2,
        hotelCheckbox: false,
        ecoFriendlyCheckbox: true
      },
      cityId: 2 
    }
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleCheckChange = this.handleCheckChange.bind(this)
  }

   //Set up handleChange function to capture data from form input fields
      //For checkboxes, need to set state for tripSearch.[name] to checked.
      //For all other values, need to set state for tripSearch.[name] to value.

  handleTextChange = event => {
    const {value, name} = event.target;
    this.setState(prevState => ({
      tripSearch: {
        ...prevState.tripSearch,
        [name]: value
      }
    }))
    console.log(name, value);
  }

  handleCheckChange = (event) => {
    const checked = event.target.checked
    const name = event.target.name
    this.setState(prevState => ({
      tripSearch: {
        ...prevState.tripSearch,
        [name]: checked
      }
    }))
  }
 
  handleSubmit = (event) => {
    event.preventDefault()
    //When the form is submitted, it needs to do two things. 
    // 1: compare the destCity value to our list of cities to set the state of CityId and 
    // 2: push to the next route in the user flow (HotelList)
      this.props.history.push(`/hotels`)
  }

  render() {

    return (
      <React.Fragment>
        {/* Corey changed the Home route to not pass down other props as that was causing the page to re-render, losing focus on the search input fields. */}
        <Route exact path='/'>
          <Home tripSearch={this.state.tripSearch} handleTextChange={this.handleTextChange} handleCheckChange={this.handleCheckChange} handleSubmit={this.handleSubmit} />
        </Route>

        <Route exact path='/hotels' component={HotelList} />
        <Route exact path='/hotels/:hotel_id' component={Hotel} />
        <Route exact path='/hotels/:hotel_id/confirmation' component={Confirmation} />
      </React.Fragment>
    );
  }

}

export default App
