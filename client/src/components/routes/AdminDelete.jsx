import React from 'react'
import { Component } from 'react';
import AdminForm from '../shared/AdminForm';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';

class AdminDelete extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hotel: {},
            isDeleted: false
        }
    }

    async componentDidMount() {
        try {
            const response = await Axios(`http://localhost:3001/hotels/${this.props.match.params.hotel_id}`);
            this.setState({ hotel: response.data.hotel })
        } catch(error) {
            console.error(error);
        }
    }
    
    handleDelete = e => {
        e.preventDefault()

        Axios({
            url: `http://localhost:3001/hotels/${this.props.match.params.hotel_id}`,
            method: 'DELETE',
            data: this.state.isDeleted
        })
        .then(res => this.setState({ isDeleted: true }))
        .catch(console.error)
    }

    render() {
        if (this.state.isDeleted) {
            console.log(this.state.isDeleted)
            return <Redirect to={`/`} />
        }
        return(
            <div>
                <button onClick={this.handleDelete}>DELETE</button>
            </div>
        )
    }
}

export default AdminDelete