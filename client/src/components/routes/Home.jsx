import React from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import SearchOptionsNav from '../home-subcomponents/SearchOptionsNav'
import SearchVacationPackagesNav from '../home-subcomponents/SearchVacationPackagesNav'
import SearchForm from '../home-subcomponents/SearchForm'

import '../../Home.css'

// Change Log: Instead of App being our stateful component, changed Home to be a stateful component to allow it to return a Redirect upon Submit of the Search form.

class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            tripSearch: {
                departCity: 'Miami',
                destCity: 'Los Angeles',
                departDate: '06/02/2020',
                returnDate: '06/09/2020',
                travelers: 2,
                hotelCheckbox: false,
                ecoFriendlyCheckbox: true
            },
            cityId: null,
            cities: [],
            redirect: false
        }
        this.handleTextChange = this.handleTextChange.bind(this)
        this.handleCheckChange = this.handleCheckChange.bind(this)
    }

    // Axios call to our back-end API to pull in all cities in our database so that we can compare the 'destCity' typed to the cities[].name property for match. 
    async componentDidMount() {
        try {
            const response = await axios(`http://localhost:3001/cities`)
            this.setState({
                cities: response.data.cities
            })
            console.log(response.data.cities)
        } catch (error) {
            console.error(error)
        }
    }

    //This method is passed down to the SearchForm component. It is called via an onChange on each text input field to capture the user input and update state.
    handleTextChange = event => {
        const { value, name } = event.target;
        this.setState(prevState => ({
            tripSearch: {
                ...prevState.tripSearch,
                [name]: value
            }
        }))
        console.log(name, value);
    }

    //This method is passed down to the SearchForm component. It is called via an onChange on each checkbox input field to capture the user input and update state.
    handleCheckChange = (event) => {
        const checked = event.target.checked
        const name = event.target.name
        this.setState(prevState => ({
            tripSearch: {
                ...prevState.tripSearch,
                [name]: checked
            }
        }))
    }

    //This method is called by the handleSubmit method when the search button is clicked. It will filter through the list of cities and match on name. If name doesn't match, then it will alert an error. When it matches with a city, it will set the state of cityId to be passed down to the next componenet (HotelList).
    checkCity = () => {

        const cityMatch = this.state.cities.filter(city => city.name.toLowerCase() === this.state.tripSearch.destCity.toLowerCase() )

        console.log(cityMatch)
        
        if (cityMatch) {
            this.setState({
                cityId: cityMatch[0].id,
                redirect: true
            })
        }

    }

    //When the form is submitted, it needs to do two things. 
    // 1: compare the destCity value to our list of cities to set the state of CityId and 
    // 2: push to the next route in the user flow (HotelList)

    handleSubmit = async (event) => {
        event.preventDefault()
        this.checkCity()

        // this.props.history.push('/hotels') 

        if (this.state.cityId){
            return (<Redirect to={{pathname: '/hotels', tripSearch: this.state.tripSearch, cityId: this.state.cityId}} />)
        } else {
            alert('Please enter a valid city.')
        }

    }

    render() {
        return (
            <div className="home" >
                <h1>Placeholder for LogoNav component</h1>
                <SearchOptionsNav />
                <SearchVacationPackagesNav />
                <SearchForm
                    tripSearch={this.state.tripSearch}
                    handleTextChange={this.handleTextChange}
                    handleCheckChange={this.handleCheckChange}
                    handleSubmit={this.handleSubmit}
                />
                <p>Book together and SAVE!</p>
            </div>
        )
    }

}

export default Home