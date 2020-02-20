import React from 'react'

const SearchVacationPackagesNav = () => {
    return (
        <div>
            <h2 className="vacay-packages-header">
                Search Vacation Packages
            </h2>
            <div className="search-vacay-nav">
                <button className="search-vacay-nav-item">
                    Flight + Hotel
                </button>
                <button className="search-vacay-nav-item">
                    Flight + Hotel + Car
                </button>
                <button className="search-vacay-nav-item">
                    Flight + Car
                </button>
                <button className="search-vacay-nav-item">
                    Hotel + Car
                </button>
            </div>
        </div>
    )
}

export default SearchVacationPackagesNav