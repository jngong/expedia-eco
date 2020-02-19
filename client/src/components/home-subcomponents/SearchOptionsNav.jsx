import React from 'react'
import '../../Home.css'

const SearchOptionsNav = () => {
    return(
        <div className="search-options-nav">
            <button className="search-options-nav-item">Flights</button>
            <button className="search-options-nav-item">Hotels</button>
            <button className="search-options-nav-item">Bundle and Save</button>
            <button className="search-options-nav-item">Cars</button>
            <button className="search-options-nav-item">Cruises</button>
        </div>
    )
}

export default SearchOptionsNav