import React, { Component } from 'react'
import Axios from 'axios'

class Admin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            item: {
                address: '',
                name: '',
                img_url: '',
                eco_friendly: '',
                description: '',
                wifi: '',
                business: '',
                laundry: '',
                smoke_free: '',
            },
            createdHotel: null
        }
    }


    submitHotel = e => {
        e.preventDefault()
        Axios({
            url:'http://localhost:3000/hotels',
            method: 'POST',
            data: { item: this.state.item}
        })
        .then(res => this.setState({ createdHotel: res.data.item }))
        .catch(console.log)
    }



    render() {
        console.log(this.state);
        return(
            <div>
                <h1>Want to be a part of Expedia</h1>
                <form>
                    <label>
                        Hotel Name: 
                        <input type='text' name='name' />
                    </label>
                    <br/>
                    <label>
                        Hotel Address:
                        <input type='text' name='address' />
                    </label>
                    <br/>
                    <label>
                        Contact information:
                        <input type='tel' name='numnber' />
                    </label>
                    <br/>
                    <label>
                        Contact Email:
                        <input type='email' name='email' />
                    </label>
                    <br/>
                    <label>
                        Please upload a picture of your property:
                        <br/>
                        <input type='file' name='file' />
                    </label>
                    <br/>
                    <label>
                        Please provide a small description of the hotel you are trying to post:
                        <br/>
                        <textarea name='description' height='150' width='580' />
                    </label>
                    <br/>
                    <label>
                        Please select your amenities:
                        <br/>
                        <input type='checkbox' name='Eco-Friendly' />
                        <label for='Eco-Friendly'>Eco-Friendly</label>
                        <input type='checkbox' name='Business' />
                        <label>Business</label>
                        <input type='checkbox' name='Wifi' />
                        <label>Wifi</label>
                        <input type='checkbox' name='Laundry' />
                        <label>Laundry</label>
                        <input type='checkbox' name='Smoke-free' />
                        <label>Smoke-free</label>
                        
                    </label>
                    <br/>
                    <input type='submit' />
                </form>
            </div>
        )
    }
}

export default Admin