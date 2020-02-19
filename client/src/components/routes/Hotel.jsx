import React, { Component } from 'react'
import RoomButton from '../hotel-subcomponents/RoomButton'

class Hotel extends Component {
constructor(props) {
    super(props)
}

render() {
    return(
        <div>
            <h1>This is Hotel</h1>
            <RoomButton />
        </div>
    )
}
}

export default Hotel 