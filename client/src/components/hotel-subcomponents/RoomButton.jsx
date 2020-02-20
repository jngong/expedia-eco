import React, { Component } from 'react'
import axios from 'axios'
// import '../../Hotel.css'

import { Redirect } from 'react-router-dom';

class RoomButton extends Component {

    constructor(props) {
        super(props)
        this.state = {
            rooms: [],
            redirect: false
        }
    }

    //TODO: Hardcoding axios pull for rooms data for now via :hotel_id = 3. Change to props when connected with Hotel component.
    async componentDidMount() {
        try {
            const response = await axios(`http://localhost:3001/hotels/3/rooms`)
            this.setState({
                rooms: response.data.rooms
            })
        } catch (error) {
            console.error(error)
        }
    }
  
    handleRoomSelect = (e) => {
        console.log(this.state.rooms[0].hotelId, "Room Select")
        console.log(this.props.component_props, "props")
        return (

            this.setState({
                redirect: true
            })
            
        )
    }
    //TODO in render: All styling, bring in icons for wifi, drop down, checkmark.
    //If there is time, then also calculate % price savings.
        
    
    render() {

        if (this.state.redirect) {
            return (
                <Redirect to={{
                    pathname: `/hotels/${this.props.component_props.id}/confirmation`,
                    state: { ...this.props }
                }}/>)
        }

        const { rooms } = this.state

        //filter rooms based on it's availability property to only show what's availability
        const filterRooms = rooms.filter(room => room.availability === true)

        //map through filtered list of rooms to render each room button
        const renderRooms = filterRooms.map(room => {
            return (
                <div className="room-button" key={room.id}>

                    <div className='room-button-header'>
                        <h3>Unreal Deal</h3>
                        <p>Book this and <span className="bold">save 20% on your flight</span></p>
                    </div>

                    <div className="room-details-container">
                        <div className="room-details-left">
                            <p className="bold room-type">{room.type}</p>
                            <p className="bold room-beds">{room.beds}</p>
                            <p className="bold room-beds">Room sleeps {room.sleeps} guests</p>
                            <p className="free-wifi green">Free Wifi</p>
                            <a href="#" className="show-info-link">Show room information</a>
                        </div>
                        <div className="room-details-right">
                            <p className="red">Only 1 room left at</p>
                            <p className="room-price bold">{room.current_price}</p>
                            <p>per night</p>
                            <p className="green bold free-cancel">Free cancellation</p>
                            <p>until Sun, May 31</p>
                        </div>
                    </div>

                    <button className="room-select-button" onClick={(e)=>this.handleRoomSelect()}>
                        Select
                    </button>
                </div>
            )
        })
        return (
            <div>
                {renderRooms}
                <div className="show-all-rooms">
                    Show all rooms & rates
                </div>
            </div>
        )
    }

}

export default RoomButton