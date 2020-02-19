import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
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

  // axios call with search terms from state on componentDidMount
  getSearchResults = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3001/cities/${this.props.location.state.cityId}/hotels`
      );
      console.log("res", res.data);
      this.setState({ hotels: res.data.hotels });
      console.log("newstate", this.state);
    } catch (error) {
      return console.log(error);
    }
  };
  componentDidMount = () => {
    console.log("props", this.props);
    console.log("state", this.state);
    console.log("cityId", this.props.location.state.cityId);
    this.getSearchResults();
  };

  render() {
    const { hotels } = this.state;

    return (
      <React.Fragment>
        <img src="[hotel icon]" />
        <p className="task">1 of 4: Choose your hotel</p>
        <h2>Start by choosing your hotel</h2>
        <p>
          The trip prices shown include Flight + Hotel + Car, taxes and fees,
          but do not include baggage fees or other fees charged directly by the
          airline for the included flight.
        </p>
        <form>
          <input
            type="text"
            placeholder={`${this.state.destCity} (${this.state.hotels.length} properties)`}
          />
          <input type="text" placeholder={this.state.departDate} /> -{" "}
          <input type="text" placeholder={this.state.returnDate} />
          <input
            type="text"
            placeholder={`${this.state.travelers} travelers`}
          />
        </form>
        <button>Sort &amp; Filter</button>
        <button>Map</button>
        <Link to="/">Questions? 866-404-5719 📞</Link>
        <ul>
          {hotels.map((hotel, i) => {
            return (
              <HotelButton
                key={i}
                name={hotel.name}
                city={hotel.city}
                rating={hotel.rating}
                eco={hotel.eco}
                listPrice={hotel.listPrice}
                currentPrice={hotel.currentPrice}
              />
            );
          })}
        </ul>
      </React.Fragment>
    );
  }
}

export default HotelList;
