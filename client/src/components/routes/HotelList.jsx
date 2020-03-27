import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../css/HotelList.css";
import HotelButton from "./HotelButton";

class HotelList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.props.location.state.tripSearch,
      cityId: this.props.location.state.cityId,
      hotels: [
        {
          name: "",
          city: "",
          rating: 0,
          eco: true,
          listPrice: "",
          currentPrice: ""
        }
      ]
    };
  }

  // use the cityId passed down from the search form to fetch a list of hotels in the target city from the API
  getSearchResults = async () => {
    try {
      const res = await axios.get(
        `/api/cities/${this.props.location.state.cityId}/hotels`
      );
      this.setState({ hotels: res.data.hotels });
    } catch (error) {
      return console.log(error);
    }
  };

  componentDidMount = () => {
    this.getSearchResults();
  };

  /* ---------- RENDER ---------- */
  render() {
    const {
      hotels,
      destCity,
      departDate,
      returnDate,
      travelers,
      cityId
    } = this.state;

    return (
      <div className="hotel-list">
        <span className="task">
          <img
            src={require("../../images/icons-assets/hotel@2x.png")}
            className="big-icon"
            alt="hotel"
          />
          1 of 4: Choose your hotel
        </span>

        <h2>Start by choosing your hotel</h2>

        <p>
          The trip prices shown include Flight + Hotel + Car, taxes and fees,
          but do not include baggage fees or other fees charged directly by the
          airline for the included flight.
        </p>

        <div className="search-details">
          <span className="destination">
            <img
              src={require("../../images/icons-assets/luggage@2x.png")}
              className="big-icon"
              alt="luggage"
            />{" "}
            <span className="dest-city capitalize">{destCity}</span>
            <span>&nbsp;(and vicinity)</span>
          </span>
          <p className="property-count">({hotels.length} properties)</p>
          <span className="travel-dates">
            <img
              src={require("../../images/icons-assets/calendar@2x.png")}
              className="icon"
              alt="calendar"
            />
            {departDate} - {returnDate}
          </span>
          <span className="hotel-room">
            <img
              src={require("../../images/icons-assets/bed@2x.png")}
              className="icon"
              alt="bed"
            />
            1 room, {travelers} adult(s)
          </span>
        </div>

        <div className="big-buttons">
          <div className="sort-button rounded-corner">
            <img
              src={require("../../images/icons-assets/sliders@2x.png")}
              className="big-icon"
              alt="sliders"
            />
            Sort &amp; Filter
          </div>
          <div className="map-button rounded-corner">
            <img
              src={require("../../images/icons-assets/map-marker@2x.png")}
              className="big-icon"
              alt="map marker"
            />
            Map
          </div>
        </div>

        <div className="phone">
          <Link to="/">
            Questions? 866-404-5719
            <img
              src={require("../../images/icons-assets/telephone@2x.png")}
              className="tiny-icon"
              alt="phone"
            />
          </Link>
        </div>

        <ul>
          {hotels.map((hotel, i) => {
            return <HotelButton key={i} id={cityId} destCity={destCity} />;
          })}
        </ul>
      </div>
    );
  }
}

export default HotelList;
