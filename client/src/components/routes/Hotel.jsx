import React, { Component } from "react";
import RoomButton from "../hotel-subcomponents/RoomButton";
import TripDetails from "../hotel-subcomponents/TripDetails";
import { Link } from "react-router-dom";
import '../../css/Hotel.css'

export default class Hotel extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {

  this.setState({...this.props.location.state})
   
  }

  renderIcon(key, img) {
    // console.log(key, img)
    return (
      key === true ? <img src=
        {require(`../../images/icons-assets/${img}`)} alt={`${img}`} className="icon" /> : ""
    )
  }

  render() {
    console.log("props", this.props);
    return (
      <div>
        <div id="hotel-component-banner">
          <Link to="/">See all hotels</Link>
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
          {this.renderIcon(this.state.wifi, "wifi@2x.png")}
          {this.renderIcon(this.state.business, "business@2x.png")}
          {this.renderIcon(this.state.laundry, "laundry@2x.png")}
          {this.renderIcon(this.state.smoke_free, "smoke-free@2x.png")}
          {this.renderIcon(this.state.eco_friendly, "eco@2x.png")}
          <img src={require('../../images/icons-assets/more.png')} alt='more.png' className='icon'/>
        </div>

        <p>{this.state.description}</p>

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
