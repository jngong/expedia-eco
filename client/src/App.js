import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Home from './components/routes/Home'
import HotelList from './components/routes/HotelList'
import Hotel from './components/routes/Hotel'
import Confirmation from './components/routes/Confirmation'

class App extends Component {
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
      }
  }
  }


  render() {

    return (
      <React.Fragment>
        <Route exact path='/' component={props => <Home {...props} tripSearch={this.state.tripSearch}/> } />
        <Route exact path='/hotels' component={HotelList} />
        <Route exact path='/hotels/:hotel_id' component={Hotel} />
        <Route exact path='/hotels/:hotel_id/confirmation' component={Confirmation} />
      </React.Fragment>
    );
  }

}

export default App
