import React, { Component } from 'react';
import axios from 'axios';
import RoomButton from '../hotel-subcomponents/RoomButton';
import TripDetails from '../hotel-subcomponents/TripDetails';

export default class Hotel extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            Hotel: {}
             
        }
    }

    async componentDidMount() {
            try {
                const response = await axios.get("http://localhost:3001/hotels/2");
                this.setState({Hotel: response.data.hotel})
                console.log(response);
            } catch (error) {
                console.error(error);
            }       
    }
    
    render() {
        return (
            <div>

                <div id="hotel-component-banner">
                    <p>See all hotels (Link)</p>
                    <p id="expedia-phone-number">1-877-387-1531</p>
                </div>

                <div> (Icon Image Here) 2 of 4: Choose your room </div>

                <div id="hotel-main-content">
                    <p>{this.state.Hotel.name} Rating: {this.state.Hotel.rating}</p>
                    <p>{this.state.Hotel.address}</p>
                    <img src={require("../../images/hotel_room_image.jpg")} alt="hotel" />
                    {/* Need to add the scroll arrows icons */}
                    <p>Very Good! {this.state.Hotel.rating}</p>
                    <p>View all 1,769 Expedia Verified Reviews</p>
                </div>

                <div>
                    <p>(Conditional rendering of the icons HERE.)</p>
                </div>

                <p>The hotel offers a coffee shop/cafe. A computer station is located on site
                and wireless internet access is complimentary.</p>

                <p>See more</p>
                <div className="hotel-added-components">
                    <TripDetails />
                    <RoomButton />
                </div>
            </div>
        )
    }
  }

  render() {
    console.log("button props", this.props);
    return (
      <div>
        <h1>
          EXPEDIA LOGO AND BANNER RIGHT HERE (Pulled from LogoNav component)
        </h1>

        <div id="hotel-component-banner">
          <p>See all hotels (Link)</p>
          <p id="expedia-phone-number">1-877-387-1531</p>
        </div>

        <div> (Icon Image Here) 2 of 4: Choose your room </div>

        <div id="hotel-main-content">
          <p>
            {this.state.Hotel.name} Rating: {this.state.Hotel.rating}
          </p>
          <p>{this.state.Hotel.address}</p>
          <img src={require("../../images/hotel_room_image.jpg")} alt="hotel" />
          {/* Need to add the scroll arrows icons */}
          <p>Very Good! {this.state.Hotel.rating}</p>
          <p>View all 1,769 Expedia Verified Reviews</p>
        </div>

        <div>
          <p>(Conditional rendering of the icons HERE.)</p>
        </div>

        <p>
          The hotel offers a coffee shop/cafe. A computer station is located on
          site and wireless internet access is complimentary.
        </p>

        <p>See more</p>
      </div>
    );
  }
}
