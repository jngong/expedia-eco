import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

import LogoNav from "./components/shared/LogoNav";
import Home from "./components/routes/Home";
import HotelList from "./components/routes/HotelList";
import Hotel from "./components/routes/Hotel";
import ConfirmationPage from "./components/routes/ConfirmationPage";
import Admin from './components/routes/Admin';
import AdminEdit from './components/routes/AdminEdit';


/* We had changed the Home route to not pass down other props as that was causing the page to re-render, losing focus on the search input fields. However, when I moved state from App to Home, I was able to revert the Route back to the way it was originally since it no longer needs to accept state as props.*/

const App = () => {
  return (
    <div className="App">
      <LogoNav />

      <Route exact path="/" component={Home} />
      <Route exact path="/hotels" component={HotelList} />
      <Route exact path="/hotels/:hotel_id" component={Hotel} />
      <Route
        exact
        path="/hotels/:hotel_id/confirmation"
        component={ConfirmationPage}
      />
      <Route exact path='/admin' component={Admin} />
      <Route exact path='/admin/edit/:hotel_id' component={AdminEdit}/>
    </div>
  );
};

export default App;
