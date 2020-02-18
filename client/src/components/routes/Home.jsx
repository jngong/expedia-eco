import React from 'react'
import SearchOptionsNav from '../home-subcomponents/SearchOptionsNav'
import SearchVacationPackagesNav from '../home-subcomponents/SearchVacationPackagesNav'
import SearchForm from '../home-subcomponents/SearchForm'
import '../../Home.css'

const Home = (props) => {
    console.log(props)
    return(
        <div>
            <h1>Placeholder for LogoNav component</h1>
            <SearchOptionsNav />
            <SearchVacationPackagesNav />
            <SearchForm 
                tripSearch={props.tripSearch} 
                handleTextChange={props.handleTextChange}
                handleCheckChange={props.handleCheckChange} 
                handleSubmit={props.handleSubmit}
            />
            <p>Book together and SAVE!</p>
        </div>
    )

}

export default Home