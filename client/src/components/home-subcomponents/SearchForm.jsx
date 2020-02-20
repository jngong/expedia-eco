import React from 'react'
import MapPin from "../../images/icons-assets/map-pin@3x.png"
import CalendarIcon from "../../images/icons-assets/calendar@3x.png"
import UserIcon from "../../images/icons-assets/users@3x.png"
import XIcon from "../../images/icons-assets/x.png"

import '../../Home.css'

const SearchForm = (props) => {

    const handleInputChange = (e) => {
        props.handleTextChange(e)
    }

    const handleCheckboxChange = (e) => {
        props.handleCheckChange(e)
    }


    return (
        <div className="search-form">
            <form onSubmit={props.handleSubmit}>

                <label>
                    <img src={MapPin} alt="map pin" className="input-icon map"></img>
                    <img src={XIcon} alt="x" className="x-icon"></img>
                    <div className="input-label">Leaving From</div>
                    <input
                        // className="full-width"
                        type="text"
                        autoComplete="off"
                        value={props.tripSearch.departCity}
                        name="departCity"
                        onChange={handleInputChange}
                    />
                </label>

                <label>
                    <img src={MapPin} alt="map pin" className="input-icon map"></img>
                    <img src={XIcon} alt="x" className="x-icon"></img>
                    <div className="input-label">Going To</div>
                    <input
                        // className="full-width"
                        type="text"
                        value={props.tripSearch.destCity}
                        name="destCity"
                        onChange={handleInputChange}
                    />
                </label>

                <div className="dates">

                    <label className="half-width-label">
                        <img src={CalendarIcon} alt="calendar icon" className="input-icon calendar"></img>
                        <div className="input-label">Departing</div>
                        <input
                            className="half-width"
                            type="text"
                            value={props.tripSearch.departDate}
                            name="departDate"
                            onChange={handleInputChange}
                        />
                    </label>
                    <label className="half-width-label">
                        <img src={CalendarIcon} alt="calendar icon" className="input-icon calendar"></img>
                        <div className="input-label">Returning</div>
                        <input
                            type="text"
                            value={props.tripSearch.returnDate}
                            name="returnDate"
                            onChange={handleInputChange}
                        />
                    </label>
                </div>

                <label>
                    <img src={UserIcon} alt="user icon" className="input-icon user"></img>
                    <div className="input-label">Travelers</div>
                    <input
                        // className="full-width"
                        type="text"
                        value={props.tripSearch.travelers}
                        name="travelers"
                        onChange={handleInputChange}
                    />
                </label>

                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        checked={props.tripSearch.hotelCheckbox}
                        name="hotelCheckbox"
                        onChange={handleCheckboxChange}
                    />
                    <div>I only need a hotel for part of my stay</div>
                </label>

                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        checked={props.tripSearch.ecoFriendlyCheckbox}
                        name="ecoFriendlyCheckbox"
                        onChange={handleCheckboxChange}
                    />
                    I want to see eco-friendly options only
                    </label>
                <br />

                <button className="searchButton">
                    Search
                </button>

            </form>
        </div>
    )
}

export default SearchForm