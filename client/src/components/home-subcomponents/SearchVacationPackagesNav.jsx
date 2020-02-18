import React from 'react'
import '../../Home.css'

const SearchVacationPackagesNav = () => {
    return(
        <div className="search-vacay-nav">
            <button className="search-vacay-nav-item">Flight + Hotel</button>
            <button className="search-vacay-nav-item">Flight + Hotel + Car</button>
            <button className="search-vacay-nav-item">Flight + Car</button>
            <button className="search-vacay-nav-item">Hotel + Car</button>
        </div>
    )
}

export default SearchVacationPackagesNav