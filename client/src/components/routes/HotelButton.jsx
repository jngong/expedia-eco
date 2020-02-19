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

  // ADDS COMMENTS IF THE HOTEL HAS A GOOD RATING
  ratingComment = rating => {
    return parseFloat(rating) >= 4
      ? "Very good!"
      : 4 > parseFloat(rating) && parseFloat(rating) >= 3.5
      ? "Good!"
      : "";
  };

  // GENERATES A RANDOM NUMBER TO ACT AS A COUNT OF REVIEWS
  reviewCount = () => {
    return Math.floor(Math.random() * 10000) + 1000;
  };

  // PICKS A DIFFERENT THUMBNAIL IMAGE FOR EACH ENTRY
  // randomThumbnail = () => {
  //   const num = Math.floor(Math.random() * 4) + 1;
  // 	// return `../../images/icons-assets/hotel-thumb-${num}@2x.png`;
  // 	return num
  // };

  // RENDERS THE "ECO-FRIENDLY" MESSAGE IF THE HOTEL OBJECT HAS eco_friendly:true
  handleEco = () => {
    return this.state.eco === true ? "🌲 Eco-friendly" : "";
  };

  render() {
    // DESTRUCTURING VARIABLES
    const { ratingComment, reviewCount, randomThumbnail, handleEco } = this;
    const { name, city, rating, eco, listPrice, currentPrice } = this.state;

    return (
      <React.Fragment>
        <Link to="/hotels/:hotel_id">
          <div className="hotel-info">
            <img
              src={require("../../images/icons-assets/hotel-thumb-2@2x.png")}
            />
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
