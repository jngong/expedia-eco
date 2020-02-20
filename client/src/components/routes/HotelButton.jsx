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

  /* --------- API CALLS ---------- */
  // fetch hotel info from  /cities/:cityId/hotels endpoint and set it into state
  getHotelData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3001/hotels/${this.props.id}`
      );
      // console.log("axios", res.data);
      this.setState({ destCity: this.props.destCity, ...res.data.hotel });
      console.log("hotel data retrieved");
    } catch (error) {
      console.log(error);
    }
  };

  // fetch an array of hotel room info from /hotels/:hotelId/rooms endpoint and set it into state
  getRoomData = async () => {
    try {
      const resRoom = await axios.get(
        `http://localhost:3001/hotels/${this.props.id}/rooms`
      );
      this.setState({ rooms: resRoom.data.rooms });
      console.log("room data retrieved");
    } catch (error) {
      console.log(error);
    }
  };

  // pull prices from zeroth index in room array to use in hotel button
  getRoomPrices = async () => {
    await this.getRoomData;
    this.setState({
      sample_list_price: this.state.rooms[0].list_price,
      sample_current_price: this.state.rooms[0].current_price
    });
    console.log("room prices retrieved");
  };

  // run all above get commands when component loads
  componentDidMount = async () => {
    await this.getHotelData();
    await this.getRoomData();
    await this.getRoomPrices();
    console.log("HotelButton state", this.state);
  };

  /* ---------- PARSE DATA BEFORE RENDER ---------- */
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
  randomThumbnail = () => {
    const num = Math.floor(Math.random() * 4) + 1;
    // return `require('../../images/icons-assets/hotel-thumb-${num}@2x.png')`;
    return num;
  };

  // RENDERS THE "ECO-FRIENDLY" MESSAGE IF THE HOTEL OBJECT HAS eco_friendly:true
  handleEco = () => {
    return this.state.eco_friendly === false ? (
      <span className="green">
        <img
          src={require("../../images/icons-assets/eco-tree@2x.png")}
          class="tiny-icon"
          alt="eco-friendly"
        />
        Eco-friendly
      </span>
    ) : (
      ""
    );
  };

  /* ---------- RENDER ---------- */
  render() {
    // DESTRUCTURING VARIABLES
    const { ratingComment, reviewCount, handleEco } = this;
    const {
      id,
      name,
      destCity,
      rating,
      sample_list_price,
      sample_current_price
    } = this.state;

    return (
      <li>
        {/* pass axios data to Hotel details component */}
        <Link
          to={{
            pathname: `/hotels/${id}`,
            state: {
              ...this.state
            }
          }}
        >
          <div className="hotel-info">
            <img
              src={require(`../../images/icons-assets/hotel-thumb-${this.randomThumbnail()}@2x.png`)}
              className="thumbnail"
              alt="hotel thumb"
            />
            <div className="hotel-info-text">
              <h3>{name}</h3>
              <p className="capitalize">{destCity}</p>
              <p>
                <span className="bold">{rating}/5</span> {ratingComment(rating)}{" "}
                ({reviewCount()} reviews)
              </p>
            </div>
            <div className="room-features">
              <p className="green">
                <img
                  src={require("../../images/icons-assets/check@2x.png")}
                  className="tiny-icon"
                  alt="check"
                />
                Free cancellation
              </p>
              <p>{handleEco()}</p>
            </div>
            <div className="room-price">
              <span className="room-price-list">{sample_list_price}</span>{" "}
              <span className="room-price-current">{sample_current_price}</span>
              <p>Per person includes flight + hotel + car</p>
            </div>
          </div>
        </Link>
      </li>
    );
  }
}

export default HotelButton;
