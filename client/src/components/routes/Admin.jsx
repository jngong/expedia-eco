import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import AdminForm from '../shared/AdminForm'

class Admin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hotel: {
                address: '',
                name: '',
                img_url: '',
                eco_friendly: false,
                description: '',
                wifi: false,
                business: false,
                laundry: false,
                smoke_free: false
            },
            createdHotel: null
        }
    }

    handleChange = e => {
        const { value, name } = e.target;
        console.log(name, value)
        this.setState(prevState => ({
            hotel: {
                ...prevState.hotel,
                [name]: value
            }
        }))
    }

    handleCheckboxChange = e => {
        const { checked, name } = e.target;
        console.log(name, checked)
        this.setState(prevState => ({
            hotel: {
                ...prevState.hotel,
                [name]: checked
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
        if (this.state.createdHotel) {
            return <Redirect to={`http://localhost:3001/hotels/${this.state.createdHotel.id}`} />
        }
        console.log(this.state.data)
        return(
                <AdminForm 
                    hotel={this.state.hotel}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    handleCheckboxChange={this.handleCheckboxChange}


                />
        )
    }
}

export default Admin