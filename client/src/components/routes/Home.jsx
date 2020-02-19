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
            cityId: 2,
            cities: [],
            redirect: false
        }
        this.handleTextChange = this.handleTextChange.bind(this)
        this.handleCheckChange = this.handleCheckChange.bind(this)
    }

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


    //Set up handleChange function to capture data from form input fields
    //For checkboxes, need to set state for tripSearch.[name] to checked.
    //For all other values, need to set state for tripSearch.[name] to value.

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

    //When the form is submitted, it needs to do two things. 
    // 1: compare the destCity value to our list of cities to set the state of CityId and 
    // 2: push to the next route in the user flow (HotelList)

    handleSubmit = (event) => {
        event.preventDefault()

        // if (redirect){
        //     return (<Redirect to={{pathname: '/hotels', tripSearch: this.state.tripSearch, cityId: this.state.cityId}} />)
        // }
    }

    render() {
        return (
            <div className="home" >
                <h1>Placeholder for LogoNav component</h1>
                <SearchOptionsNav />
                <SearchVacationPackagesNav />
                <SearchForm
                    tripSearch={this.state.tripSearch}
                    handleTextChange={this.state.handleTextChange}
                    handleCheckChange={this.state.handleCheckChange}
                    handleSubmit={this.state.handleSubmit}
                />
                <p>Book together and SAVE!</p>
            </div>
        )
    }

}

export default Home