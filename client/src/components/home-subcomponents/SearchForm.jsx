import React from 'react'
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

                <button>
                    Search
                </button>

            </form>
        </div>
    )
}

export default SearchForm