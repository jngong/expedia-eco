import React from 'react'
import '../../Home.css'
import AirplaneIcon from '../../images/icons-assets/airplane-icon@3x.png'
import HotelIcon from '../../images/icons-assets/hotel-icon@3x.png'
import CarIcon from '../../images/icons-assets/car-icon@3x.png'
import CruisesIcon from '../../images/icons-assets/cruises-icon@3x.png'

const SearchOptionsNav = () => {
    return(
        <div className="search-options-nav">
            <button className="search-options-nav-item flights">
                <img src={AirplaneIcon} alt="flights"></img>
                <div>Flights</div>
            </button>
            <button className="search-options-nav-item hotels">
                <img src={HotelIcon} alt="hotels"></img>
                <div>Hotels</div>
            </button>
            <button className="search-options-nav-item bundle">
                <img src={AirplaneIcon} alt="bundle flights"></img> 
                <img src={HotelIcon} alt="bundle hotels"></img>
                <div>Bundle and Save</div>
            </button>
            <button className="search-options-nav-item cars">
                <img src={CarIcon} alt="hotels"></img>
                <div>Cars</div>
            </button>
            <button className="search-options-nav-item cruises">
                <img src={CruisesIcon} alt="hotels"></img>
                <div>Cruises</div>
            </button>
        </div>
    )
}

export default SearchOptionsNav