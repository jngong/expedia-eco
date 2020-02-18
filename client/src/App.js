import React, { Component } from 'react';
import './App.css';
import Home from './components/routes/Home';

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
      }
    }
  }

  render() {
    return (
      <div className="App">
        <p>This is App.js</p>
        <Home tripSearch={this.state.tripSearch} />
      </div>
    );
  }
}

export default App;
