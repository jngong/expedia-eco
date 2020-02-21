import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import apiUrl from "../../apiConfig";

class HotelButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  /* --------- API CALLS ---------- */
  // fetch hotel info from  /cities/:cityId/hotels endpoint and set it into state
  getHotelData = async () => {
    try {
      const res = await axios.get(`${apiUrl}/hotels/${this.props.id}`);
      this.setState({ destCity: this.props.destCity, ...res.data.hotel });
    } catch (error) {
      console.log(error);
    }
  };

  // fetch an array of hotel room info from /hotels/:hotelId/rooms endpoint and set it into state
  getRoomData = async () => {
    try {
      const resRoom = await axios.get(
        `${apiUrl}/hotels/${this.props.id}/rooms`
      );
      this.setState({ rooms: resRoom.data.rooms });
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
  };

  // run all above get commands when component loads
  componentDidMount = async () => {
    await this.getHotelData();
    await this.getRoomData();
    await this.getRoomPrices();
  };

  /* ---------- PARSE DATA BEFORE RENDER ---------- */
  // add comments if the hotel has a good rating
  ratingComment = rating => {
    return parseFloat(rating) >= 4
      ? "Very good!"
      : 4 > parseFloat(rating) && parseFloat(rating) >= 3.5
        ? "Good!"
        : "";
  };

  // generate a random number representing the number of reviews on a hotel
  reviewCount = () => {
    return Math.floor(Math.random() * 10000) + 1000;
  };

  // randomly picks a number between 1 and 4; this will be appended to the <img src=...> URL for hotel thumbnails so each entry in the list has a different picture
  randomThumbnail = () => {
    const num = Math.floor(Math.random() * 4) + 1;
    return num;
  };

  // renders an "Eco-friendly" marker on hotels with { eco_friendly:true } states
  handleEco = () => {
    return this.state.eco_friendly === false ? (
      <span className="green">
        <img
          src={require("../../images/icons-assets/eco-tree@2x.png")}
          className="tiny-icon"
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
    const { ratingComment, reviewCount, handleEco, randomThumbnail } = this;
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
              src={require(`../../images/icons-assets/hotel-thumb-${randomThumbnail()}@2x.png`)}
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
              <div className="prices">
                <span className="room-price-list">{sample_list_price}</span>{" "}
                <span className="room-price-current">
                  {sample_current_price}
                </span>
              </div>
              <p className="poop-brown">
                Per person includes flight + hotel + car
              </p>
            </div>
          </div>
        </Link>
      </li>
    );
  }
}

export default HotelButton;
