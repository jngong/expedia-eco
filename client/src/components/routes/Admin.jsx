import React, { Component } from 'react'
import axios from 'axios'

import AdminForm from '../shared/AdminForm'

class Admin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hotel = {
                address: '',
                name: '',
                img_url: '',
                eco_friendly: '',
                description: '',
                wifi: '',
                business: '',
                laundry: '',
                smoke_free: ''
            },
            createdHotel: null
        }
    }


    handleChange = e => {
        const { value, name } = e.target;
        this.setState(prevState => ({
            hotel: {
                ...prevState.hotel,
                [name]: value
            }
        }))
    }

    submitHotel = e => {
        e.preventDefault()

        axios({
            url: 'http://localhost:3001/hotels',
            method: 'POST',
            data: { hotel: this.state.hotel }
        })
        .then(res => this.setState({ createdHotel: res.data.hotel }))
        .catch(console.error)
    }

    render() {
        return(
            <Layout>
                <AdminForm 
                    hotel={this.state.hotel}
                    handleChange={this.handleChange}
                    handleSubmit={this.state.handleSubmit}


                />
            </Layout>
        )
    }
}