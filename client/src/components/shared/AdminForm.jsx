import React, { Component } from 'react'
import Axios from 'axios'
import { Redirect } from 'react-router-dom'
import Admin from '../routes/Admin'

class AdminForm extends Component {
    



    render() {
        console.log(this.state);

        if (this.state.createdHotel) {
            return <Redirect to={`http://localhost:3001/hotels/${this.state.createdHotel.id}`} />
        }

        return(
            <div>
                <h1>Want to be a part of Expedia</h1>
                <form action='' method='POST' onSubmit={this.props.handleSubmit}>
                    <label>
                        Hotel Name: 
                        <input type='text' 
                        name='name'
                        value={this.props.hotel.name}
                        onChange={this.props.handleChange} 
                        />
                    </label>
                    <br/>
                    <label>
                        Hotel Address:
                        <input 
                        type='text' 
                        name='address'
                        value={this.props.hotel.address}
                        onChange={this.handleChange} 
                        />
                    </label>
                    <br/>
                    <label>
                        Contact information:
                        <input 
                        type='tel' 
                        name='numnber'
                        value='number'
                        onChange={this.handleChange} 
                        />
                    </label>
                    <br/>
                    <label>
                        Contact Email:
                        <input 
                        type='email' 
                        name='email'
                        onChange 
                        />
                    </label>
                    <br/>
                    <label>
                        Please upload a picture of your property:
                        <br/>
                        <input 
                        type='text' 
                        name='img_url'
                        value='img_url' 
                        />
                    </label>
                    <br/>
                    <label>
                        Please provide a small description of the hotel you are trying to post:
                        <br/>
                        <textarea 
                        name='description' 
                        height='150' 
                        width='580'
                        value={this.props.hotel.description} 
                        />
                    </label>
                    <br/>
                    <label>
                        Please select your amenities:
                        <br/>
                        <input 
                        type='checkbox' 
                        name='eco_Friendly'
                        value={this.props.hotel.eco_friendly} 
                        />
                        
                        <label for='eco_Friendly'>Eco-Friendly</label>
                        <input 
                        type='checkbox' 
                        name='business'
                        value={this.props.hotel.business} 
                        />

                        <label>Business</label>
                        <input 
                        type='checkbox' 
                        name='wifi' 
                        value={this.props.hotel.wifi}
                        />

                        <label>Wifi</label>
                        <input 
                        type='checkbox' 
                        name='laundry'
                        value={this.props.hotel.laundry} 
                        />

                        <label>Laundry</label>
                        <input 
                        type='checkbox' 
                        name='smoke_free'
                        value={this.props.hotel.smoke_free} 
                        />
                        <label>Smoke-free</label>
                        
                    </label>
                    <br/>
                    <input type='submit' onSubmit={this.submitHotel} />
                </form>
            </div>
        )
    }
}

export default AdminForm