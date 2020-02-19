import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class HotelButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    };
  }

  getHotelData = async () => {
    const res = await axios.get(
      `http://localhost:3001/hotels/${this.props.id}`
    );
    // console.log("axios", res.data);
    this.setState({ ...res.data.hotel, destCity: this.props.destCity });
    console.log("hotelstate", this.state);
    const resRoom = await axios.get(
      `http://localhost:3001/hotels/${this.props.id}/rooms`
    );
    console.log("resRoom", resRoom.data);
  };

  componentDidMount() {
    this.getHotelData();
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
    return this.state.eco_friendly === true ? "🌲 Eco-friendly" : "";
  };

  render() {
    // DESTRUCTURING VARIABLES
    const { ratingComment, reviewCount, randomThumbnail, handleEco } = this;
    const { id, name, destCity, rating, listPrice, currentPrice } = this.state;

    return (
      <React.Fragment>
        <Link to={`/hotels/${id}`}>
          {/* pass axios data to Hotel details component */}
          <div className="hotel-info">
            <img
              src={require("../../images/icons-assets/hotel-thumb-2@2x.png")}
              className="thumbnail"
              alt="hotel picture"
            />
            <div className="hotel-info-text">
              <h3>{name}</h3>
              <p>{destCity}</p>
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
