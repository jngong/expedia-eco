import React from 'react'
import '../../Home.css'

const SearchForm = (props) => {

    const handleInputChange = (e) => {
        props.handleTextChange(e)
    }

    const handleCheckboxChange = (e) => {
        props.handleCheckChange(e)
    }


    return(
        <div className="search-form">
            <form onSubmit={props.handleSubmit}>
                <input
                    type="text"
                    placeholder="Leaving From"
                    autoComplete="off"
                    value={props.tripSearch.departCity}
                    name="departCity"
                    onChange={handleInputChange} 
                />
                <br/>
                <input 
                    type="text"
                    placeholder="Going To"
                    value={props.tripSearch.destCity}
                    name="destCity"
                    onChange={handleInputChange} 
                />
                <br/>
                <input 
                    type="text"
                    placeholder="Departing"
                    value={props.tripSearch.departDate}
                    name="departDate"
                    onChange={handleInputChange} 
                />
                <input 
                    type="text"
                    placeholder="Returning"
                    value={props.tripSearch.returnDate}
                    name="returnDate"
                    onChange={handleInputChange} 
                />
                <br/>
                <input 
                    type="text"
                    placeholder="Travelers"
                    value={props.tripSearch.travelers}
                    name="travelers"
                    onChange={handleInputChange} 
                />
                <br/>

                <label>
                    <input 
                        type="checkbox"
                        checked={props.tripSearch.hotelCheckbox}
                        name="hotelCheckbox"
                        onChange={handleCheckboxChange} 
                    />
                    I only need a hotel for part of my stay
                </label>

                <br/>

                <label>
                    <input 
                        type="checkbox"
                        checked={props.tripSearch.ecoFriendlyCheckbox}
                        name="ecoFriendlyCheckbox"
                        onChange={handleCheckboxChange} 
                    />
                    I want to see eco-friendly options only
                    </label>
                <br/>

                <button>
                    Search
                </button>

            </form>
        </div>
    )
}

export default SearchForm