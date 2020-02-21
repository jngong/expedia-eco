import React from 'react'

const TripDetails = () => {
    return(
        <div className="trip-details">
            <div className="trip-details-header">
                Choose your room
            </div>
            <div className="trip-details-subheader">Trip Details</div>
            <div className="trip-details-main">
                <p>FLIGHT (1 roundtrip ticket) + HOTEL (7 nights) + CAR, taxes and fees</p>
                <div className="trip-details-price">
                    <p className="bold trip-price">Total: $1,729.13</p>
                    <p>(includes 1 traveler)</p>
                    <p className="bold">Excludes daily resort fee of $17.46</p>
                </div>
            </div>
            <div className="trip-details-subheader">Room type</div>
        </div>
    )
}

export default TripDetails