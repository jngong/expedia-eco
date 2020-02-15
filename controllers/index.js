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
        return res.status(404).send('There are no hotels with that city ID.')        
    } catch (error) {
        return res.status(500).send(error.message)   
    }
}

// GET request for a single hotel by hotel id. Will refer to the Hotel model
// Route: GET /api/hotels/:hotel_id

const getHotelDetails = async (req, res) => {
    try {
        const {hotel_id} = req.params
        const hotel = await findOne({
            where: {
                id: hotel_id
            }
        })
        if (hotel) {
            return res.status(200).json({hotel: hotel})
        }
        return res.status(404).send('There is no hotel with that ID.')
    } catch (error) {
        return res.status(500).send(error.message)  
    }
}

// GET request for all rooms within a hotel. Refer to the "Room" model and match on "hotel_id" foreign key. Need to check that the names all match.
// Route: GET /api/hotels/:hotel_id/rooms

const getAllRoomsByHotel = async (req, res) => {
    try {
        const {hotel_id} = req.params
        const rooms = await Room.findAll({
            where: {
                hotel_id: hotel_id
            }
        })
        if (rooms) {
            return res.status(200).json({rooms})
        }
        return res.status(404).send('There are no rooms in this hotel.')

    } catch (error) {
        return res.status(500).send(error.message)
    }
}

/* 
getRoomDetails
createHotel
updateHotel
deleteHotel

Post-MVP:
createRoomInHotel
updateRoomInHotel

 */

module.exports = {
    getAllCities,
    getAllHotelsByCity,
    getHotelDetails,
    getAllRoomsByHotel

}