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
    const updatedField = { [event.target.name]: event.target.value }
    const updatedSearch = Object.assign(this.state.tripSearch, updatedField)
    this.setState({ tripSearch: updatedSearch })
    console.log(updatedField)
    console.log(updatedSearch)
  }

  handleCheckChange = (event) => {
    const updatedField = { [event.target.name]: event.target.checked }
    const updatedSearch = Object.assign(this.state.tripSearch, updatedField)
    this.setState({ tripSearch: updatedSearch })
  }

 
  handleSubmit = (event) => {
    event.preventDefault()
    //When the form is submitted, it needs to do two things. 1: compare the destCity value to our list of cities to set the state of CityId and 2: push to the next page in the user flow (HotelList)
      this.props.history.push(`/hotels`)
  }

  render() {

    return (
      <React.Fragment>
        <Route exact path='/' component={props => <Home {...props} tripSearch={this.state.tripSearch} handleTextChange={this.handleTextChange} handleCheckChange={this.handleCheckChange} handleSubmit={this.handleSubmit} /> } />
        <Route exact path='/hotels' component={HotelList} />
        <Route exact path='/hotels/:hotel_id' component={Hotel} />
        <Route exact path='/hotels/:hotel_id/confirmation' component={Confirmation} />
      </React.Fragment>
    );
  }

}

export default App
