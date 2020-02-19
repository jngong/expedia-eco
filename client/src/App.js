import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import LogoNav from './components/shared/LogoNav'
import Home from './components/routes/Home'
import HotelList from './components/routes/HotelList'
import Hotel from './components/routes/Hotel'
import ConfirmationPage from './components/routes/ConfirmationPage';

/* We had changed the Home route to not pass down other props as that was causing the page to re-render, losing focus on the search input fields. However, when I moved state from App to Home, I was able to revert the Route back to the way it was originally since it no longer needs to accept state as props.*/

const App = () => {
  return (
    <div className="App">
      <LogoNav />
      <p>This is App.js</p>
      <Route exact path='/' component={Home} />
      <Route exact path='/hotels' component={HotelList} />
      <Route exact path='/hotels/:hotel_id' component={Hotel} />
      <Route exact path='/hotels/:hotel_id/confirmation' component={ConfirmationPage} />
    </div>
  );
}

export default App
