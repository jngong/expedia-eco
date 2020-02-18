import React from 'react'
import SearchOptionsNav from '../home-subcomponents/SearchOptionsNav'
import SearchVacationPackagesNav from '../home-subcomponents/SearchVacationPackagesNav'
import SearchForm from '../home-subcomponents/SearchForm'

const Home = (props) => {

    return(
        <div>
            <h1>Placeholder for LogoNav component</h1>
            <SearchOptionsNav />
            <SearchVacationPackagesNav />
            <SearchForm 
                tripSearch={props.tripSearch} 
                handleChange={props.handleChange} 
                handleSubmit={props.handleSubmit}
            />
            <p>Book together and SAVE!</p>
        </div>
    )

}

export default Home