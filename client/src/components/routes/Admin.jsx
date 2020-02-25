import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import AdminForm from "../shared/AdminForm";

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hotel: {
        address: "",
        name: "",
        img_url: "",
        rating: "",
        eco_friendly: false,
        description: "",
        wifi: false,
        business: false,
        laundry: false,
        smoke_free: false,
        cityId: ""
      },
      createdHotel: null
    };
  }

  handleChange = e => {
    const { value, name } = e.target;
    this.setState(prevState => ({
      hotel: {
        ...prevState.hotel,
        [name]: value
      }
    }));
  };

  handleCheckboxChange = e => {
    const { checked, name } = e.target;
    this.setState(prevState => ({
      hotel: {
        ...prevState.hotel,
        [name]: checked
      }
    }));
  };

  submitHotel = e => {
    e.preventDefault();

    axios({
      url: `/hotels`,
      method: "POST",
      data: this.state.hotel
    })
      .then(res => this.setState({ createdHotel: res.data.hotel }))
      .catch(console.error);
  };

  render() {
    if (this.state.createdHotel) {
      return <Redirect to={`/`} />;
    }

    return (
      <div>
        <h1>Want to be a part of Expedia</h1>
        <AdminForm
          hotel={this.state.hotel}
          handleChange={this.handleChange}
          handleSubmit={this.submitHotel}
          handleCheckboxChange={this.handleCheckboxChange}
        />
      </div>
    );
  }
}

export default Admin;
