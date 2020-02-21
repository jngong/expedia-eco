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

    this.setState({ ...this.props.location.state })

  }

  renderIcon(key, img) {
    return (
      key === true ? <img src=
        {require(`../../images/icons-assets/${img}`)} alt={`${img}`} className="icon" /> : ""
    )
  }

  render() {
    return (
      <div>
        <div id="hotel-component-banner">
          <Link className='formatText linkText' to="/">&lt; See all hotels </Link>
          <p className="expedia-phone-number">1-877-387-1531</p>
        </div>

        <div className='roomChoice'> <img src={require('../../images/icons-assets/hotel-bed@2x.png')} className='big-icon' /> 2 of 4: Choose your room </div>

        <div id="hotel-main-content">
          <h1 className='formatText'>
            {this.state.name}
          </h1>
          <p className='boldText'>Rating:
            <img src={require("../../images/star.png")} />
            <img src={require("../../images/star.png")} />
            <img src={require("../../images/star.png")} />
            <img src={require("../../images/star.png")} />
          </p>
          <p className='boldText'>{this.state.address}</p>
          <img src={require("../../images/hotel_room_image.jpg")} alt="hotel" className="main-hotel-image" />
          {/* Need to add the scroll arrows icons */}
          <p className='bold'>Very Good! {this.state.rating}</p>
          <p className='boldText seeMoreText'>View all 1,769 Expedia Verified Reviews</p>
        </div>

        <div className="hotel-icons-container">
          {this.renderIcon(this.state.wifi, "wifi@2x.png")}
          {this.renderIcon(this.state.business, "business@2x.png")}
          {this.renderIcon(this.state.laundry, "laundry@2x.png")}
          {this.renderIcon(this.state.smoke_free, "smoke-free@2x.png")}
          {this.renderIcon(this.state.eco_friendly, "eco@2x.png")}
          <img src={require('../../images/icons-assets/more@2x.png')} alt='more.png' className='more-icon' />
        </div>

        <p className='formatText'>{this.state.description}</p>

        <p className='seeMoreText formatText'>See more</p>
        <div className="hotel-added-components">
          <TripDetails />
          <RoomButton
            component_props={this.state} />
        </div>
      </div>
    );
  }
}
