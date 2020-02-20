import React, { Component } from "react";
import RoomButton from "../hotel-subcomponents/RoomButton";
import TripDetails from "../hotel-subcomponents/TripDetails";

export default class Hotel extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {

  this.setState({...this.props.location.state})
   
  }

  render() {
    console.log("props", this.props);
    return (
      <div>
        <div id="hotel-component-banner">
          <p>See all hotels (Link)</p>
          <p id="expedia-phone-number">1-877-387-1531</p>
        </div>

        <div> (Icon Image Here) 2 of 4: Choose your room </div>

        <div id="hotel-main-content">
          <p>
            {this.state.name} Rating: {this.state.rating}
          </p>
          <p>{this.state.address}</p>
          <img src={require("../../images/hotel_room_image.jpg")} alt="hotel" />
          {/* Need to add the scroll arrows icons */}
          <p>Very Good! {this.state.rating}</p>
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
        <div className="hotel-added-components">
          <TripDetails />
          <RoomButton
            component_props={this.state}/>
        </div>
      </div>
    );
  }
}
