import React, { Component } from "react";
import "../../css/AdminEdit.css";
import AdminForm from "../shared/AdminForm";
import Axios from "axios";
import { Redirect } from "react-router-dom";

class AdminEdit extends Component {
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
      isUpdated: false
    };
  }

  async componentDidMount() {
    try {
      const response = await Axios(
        `/api/hotels/${this.props.match.params.hotel_id}`
      );
      this.setState({ hotel: response.data.hotel });
    } catch (error) {
      console.error(error);
    }
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

  updateHotel = e => {
    e.preventDefault();
    Axios({
      url: `/api/hotels/${this.props.match.params.hotel_id}`,
      method: "PUT",
      data: this.state.hotel
    })
      .then(res => this.setState({ isUpdated: true }))
      .catch(console.error);
  };

  render() {
    if (this.state.isUpdated) {
      return <Redirect to={`/`} />;
    }

    return (
      <div>
        <div>
          <h1>Update your hotel!</h1>
          <AdminForm
            hotel={this.state.hotel}
            handleChange={this.handleChange}
            handleCheckboxChange={this.handleCheckboxChange}
            handleSubmit={this.updateHotel}
          />
        </div>
      </div>
    );
  }
}

export default AdminEdit;
