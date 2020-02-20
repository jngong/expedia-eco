import React, { Component } from 'react'
import Axios from 'axios'
import { Redirect } from 'react-router-dom'
import Admin from '../routes/Admin'

class AdminForm extends Component {
    



    render() {
        

        

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
                        onChange={this.props.handleChange} 
                        />
                    </label>
                    <br/>
                    <label>
                        Please upload a picture of your property:
                        <br/>
                        <input 
                        type='text' 
                        name='img_url'
                        value={this.props.hotel.img_url} 
                        onChange={this.props.handleChange}
                        />
                    </label>
                    <br/>
                    <label>
                        Please rate your hotel
                        <br/>
                        <input 
                        type='text'
                        name='rating'
                        value={this.props.hotel.rating}
                        onChange={this.props.handleChange}
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
                        onChange={this.props.handleChange} 
                        />
                    </label>
                    <br/>
                    <label>
                        Please select your amenities:
                        <br/>
                        <input 
                        type='checkbox' 
                        name='eco_friendly'
                        checked={this.props.hotel.eco_friendly} 
                        onChange={this.props.handleCheckboxChange}
                        />
                        
                        <label>Eco-friendly</label>
                        <input 
                        type='checkbox' 
                        name='business'
                        checked={this.props.hotel.business}
                        onChange={this.props.handleCheckboxChange} 
                        />

                        <label>Business</label>
                        <input 
                        type='checkbox' 
                        name='wifi' 
                        checked={this.props.hotel.wifi}
                        onChange={this.props.handleCheckboxChange}
                        />

                        <label>Wifi</label>
                        <input 
                        type='checkbox' 
                        name='laundry'
                        checked={this.props.hotel.laundry}
                        onChange={this.props.handleCheckboxChange} 
                        />

                        <label>Laundry</label>
                        <input 
                        type='checkbox' 
                        name='smoke_free'
                        checked={this.props.hotel.smoke_free}
                        onChange={this.props.handleCheckboxChange} 
                        />
                        <label>Smoke-free</label>
                        
                    </label>
                    <br/>
                    <label>CityId</label>
                    <input 
                    type='text'
                    name='cityId'
                    onChange={this.props.handleChange}
                    value={this.props.hotel.cityId}
                    />
                    <br/>
                    <input type='submit' onSubmit={this.props.submitHotel} />
                </form>
            </div>
        )
    }
}

export default AdminForm