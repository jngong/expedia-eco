// TODO: Will need to confirm with Disney what the model names are.
const { City, Hotel, Room } = require('../models')


// GET request for cities. Refer to "City" model. Should I join the Hotels model? Route: GET /api/cities
const getAllCities = async (req, res) => {
    try {
        const cities = await City.findAll()
        return res.status(200).json({ cities })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

// GET request for hotels by city id. Will refer to "Hotel" model, "city_id" foreign key to match. Need to check models to ensure consistency.
// Route: GET /api/cities/:city_id/hotels

const getAllHotelsByCity = async (req, res) => {
    try {
        const { city_id } = req.params
        const hotels = await Hotel.findAll({
            where: {
                city_id: city_id
            }
        })
        if (hotels) {
            return res.status(200).json({hotels: hotels})
        }
        return res.status(404).send('There are no hotels with that city id.')        
    } catch (error) {
        return res.status(500).send(error.message)   
    }
}

/* 
getAllHotelsByCity
getHotelDetails
getAllRoomsByHotel
getRoomDetails
createHotel
updateHotel
deleteHotel

Post-MVP:
createRoomInHotel
updateRoomInHotel

 */

module.exports = {
    getAllCities

}