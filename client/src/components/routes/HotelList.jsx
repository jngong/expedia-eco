import React, { Component } from "react";

class HotelList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      destCity: "",
      departDate: "",
      returnDate: "",
      travelers: 0,
      hotels: []
    };
  }

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
            value={`${this.state.destCity} (${this.state.hotels.length} properties)`}
          />
          <input type="date" value={this.state.departDate} /> -{" "}
          <input type="date" value={this.state.returnDate} />
          <input type="text" value={`${this.state.travelers} travelers`} />
        </form>
        <button>Sort &amp; Filter</button>
        <button>Map</button>
        <Link to="/">Questions? 866-404-5719 📞</Link>
        <ul>
          {hotels.map(hotel => {
            <HotelButton
              key={hotel.index}
              name={hotel.name}
              city={hotel.city}
              rating={hotel.rating}
              eco={hotel.eco}
              listPrice={hotel.listPrice}
              currentPrice={hotel.currentPrice}
            />;
          })}
        </ul>
      </React.Fragment>
    );
  }
}

export default HotelList;
