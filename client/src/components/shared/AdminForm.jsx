import React from 'react'


const AdminForm = (props) => {
        return(
            <div>
                
                <form onSubmit={props.handleSubmit}>
                    <label>
                        Hotel Name: 
                        <input type='text' 
                        name='name'
                        value={props.hotel.name}
                        onChange={props.handleChange} 
                        />
                    </label>
                    <br/>
                    <label>
                        Hotel Address:
                        <input 
                        type='text' 
                        name='address'
                        value={props.hotel.address}
                        onChange={props.handleChange} 
                        />
                    </label>
                    <br/>
                    <label>
                        Please enter the URL for your hotel picture:
                        <br/>
                        <input 
                        type='text' 
                        name='img_url'
                        value={props.hotel.img_url} 
                        onChange={props.handleChange}
                        />
                    </label>
                    <br/>
                    <label>
                        Please rate your hotel
                        <br/>
                        <input 
                        type='text'
                        name='rating'
                        value={props.hotel.rating}
                        onChange={props.handleChange}
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
                        value={props.hotel.description}
                        onChange={props.handleChange} 
                        />
                    </label>
                    <br/>
                    <label>
                        Please select your amenities:
                        <br/>
                        <input 
                        type='checkbox' 
                        name='eco_friendly'
                        checked={props.hotel.eco_friendly} 
                        onChange={props.handleCheckboxChange}
                        />
                        
                        <label>Eco-friendly</label>
                        <input 
                        type='checkbox' 
                        name='business'
                        checked={props.hotel.business}
                        onChange={props.handleCheckboxChange} 
                        />

                        <label>Business</label>
                        <input 
                        type='checkbox' 
                        name='wifi' 
                        checked={props.hotel.wifi}
                        onChange={props.handleCheckboxChange}
                        />

                        <label>Wifi</label>
                        <input 
                        type='checkbox' 
                        name='laundry'
                        checked={props.hotel.laundry}
                        onChange={props.handleCheckboxChange} 
                        />

                        <label>Laundry</label>
                        <input 
                        type='checkbox' 
                        name='smoke_free'
                        checked={props.hotel.smoke_free}
                        onChange={props.handleCheckboxChange} 
                        />
                        <label>Smoke-free</label>
                        
                    </label>
                    <br/>
                    <label>CityId</label>
                    <input 
                    type='text'
                    name='cityId'
                    onChange={props.handleChange}
                    value={props.hotel.cityId}
                    />
                    <br/>
                    <input type='submit'  />
                </form>
            </div>
        )
}

export default AdminForm