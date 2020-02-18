import React, { Component } from "react";
import { Link } from "react-router-dom";

class HotelButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Holiday Inn",
      city: "Los Angeles",
      rating: 3.5,
      eco: true,
      listPrice: "$300/night",
      currentPrice: "$250/night"
    };
  }

  ratingComment = rating => {
    return parseFloat(rating) >= 4
      ? "Very good!"
      : 4 > parseFloat(rating) && parseFloat(rating) >= 3.5
      ? "Good!"
      : "";
  };

  reviewCount = () => {
    return Math.floor(Math.random() * 10000) + 1000;
  };

  handleEco = () => {
    return this.state.eco === true ? "🌲 Eco-friendly" : "";
  };

  render() {
    const { ratingComment, reviewCount, handleEco } = this;
    const { name, city, rating, eco, listPrice, currentPrice } = this.state;
    return (
      <React.Fragment>
        <Link to="[HOTEL SLUG]">
          <div className="hotel-info">
            <img src="[../../images/HOTEL PIC]" />
            <div className="hotel-info-text">
              <h3>{name}</h3>
              <p>{city}</p>
              <p>
                {rating}/5 {ratingComment(rating)} ({reviewCount()} reviews)
              </p>
            </div>
          </div>
          <div className="room-info">
            <div className="room-features">
              <p>✔️ Free cancellation</p>
              <p>{handleEco()}</p>
            </div>
            <div className="room-price">
              <span className="room-price-list">{listPrice}</span>{" "}
              <span className="room-price-current">{currentPrice}</span>
              <p>Per person includes flight + hotel + car</p>
            </div>
          </div>
        </Link>
      </React.Fragment>
    );
  }
}

export default HotelButton;
