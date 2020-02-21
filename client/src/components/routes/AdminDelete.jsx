import React from "react";
import { Component } from "react";
<<<<<<< HEAD
import AdminForm from "../shared/AdminForm";
=======
import apiUrl from "../../apiConfig";
>>>>>>> 9495319de2310550d0b6b195d5b751be51228380
import Axios from "axios";
import { Redirect } from "react-router-dom";

class AdminDelete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hotel: {},
      isDeleted: false
    };
  }

  async componentDidMount() {
    try {
      const response = await Axios(
        `${apiUrl}/hotels/${this.props.match.params.hotel_id}`
      );
      this.setState({ hotel: response.data.hotel });
    } catch (error) {
      console.error(error);
    }
  }

  handleDelete = e => {
    e.preventDefault();

    Axios({
      url: `${apiUrl}/hotels/${this.props.match.params.hotel_id}`,
      method: "DELETE",
      data: this.state.isDeleted
    })
      .then(res => alert("Are you sure !"))
      .then(res => this.setState({ isDeleted: true }))
      .catch(console.error);
  };

  render() {
    if (this.state.isDeleted) {
      return <Redirect to={`/`} />;
    }
    return (
      <div>
        <div>
          <h1>Delete this hotel</h1>
          <h3>
            Please review the information below and confirm that this is the
            correct hotel.
          </h3>
          <h4>NAME: {this.state.hotel.name}</h4>
          <h4>ADDRESS: {this.state.hotel.address}</h4>
          <h4>DESCRIPTION: {this.state.hotel.description}</h4>
          <h3>If the information is correct proceed to delete!</h3>
          <h3>ALL DELETE'S ARE FINAL</h3>
        </div>
        <button onClick={this.handleDelete}>DELETE</button>
      </div>
    );
  }
}

export default AdminDelete;
