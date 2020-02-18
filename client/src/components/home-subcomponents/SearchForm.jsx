import React from 'react'

const SearchForm = (props) => {
    return(
        <div className="search-form">
            <form>
                <input
                    type="text"
                    placeholder="Leaving From"
                    // value={props.tripSearch.departCity}
                    name="departCity" 
                />
                <br/>
                <input 
                    type="text"
                    placeholder="Going To"
                    // value={props.tripSearch.destCity}
                    name="destCity"
                />
                <br/>
                <input 
                    type="text"
                    placeholder="Departing"
                    // value={props.tripSearch.departDate}
                    name="departDate"
                />
                <input 
                    type="text"
                    placeholder="Returning"
                    // value={props.tripSearch.returnDate}
                    name="returnDate"
                />
                <br/>
                <input 
                    type="text"
                    placeholder="Travelers"
                    // value={props.tripSearch.travelers}
                    name="travelers"
                />
                <br/>

                <label>
                    <input 
                        type="checkbox"
                        checked={props.tripSearch.hotelCheckbox}
                        name="hotelCheckbox"
                    />
                    I only need a hotel for part of my stay
                </label>

                <br/>

                <label>
                    <input 
                        type="checkbox"
                        checked={props.tripSearch.ecoFriendlyCheckbox}
                        name="ecoFriendlyCheckbox"
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