import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Home from './components/routes/Home'
import HotelList from './components/routes/HotelList'
import Hotel from './components/routes/Hotel'
import Confirmation from './components/routes/Confirmation'

//TODO: Move all state to Home component and implement a redirect to pass state from Home to the next Route component (i.e. HotelList)
/* Corey changed the Home route to not pass down other props as that was causing the page to re-render, losing focus on the search input fields. */

const App = () => {
  return (
    <React.Fragment>
      <Route exact path='/' component={Home} />
      <Route exact path='/hotels' component={HotelList} />
      <Route exact path='/hotels/:hotel_id' component={Hotel} />
      <Route exact path='/hotels/:hotel_id/confirmation' component={Confirmation} />
    </React.Fragment>
  );

}

export default App
